[toc]
# 🐒 CodeMonkeys Framework

A framework for automating GPT-powered tasks, from simple to complex.

## 🌐 Overview

Welcome to the CodeMonkeys Framework Docs, where you can learn all about installing and using the framework. If you're looking for something else, check out the links below.

- [CodeMonkeys Repo](https://github.com/cooleydw494/codemonkeys)
- [Docs Repo](https://github.com/cooleydw494/codemonkeys-docs)
- [Sphinx Autodocs](https://cooleydw494.github.io/codemonkeys)

CodeMonkeys gives devs control over their automated GPT logic. The current focus is working on codebases and simple mass file transformation, but it is lovingly designed to enable automations of all kinds. This framework aims to use AI effectively, while being reliable, predictable, and tailored to your needs. There is a strong focus on only involving AI at crucial areas of strength, and using good old-fashioned code for everything else.

### 🚧 Alpha Status

As of November 30th, I have released a stable Alpha focused on establishing the framework's architecture/concepts to a point of relative stability, and providing a flexible, immediately useful default Automation that is instructional in how it utilizes the framework.

*These docs are still a work in progress, although I hope they're good enough to get anyone interested started. More updates coming soon! Updates almost every day.*

### Philosophy

At the core of CodeMonkeys is a mission to create a tool/framework that is accessible and simple to use, while being powerful and flexible enough to handle anything; to be as simple or as complex as the needs of the user. I want inexperienced devs to be nurtured, and experienced devs to be empowered.

## 📅 Future Plans

There are many things I want to do with CodeMonkeys now that the Alpha is out. The following is a public todo list. It is a non-exhaustive list of my primary goals. If you'd like to contribute, please check out [Contribution](/contribution) and/or reach out!

- Test Coverage
- More testing on Windows/Linux (Should Work ™️)
- Streamlined fine-tuning support
- More open-ended design
  - framework-level support for non-CLI usage
  - GUI for framework (like Vue CLI UI)
- Expand pre-packaged Automations, Monkeys, Builders
  - focus on function calling support / Funcs
- Improve git workflow, contribution docs/standards
- Improve CLI output, custom Theming, accessibility
- Much, MUCH more!

## 🎯 One-shot Prompts

CodeMonkeys is designed to utilize one-shot prompts at an atomic level, which an emphasis on breaking down AI-powered tasks into focused, manageable pieces. The name comes from the idea that if you break down coding concerns into atomic tasks that even a monkey could do, you can get predictable results that are genuinely useful. This paradigm works well for simple use-cases like translating text, documenting code, writing TODOs, adding type-hints, etc.

Beyond the simpler use cases that inherently benefit from one-shot prompts, the framework helps you to configure more complex one-shot prompts by providing context files, dynamic prompt content, and open-ended custom logic.

Eventually CodeMonkeys will support other modes of prompting, but I strongly believe that boiling down tasks into one-shot prompts that have the necessary context for the goal at hand is currently the most powerful and predictable way to utilize the OpenAI API for coding tasks, especially paired with function calling and recently increased token limits, which allow one-shot prompts to be extensively contextualized.
