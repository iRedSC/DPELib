#Escaping
---
Escaping is a way to include special characters in a string without using their special functions.

Say there is a string that looks like this:
> `"this is a string"`

If you want to include quotes inside the string, it will cause an error because it will have conflicting quotes, and will close the string on the closest quote to the beginning:
> `"this is a "cool" string"` = `this is a `

To escape the quotes, you can add a backslash `\` before the quote `\"`:
> `"this is a \"cool\" string"` = `this is a "cool" string`

You can also do the same thing with single quotes `'`:
> `'this is a \'cool\' string'` = `this is a 'cool' string`

Both types of quotes can be combined to avoid the need to escape:
> `'this is a "cool" string'` = `this is a "cool" string`

Note that this means a single backslash `\` cannot be used on its own as it will attempt to escape the succeeding character, and therefor will need to be escaped itself:

> `"this is a \\"cool\\" string"` is invalid! As it translates to `this is a \`, because the escape character was escaped.

> `"this is a \\\"cool\\\" string"` = `this is a \"cool\" string`