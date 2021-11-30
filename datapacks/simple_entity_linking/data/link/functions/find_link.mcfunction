#> link:find_link
#
# This function will locate and teleport the pig that has the same ID as the entity who executed the function
# This is executed as all players from "link:loop", and will execute for each player one at a time
# The current executing player will be referred as "self" or "@s"

#> Set temporary ID variable 
# In order to check if the entity has the same ID as another, we will need to change contexts
# By storing the ID of self into a variable, we will be able to test for it anywhere in this function from any context

scoreboard players operation $temp id = @s id

#> Test the link
# We can test the link by changing the context to the entity we want to test, and comparing its ID score with the new temporary variable

    # we are using a pig with a custom tag of "link_pig"
    # Notice we do not change the location context by using "at @s", this is important because we still need the players location context
execute as @e[tag=link_pig] if score @s id = $temp id run function link:teleport

#> Summon a new pig if success score fails
# We set a success score in link:teleport, which will be set to 1 if a pig is successfully teleported
# If that score is 0, that means no pig was teleported, which means no pig is linked and we can safely summon another

    # Uses player's location context
    # We give it the "temp.spawned" tag so we can give it the same id as the player
execute unless score $success id matches 1 run summon pig ~ ~ ~ {Tags:["link_pig","temp.spawned"]}
    # Set the "temp.spawned" pig's ID to match the temp ID
scoreboard players operation @e[tag=temp.spawned] id = $temp id
    # Remove the "temp.spawned" tag
tag @e[tag=temp.spawned] remove temp.spawned

    # Reset the success score afterward
scoreboard players reset $success id
