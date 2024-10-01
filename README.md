## Endpoint

This repo demonstrates Next.js 14 [Route Handling](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) with App router.

The repo demonstrates how Route Handlers can be used to create a set of RESTful routes for `GET`, `POST`, `PUT` and `DELETE`.

The routes are all handled by the `localhost/api` endpoint.

This repo is designed to be used in conjunction with the React Vite Single Page Application that is available at [https://github.com/mustbebuilt/vite-spa-endpoint](https://github.com/mustbebuilt/vite-spa-endpoint)

## Set up

This repo was created as a  [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

To run clone the repo and then in terminal run:

```bash
npm install
```

It assumes a MySQL database set up with an SQL table of `staff`.

```sql
CREATE TABLE staff (
    id SERIAL PRIMARY KEY,       -- Auto-incrementing unique identifier for each staff member
    name VARCHAR(100) NOT NULL,  -- Name of the staff member
    email VARCHAR(100) NOT NULL, -- Email of the staff member
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Timestamp for when the record was created
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- Timestamp for the last update
);
```

> [!IMPORTANT]  
> The environment variables file `.env.local` has been excluded from this repo so will need to be created to replicate the app.

## CORS

The `next.config.mjs` is used to configure the endpoints so that there are no CORS issues. CORS (Cross-Origin Resource Sharing) issues occur when the frontend and backend are hosted on different origins, and the browser blocks the request due to security policies.  To enable communication to this repo from another using HTTP calls, the `next.config.mjs` has been set up so that any origin can call the endpoints and use HTTP methods of `GET`, `POST`, `PUT`, `PATCH` and `DELETE`.

## Running

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
