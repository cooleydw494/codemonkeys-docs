# CodeMonkeys Docs 🐒

This repository is for the nice, friendly docs that will teach you to use the CodeMonkeys framework. If you landed here by mistake and are looking for the docs themselves, head over to [codemonkeys.lol](https://codemonkeys.lol).

If you're API-style documentation of the codemonkeys package, check out the [Sphinx Docs](https://cooleydw494.github.io/codemonkeys).

If you meant to find the GitHub Repo for CodeMonkeys itself, you can find that [here](https://github.com/cooleydw494/codemonkeys).

## Contributing
This repository has a GitHub Action that will automatically build and deploy the docs to the S3 bucket hosting the webpage upon push/merge to main. If you want to contribute, please fork the repo and submit a PR.

CodeMonkeys Docs is a Vue CLI app using Tailwind, SCSS, and eslint. It uses Vue Router to expose the main pages via the main nav, and each pages' content is written solely in markdown. It is rendered using [markdown-it](https://github.com/markdown-it/markdown-it) and various plugins including prismjs for code highlighting, and is highly customized stylistically.

I'll potentially accept PRs working on either the markdown content or the Vue app itself, but I'd rather not have PRs that make changes to both at the same time. 

I hope by architecting the docs in this way, to make it easy to keep up with the framework and prevent the docs from becoming too much of a distraction/burden. Editing the markdown alone is a very, very easy process for myself and for potential contributors.

I'll highly prioritize updated markdown content over changes to the surrounding app / styles.

## Note About Sphinx
The Sphinx docs are auto-generated from source code documentation when new versions of CodeMonkeys (the package itself) are published to main. If you want to contribute to those, you'll have to create a PR to the main CodeMonkeys repo.