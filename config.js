// Party settings. Edit this file to change what the invitation and RSVP page say.
window.PARTY = {
  // Which folder in /themes to use. Preview any theme with ?theme=<name> in the URL.
  theme: "pink",

  kids: ["Riley", "Parker"],
  age: 5,

  date: "2026-10-14",           // YYYY-MM-DD
  dateLabel: "Wednesday, October 14",
  time: "5:30 PM",
  location: "Jumbaloo Ridgeway",
  address: "3450 Ridgeway Dr, Unit 10/11\nMississauga, ON L5L 0A2",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Jumbaloo+3450+Ridgeway+Dr+Mississauga+ON+L5L+0A2",
  // Venue waiver every guest must sign before the party. Leave blank to hide.
  waiverUrl: "https://jumbalooridgeway.pcsparty.com/sign/",
  rsvpBy: "",                   // Optional, e.g. "October 7". Leave blank to hide.
  guestNote: "One parent per child, please.",

  host: { name: "Rob", phone: "(647) 986-5610" },

  // Public address of the RSVP page (index.html). The QR code points here.
  siteUrl: "https://rkunka31.github.io/birthday-invite/",

  // Google Apps Script web app URL that saves RSVPs to a Google Sheet.
  // See README.md > "Connect the RSVP form". Leave blank until set up.
  rsvpEndpoint: "https://script.google.com/macros/s/AKfycbyKsZ6gLQgMLhpXT9A-eFWNwGYiEjwnwdYzn4chbcH1taSw5UDmK_dqJtUGU4s1seA/exec"
};
