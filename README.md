# JeloBleb.github.io

Personal portfolio. Plain HTML + CSS, no build step. Open `index.html` in a browser to preview.

## Filling it in

- **Text:** replace every yellow `✏️` marker (`<span class="todo">…</span>`).
- **Photos:** put them in `images/`, then replace a dashed box
  (`<div class="ph">📷 …</div>`) with `<img src="../images/loft-1.jpg" alt="…">`
  (drop the `../` on the homepage). Resize to ~1600px wide first so pages load fast.
- **Video:** `<video src="../images/drone-flight.mp4" controls muted playsinline></video>`

`grep -rn 'class="todo"\|class="ph' .` lists everything still left to fill.
