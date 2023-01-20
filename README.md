Brainful Labs
(Development)

# Strapi/Next Boilerplate

	Starter template with Strapi CMS and NextJS:

	- Backend: Strapi CMS + Swagger documentation + mysql db
	- Frontend: NextJS + Typescript + Tailwind

## Requirements

	[Node.js](http://nodejs.org/) >= 14.6.0


## Install Strapi and Next

Create mysql db

Strapi (http://localhost:1337/admin):

	npx create-strapi-app@latest backend

	Choose your installation type -> Custom
	Choose your preferred language -> Typescript
	Choose your default database client -> sqlite/postgres/mysql
	Database name: boilerplate-db
	Host: 127.0.0.1
	Port: 3306
	Username: {username}
	Password: {password}
	Enable SSL connection: N (local development)

	Available commands in your project:

	  yarn develop
	  Start Strapi in watch mode. (Changes in Strapi project files will trigger a server restart).

	  yarn start
	  Start Strapi without watch mode.

	  yarn build
	  Build Strapi admin panel.

	  yarn strapi
	  Display all available commands.

	You can start by doing:

	  yarn develop


Next (http://localhost:3000):

	yarn create next-app --typescript

	yarn dev


## Install dependencies

STRAPI:

	Plugin Swagger documentation
	yarn add @strapi/plugin-documentation

	Plugin Populate deep
	yarn add strapi-plugin-populate-deep

NEXT:

	Sharp (https://nextjs.org/docs/messages/install-sharp)
	yarn add sharp

	Tailwind (https://tailwindcss.com/docs/guides/nextjs)haha
	Install tailwindcss and its peer dependencies
	yarn add -D tailwindcss postcss autoprefixer

	Generate both tailwind.config.js and postcss.config.js
	npx tailwindcss init -p


	Add the paths to all of your template files in your tailwind.config.js:

	/** @type {import('tailwindcss').Config} */
	module.exports = {
	  content: [
	    "./pages/**/*.{js,ts,jsx,tsx}",
	    "./components/**/*.{js,ts,jsx,tsx}",

	    // Or if using `src` directory:
	    "./src/**/*.{js,ts,jsx,tsx}",
	  ],
	  theme: {
	    extend: {},
	  },
	  plugins: [],
	}


	Add the @tailwind directives for each of Tailwind’s layers to your ./styles/globals.css file.
	@tailwind base;
	@tailwind components;
	@tailwind utilities;


## References

Strapi:

	https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html

Next:

	https://nextjs.org/docs/getting-started
	https://nextjs.org/blog/next-13
	