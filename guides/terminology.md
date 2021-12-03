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

**`Score Holder`** - An entity, player, or **variable** that is able to hold a scoreboard value.
Score holders can be an **entity selector**.

**`Variable`** - A fake player, or score holder that contains special characters which cannot be used as a valid Minecraft account.
> $timer .timer #timer are all valid variables

---


### Data Pack Terms

Functions and function tags are **`executed`**.

Predicates are **`checked`**.

Block tags/entity tags/item tags are **`referenced`**.

Loot tables are **`called`**.

Item modifiers are **`applied`**.

---
Updated `12/3/2021`
For MC `1.17-1.18`
Guide from [DPELib](https://github.com/iRedSC/DPELib) by [iRedSC](https://github.com/iRedSC)