### Terminology
---
#### General Terms

**`Target`** - An entity/player that can be defined using a **selector** (`@a`, `@e[type=marker]`, `@s`, etc.)

**`Executor`** - The entity running a particular command.
> If you run a command in chat, *you* are the **executor**.

**`Location`** - A **position**, **rotation** and/or **dimension**.
 - **`Position`** - World position coordinates (`12 5 2`, `~ ~ ~`)
 - **`Rotation`** - Pitch and Yaw
 - **`Dimension`** - `minecraft:overworld`, `minecraft:the_end` etc.
> If you run a command in chat, the command will run at your **location**.

**`Context`** - An entity and/or location (position **and** rotation) a command/function is executed from.
> `execute as` will change the **executor** context; if multiple entities are selected, it will create an individuel [executor] context per entity.

> `execute at` will change *every part* of the **location** context (position, rotation, dimension etc.); if multiple entities are selected, it will create an individuel context per entity.



---

#### Scoreboard Terms

**`Scoreboard`** - Scoreboard objective name (`Mana`, `carrot_click`, etc.).
**`Criteria`** - Scoreboard objective criteria (`dummy`, `deathCount`, etc.).
> First you make a scoreboard with `scoreboard objectives add <scoreboard_name> <criteria>`
---


### Data Pack Terms

Functions and function tags are **`executed`**.
Predicates are **`checked`**.
Block/entity/item tags are **`referenced`**.
Loot tables are **`called`**.
Item modifiers are **`applied`**.