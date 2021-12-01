### How Context Works in Functions
---

When a function is executed, its invocation context is carried over to the entire function, and any functions it may invoke.

Invocation context is the entity/location from which function was executed/invoked.
 If a player runs `/function` in chat, both the *executor* and *location* context are set to the player and their location.
To change the *executor* context, `execute as` is used, `execute at`, `rotated`, `positioned`, `facing`, etc. are all valid ways of modifying the *location* context.