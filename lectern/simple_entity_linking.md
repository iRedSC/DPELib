# Lectern snapshot

## Data pack

- `@data_pack pack.mcmeta`

  <details>

  ```json
  {
    "pack": {
      "pack_format": 7,
      "description": "A simple entity linking data pack"
    }
  }
  ```

  </details>

### link

- `@function(strip_final_newline) link:assign_id`

  <details>

  ```mcfunction
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
  ```

  </details>

- `@function link:find_link`

  <details>

  ```mcfunction
  #> link:find_link
  #
  # This function will locate and teleport the sheep that has the same ID as the entity who executed the function
  # This is executed as all players from "link:loop", and will execute for each player one at a time
  # The current executing player will be referred as "self" or "@s"

  #> Set temporary ID variable 
  # In order to check if the entity has the same ID as another, we will need to change contexts
  # By storing the ID of self into a variable, we will be able to test for it anywhere in this function from any context

  scoreboard players operation $temp id = @s id

  #> Test the link
  # We can test the link by changing the context to the entity we want to test, and comparing its ID score with the new temporary variable

      # we are using a sheep with a custom tag of "link_sheep"
      # Notice we do not change the location context by using "at @s", this is important because we still need the players location context
  execute as @e[tag=link_sheep] if score @s id = $temp id run function link:teleport

  #> Summon a new sheep if success score fails
  # We set a success score in link:teleport, which will be set to 1 if a sheep is successfully teleported
  # If that score is 0, that means no sheep was teleported, which means no sheep is linked and we can safely summon another

      # Uses player's location context
      # We give it the "temp.spawned" tag so we can give it the same id as the player
  execute unless score $success id matches 1 run summon sheep ~ ~ ~ {Tags:["link_sheep","temp.spawned"]}
      # Set the "temp.spawned" sheep's ID to match the temp ID
  scoreboard players operation @e[tag=temp.spawned] id = $temp id
      # Remove the "temp.spawned" tag
  tag @e[tag=temp.spawned] remove temp.spawned

      # Reset the success score afterward
  scoreboard players reset $success id
  ```

  </details>

- `@function link:load`

  <details>

  ```mcfunction
  #> link:load
  #
  # @tags
  #   #minecraft:load



  #> Setting up the scoreboard
  # First we need to set up a scoreboard, which will contain the IDs of the entities we want to link
  # It must be a dummy objective, as the values are meant to be constant

  scoreboard objectives add id dummy
  ```

  </details>

- `@function(strip_final_newline) link:loop`

  <details>

  ```mcfunction
  #> link:loop
  #
  # @tags
  #   #minecraft:tick



  #> Assign all players an ID if they do not have one already
  # In this example, we will give all players a unique ID, and then give them a sheep with the same ID
  # Then the sheep will be teleported to its linked player

      # If a score holder is not assigned a score, it is "undefined".
      # "unless score @s id = @s id" means "unless I have a define score" (which includes 0)
  execute as @a unless score @s id = @s id run function link:assign_id

  #> Locating linked entities
  # We will run the function as all players to find their linked sheeps

      # Notice the use of "at @s", this is because we will be needing the location context for teleporting the sheep
  execute as @a at @s run function link:find_link
  ```

  </details>

- `@function(strip_final_newline) link:teleport`

  <details>

  ```mcfunction
  #> link:teleport
  #
  # This function will execute as any "link_sheep" sheep that has the same ID as "self" in link:find_link
  # Because this function was executed from within link:find_link, it implicitly inherits all of its context

  #> Teleport
  # Because we saved the player's location context, we can just teleport to ~ ~ ~, which will be the player's location
  tp @s ~ ~ ~

  #> Success
  # In this example, we will summon a new sheep if the player does not have one linked to them
  # This function will only execute if there is a sheep linked to the player
  # We can summon a new one if we have a way to tell that this function didn't execute
  # Because the outer function waits until this one finishes, we can set a success score, and then test for it in the outer function (link:find_link)

      # We will just set a temporary success score
  scoreboard players set $success id 1
  ```

  </details>

### minecraft

- `@function_tag(strip_final_newline) minecraft:load`

  <details>

  ```json
  {
      "values":
      [
          "link:load"
      ]
  }
  ```

  </details>

- `@function_tag(strip_final_newline) minecraft:tick`

  <details>

  ```json
  {
      "values":
      [
          "link:loop"
      ]
  }
  ```

  </details>
