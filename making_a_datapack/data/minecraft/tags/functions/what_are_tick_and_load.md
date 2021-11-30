### What is tick.json and load.json?
`tick` and `load` are **function tags** which have been given special functionality.

#### What is a function tag?
A function tag is list a functions that can be called all at once.
Function tags are `.json` files placed in `<datapack>/data/<namespace>/tags/functions/<function_tag>.json`.
Its resource location is `#<namespace>:<function_tag>`

```json
{
    "replace": false,
    "values":
    [
        "<namespace>:<function>"
    ]
}
```

 - `"values"` is a list of function resource locations.
 - `"replace"`, whether or not to replace this tag from any lower priority data packs (optional, defaults to false). Don't set this to true unless you have a very good reason to do so, as it may mess up the functionality of other datapacks. **You should NEVER set `"replace"` to true in the `tick` or `load` tags!**

#### `tick.json`:
A list of functions that will be run every tick, similar to a repeating command block.
It's best to have one or two ticking functions, and use those to run the rest of your functions using conditionals, this will keep your datapack more efficient.

#### `load.json`:
A list of functions that will run once on world load, or reload (`/reload`).
This is generally where you put things like scoreboard setups, things that only need to be› run once.

