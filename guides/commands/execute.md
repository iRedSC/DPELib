### A Guide to /execute
---

The `execute` command is a command that changes the context, adds conditions, and can grab feedback from commands

#### Terminology:

**`Clause`** - An execute sub-command, such as `as`, `at`, `positioned` or `run`
 > The executed command is included as part of the **run** clause

#### Context Clauses:

`as <targets>` - Replaces current **executor context** with one for each defined **target**, which apply to all trailing **clauses**.

`at <targets>` - Replaces current **location context** with one for each defined **target**, which apply to all trailing **clauses**.

`positioned (as <targets> | <pos>)` - Replaces current **position context**, with a set position or with the position of each defined **target**, which apply to all trailing **clauses**.

`rotated (as <targets> | <rot>)` - Replaces current **rotation context**, with a set rotation or with the rotation of each defined **target**, which apply to all trailing **clauses**.

---
Updated `12/3/2021`
For MC `1.17-1.18`
Guide from [DPELib](https://github.com/iRedSC/DPELib) by [iRedSC](https://github.com/iRedSC)