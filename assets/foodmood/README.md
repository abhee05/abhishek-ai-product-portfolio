# FoodMood — screenshot assets

These are real captures of the deployed FoodMood MVP at
https://food-mood-ashy.vercel.app/, taken during two-browser, two-participant
validation. Each is exported at two widths and referenced with `srcset`, so the
browser only downloads what it needs. Nothing here is fabricated or stock.

Names shown in the captures ("Abhishek", "Aditi") are the test participants used
for those sessions. Session codes differ per capture because each screen came
from a real, separate session.

## Files and the screens they show

| Base filename | Screen | Story step |
| --- | --- | --- |
| `01-create-invite` | Creator lobby — join code, invite link, "copy invite link", 1 of 2 seated, waiting for partner | A · Create and invite |
| `02-direct-join` | Join FoodMood opened via `?join=` with the code prefilled, name field, Join CTA | B · Direct join |
| `03-private-rating` | Private rating, option 1 of 12, with Not today / Maybe / Craving it | C · Private rating |
| `04-match-reveal` | Match reveal — 2 Perfect, 2 Possible, 2 Backup | D · Match reveal |
| `05-proposal-confirmation` | The other participant's pick with Accept / Reject & start another round | E · Proposal and confirmation |
| `06-final-foodmood` | Tonight's FoodMood with decision summary and another-round option | F · Final FoodMood |

Each base filename has two files:

- `<base>-720.webp` — small, served to narrow viewports
- `<base>-1440.webp` — large, served to wider viewports

`assets/og-image.png` (1200×630) is the social share card, composed from the
final FoodMood screen. It is regenerated from
`06-final-foodmood-1440.webp` if that capture changes.

## Replacing a capture

1. Recapture the screen at 1280px wide or wider.
2. Export as WebP at 720px and 1440px wide, keeping the aspect ratio consistent
   across the set — the case study relies on the frames feeling like one product.
3. Update the two `<img>` tags for that step in `case-study-foodmood.html`
   (`srcset`, `src` and the `width`/`height` attributes).

Keep the `width`/`height` attributes accurate; they are what prevents layout
shift while the images load.

## Do not

- Do not use stock imagery or design mockups as product screenshots.
- Do not crop so tightly that the surrounding UI context is lost.
- Do not commit capture files with session codes or names you would not want
  published.
