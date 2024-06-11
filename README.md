# Astro Template: Major Tom

An opinionated Astro template with built-in support for Tailwind CSS, Prettier, view transitions, and import aliases.

```sh
npm create astro@latest -- --template smart-ace-designs/astro-major-tom project-name
```

```powershell
# Example function to provide more granular control of deploying a new Astro project with this template using Bun.
# Add to your PowerShell profile or custom PowerShell module.

function New-AstroProject
{
    [CmdletBinding()]
    Param
    (
        [Parameter(Mandatory = $true)] [string]$ProjectName,
        [Parameter(Mandatory = $true)] [string]$Location,
        [Parameter(Mandatory = $false)] [switch]$StartApp
    )

    Clear-Host
    $Message = "Astro Deployment Tool"
    $Width = $Host.UI.RawUI.WindowSize.Width
    Write-Host
    Write-Host ((" " * ($Width - $Message.Length)) + $Message) -ForegroundColor Green
    Write-Host ("=" * $Width)
    if (!(Test-Path -Path "$Location\$ProjectName"))
    {
        Set-Location $Location
        npx create-astro@latest -- --template smart-ace-designs/astro-major-tom --typescript strict --no-install --git $ProjectName

        if (Test-Path -Path $ProjectName)
        {
            Set-Location $ProjectName
            [void](New-Item -Name "components" -Path src -ItemType Directory)
            Write-Host
            bun install --no-summary
            bunx @astrojs/upgrade
            bun update prettier --silent
            Write-Host
            bunx prettier . --write --log-level silent
            bunx prettier . --check
            if (Get-Command code -ErrorAction SilentlyContinue) {code .}
            if ($StartApp) {bun run dev}
        }
        else
        {
            Write-Host "`nProject folder ($ProjectName) was not created.  Operation cancelled...liftoff failed!"
        }
    }
    else
    {
        Write-Host "`nProject folder ($ProjectName) already exists.  Operation cancelled...liftoff failed!"
    }
}
```
https://github.com/Smart-Ace-Designs/Astro-Major-Tom/assets/132539186/0bf1c8e6-b207-41b7-8891-5256f0acacc2

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
|   ├── components
|   ├── layouts
│   ├── pages/
│       └── index.astro
|   └── env.d.ts
├── astro.config.mjs
├── package.json
├── README.md
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Astro/React/Vue/Svelte/Preact components are put in `src/components/` by convention.

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Additional Information

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
