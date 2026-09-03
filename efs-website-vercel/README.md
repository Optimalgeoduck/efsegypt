# EFS Website — Vercel Deployment

Static site for Elite Finance Solutions (efsegypt.org). Eight pages plus assets, recovered byte-for-byte from the Cloudflare Workers deployment on 2 Sep 2026. `vercel.json` adds clean URLs (`/services` instead of `/services.html`), security headers, and long-lived caching for assets.

## Option A — Deploy via GitHub (recommended: auto-redeploy on every edit)

1. Create a new repository on GitHub (e.g. `efs-website`, private is fine).
2. Upload the contents of this folder to the repository root (`index.html` must sit at the root, not inside a subfolder).
3. Go to vercel.com → Add New → Project → Import the repository.
4. Framework preset: **Other**. Build command and output directory: leave empty. Deploy.
5. Any future edit pushed to the repository redeploys automatically.

## Option B — Deploy via CLI (fastest one-off)

From inside this folder:

```
npx vercel login
npx vercel --prod
```

Accept the defaults when prompted (no build command, current directory as root).

## Connecting efsegypt.org (no nameserver change needed)

1. In the Vercel project → Settings → Domains → add `efsegypt.org` and `www.efsegypt.org`.
2. Vercel will show you two records. Create them in your existing Google Cloud DNS zone for efsegypt.org:
   - **A record** for the root (`@`) pointing to the IP Vercel displays (currently 76.76.21.21).
   - **CNAME** for `www` pointing to `cname.vercel-dns.com`.
3. Wait for Vercel to show both domains as verified (usually minutes, up to an hour).

Because the DNS zone stays where it is, DNSSEC at Squarespace and Google Workspace email (MX/SPF/DKIM) are completely untouched.

## Cleanup after the new site is live

- Delete the `steep-wood-8e0f` Worker in the Cloudflare dashboard.
- Optionally remove the efsegypt.org domain from Cloudflare entirely.
