### A Guide to /execute
---

The `execute` command is a command that changes the context, adds conditions, and can grab feedback from commands

Terminology:
 - **`Clause`** - An execute sub-command, such as `as`, `at`, `positioned` or `run`
 > The executed command is included as part of the **run** clause

#### Context Clauses:

 3. `as <targets>` - Replaces current **executor context** with one for each defined **target** which applies to all trailing **clauses**.

 2. `at <targets>` - Changes the **location context** of all following **clauses**.
    If multiple targets are defined, will create an individual **location context** for each.


 3. `positioned (as <targets> | <pos>)` - Changes the **position context** of all following **clauses**.
    If multiple targets are defined, will create an individual **position context** for each.


 4. `rotated (as <targets> | <rot>)` - Changes the **rotation context** of all following **clauses**.
    If multiple targets are defined, will create an individual **rotation context** for each.