[toc]

# Monk CLI 🐵

CodeMonkeys' CLI tool is integral to usage of the framework. The `monk` command can be run anywhere in a CodeMonkeys
project, and will always run in the context of the project root.

## Basic Usage

The Monk CLI primarily is used to run Automations, Barrels, and framework Commands. It also makes your own `commands`
directory readily usable.

`monk` uses recursive name-matching logic to locate runnable entities within their respective folders. This requires unique filenames for each runnable
entity type.

- 🔷 Entity Type flags target non-Command entities (Commands are the default entity).
- 🔷 Action flags perform alternate operations on targetable entities ('run' is the default action).

## Monk CLI

| Command                                | Description            | Note                   |
|----------------------------------------|------------------------|------------------------|
| `monk help`                            | Run this help script   |                        |
| `monk list`                            | List existing entities | `--all` (all entities) |
| `monk version`                         | Print version          |                        |
| `monk <command>`                       | Run a command          | default action/entity  |
| `monk -a <automation> --monkey=[name]` | Run an automation      | `--automation`         |
| `monk -b <barrel>`                     | Run a barrel           | `--barrel`             |
| `monk -e <entity>`                     | Open in vim            | `--edit`               |
| `monk -h <command>`                    | Help for a Command     | `--help`               |

## Command Help

Beyond that, you can print a help page for any Command by running `monk -h <command>`. This will print an explanation and instructions on how to use the Command.

_Note: These Command help scripts are actually Commands written by a CodeMonkeys Automation!_

So, to print a help page for the `monk list` Command, you would run:

```bash
monk -h list
```

