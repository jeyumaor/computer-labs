# computer-labs

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Dev Environment Setup
### MacOS
install xcode tools
```
xcode-select --install
```
install [brew](https://brew.sh/) by running below in terminal
``` bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
install nodejs
```
brew install nodejs
```
install visual studio code
```
brew install visual-studio-code
```
install []mongodb](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
```
brew tap mongodb/brew
brew install mongodb-community
```
### Windows
install chocolatey. see instructions [here](https://chocolatey.org/install)
``` powershell
# run in powershell with admin privileges
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```
install nodejs
``` powershell
# run in powershell with admin privileges
choco install node.js
``` 
install visual studio code
``` powershell
# run in powershell with admin privileges
choco install vscode
```
install git & git bash
``` powershell
# run in powershell with admin privileges
choco install git
```
install mongodb; see [instructions](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
### All OS Environments
- create github account [here](https://github.com/)
- Generate ssh key; see [instructions](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- setup git for first time use; see [instructions](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
