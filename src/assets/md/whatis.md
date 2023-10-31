# CodeMonkeys Framework

A framework for automating GPT-powered tasks, from simple to complex. Sphinx docs [here](https://cooleydw494.github.io/codemonkeys).

[toc]

## Overview 🌐

CodeMonkeys gives devs control over their automated GPT logic. The current focus is working on codebases but it is lovingly designed to enable automations of all kinds. This framework aims to use AI effectively, while being reliable, predictable, and tailored to your needs. There is a strong focus on only involving AI at crucial areas of strength, and using good old-fashioned code for everything else.

## Alpha Status (10-10-2023) 🚧

There will soon be a stable Alpha release focused on establishing the framework's architecture/concepts to a point of relative stability, and providing a flexible, immediately useful default Automation that is instructional in how it utilizes the framework.

## One-shot Prompts

CodeMonkeys is designed to utilize one-shot prompts at an atomic level, which an emphasis on breaking down AI-powered tasks into small, manageable pieces. The name comes from the idea that if you break down coding concerns into atomic tasks that even a monkey could do, you can get predictable results that are genuinely useful. This paradigm works well for simple use-cases like translating text, documenting code, writing TODOs, adding type-hints, etc.

Beyond the simpler use cases that inherently benefit from one-shot prompts, the framework helps you to configure more complex one-shot prompts by providing context files, dynamic prompt content, and open-ended custom logic.

Eventually CodeMonkeys will support other modes of prompting, but I strongly believe that boiling down tasks into one-shot prompts that have the necessary context for the goal at hand is currently the most powerful and predictable way to utilize the OpenAI API for coding tasks, especially paired with function calling that can go a long way toward coercing the right output.

_Important: The biggest current limitation of this strategy is token length. There is no implementation of handling longer files. While summarization can help for context, it is not a practical strategy for longer code files which you need the full contents of. You generally need a file/prompt to take up 1/2 or less of the max token limit to get the results you need, so this is problematic for extensive files._

## Medium-term Goals 📅
Some concerns have been set aside as I prepare for a stable Alpha release.

The next major focuses are:
- Test Coverage
- More testing on Windows/Linux (Should Work ™️)
- Handling long files
- Streamlined fine-tuning support
- More open-ended design
  - framework-level support for non-CLI-bases uses
  - GUI for framework (like Vue CLI UI)
- Expand pre-packaged Automations, Monkeys, Builders
  - focus on function calling support / Funcs
- Improve git workflow, contribution docs/standards
- Improve CLI output, custom Theming, accessibility