[toc]
# Monkeys Advanced

A deep dive into the more advanced aspects of Monkeys.

## 🍹 Mixins

Mixins are a way to extend the functionality of a Monkey without having to create a new class. They are a great way to share functionality between Monkeys, and to keep your code DRY.

For example, you could use a Mixin to add a set of Monkey Prop values that always apply for a particular WORK_PATH / project.

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

**Mixins override parent class properties, but class properties defined in the instantiated Monkey override Mixins.**

When a Monkey uses multiple Mixins, the properties of the last Mixin in the `mixins` tuple will take precedence over the properties of the previous Mixins.

For example, if the first Mixin in the tuple sets `INCLUDE_EXTS = ('.py',)` and a second Mixin defined in the tuple that sets `INCLUDE_EXTS = ('.js')`, then the final value of `INCLUDE_EXTS` will be `('.js',)`.

Mixins defined in the instantiated Monkey will overwrite the inherited `mixins` class property. When you override the `mixins` class property, you should include any and all Mixins you want to apply.