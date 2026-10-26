# Sarah Burnell School of Dance website

Static HTML site built on the SBSOD design system. No build step: open `index.html` or host the folder as is (e.g. GitHub Pages).

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home |
| `classes.html` | Classes (with `#ballet`, `#modern`, `#tap`, `#contemporary`, `#acro`, `#bunnies`, `#lamda`, `#mt-company` anchors) |
| `about.html` | About us and the team |
| `student-information.html` | Uniform, rules and where to buy |
| `gallery.html` | Photo gallery with filters |
| `contact.html` | Venues and enquiry form |

## Files

- `css/sbsod-vars.css`: colours, spacing, radii, shadows and font families from the design system tokens.
- `css/sbsod.css`: the design system's component styles (buttons, header, hero, cards, form, footer…).
- `css/site.css`: page-level patterns for this site.
- `js/site.js`: mobile menu, enquiry form confirmation and gallery filters.
- `images/`: logos, the CDMT badge, staff photos and gallery photos.

Fonts (Archivo and Instrument Serif) load from Google Fonts.

## Before going live

- **Contact forms** don't send anywhere yet. Add a form service endpoint as `data-action="https://…"` on the `<form data-enquiry>` in `index.html` and `contact.html` (e.g. Formspree), and the script will post to it.
- **Boogie Bunnies** has a "photo to come" placeholder on the Classes page and a star placeholder on the homepage card.
- **Privacy policy** links to the existing page on the current site.

## GitHub Pages

Push this folder to a repository, then Settings → Pages → Deploy from branch → `main` / root.
