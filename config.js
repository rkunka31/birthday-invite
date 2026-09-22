// Party settings. Edit this file to change what the invitation and RSVP page say.
window.PARTY = {
  // Which folder in /themes to use. Preview any theme with ?theme=<name> in the URL.
  theme: "default",

  kids: ["Riley", "Parker"],
  age: 5,

  date: "2026-10-14",           // YYYY-MM-DD
  dateLabel: "Wednesday, October 14",
  time: "5:30 PM",
  location: "Jumbaloo, 3135 Argentia Rd, Mississauga",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Jumbaloo+3135+Argentia+Rd+Mississauga",
  rsvpBy: "",                   // Optional, e.g. "October 7". Leave blank to hide.
  guestNote: "One parent per child, please.",

  host: { name: "Rob", phone: "(647) 986-5610" },

  // Public address of the RSVP page (index.html). The QR code points here.
  siteUrl: "https://rkunka31.github.io/birthday-invite/",

  // Google Apps Script web app URL that saves RSVPs to a Google Sheet.
  // See README.md > "Connect the RSVP form". Leave blank until set up.
  rsvpEndpoint: ""
};
