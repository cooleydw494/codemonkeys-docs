# CodeMonkeys Docs 🐒

This is the repository is for the nice, friendly docs that will teach you to use the **CodeMonkeys** framework. If that seems off, you may be looking for one of these:

- [CodeMonkeys Docs](https://codemonkeys.lol) (actual webpage)
- [CodeMonkeys Repo](https://github.com/cooleydw494/codemonkeys)
- [Sphinx Docs](https://cooleydw494.github.io/codemonkeys)

---

## 🛠 Contributing

This repository has a GitHub Action that will automatically build and deploy the docs to the S3 bucket hosting the webpage upon push/merge to main.

_If you want to contribute, please fork the repo and create a PR._
  
**Repo Details**:
- Vue CLI app
- Vue Router exposes main pages via the primary nav
- Page content written in markdown
  - please follow established patterns for [toc], codeblocks, etc
  - rendered using [markdown-it](https://github.com/markdown-it/markdown-it) and plugins such as prismjs
  - highly customized using Tailwind and SCSS
- eslint is enforced

I hope by architecting the docs in this way, to make it easy to keep up with the framework and prevent the docs from becoming a distraction. Editing the markdown alone is simple and fast.

**Contribution Preferences**:
I'll potentially accept PRs working on either the markdown content or the Vue app itself, but I'd rather not have PRs that make changes to both at the same time.

I'll highly prioritize updated markdown content over changes to the surrounding app/styles.


## 📝 Note About Sphinx

The Sphinx docs are auto-generated from source code documentation when new versions of CodeMonkeys (the package itself) are published to main. If you want to contribute to those, you'll have to create a PR to the main CodeMonkeys repo.
