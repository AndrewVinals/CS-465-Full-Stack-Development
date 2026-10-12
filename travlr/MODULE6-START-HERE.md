# Module Six: start here

This project keeps the Express public website and adds an Angular standalone admin SPA in `app_admin`. Angular CLI 20 was used for compatibility with Node 24; the guide's component/service/CRUD structure is preserved. Bootstrap is installed locally.

## Run on Windows

Extract the ZIP. Open the extracted **travlr** folder in VS Code. Use **Terminal > New Terminal** and select **Command Prompt** if PowerShell blocks npm.

MongoDB must be running locally on port 27017 (your existing Travlr database). If you use a remote database, set MONGODB_URI before starting Express.

Terminal 1, from the travlr folder:

```cmd
npm install
npm run seed
npm start
```

Seeding adds missing original trips; it does not erase existing trips.

Terminal 2, from the travlr folder:

```cmd
cd app_admin
npm install
npm start
```

Open http://localhost:4200 for admin. Open http://localhost:3000/travel for the public page. Keep both terminals running. If port 3000 is occupied, stop the previous Travlr server first.

## Required screenshots

1. Click **Add trip** and enter: code SUNR261201, name Sunset Reef, length 5 nights / 6 days, start 12/01/2026, resort Sunset Bay, 4 stars, price 1299.00, image reef1.jpg, description Enjoy clear water, reef diving, and a relaxing beach getaway. Save. Capture the **Card Listing** showing this additional trip.
2. Click **Edit trip** on Sunset Reef. Capture the **Edit screen** showing its populated fields.
3. Change its price to 1399.00 and name to Sunset Reef Getaway. Click **Save changes**. Capture the **Update screen** showing the success message and updated card.
4. Refresh http://localhost:3000/travel and confirm the updated trip appears. MongoDB database `travlr`, collection `trips`, should contain code SUNR261201.

Use your own browser screenshots of the running application. Screenshots are not bundled or fabricated.

## Postman

Import Module6.postman_collection.json. With Express running, run GET list, POST add, GET one, PUT update, and DELETE. POST needs a fresh code: if you already added SUNR261201 in the browser, use a different code in all collection requests or test Postman before the browser steps. DELETE the test trip only after taking screenshots. Expected results: 200, 201, 200, 200, 204. Missing codes return 404; malformed/missing required fields return 400; duplicate codes return 409.

## Submit and GitHub

Submit travlr.zip plus the three screenshots separately to Brightspace. Do not include node_modules, Angular cache, or build output.

Copy this project's files into your existing Git repository's travlr folder, preserving its .git folder. From the repository root:

```cmd
git switch -c module6
git add .
git commit -m "Complete Module Six Angular admin and trip CRUD"
git push -u origin module6
```

If module6 already exists, use `git switch module6` instead of creating it. The GitHub push must be performed in your existing local repository; this uploaded ZIP contains no Git history or authenticated remote.

## Verification performed here

Angular production build passed. A real MongoDB integration test was attempted, but this execution environment prevented the MongoDB process from starting (Operation not permitted). Browser and Postman checks against your local MongoDB remain required; no screenshots or successful database tests are claimed.
