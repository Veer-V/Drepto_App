<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/14yftQzIxTWoe7_m7GQ1mRc9ZB_4ydPAr

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Mobile (Capacitor)

1. Build the web bundle:
   `npm run build`
2. Sync native platforms:
   - Android: `npm run cap:android`
   - iOS: `npm run cap:ios` (requires macOS + Xcode/CocoaPods)
3. Open the native projects:
   - Android: `npx cap open android`
   - iOS: `npx cap open ios`
4. Follow the guidance in `docs/mobile-capacitor-plan.md` for enterprise hardening, plugin integration, and CI/CD.