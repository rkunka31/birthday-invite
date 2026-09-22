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
  const row = [new Date(), clean_(p.name), clean_(p.parent), clean_(p.phone), clean_(p.email), attending];

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    sheet_().appendRow(row);
  } finally {
    lock.releaseLock();
  }

  if (NOTIFY_EMAIL) {
    MailApp.sendEmail(NOTIFY_EMAIL, 'RSVP: ' + row[1] + ' - ' + attending,
      'Child: ' + row[1] + '\nParent: ' + row[2] + '\nPhone: ' + row[3] + '\nEmail: ' + row[4] + '\nAttending: ' + attending);
  }
  return reply_();
}

const HEADERS = ['Submitted', 'Child', 'Parent', 'Phone', 'Email', 'Attending'];

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  // Write the header row on first use, and refresh it if the columns have changed.
  const header = sheet.getRange(1, 1, 1, HEADERS.length);
  if (header.getValues()[0].join('|') !== HEADERS.join('|')) {
    header.setValues([HEADERS]).setFontWeight('bold');
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
