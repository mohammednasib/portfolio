# Mohammed Nasib K N — Portfolio

A React portfolio built with Vite and React Router. The pages are available at `/`, `/experience`, `/skills`, `/insurance`, `/erpnext`, and `/contact`.

## Run on your computer

1. Install the current **Node.js LTS** release from [nodejs.org](https://nodejs.org/) if Node.js and npm are not already installed. The installer includes both tools.
2. Open PowerShell and go to the project folder:

   ```powershell
   cd C:\solo\portfolio
   ```

3. Check that Node.js and npm are available:

   ```powershell
   node --version
   npm --version
   ```

4. Install the project packages:

   ```powershell
   npm install
   ```

5. Start the development server:

   ```powershell
   npm run dev
   ```

6. Open the **Local** URL printed by Vite (usually `http://localhost:5173/`). Leave the PowerShell window running while you use the site; press `Ctrl+C` to stop the server.

The root `index.html` is the Vite app entry point. Opening it directly as a file in a browser does not run the React application or its routes.

## Production build

Create an optimized production build:

```powershell
npm run build
```

Vite writes the generated site to `dist`. To preview that build locally, run:

```powershell
npm run preview
```

## Deploy to Vercel

1. Import the repository in Vercel and set the project root to the repository root.
2. Select **Vite** as the Framework Preset.
3. Use `npm run build` as the Build Command and `dist` as the Output Directory.
4. Deploy. The included `vercel.json` sends app routes to the React entry point, so opening or refreshing `/experience`, `/skills`, `/insurance`, `/erpnext`, and `/contact` works.

Before publishing, confirm contact details, public profile URLs, employer and project details, the DCF experience dates, and approval to publish the portrait. Frappe / ERPNext is described as an emerging learning direction, not professional implementation experience.
