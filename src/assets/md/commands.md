[toc]
# 📜 Commands

CodeMonkeys is heavily CLI-oriented, and Commands are a core concept. There are basic framework Commands, like `monk list --all`, which will list all the _entities_ you have in your project, and you can easily create open-ended custom Commands.

## ⌨️ CliRunnable
The `Command` class, as well as the other _entities_, are a subclass of `CliRunnable`.

The `CliRunnable` class is a base class that provides a common interface "cli-runnable" _entities_. It includes a required `run()` method which is called when the _entity_ is run from the CLI.

Beyond that, `CliRunnable` handles CLI arguments. CLI args parsed by `argparse` are passed into the constructor, and class variables are used to configure how the args are handled.

These class variables can be overridden in subclasses (such as a custom `Command`):

```python
named_arg_keys: list = []
unnamed_arg_keys: list = []
required_arg_keys: list = []
```

#### named_arg_keys
`named_arg_keys` is a list of the named arg names that are expected to be passed to the CLI command. You must define a named arg for it to be handled correctly. Named arg keys must be passed with a leading `--` (ex: `--all`), but should be defined without the `--`. If a named arg is passed without a value, it will be set to `True`.

#### unnamed_arg_keys
`unnamed_arg_keys` is a list of the unnamed arg names that are expected to be passed to the CLI command. You must define an unnamed arg for it to be handled correctly.

#### required_arg_keys
`required_arg_keys` is a list of the args that are required to be passed to the CLI command. Required args must also be defined in either `named_args` or `unnamed_args`. Any required args that are not passed will result in an error.

In addition to this, you must define the args as variables on the subclass. For example, if you have a `named_arg_keys` of `['foo']`, you must define a `foo` variable on the subclass. If you typehint the variable, the CLI arg will be cast to that type.

## Example Command

The following is the Example Command that is used for generating new user Commands by running `monk make command <name>`.

```python
from codemonkeys.entities.command import Command
from codemonkeys.types import OStr, OBool, OInt


class ExampleCommand(Command):
    
    required_arg_keys = ['named_arg_one']
    
    # Specify named args
    named_arg_keys = ['named_arg_one', 'named_arg_two']

    # Specify unnamed args (in passing order)
    unnamed_arg_keys = ['unnamed_arg_one']

    # Define and set defaults for all args (incl required)
    # Setting type-hints will provide validation in CliRunnable base class.
    named_arg_one: OStr = None
    named_arg_two: OBool = True
    unnamed_arg_one: str = 'default_value'
    unnamed_arg_two: OInt = None

    def run(self) -> None:
        """
        Execute your Command logic here, utilizing args as needed.
        """
        print(f"named_arg_one: {self.named_arg_one}")
```