#> link:teleport
#
# This function will execute as any "link_pig" pig that has the same ID as "self" in link:find_link
# Because this function was executed from within link:find_link, it implicitly inherits all of its context

#> Teleport
# Because we saved the player's location context, we can just teleport to ~ ~ ~, which will be the player's location
tp @s ~ ~ ~

#> Success
# In this example, we will summon a new pig if the player does not have one linked to them
# This function will only execute if there is a pig linked to the player
# We can summon a new one if we have a way to tell that this function didn't execute
# Because the outer function waits until this one finishes, we can set a success score, and then test for it in the outer function (link:find_link)

    # We will just set a temporary success score
scoreboard players set $success id 1