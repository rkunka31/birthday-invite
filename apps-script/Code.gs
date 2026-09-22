/**
 * RSVP receiver. Saves each form submission as a row in the Google Sheet this
 * script is attached to. Setup steps are in README.md.
 */
const SHEET_NAME = 'RSVPs';
const NOTIFY_EMAIL = ''; // Optional: your email address to get a message for each RSVP.

function doPost(e) {
  const p = e.parameter || {};
  if (p.website) return reply_(); // hidden spam-trap field was filled

  const attending = p.attending === 'yes' ? 'Yes' : 'No';
  const row = [new Date(), clean_(p.name), clean_(p.phone), clean_(p.email), attending];

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    sheet_().appendRow(row);
  } finally {
    lock.releaseLock();
  }

  if (NOTIFY_EMAIL) {
    MailApp.sendEmail(NOTIFY_EMAIL, 'RSVP: ' + row[1] + ' - ' + attending,
      'Name: ' + row[1] + '\nPhone: ' + row[2] + '\nEmail: ' + row[3] + '\nAttending: ' + attending);
  }
  return reply_();
}

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['Submitted', 'Name', 'Phone', 'Email', 'Attending']);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

// Trim, cap length, and stop values like "=HYPERLINK(...)" being read as formulas.
function clean_(value) {
  const s = String(value || '').trim().slice(0, 200);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function reply_() {
  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
