# Module Seven – Security

## Setup (PowerShell)

1. From the repository root: `git checkout -b module7` (if it does not already exist).
2. From `travlr`: `npm install` (generates the updated package-lock.json).
3. From `travlr/app_admin`: `npm install`.
4. Copy `travlr/.env.example` to `travlr/.env` and replace JWT_SECRET with your own random secret of at least 32 characters. Never commit .env.
5. Start MongoDB, then from `travlr` run `npm run create-admin` and supply an email and password of at least 12 characters.
6. From `travlr`: `npm start`. From `travlr/app_admin`: `npm start`.
7. Visit http://localhost:4200/login and sign in with the account created above.

## Postman verification

- POST http://localhost:3000/api/login with JSON `{"email":"YOUR_EMAIL","password":"YOUR_PASSWORD"}` should return a token.
- POST /api/login with wrong password should return 401.
- POST /api/trips without token should return 401.
- POST /api/trips with Authorization: Bearer YOUR_TOKEN and a valid trip JSON should return 201.
- PUT /api/trips/CODE with valid JSON and a token should update the trip. DELETE /api/trips/CODE with a token should return 204.
- GET /api/trips should remain public.
- POST /api/register returns 403 because public admin self-registration is disabled.

## Submit

Test Angular login, add, edit, delete, logout, and unauthenticated restrictions. Commit and push module7. Zip the `travlr` folder without node_modules, .angular, .env, or dist.

Note: This version intentionally uses CLI-only administrator account creation rather than enabling unauthenticated public administrator registration.
