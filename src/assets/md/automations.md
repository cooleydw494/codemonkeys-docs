# Automations

[toc]

## Run an Automation 

Automations are CliRunnable with the `-a` *action flag*. In the following example, the Default automation in `automation/default.py`  is invoked (and the Docblocks Monkey from `monkeys/docblocks.py` is invoked).
    
```bash
monk -a default --monkey=docblocks
```

## The Default Automation

The default automation, `automations/default.py`, is a generic but complete template for running automations on files in your `WORK_PATH`. Out-of-the-box, it allows you to run GPT-powered mass file operations simply by configuring Monkeys. The default Automation is also an instructive example of using the framework, as it includes configurable implementations of all stock Monkey properties.

## Creating a New Automation

To generate a scaffolded Automation, use the `monk make` framework command:

```bash
monk make automation my_automation
```

This will generate the class `MyAutomation(Automation)` in `automations/my_automation.py`, which can be run with `monk -a my_automation`. 