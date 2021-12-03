# A Guide to /scoreboard
---

Scoreboards are lists of **score holders**, which can each hold a single integer value per scoreboard.

### Creating a Scoreboard

You can create a scoreboard with `scoreboard objectives add <scoreboard name> <criteria>`.

 - `<scoreboard name>` is a unique name for the scoreboard. A scoreboard name can be up to 16 characters long (limit removed in 1.18) and can include characters `a-z 0-9 ._-`.
 - `<criteria>` The type of criteria the scoreboard should track. This can include tracking deaths, health, dropping items, using items, mining blocks, etc.
 A scoreboard may only have one criteria.

Once you create a scoreboard, it will exist until it's removed via `scoreboard objectives remove`.
**You only need to create a scoreboard once.**

