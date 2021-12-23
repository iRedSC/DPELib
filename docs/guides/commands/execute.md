### A Guide to /execute
---

The `execute` command is a command that changes the context, adds conditions, and can grab feedback from commands.

`execute` has three different kind of clauses:
 - **`Context Modifier`** - Can change the **executor** or **location** context.
 - **`Conditionals`** - Only executes the command if a condition is met.
 - **`Storage`** - Stores the result of the **run clause** into different storage mediums.

#### Terminology:

**`Clause`** - An execute sub-command, such as `as`, `at`, `positioned` or `run`
 > The executed command is included as part of the **run** clause

#### Context Clauses:

`as <targets>` - Replaces current **executor context** with one for each defined **target**. Applies to all trailing **clauses**.

`at <targets>` - Replaces current **location context** with one for each defined **target**. Applies to all trailing **clauses**.

`positioned (as <targets> | <pos>)` - Replaces current **position context**, with a set position or with the position of each defined **target**. Applies to all trailing **clauses**.

`rotated (as <targets> | <rot>)` - Replaces current **rotation context**, with a set rotation or with the rotation of each defined **target**. Applies to all trailing **clauses**.

`in <dimension>` - Replaces current **dimension context**. Applies to all trailing **clauses**.

`anchored <anchor>` - Changes the current **anchor**, which is the **eyes** or **feet** or the executor.
This changes the origin of **local coordinates** and the angle of the **facing** arguments in the `execute` and `tp` command.

`facing (entity <targets> <anchor> | <pos>)` - Replaces current **rotation context** to be facing either a set position or each defined **target**. Applies to all trailing **clauses**.

#### Conditional Clauses:

`unless <...>` - Works in the place of and as the inverse of `if` for all **clauses** described below.

`if block <pos> <block>` - Passes if the specified block/block tag is at the defined position. **Relative** and **local** coordinates are affected by the **location context**.

<!-- 
`if blocks <corner1> <corner2> <destination> <scan mode>` - Passes if the position of the **destination**  **corner1** and **corner2** 
-->

---
Updated `12/23/2021` <br />
For MC `1.17-1.18` <br />
Guide from [DPELib](https://github.com/iRedSC/DPELib) by [iRedSC](https://github.com/iRedSC)
