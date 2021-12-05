### How Context Works in Functions
---

When a function is executed, its invocation context is carried over to the entire function, and any functions it may invoke.

Starting simple, running a function from chat (`/function`) will set the function's **[executor context](../terminology#executor)** (`@s`) to yourself, and the function's **location context** (position, rotation, dimension) to your location.
<details>
<summary><b>Example</b></summary>

`@function -user:say`
```mcfunction
# This will run as and at the player who runs '/function -user:say'
say hi
particle flame ~ ~ ~
```
</details>


---
Updated `12/3/2021` <br />
For MC `1.17-1.18` <br />
Guide from [DPELib](https://github.com/iRedSC/DPELib) by [iRedSC](https://github.com/iRedSC)

*[executor context]: Test