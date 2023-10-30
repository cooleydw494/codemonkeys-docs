# Monk CLI 🐵

CodeMonkeys' CLI tool is integral to usage of the framework. The `monk` command can be run anywhere in a CodeMonkeys
project, and will always run in the context of the project root.

## Usage

The Monk CLI primarily is used to run Automations, Barrels, and framework Commands. It also makes your own `commands`
directory readily usable.

`monk` uses recursive name-matching logic to locate runnable entities. This requires unique filenames for each runnable
entity type (Commands, Automations, Barrels).

- 🔷 Entity Type flags target Automations and Barrels.
- 🔷 Action flags perform alternate operations on targetable entities.

## Monk CLI

| Command                | Description            | Note                  |
|------------------------|------------------------|-----------------------|
| `monk help`            | Run this help script   |                       |
| `monk list`            | List existing entities | `-b/a/m`, `--all`     |
| `monk -v`              | Print version          | `--version`           |
| `monk <command>`       | Run a command          | default action/entity |
| `monk -a <automation>` | Run an automation      | `--automation`        |
| `monk -b <barrel>`     | Run a barrel           | `--barrel`            |
| `monk -e <entity>`     | Open in vim            | `--edit`              |
| `monk -h <entity>`     | Help for an entity     | `--help`              |

✅ That's it! For more, run `monk -h <entity>` or read the docs.
