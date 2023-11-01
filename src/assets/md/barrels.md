[toc]

# Barrels

Barrels in CodeMonkeys are a powerful way to bundle several components together to form a larger functionality. These are reusable and can vastly simplify the code structure.

## Run a Barrel

Barrels are CliRunnable with the `-b` *action flag*. In the following example, the ScaffoldPlus barrel in `barrels/scaffold_plus.py`  is invoked.
    
```bash
monk -b scaffold_plus
```

## Creating a New Barrel

To generate a scaffolded Barrel, use the `monk make` framework command:

```bash
monk make barrel my_barrel
```

This will generate the class `MyBarrel(Barrel)` in `barrels/my_barrel.py`, which can be run with `monk -b my_barrel`. 