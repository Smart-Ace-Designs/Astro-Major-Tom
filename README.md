# Astro Template: Major Tom
An opinionated Astro template with built-in support for Tailwind CSS, Prettier, and import aliases.

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
        bunx create-astro@latest -- --template smart-ace-designs/astro-major-tom --typescript strict --no-install --git $ProjectName
        
        Set-Location $ProjectName
        [void](New-Item -Name "components" -Path src -ItemType Directory)
        [void](New-Item -Name "layouts" -Path src -ItemType Directory)
        Write-Host
        bun install --no-summary
        bunx prettier . --write --log-level silent
        bunx prettier . --check
        if (Get-Command code -ErrorAction SilentlyContinue) {code .}
        if ($StartApp) {bun run dev}
    }
    else
    {
        Write-Host "`nProject folder ($ProjectName) already exists.  Operation cancelled...liftoff failed!"
    }
}
```
## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
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
