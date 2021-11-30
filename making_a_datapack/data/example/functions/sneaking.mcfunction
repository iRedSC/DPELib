#> example:sneaking
#
# This function is called by example:loop
#
# When a function is run "as" or "at" an entity (via execute), the entire function will be run as or at that entity.
# This means if you run "execute as <player> run function ..." every time "@s" is used in that function, it will refer to the player.

particle flame ~ ~ ~ 0.5 0 0.5 0 10 force @a

scoreboard players reset @s sneaking