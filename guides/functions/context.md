<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>jQuery UI Tooltip - Default functionality</title>
  <link rel="stylesheet" href="//code.jquery.com/ui/1.13.0/themes/base/jquery-ui.css">
  <link rel="stylesheet" href="/resources/demos/style.css">
  <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
  <script src="https://code.jquery.com/ui/1.13.0/jquery-ui.js"></script>
  <script>
  $( function() {
    $( document ).tooltip();
  } );
  </script>
  <style>
  label {
    display: inline-block;
    width: 5em;
  }
  </style>
</head>



### How Context Works in Functions
---

When a function is executed, its invocation context is carried over to the entire function, and any functions it may invoke.

Starting simple, running a function from chat (`/function`) will set the function's <b title="test">executor context</b> (`@s`) to yourself, and the function's **location context** (position, rotation, dimension) to your location.
<details>
<summary><b>Example</b></summary>

`@function -user:say`
```mcfunction
# This will run as and at the player who runs '/function -user:say'
say hi
particle flame ~ ~ ~
```
</details>


---
Updated `12/3/2021` <br />
For MC `1.17-1.18` <br />
Guide from [DPELib](https://github.com/iRedSC/DPELib) by [iRedSC](https://github.com/iRedSC)