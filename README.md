ECOMMERCE PROJECT #1
OVERVIEW:

Advanced difficulty project. Landing page for multi-product ecommerce.

STACK:

Nextjs, React-Context, Tailwind, Sanity CMS, Stripe, Confetti. All data is dynamically fetched from Sanity.

OBJECTIVE:

To develop a fully customizable and very interactive ECommerce Landing Page ready to use for any business idea (either goods or services). The purpose of this project was to create a Standard e-Commerce Template that I could use for any product or service. The frontend is configured so that all products can be added with NO-CODING from SANITY UI.

LEARNING CURVE:

This project has been on my TodoList for months, took me 10 days to complete.

The most challenging part was the shopping cart logic and integration with SANITY (their docs are not the most user-friendly). Iinitial setup was quite straight forward, all you need to do is npx create-sanity-app backend, create a schema for the products you want to sell (backend/schemas/product) and in the sanity.config place {name, title, projectId, dataset} of your project that are displayed in the Sanity Studio Dashboard. The challenge is really with the API, ensuring that the data from SANITY is fetched and displayed correctly.
Surprisingly Stripe integration was much more straight forward. They have absolutely amazing documentation and provide multiple ready-made code snippets that can be customized to one's needs. Also their team is very, very responsive to customer needs.
As per TAILWIND despite my initial resistance, Im now in love with it. Not having to switch around to the CSS files all the time and/or having to find each class or ID, is absolutely perfect, all of it right there in your . Finally, fulled around with Canva-Confetti for a nice splashy effect uppon successfull purchase.
DEPLOYMENT:

Deployed on VERCEL, it was painful. Somehow, the system expected me to have a monorepo, so had to reconfigure file structure. Initially had 2 folders inside the source foulder: "frontend" and "backend". Had to move "backend" inside "frontend". Then had to review all of the babel and eslint configs cause they kept creating errors in deployment.
