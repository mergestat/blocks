# MergeStat UI Libraries

This repository is a monorepo manage with [Nx](https://nx.dev/).

## Packages

- [MergeStat Blocks](https://github.com/mergestat/blocks/tree/main/packages/blocks) : React UI components used to build the MergeStat App

- [MergeStat Icons](https://github.com/mergestat/blocks/tree/main/packages/icons) : React Icons used to build the MergeStat App

## How to use

Clone the repository

```sh
git clone https://github.com/mergestat/blocks.git
```

Run project at the root of the workspace

```sh
cd blocks
npm install
```

Run blocks on storybook

```sh
npm run start:blocks
```

Run icons on storybook

```sh
npm run start:icons
```

## How to Publish to NPM

Go to `packages/blocks/package.json` and upgrade the version manually.

```json
{
  "name": "@mergestat/blocks",
  "version": "1.2.6",  <----------- <Upgrade here>
}
```

Then `login`, `build` and `publish`

```sh
npm login
```

```sh
npm run release
```
