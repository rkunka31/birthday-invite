# Themes

Each folder here is a theme. A theme is one `theme.css` file plus any images it uses.

## Add a theme

1. Copy `default/` to a new folder, e.g. `bluey/`.
2. In `bluey/theme.css`, change the colour and font variables in `:root`.
3. Replace `balloons.svg` / `confetti.svg` with your own images, or change the `.decor` rule to use different ones.
4. Preview it: open `invite.html?theme=bluey` or `index.html?theme=bluey`.
5. When you're happy, set `theme: "bluey"` in `config.js`.

## Variables a theme can set

| Variable | Used for |
| --- | --- |
| `--page-bg` | Background behind the card |
| `--card-bg` | Card and panel background |
| `--ink` | Main text |
| `--muted` | Secondary text |
| `--accent` | Age badge, "Scan to RSVP", submit button |
| `--accent-shadow` | Shadow under the age badge |
| `--accent-2` | Tagline, QR border, "Yes" button |
| `--accent-3` | Extra decoration colour |
| `--field-bg`, `--field-border` | Form inputs |
| `--font-display` | Names, headings, age number |
| `--font-body` | Everything else |
| `--radius` | Card corner rounding |

The `.decor` layer sits behind the content on both the invitation and the RSVP page. Put background art there. Keep art away from the centre so text stays readable.
