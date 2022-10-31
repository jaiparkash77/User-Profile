## Developing

Once you've created a project and installed dependencies with `pnpm install` or `yarn`, start a development server:

```bash
pnpm install
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
pnpm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.


For now I've added entire app.css and main.css to codebase, we need to pick or bring the only css styles whichever we need.
