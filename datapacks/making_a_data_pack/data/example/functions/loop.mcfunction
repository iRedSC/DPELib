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