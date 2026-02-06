# Deploying a2zmovie to Vercel

Vercel is the creators of Next.js and provides the best deployment experience for Next.js applications.

## Prerequisites

1.  A [Vercel Account](https://vercel.com/signup).
2.  Your project code pushed to a Git provider (GitHub, GitLab, or Bitbucket).

## Step 1: Import Project

1.  Log in to your Vercel Dashboard.
2.  Click **"Add New..."** -> **"Project"**.
3.  Connect your Git provider account if you haven't already.
4.  Find your `a2zmovie` repository and click **"Import"**.

## Step 2: Configure Project

Vercel automatically detects Next.js projects and sets the optimal configurations. However, you should verify:

*   **Framework Preset**: Ensure `Next.js` is selected.
*   **Root Directory**: Leave as `./` (unless your app is in a subfolder).
*   **Build Command**: `npm run build` or `next build` (Default is correct).
*   **Output Directory**: `.next` (Default is correct).
*   **Install Command**: `npm install` (Default is correct).

**Environment Variables:**
If you have environment variables (e.g., API keys, Database URLs), expand the **"Environment Variables"** section and add them here.

## Step 3: Deploy

1.  Click **"Deploy"**.
2.  Vercel will build your application. This usually takes 1-2 minutes.
3.  Once complete, you will see a preview screen with your live deployment URL (e.g., `https://a2zmovie.vercel.app`).

## Step 4: Custom Domain Connection

To connect your own domain (e.g., `a2zmovie.com`):

1.  Go to your project's **Settings** tab in the Vercel Dashboard.
2.  Select **"Domains"** from the sidebar.
3.  Enter your domain name (e.g., `a2zmovie.com`) in the input field and click **"Add"**.
4.  **Configure DNS**:
    *   Vercel will provide you with DNS records (A Record or CNAME) to add to your domain registrar (e.g., GoDaddy, Namecheap).
    *   **Recommended**: Add the CNAME record `cname.vercel-dns.com` for the `www` subdomain.
    *   Add the A record provided (usually `76.76.21.21`) for the root domain (`@`).

5.  Wait for propagation. Vercel automatically generates an SSL certificate (HTTPS) for your domain.

## Optimization Checklist

*   **Image Optimization**: Your `next.config.mjs` allows images from `images.unsplash.com`. If you add other domains, remember to update `next.config.mjs` and redeploy.
*   **Analytics**: You can enable "Speed Insights" and "Web Analytics" in the Vercel dashboard for real-time performance metrics.
