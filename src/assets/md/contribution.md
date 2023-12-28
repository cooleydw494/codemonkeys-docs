[toc]
# 🛠️ Contribution

We're thrilled that you're interested in contributing to the CodeMonkeys open-source project! Your involvement is crucial for the continuous growth and improvement of the framework.

## 🔄 How to Contribute

CodeMonkeys is more than just code; it's about building a community of innovative developers. Here's how you can be a part of it:

### Getting Started

Fork and clone the [CodeMonkeys repository](https://github.com/cooleydw494/codemonkeys) to start:

```bash
git clone <your-forked-repo-url>
git checkout -b <new-feature-or-fix>
```

Make changes in your local repository and commit them:

```bash
git commit -m "Add <new-feature-or-fix-description>"
```

Push to your fork and submit a pull request against the main CodeMonkeys repository.

### Contribution Ideas

- **New Features:** Enhance the framework with new functionalities.
- **Bug Fixes:** Identify and fix issues to improve stability.
- **Documentation:** Help improve or expand our documentation.
- **Testing:** Contribute to testing across different platforms and environments.

### Best Practices

- **Code Style:** Follow the established code style for consistency.
- **Commit Messages:** Write clear, concise commit messages.
- **Documentation:** Update or add documentation for new features or changes.

### Review Process

After you submit a pull request, it will be reviewed. Feedback or changes might be suggested. Keep an eye on your pull request for updates.

## 📚 Contribute to the Docs

Documentation is vital for user understanding and framework adoption. To contribute:

1. Fork the [CodeMonkeys Docs repository](https://github.com/cooleydw494/codemonkeys-docs).
2. Make your changes or additions.
3. Submit a pull request.

### Understanding the Docs codebase

The CodeMonkeys Docs are a Vue app, using tailwind and SCSS for styling. All the content is written in Markdown, and content changes should **only** be made to the Markdown files in `src/assets/md`. The Markdown files are converted to HTML by markdown-it, and then rendered by Vue components. The Vue/SCSS/Tailwind code is open to changes, but please do not make changes to the Markdown at the same time, unless it is necessary for backward compatibility.
