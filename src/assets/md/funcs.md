[toc]
# 🧑‍💻 Funcs

CodeMonkeys' Funcs make it easy to ask GPT to execute custom functions in response to prompts.

## 🤖 Function Calling

Function Calling is a GPT feature that allows you to instruct GPT to send a response that can be used to call a custom function you've defined. This is useful in CodeMonkeys because it means you can write a prompt and have the `GptClient` execute a function in response. For example, there's a built-in `Func` that allows GPT to write a file (directory-bounded for safety).

Instead of engineering prompts that try to get formulaic or precise responses from GPT that can be (unreliably) used to perform programmatic tasks, you can define the function that performs the task, pass information about the function and its parameters, and have GPT return a JSON response that can be used to directly call the function itself.

The result is a powerful and significantly more reliable way to utilize GPT for programmatic tasks of all kinds.

## 📘 The Func Class

Function Calling isn't particularly complicated, but CodeMonkeys makes it even easier to leverage with the `Func` class.
Funcs allows you to define simple subclasses that obfuscate much of the boilerplate involved in Function Calling.

Writing a Func is about as simple as filling out a form with the details, and defining an `_execute()` method that will be called using the GPT response. We'll discuss using the Func with the GptClient later (it's easy).

_Note: The `GptClient` can be passed one or more functions or `Func`s, enforce specific functions to be called, and supports the 'auto' option. However, it was implemented before parallel Function Calling was released. In the future this will be supported._

## 🧩 Example Func

The following Example Func demonstrates general usage with explanatory comments. For more information on the parameters configuration options, see the [OpenAI Function Calling Docs](https://platform.openai.com/docs/guides/function-calling).

```python
from codemonkeys.entities.func import Func
from codemonkeys.types import OInt


class ExampleFunc(Func):
    """
    A class to represent a function to be called by a GPT model.

    This class allows for defining a custom function that can be invoked by
    the GPT model during text generation.
    """

    name: str = 'func_name'

    _description: str = 'This function either adds arg1 to arg2 or returns arg1 if arg2 is not provided.'

    # For more information on function calling parameters configuration options, see:
    # https://platform.openai.com/docs/guides/gpt/function-calling
    _parameters: dict = {
        "type": "object",
        "properties": {
            "arg1": {
                "type": "int",
                "description": "Description for arg1",
            },
            "arg2": {
                "type": "int",
                "description": "Description for arg2",
            },
        },
        "required": ["arg1"],
    }

    @classmethod
    def _execute(cls, arg1: int, arg2: OInt) -> int:
        if arg2 is None:
            return arg1
        return arg1 + arg2
```

## 🛠️ Create A New Func

To generate a scaffolded Func, use the `monk make` framework command:

```bash
monk make func my_func
```

This will generate the class `MyFunc(Func)` in `funcs/my_func.py`, which can be imported and passed to the `GptClient@generate()` method for function calling.

## 🧠 Func Strategies

There are different ways you can strategically utilize Funcs in your Automations (or even Commands). The most common ways I've used them are:

### Simple Execution

This is the most common use case. You define a Func that calls a function in your Automation, and then you call that Func from your prompt. This is useful for when you want to execute a function in your Automation that doesn't require any arguments.

### Coercing GPT Output

This is a more creative and very useful strategy I've used quite a bit. Instead of using Funcs to perform programmatic tasks, you can simple use them to imply a more specific attitude toward your prompt. For instance, the FinalizeOutput Func (included in the codemonkeys package).

Rather than try to accomplish something specific, this Func simply forces GPT to think about its response in more concrete terms. I've tried a million times to engineer prompts that prevent GPT from returning additional context or fluff, but its hit or miss. With FinalizeOutput, I've found the success rate to be extremely high.

```python
from codemonkeys.entities.func import Func


class FinalizeOutput(Func):

    """
    This Func is intended to be used in the default automation to finalize output for file writing.
    It is a very vague function that coerces GPT into intuiting the desired output and omitting extraneous text.
    As long as prompts include language that allow GPT to intuit the use-case properly, it can be used in other ways.
    """

    name: str = 'finalize_output'

    _description: str = 'This function is a handler for finalized output for various uses.'

    _parameters: dict = {
        "type": "object",
        "properties": {
            "output": {
                "type": "string",
                "description": "Finalized output requiring no further processing to be used as intended.",
            },
        },
        "required": ["output"],
    }

    @classmethod
    def _execute(cls, output: str) -> str:
        return output
```

### Response Transformation

This is a more advanced strategy that I've used to great effect. It involves using a Func to transform the response from GPT into something more useful, or more in line with your expected formatting.

This can mean writing Python code to transform the output in any way, and/or using the function description/parameters to coerce GPT into producing more specifically formatted output to begin with.
