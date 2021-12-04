### pack.mcmeta
`pack.mcmeta` is the file that tells minecraft to treat the folder like a data pack.

<!-- @data_pack pack.mcmeta -->
```json
{
    "pack": {
      "pack_format": 7,
      "description": "This is an example on how to make a data pack."
    }
}
```

 - `"pack_format"` tells minecraft what version the data pack is for.

| "pack_format" | Minecraft Version |
|---------------|-------------------|
| 1             | 1.6.1 - 1.8.9     |
| 2             | 1.9 - 1.10.2      |
| 3             | 1.11 - 1.12.2     |
| 4             | 1.13 - 1.14.4     |
| 5             | 1.15 - 1.16.1     |
| 6             | 1.16.2 - 1.16.5   |
| 7             | 1.17.x            |
| 8             | 1.18.x            |

 - `"description"` is a description for the data pack

**Both `"pack_format"` and `"description"` are required.

### Function tags

### What is tick.json and load.json?
`#minecraft:tick` and `#minecraft:load` are **function tags** which have been given special functionality.

#### What is a function tag?
A function tag is list a functions that can be executed all at once.
Function tags are `.json` files placed in `<data pack>/data/<namespace>/tags/functions/<function_tag>.json`.
Its resource location is `#<namespace>:<function_tag>`

`#minecraft:tick`
<!-- @function_tag minecraft:tick -->
```json
{
    "values":
    [
        "dpe:loop"
    ]
}
```

`#minecraft:load`
<!-- @function_tag minecraft:load -->
```json
{
    "values":
    [
        "dpe:load"
    ]
}
```

 - `"values"` is a list of function resource locations.
 - `"replace"`, whether or not to replace this tag from any lower priority data packs (optional, defaults to false). Don't set this to true unless you have a very good reason to do so, as it may mess up the functionality of other data packs. **You should NEVER set `"replace"` to true in the `tick` or `load` tags!**

#### `tick.json`:
A list of functions that will be run every tick, similar to a repeating command block.
It's best to have one or two ticking functions, and use those to run the rest of your functions using conditionals, this will keep your data pack more efficient.

#### `load.json`:
A list of functions that will run once on world load, or reload (`/reload`).
This is generally where you put things like scoreboard setups, things that only need to be› run once.

### Functions


Function files are essentially just a list of commands, like using chain command blocks.

You can make comments by prepending the line with a `#`, which will make minecraft ignore that line.
```mcfunction
# this is a comment and will be ignored
say this command will run first
say this command will be run next
```
The file extension for functions is `.mcfunction`

`dpe:load`
<!-- @function dpe:load -->
```mcfunction
#> example:load
#
# This function is executed by #minecraft:load, and will run once upon world load or when /reload is used
#
# This is a good place to do things like setting up scoreboards.

scoreboard objectives add sneaking minecraft.custom:minecraft.sneak_time
```

`dpe:loop`
<!-- @function dpe:loop -->
```mcfunction
#> example:loop
#
# This function is executed by #minecraft:tick every tick.
# Every line is a command, which run in order.
#
# We can represent what tags the function is executed by with:
#
# @tags
#   #minecraft:tick
#
# This is the method that will be used throughout the rest of DPELib

# Using "execute as" and "execute at" before executing a function will assign the entity and location for the ENTIRE function.
execute as @a[scores={sneaking=1..}] at @s run function example:sneaking
```

`dpe:loop`
<!-- @function dpe:loop -->
```mcfunction
#> example:sneaking
#
# This function is executed by example:loop
#
# When a function is run "as" or "at" an entity (via execute), the entire function will be run as or at that entity.
# This means if you run "execute as <player> run function ..." every time "@s" is used in that function, it will refer to the player.

particle flame ~ ~ ~ 0.5 0 0.5 0 10 force @a

scoreboard players reset @s sneaking
```