### Terminology
---
#### General Terms

<a name="target"></a>

**`Target`** - An entity/player that can be defined using a **selector** (`@a`, `@e[type=marker]`, `@s`, etc.)

<a name="executor"></a>

**`Executor`** - The entity running a particular command.
> If you run a command in chat, *you* are the **executor**.

<a name="location"></a>

**`Location`** - A **position**, **rotation** and/or **dimension**.
 - **`Position`** - World position coordinates (`12 5 2`, `~ ~ ~`)
 - **`Rotation`** - Pitch and Yaw
 - **`Dimension`** - `minecraft:overworld`, `minecraft:the_end` etc.
> If you run a command in chat, the command will run at your **location**.

<a name="context"></a>

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

#### Referencing
Functions and function tags are **`executed`**.

Predicates are **`checked`**.

Block/Entity/Item tags are **`referenced`**.

Loot tables are **`called`**.

Item modifiers are **`applied`**.

#### Tags
Block/Entity/Item tags (`#special:tag`) are **`Group Tags`**.

Entity selector tags (`tag=special`) are **`Selector Tags`**.

Entity/Block data tags (`{tag:1b}`) are **`NBT Tags`**.


---
Updated `12/23/2021` <br />
For MC `1.17-1.18` <br />
Guide from [DPELib](https://github.com/iRedSC/DPELib) by [iRedSC](https://github.com/iRedSC)