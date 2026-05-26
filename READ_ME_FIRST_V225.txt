NexusRN v225 Live Route Stability Fix

This is the full app package with the full 76MB canonical DB preserved.

Fixes included:
- Start Practicing Now routes to stable Public Demo list instead of heavy full-bank practice boot.
- Public Demo cards use absolute DB path: /data/public-demo-v217-preview-db.json.
- practice/index.html uses root-absolute /assets and /data paths for Vercel direct routes.
- Public demo practice routes have an early boot-hide guard.
- Public demo practice routes include a safe renderer fallback, so the page never stays stuck on the NexusRN loading screen.

Push this full folder through GitHub Desktop, not browser upload, because the DB file is over GitHub browser upload limits.

Commit message:
v225 live route stability fix
