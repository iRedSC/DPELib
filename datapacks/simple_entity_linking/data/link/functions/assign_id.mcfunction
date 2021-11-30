#> link:assign_id
#
# This function assigns the entity that runs it (called "self" henceforth) a new unique ID



#> Global ID variable
# We use a variable (fake player) to store the current largest ID that was assigned
# Then we just add 1 to the global variable whenever we wnt to assign a new, unique ID

scoreboard players add $global id 1

#> Assigning new ID to the self
# Now that the global variable has a new value, we can assign that value to self

scoreboard players operation @s id = $global id