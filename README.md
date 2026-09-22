# Riley & Parker's 5th Birthday: Invitation + RSVP

Two pages:

- `invite.html`: the 5×7 printable invitation with a QR code.
- `index.html`: the RSVP page the QR code opens (name, phone, email, yes/no).

Party details live in `config.js`. Change them there and both pages update. The QR code is built from `siteUrl` in the same file.

## 1. Fill in the missing details

Open `config.js` to check or change:

- `location`, `address` and `mapUrl`: the venue (Jumbaloo Ridgeway). The RSVP page links the venue name to Google Maps.
- `waiverUrl`: the Jumbaloo waiver. The RSVP page shows a button for it; leave blank to hide.
- `rsvpBy` (optional): a reply-by date.

## 2. Put the site online (GitHub Pages)

This repo is private. GitHub Pages on a private repo needs a paid GitHub plan. Two options:

- Make the repo public (Settings > General > Danger Zone > Change visibility). RSVP answers are not stored here, so nothing private is exposed beyond what's on the invitation.
- Or keep it private and host the folder on Netlify or Cloudflare Pages (free) instead. Then update `siteUrl`.

To turn on Pages: Settings > Pages > Source: "Deploy from a branch" > `main` / root. The site will be at `https://rkunka31.github.io/birthday-invite/`.

## 3. Connect the RSVP form to a Google Sheet

1. Create a new Google Sheet (e.g. "Birthday RSVPs").
2. Extensions > Apps Script. Delete the sample code and paste in `apps-script/Code.gs`.
   Optional: put your email in `NOTIFY_EMAIL` to get an email for each reply.
3. Deploy > New deployment > type "Web app".
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Approve the permissions prompt. Copy the Web app URL (ends in `/exec`).
5. Paste it into `rsvpEndpoint` in `config.js` and push.

Replies appear in an "RSVPs" tab with a timestamp. Test it once yourself and delete the row.

## 4. Print or share the invitation

Open `invite.html` on the live site and press **Print / Save PDF**. It's sized for a 5×7 card with no margins. Scan the QR code with your phone before printing to check it opens the RSVP page.

## Themes

The look is controlled by a theme folder in `themes/`. Two exist: `default` (primary colours) and `pink` (in use). To add one (Bluey, princesses, etc.) see `themes/README.md`. Preview a theme with `?theme=name` on either page.
