# Deploying StoryFlix TV onto Vercel

This guide provides step-by-step instructions to deploy the StoryFlix TV Next.js application to Vercel and configure the custom domain **storyflixtv.live**.

## 1. Prerequisites

Ensure your project is pushed to a Git repository (GitHub, GitLab, or Bitbucket).

```bash
# Inside the storyflixtv directory
git init
git add .
git commit -m "Ready for deployment"
# Create a new repository on GitHub and link it
git remote add origin https://github.com/your-username/storyflixtv.git
git branch -M main
git push -u origin main
```

## 2. Deploy to Vercel

1.  Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **"Add New..."** -> **"Project"**.
3.  **Import** the `storyflixtv` repository.
4.  **Configure Project**:
    *   **Framework Preset**: Select **Next.js**.
    *   **Root Directory**: If your project is in a subdirectory (e.g., inside `a2zmovie/storyflixtv`), click "Edit" and select the `storyflixtv` folder. If it's the root of the repo, leave it as `./`.
    *   **Build & Output Settings**:
        *   **Build Command**: `next build` (default)
        *   **Output Directory**: `.next` (default)
        *   **Install Command**: `npm install` (default)
5.  Click **"Deploy"**.

Vercel will build your application. Once complete, you will see a preview URL (e.g., `storyflixtv.vercel.app`).

## 3. Connect Custom Domain (storyflixtv.live)

1.  Go to your project dashboard on Vercel.
2.  Navigate to **Settings** > **Domains**.
3.  Enter **`storyflixtv.live`** in the input field and click **"Add"**.
4.  Select the recommended option (usually adding both `storyflixtv.live` and `www.storyflixtv.live`).

## 4. DNS Configuration

To make the domain work, you need to update the DNS records at your domain registrar (e.g., GoDaddy, Namecheap, Google Domains).

**Option A: A Record & CNAME (Recommended)**

Log in to your domain registrar and add the following records:

| Type  | Name | Value               | TTL     |
| :---  | :--- | :---                | :---    |
| **A** | `@`  | `76.76.21.21`       | Automatic / 1 Hour |
| **CNAME** | `www`| `cname.vercel-dns.com` | Automatic / 1 Hour |

**Option B: Nameservers (If you want Vercel to manage DNS)**

If you prefer Vercel to handle all DNS settings (emails, subdomains, etc.), change your nameservers at your registrar to:

*   `ns1.vercel-dns.com`
*   `ns2.vercel-dns.com`

*Note: DNS propagation can take anywhere from a few minutes to 48 hours.*

## 5. Verification

1.  Back in the Vercel Domains tab, wait for the configuration to show a valid checkmark/status (Green).
2.  Vercel will automatically generate a free SSL certificate (HTTPS) for your domain.

Your site will be live at **https://storyflixtv.live**!
