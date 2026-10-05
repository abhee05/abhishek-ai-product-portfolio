# FoodMood — screenshot assets

This folder is where real FoodMood screenshots belong. The case study
(`case-study-foodmood.html`) currently renders clean, labelled placeholder
containers in place of screenshots. Nothing is fabricated — no stock imagery is
presented as product UI.

## Drop-in filenames

Take these captures from the live product at https://food-mood-ashy.vercel.app/
and save them here with exactly these names:

| Filename | Screen |
| --- | --- |
| `home.png` | Home / create-session screen |
| `lobby.png` | Two-person lobby with session code and invite link |
| `join.png` | Join FoodMood screen reached from the invite link |
| `rating.png` | Rating a food option (heart / maybe / not-today) |
| `waiting.png` | Waiting state after finishing your 12 options |
| `reveal.png` | Match reveal grouped by Perfect / Possible / Backup |
| `proposal.png` | Proposal waiting for the other participant |
| `final.png` | Final FoodMood screen |

## How to activate them

In `case-study-foodmood.html`, find each placeholder block and replace its
inner content with:

```html
<img src="assets/foodmood/home.png" alt="FoodMood home screen with name field and create-session button" loading="lazy" />
```

Keep the `<figcaption>` text unless the real capture changes what the caption
claims. Recommended export is a 4:3 or 3:4 crop at roughly 1200px wide, PNG.
