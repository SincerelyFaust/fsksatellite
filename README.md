<p align="center">
<img src="public/logo/fsk.webp" alt="fsklogo" width="60%"/>
</p>

# FSK Satellite website

![Website](https://img.shields.io/website?color=red&down_message=down&label=fsk&up_message=up&url=https%3A%2F%2Ffsksatellite.com)
![Nella trappola](https://img.shields.io/badge/nella-trappola-red?style=flat)
![Ollare ollare](https://img.shields.io/badge/ollare-ollare-red?style=flat)

- **Unofficial** website for the [FSK Satellite](https://it.wikipedia.org/wiki/FSK_Satellite) trap group.
- **Visit** it by clicking [here!](https://fsksatellite.com)

## Development

To develop and locally test the website:

### Step 1. Install development tools:

1. [Install Node.js and NPM](https://nodejs.org/en/download/package-manager/).
1. [Install PNPM](https://pnpm.io/installation) (recommended opposed to NPM/Yarn).
1. Code editor of your choice (we recommend [VSCode](https://code.visualstudio.com/)).

### Step 2. Install dependencies:

Install node modules required to run the website by running:

```
pnpm i
```

### Step 3. Start the Next.js dev server:

```
pnpm dev
```

In a browser, load the page [localhost:3000](http://localhost:3000) and you should now be able to test the website while making your changes.
Next.js' dev server has hot reloading so no need to restart the instance when it's running!

### Step 4. Build:

After making your changes and verifying it all works in the dev server, furtherly test them out by building the website:

```
pnpm build
```

### Step 5. Start:

```
pnpm start
```

In a browser, load the page [localhost:3000](http://localhost:3000) and you should now be able to view the built website.
