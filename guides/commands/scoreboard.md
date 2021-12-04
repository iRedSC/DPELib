# A Guide to /scoreboard


Scoreboards are lists of **score holders**, which can each hold a single integer value per scoreboard.

They can be used to track scores, make timers, create cooldowns, do math operations, configuration/options, and so much more.

---
### Terminology

**`Score Holder`** - An entity, player, or **variable** that is able to hold a scoreboard value.
Score holders can be an **entity selector**.

**`Variable`** - A fake player, or score holder that contains special characters which cannot be used as a valid Minecraft account.
> `$timer .timer #timer` are all valid variables

---

### Creating a Scoreboard

You can create a scoreboard with `scoreboard objectives add <scoreboard_name> <criteria>`.

 - `<scoreboard_name>` is a unique name for the scoreboard. A scoreboard name can be up to 16 characters long (limit removed in 1.18) and can include characters `a-z 0-9 ._-`.
 - `<criteria>` The type of criteria the scoreboard should track. This can include tracking deaths, health, dropping items, using items, mining blocks, etc.
 A scoreboard may only have one criteria.

Once you create a scoreboard, it will exist until it's removed via `scoreboard objectives remove`.
**You only need to create a scoreboard once.**

### Modifying Scores

Scoreboards only support **integers**, which can be a whole number between `-2,147,483,647 and 2,147,483,647`.
This will be referred to as the **`<value>`** henceforth.


The simplest way to edit the score of a **score holder** is `scoreboard players set <score holder> <scoreboard> <value>`

---
Updated `12/3/2021` <br />
For MC `1.17-1.18` <br />
Guide from [DPELib](https://github.com/iRedSC/DPELib) by [iRedSC](https://github.com/iRedSC)