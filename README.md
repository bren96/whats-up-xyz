# whats-up-xyz monorepo

This repo is an [Nx monorepo](https://nx.dev), with an app deployed to [Vercel](https://vercel.com/home). Follow the steps below to get building! See individual project README's for more information.


## Development Setup

Install [Nx CLI](https://nx.dev/docs/getting-started/installation):
```
npm add --global nx
```

Install [Vercel CLI](https://vercel.com/docs/cli?package-manager=npm#installing-vercel-cli):
```
npm install -g vercel
```

Setup development environment variables:
```
vercel env pull
```


Install monorepo dependencies:
```
npm install
```

## Run tasks

Example: Run app locally:

```sh
npx nx dev whats-up-web
```

Example: Create a production build:

```sh
npx nx build whats-up-web
```

Example: Run tests:

```sh
npx nx test whats-up-web
```

Example: List all available targets for a project:

```sh
npx nx show project whats-up-web
```

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

Example: Generate a new Next.js app:

```sh
npx nx g @nx/next:app demo
```

Example:Generate a new React library:

```sh
npx nx g @nx/react:lib demo-lib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)


## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/nx-api/next?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
