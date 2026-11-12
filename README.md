# BÂT Build Android app

The Android app is the BÂT Build web app (`www/`, copied from `../site` with `npm run web`) inside a Capacitor shell.
It uses the same Supabase data as the website.

- Update the app content: run `npm run web`, commit and push. GitHub builds a new test app file (APK).
- Download the APK: GitHub → Actions → latest "Build Android test app" run → Artifacts → BAT-Build-android-test.
