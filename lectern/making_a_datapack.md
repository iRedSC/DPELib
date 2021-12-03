# Lectern snapshot

## Data pack

- `@data_pack pack.mcmeta`

  <details>

  ```json
  {
    "pack": {
      "pack_format": 7,
      "description": "This is an example on how to make a datapack, read what_is_mcmeta.md to understand what this is."
    }
  }
  ```

  </details>

### example

- `@function(strip_final_newline) example:load`

  <details>

  ```mcfunction
  #> example:load
  #
  # This function is executed by #minecraft:load, and will run once upon world load or when /reload is used
  #
  # This is a good place to do things like setting up scoreboards.

  scoreboard objectives add sneaking minecraft.custom:minecraft.sneak_time
  ```

  </details>

- `@function(strip_final_newline) example:loop`

  <details>

  ```mcfunction
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
  ```

  </details>

- `@function(strip_final_newline) example:sneaking`

  <details>

  ```mcfunction
  #> example:sneaking
  #
  # This function is executed by example:loop
  #
  # When a function is run "as" or "at" an entity (via execute), the entire function will be run as or at that entity.
  # This means if you run "execute as <player> run function ..." every time "@s" is used in that function, it will refer to the player.

  particle flame ~ ~ ~ 0.5 0 0.5 0 10 force @a

  scoreboard players reset @s sneaking
  ```

  </details>

### minecraft

- `@function_tag(strip_final_newline) minecraft:load`

  <details>

  ```json
  {
      "values":
      [
          "example:load"
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
          "example:loop"
      ]
  }
  ```

  </details>
