### How to use Namespaces

Namespaces differentiate resources that may otherwise have the same name.
You've already used namespaces if you've every used `/give @s minecraft:diamond` or `/summon minecraft:zombie ~ ~ ~`, `minecraft:` is the namespace.

The above resources cannot be modified using data packs, but there are plenty of things which can be, including `functions`.

In this example pack the namespace `dpe` is used, but namespaces can be named anything, with valid characters being `[a-z] [0-9] _ - .` *(These valid characters apply to almost every other folder and file name in a data pack)*.

The `vanilla` data pack contains all the vanilla loot tables, advancements, recipes, block tags, etc.  These are all kept in the `minecraft:` namespace. **Modifying loot tables/tags etc. that exist in the `vanilla` data pack will either replace or add to the existing content.** This is how one is able to - for example - change mob drops.

#### Resource Locations

A resource location is how specific resource is called, instead of having to put in the whole resource path.

If there is a function under `<data pack>/data/custom/functions/flame_sword.mcfunction`, then it's resource location would be `custom:flame_sword`.
Resources can be put in sub folders as well, so `<data pack>/data/custom/functions/swords/flame_sword.mcfunction` would be `custom:swords/flame_sword`. There is no limit to the amount of sub folders that can be used.