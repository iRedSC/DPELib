#> example:loop
#
# This function is called by #minecraft:tick every tick.
# Every line is a command, which run in order.

# Using "execute as" and "execute at" before calling a function will assign the entity and location for the ENTIRE function.
execute as @a[scores={sneaking=1..}] at @s run function example:sneaking