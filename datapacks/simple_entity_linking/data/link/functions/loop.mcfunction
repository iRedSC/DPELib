#> link:loop
#
# @tags
#   #minecraft:tick



#> Assign all players an ID if they do not have one already
# In this dpe, we will give all players a unique ID, and then give them a sheep with the same ID
# Then the sheep will be teleported to its linked player

    # If a score holder is not assigned a score, it is "undefined".
    # "unless score @s id = @s id" means "unless I have a define score" (which includes 0)
execute as @a unless score @s id = @s id run function link:assign_id

#> Locating linked entities
# We will run the function as all players to find their linked sheeps

    # Notice the use of "at @s", this is because we will be needing the location context for teleporting the sheep
execute as @a at @s run function link:find_link