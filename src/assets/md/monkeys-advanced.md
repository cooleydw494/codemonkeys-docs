[toc]
# Monkeys Advanced

A deep dive into the more advanced aspects of Monkeys.

## 🍹 Mixins

Mixins are a way to extend the functionality of a Monkey without having to create a new class. They are a great way to share functionality between Monkeys, and to keep your code DRY.

For example, you could use a Mixin to add a set of Monkey Prop values that always apply for a particular WORK_PATH / project.

```python
from codemonkeys.monkey.mixin import Mixin

class MyProjectMixin(Mixin):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.props.update({
            'WORK_PATH': '/path/to/my/project',
            'MY_PROJECT_PROP': 'my_project_value',
        })
```

Then, you can use this Mixin in any Monkey that needs to use these props:

```python
from codemonkeys.monkey import Monkey
from mixins import MyProjectMixin

class MyMonkey(Monkey, MyProjectMixin):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.props.update({
            'MY_MONKEY_PROP': 'my_monkey_value',
        })
```