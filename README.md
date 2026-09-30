# Hashmi Accounting website

A static, single-page site for Hashmi Accounting. It has a dark "phosphor CRT" look and uses GSAP for motion. There is no build step: open `index.html` or put the folder on any static host (GitHub Pages, Vercel, Netlify).

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Structure

```
index.html              page markup and copy
assets/css/styles.css   design tokens, layout, CRT effects
assets/js/main.js       terminal, form, menu, GSAP motion
assets/fonts/           Geist, Geist Mono, VT323 (self-hosted, OFL)
assets/vendor/gsap/     GSAP 3.15 core, ScrollTrigger, SplitText, ScrambleText
assets/vendor/phosphor/ Phosphor icon font (regular weight)
assets/img/logos/       Simple Icons marks for the software strip
```

## Design system

- **Theme:** dark only. The CRT is the brand signature.
- **Accent:** one colour, amber phosphor `#f5a524`, used across the whole page.
- **Type:** Geist for headlines and body, Geist Mono for labels, VT323 only inside the CRT screen.
- **Shape:** 4px radius on all UI. The monitor bezel is the only rounded object.
- **CRT effects:** scanlines, vignette, flicker and a sweeping scan line on the hero screen, plus a light page-wide scanline overlay. The **CRT** button in the nav turns the effects off, and the choice is remembered.
- **Motion:** masked headline reveal (SplitText), scroll reveals (ScrollTrigger.batch), terminal-style label decoding (ScrambleText), a pinned horizontal "How it works" strip on desktop, and one logo marquee. With `prefers-reduced-motion`, all of it is switched off and content shows immediately.

## Before going live

These are placeholders to replace with real details:

- [ ] Email address `hello@hashmiaccounting.com` (in `index.html` and `assets/js/main.js`)
- [ ] About photo and the cash-flow tile photo (currently Picsum placeholders); use real office or team photography
- [ ] Copy review: services, FAQ answers and the "team size 1 to 40" / "quarterly reviews" lines in the terminal should match what the firm actually offers
- [ ] The software logo strip should list only tools the firm really supports
- [ ] The contact form opens the visitor's email app (`mailto:`). To collect submissions directly, point it at a form service such as Formspree or Netlify Forms
