# Scoreboard Timers

The two leading methods for creating timers are **scoreboards** and the **schedule** command. This guide is going to focus on *scoreboard timers*.


There are two different kinds of timers discussed in this guide, **global timers**, and **local timers**.

### How Timers Work

Timers use scoreboards with a `dummy` criteria, and add/subtract a value every **tick** (one second = twenty ticks).

Once the score holder's timer score gets above/below a specific value, the command(s) are triggered and the timer is reset.

```mcfunction
# create the timer scoreboard
scoreboard objectives add timer dummy
```
---
### Global Timers

Global timers are used for things that don't need to be per-player/entity, such as a minigame timer until the round ends. 
They use a **variable** to make the timer global.

>**`Variable`** - A fake player, or score holder that contains special characters which cannot be used as a valid Minecraft account.
`$timer .timer #timer` are all valid variables

Here is an example of a global timer that will say "executed" every twenty seconds:

```mcfunction
scoreboard players add $global timer 1

execute if score $global timer matches 400.. run say executed

execute if score $global timer matches 400.. run scoreboard players reset $global timer
```
>**[!] Note:** You must use `execute if score` when dealing with **variables**, as they are neither an entity nor a player, and therefore cannot be used in a selector (`@e[scores={...}]`)

### Local Timers

Local timers are per-player/entity timers, a common use-case for which would be per-player weapon cooldowns.

Here is an example of a local timer which is trigger when a player uses a carrot on a stick, and will wait twenty seconds before saying "executed"

```mcfunction
scoreboard players add click minecraft.used:minecraft.carrot_on_a_stick
```
```mcfunction

scoreboard players add @a[scores={click=1..}] timer 1

execute as @a[scores={click=1..,timer=400..}] run say executed

scoreboard players reset @a[scores={click=1..,timer=400..}] timer

scoreboard players reset @a[scores={click=1..,timer=400..}] click
```



---
Updated `12/24/2021` <br />
For MC `1.17-1.18` <br />
Guide from [DPELib](https://github.com/iRedSC/DPELib) by [iRedSC](https://github.com/iRedSC)