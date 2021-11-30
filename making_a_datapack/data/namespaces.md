### How to use Namespaces

Namespaces differentiate resources that may otherwise have the same name.
You've already used namespaces if you've every used `/give @s minecraft:diamond` or `/summon minecraft:zombie ~ ~ ~`, `minecraft:` is the namespace.
The above resources cannot be modified using datapacks, but there are plenty of things which can be, including `functions`.

In this example pack the namespace `example` is used, but namespaces can be named anything, with valid characters being `[a-z] _ - .` *(These valid characters apply to almost every other folder and file name in a data pack)*

#### Resource Locations

A resource location is how specific resource is called, instead of having to put in the whole resource path.

If there is a function under `<datapack>/data/custom/functions/flame_sword.mcfunction`, then it's resource location would be `custom:flame_sword`.
Resources can be put in sub folders as well, so `<datapack>/data/custom/functions/swords/flame_sword.mcfunction` would be `custom:swords/flame_sword`. There is no limit to the amount of sub folders that can be used.