# 🐒 CodeMonkeys Docs

This is the repository is for the nice, friendly docs that will teach you to use the **CodeMonkeys** framework. If that's not what you're looking for, try these:

- [CodeMonkeys Docs](https://codemonkeys.lol)
- [CodeMonkeys Repo](https://github.com/cooleydw494/codemonkeys)
- [Sphinx Docs](https://cooleydw494.github.io/codemonkeys)


## 🛠 Contributing

A GitHub Action to builds and deploys the docs, and the main content is entirely written in markdown, so contributing is easy (for me too)!

_If you want to contribute, please fork the repo and create a PR._
  
**Repo Details**:
- Vue CLI app
- Vue Router exposes main pages via the primary nav
- Page content written in markdown
  - please follow established patterns for [toc], codeblocks, etc
  - rendered using [markdown-it](https://github.com/markdown-it/markdown-it) and plugins such as prismjs
  - highly customized using Tailwind and SCSS
- eslint is enforced

**Please make PRs that only change either markdown content or the Vue app/styles, not both.**


## 📝 Note About Sphinx

The Sphinx docs are auto-generated from source code documentation when new versions of CodeMonkeys (the package itself) are published to main. If you want to contribute to those, you'll have to create a PR to the main CodeMonkeys repo.
