[toc]

# Configuration

## 🐒 Monkeys
Monkeys are your tool for specifying the exact behavior of your Automations. Your prompts, models, temperature, paths, and behavior specifications live here. The class-based approach unlocks advantages like inheritance, custom logic, and lifecycle hooks, but at heart the Monkey class maintains the simplicity of a config file.

You can specify a Monkey when running an Automation using the `--monkey=<name>` CLI arg.

```python
from monkeys.monkey import Monkey
from monkeys.docblock_monkey import DocblockMonkey

# Load a specific Monkey directly
m = DocblockMonkey()

# Load any Monkey dynamically using your base Monkey class
m = Monkey.load(<name>)

# access properties easily
main_prompt = m.MAIN_PROMPT
```

## 📝 Env
The Env class is an interface for accessing properties defined in your `.env`. On every run of the `monk` CLI, type-hinted properties that help avoid mistakes and make your IDE smarter are regenerated. You may customize or ignore your `config/env.py`, but it is used by core framework code, so _don't remove it or edit the generation tags_.

```python
from config.env import Env
env = Env.get()

# access properties easily
openai_api_key = env.OPENAI_API_KEY
```