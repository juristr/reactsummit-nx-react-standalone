# Talk: No CRA? What now?

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github.com/juristr/jsnation-pnpm-workspace-nx)

This is the demo project for my talk at ReactSummit Amsterdam 2023. I talked about

- how to use Nx to create a standalone (single-project) React app (similar to CRA)
- how to modularize code with the help of Nx generators and libraries
- how to "upgrade" the code into a monorepo
- how to migrate from an existing CRA app

## Running it locally

Just clone the repo and run `pnpm i` to install all dependencies (using NPM or Yarn should work as well).

Just run `pnpm start` to star the application. Explore

- Explore `project.json` for Nx specific tasks such as serving, building, linting the workspace
- Explore `nx.json` for Nx specific configuration such as cacheable operations
- run `pnpm nx dep-graph` to see the project graph of the workspace
- see the `modules/orders` and `modules/products` folder for examples of "local libraries" and how they are imported into the `app.tsx` thanks to the TypeScript path mappings defined in the `tsconfig.base.json`

## Other branches

There are other branches in this repo, such as

- `add-tailwind` to show how Tailwind was added to the React application using the `setup-tailwind` generator from Nx (more [here](https://nx.dev/recipes/other/using-tailwind-css-in-react))
- `add-storybook` to show how Storybook was added to the `modules/orders` library using the `storybook-configuration` generator (more [here](https://nx.dev/packages/storybook/documents/overview-react))
- `monorepo` for an example how the workspace could be transformed into a monorepo as it grows for adding more apps using Next.js and/or Remix and beyond

## What else

Here's a couple of potentially interesting links:

- Related blog post: [React, Vite and TypeScript: Get started in under 2 minutes](https://dev.to/nx/react-vite-and-typescript-get-started-in-under-2-minutes-56f) (also includes walkthrough video)
- Nx: https://nx.dev/ (GitHub: https://github.com/nrwl/nx)
- Tutorial: (coming soon)
