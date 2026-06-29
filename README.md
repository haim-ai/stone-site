# STONE — Scroll Sequence Site

אתר גלילה קולנועי. 4 סקשנים, כל אחד = וידאו אחד שמתנגן כ-Image Sequence.
גלילה אחת למטה = מעבר לסקשן הבא תוך 5 שניות, LINEAR.

## הרצה
מכל שרת סטטי על תיקיית `site/`. למשל:
    npx serve site -l 4321
ואז http://localhost:4321

## מבנה
- `site/index.html` — האתר (HTML+CSS+JS, ללא תלויות).
- `site/frames/sectionN/frame_001..145.webp` — 145 פריימים לכל וידאו (1920px, WebP q88).

## חילוץ פריימים מחדש (אם מחליפים וידאו)
    node extract.mjs
(משתמש ב-ffmpeg-static; קלט: C:\Users\User\Desktop\1..4.mp4)

## עריכת כותרות / לוגו
בקובץ `index.html`, מערך `SECTIONS` בראש ה-<script> — title / kicker / sub לכל סקשן.
הלוגו: הטקסט "STONE" ב-<header class="topbar">.
