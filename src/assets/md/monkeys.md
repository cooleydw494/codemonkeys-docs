[toc]
# 🐵 Monkeys

A deep dive into the glorified config file that is the `Monkey` class.

## 🧱 Monkey Basics
`Monkey`s are your tool for specifying the exact behavior of your Automations. Your prompts, models, temperature, paths, and behavior specifications live here. The class-based approach unlocks advantages like inheritance, custom logic, and lifecycle hooks, but at heart the Monkey class maintains the simplicity of a config file.

You can specify a `Monkey` when running an `Automation` using the `--monkey=<name>` CLI arg.

```python
from monkeys.monkey import Monkey
from monkeys.docblock_monkey import DocblockMonkey

# Load a specific Monkey directly
m = DocblockMonkey()

# Load any Monkey dynamically using your base Monkey class
m = Monkey.load('docblock_monkey')

# access properties easily
main_prompt = m.MAIN_PROMPT
```

## 🍹 Mixins

`Mixin`s are a way to extend the functionality of a `Monkey` without having to create a new class. They are a great way to share functionality between `Monkey`s, and to keep your code DRY.

For example, you could use a `Mixin` to add a set of Monkey Prop values that always apply for a particular WORK_PATH / project.

```python
class MyProjectWorkspace:

    # File Iteration
    WORK_PATH: str = "~/my_project"
    INCLUDE_EXTS: tuple = ('.py', '.js')
    FILEPATH_MATCH_EXCLUDE: tuple = ('.git', '__')
    FILTER_MAX_TOKENS: int = 8000

    # Output
    OUTPUT_PATH: str = "~/my_project"
    SKIP_EXISTING_OUTPUT_FILES: bool = False

    # Git
    GPT_GIT_COMMITS: bool = False
    GIT_REPO_PATH: str = "~/my_project"
```

Then, you can use this Mixin in any Monkey that needs to use these props:

```python
from monkeys.monkey import Monkey
from mixins.MyProjectWorkspace import MyProjectWorkspace

class IdeDocumentation(Monkey):

    mixins = (
        MyProjectWorkspace,
    )

    # Overrides the Mixin's INCLUDE_EXTS
    INCLUDE_EXTS: tuple = ('.py',)
```

### Mixin Property Precedence

First things first:

**`Mixin`s override parent class properties, but class properties defined in the instantiated Monkey override `Mixin`s.**

When a `Monkey` uses multiple `Mixin`s, the properties of the last `Mixin` in the `mixins` tuple will take precedence over the properties of the previous `Mixin`s.

For example, if the first Mixin in the tuple sets `INCLUDE_EXTS = ('.py',)` and a second Mixin defined in the tuple that sets `INCLUDE_EXTS = ('.js')`, then the final value of `INCLUDE_EXTS` will be `('.js',)`.

Mixins defined in the instantiated Monkey will overwrite the inherited `mixins` class property. When you override the `mixins` class property, you should include any and all Mixins you want to apply.