[toc]

# Monk CLI 🐵

CodeMonkeys' CLI tool is integral to usage of the framework. The `monk` command can be run anywhere in a CodeMonkeys
project, and will always run in the context of the project root.

## Basic Usage

The Monk CLI primarily is used to run Automations, Barrels, and framework Commands. It also makes your own `commands`
directory readily usable.

`monk` uses recursive name-matching logic to locate runnable entities within their respective folders. This requires unique filenames for each runnable
entity type.

- Entity Type flags target non-Command entities (Commands are the default entity).
- Action flags perform alternate operations on targetable entities ('run' is the default action).

| Command                                | Description                 | Note                   |
|----------------------------------------|-----------------------------|------------------------|
| [`monk help`](#help)                   | Run this help script        |                        |
| [`monk list`](#list)                   | List existing entities      | `--all` (all entities) |
| [`monk version`](#version)             | Print CodeMonkeys version   |                        |
| [`monk <command>`](#command)           | Run a `Command`             | default action/entity  |
| [`monk -a <automation>`](#automation)  | Run an `Automation `        | `--automation`         |
| [`monk -b <barrel>`](#barrel)          | Run a `Barrel`              | `--barrel`             |
| [`monk -e <entity>`](#entity)          | Open an entity in vim       | `--edit`               |
| [`monk -h <command>`](#command-help)   | Help for a specific `Command` | `--help`               |

## Command Details

### Help

Print a general help page for the Monk CLI, much like the above table:

```bash
monk -h list
```

### List

List all existing `Commands`. To include all entities (such as `Automations`), use the `--all` flag:

```bash
monk list --all
```

### Version

Print your CodeMonkeys version:

```bash
monk version
```

### Run Commands

`Commands` are the default entity type, and `run` is the default action, so running a `Command` requires no flags.

```bash
monk <command>
````

Custom `Commands` from your `/commands` directory are automagically available to the Monk CLI.

For a `Command` with the class name `DoThing`, you can run it with:

```bash
monk do-thing
```

_Note: You can also run bash/bat scripts from your `/commands` directory._

### Automation

Execute an automation script. Specify the automation name and optionally a monkey name:

```bash
monk -a <automation> --monkey=[name]
```

### Barrel

Run a specific barrel. Barrels are pre-defined scripts or sets of commands:

```bash
monk -b <barrel>
```

### Entity

Open an entity in vim for editing:

```bash
monk -e <entity>
```

### Command Help

Get help for a specific command in the Monk CLI:

```bash
monk -h <command>
```
