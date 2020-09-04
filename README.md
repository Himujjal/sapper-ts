<h1 align="center">Sapper.TS!</h1>

<img src="./static/cover.jpg"/>

## ❓ What is this?

This is an extension to the [official Sapper Rollup template](https://github.com/sveltejs/sapper-template-rollup) with TypeScript. This boilerplate aims to be very basic without too many plugins! This boilerplate is a modified version of [Sapper-TS-GraphQL by Jacob Babich](https://github.com/babichjacob/sapper-typescript-graphql-template)

If you're looking for something with much, much more bundled in, check out [Sapper-TS-GraphQL-Tailwind-Actions by Jacob Babich](https://github.com/babichjacob/sapper-firebase-typescript-graphql-tailwindcss-actions-template).

### ‍🔧 Install

> TIP: Use [PNPM](pnpm.js.org) instead of `npm` for faster installations. Install pnpm using `npm i -g pnpm`.

```sh
git clone https://github.com/Himujjal/sapper-ts my-app
cd my-app
npm i
```

For Pro Users: 🙃😎😉

```sh
pnpx degit Himujjal/sapper-ts my-app
cd my-app
pnpm i
```

## 🛠 Usage

### 🧪 Development

```sh
npm run dev   # or `pnpm dev`
```

### 🔨 Building for Production

If you do not need to include heavy Babel transforms and polyfills to support old browsers on your site, then remove the `--legacy` flag in the `sapper:build` package script to lighten it up.

```sh
npm run prod  # or `pnpm prod`
```

### 📦 Exporting a Static Site

Your GraphQL server will not be exported with the rest of the site.

If you do not need to include heavy Babel transforms and polyfills to support old browsers on your site, then remove the `--legacy` flag in the `export` package script to lighten it up.

```sh
npm run export    # or `pnpm export`
```

## ⚙ Configuration

### ⚡ Web app

Many of the fields in `static/manifest.json` (`short_name`, `name`, `description`, `categories`, `theme_color`, and `background_color`) are filled with demonstrative values that won't match your site. Similarly, you've got to take new screenshots to replace the included `static/screenshot-1.png` and `static/screenshot-2.png` files. If you want, you can add [app shortcut definitions for "add to home screen" on Android](https://web.dev/app-shortcuts/#define-app-shortcuts-in-the-web-app-manifest). Once you change `theme_color`, update the `meta name="theme-color"` tag in `src/template.html` to match.

The [Apple touch icon](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html), favicon, and `logo-` files (also all in the `static` directory) are created by placing the logo within a "safe area" centered circle that takes up 80% of the canvas's dimension. For instance, the constraining circle in `logo-512.png` is 512 × 0.80 = 409.6 ≈ 410 pixels wide and tall.

### 🗺 Source maps

This project base comes with [source maps](https://blog.teamtreehouse.com/introduction-source-maps) enabled during development and disabled during production for the best compromise between performance and developer experience. You can change this behavior through the `sourcemap` variable in `rollup.config.js`.

## Help & Support!

[Create an issue](https://github.com/Himujjal/sapper-ts/issues/new).

## Fix! There is something that needs improvement

[Create an issue](https://github.com/Himujjal/sapper-ts/issues/new) or [pull request](https://github.com/Himujjal/sapper-ts/pulls) and I'll try to fix.

## ROADMAP:

- [ ] Compression library for tinyhttp
- [ ] Helmet support (Security headers)

## Related Projects:

1. [Official Sapper Template (JS Only)](https://github.com/sveltejs/sapper-template-rollup)
2. [Sapper-TS-GraphQL by Jacob Babich](https://github.com/babichjacob/sapper-typescript-graphql-template)
3. [tinyhttp](https://github.com/talentlessguy/tinyhttp)

## 📄 License

[MIT](LICENSE)

---

This Repo 100% is completely inspired by Jacob Babich's boilerplate!
