# Astro Template: Major Tom
Astro **Major Tom** is an opinionated Astro 5 starter template with built-in support for Tailwind CSS, Prettier, view transitions, and import aliases and includes a basic starter component.

Using `create-astro@latest` provides everything you need to create a basic Astro application. However, it is missing a few useful items that you might find yourself manually adding to every new Astro project. The **Major Tom** template was created to automatically include these items. This provides a great starting point for a new Astro project with Tailwind.

The template includes:
- An initial Astro project structure
- Astro [View Transitions](https://docs.astro.build/en/guides/view-transitions/)
- Astro [Import Aliases](https://docs.astro.build/en/guides/typescript/#import-aliases)
- [Tailwind CSS v4.1](https://tailwindcss.com/)
- [Prettier](https://prettier.io/)
- A default _MainLayout.astro_ layout file
- A default _global.css_ file
- Default _.vscode_ files to properly handle Tailwind CSS, recommended extensions, and default Prettier formatters
- A starter component to showcase Tailwind CSS
- The `dev` script set to `"astro dev --open"`

An optional [PowerShell function](https://github.com/Smart-Ace-Designs/SmartAceDesigns.AstroLiftoff) (standalone or as part of a PowerShell module) is available to deploy the above template and provide the following additional functionality:
- Creates an additional empty folder: _assets_
- Blanks out the _README.md_ file
- Runs the `prettier` CLI to provide an intial format of all project files
- Initializes a _Git_ repository
- Automatically navigates to the project folder and peforms an initial install
- Runs `astro update` to update the core Astro packages to the latest versions and runs your preferred package manager (npm or bun) to update the other packages
- Provides an option to launch the site and/or open the project folder with VS Code post deployment

## Deployment Methods
### bun
```sh
bunx create-astro@latest -- --template smart-ace-designs/astro-major-tom project-name
```
### npm
```sh
npx create-astro@latest -- --template smart-ace-designs/astro-major-tom project-name
```
### pnpm
```sh
pnpm create astro@latest --template smart-ace-designs/astro-major-tom project-name
```
### yarn
```sh
yarn create astro@latest --template smart-ace-designs/astro-major-tom project-name
```
### PowerShell
The optional PowerShell function and module are available here:
[SmartAceDesigns.AstroLiftoff](https://github.com/Smart-Ace-Designs/SmartAceDesigns.AstroLiftoff)

```sh
New-AstroProject -ProjectName project-name -Location parent-directory -Template astro-major-tom
```

https://github.com/user-attachments/assets/0a5886fd-34a7-4409-99d6-a056329f1d4c

## Project Structure
After deploying the Astro **Major Tom** template you will see the following files and directories in your project root:

```text
/
├── .vscode/
│       └── extensions.json
│       └── launch.json
│       └── settings.json
├── public/
│       └── favicon.svg
├── src/
|   ├── components/
│       └── AstroWelcome.astro
|   ├── layouts/
│       └── MainLayout.astro
│   ├── pages/
│       └── index.astro
|   ├── styles/
│       └── global.css
├── .gitignore
├── .prettierrc.mjs
├── astro.config.mjs
├── package.json
├── README.md
└── tsconfig.json
```

The optional `New-AstroProject` PowerShell function will add this additional directory to your project root:

```text
/
└── src/
    └── assets/
```
