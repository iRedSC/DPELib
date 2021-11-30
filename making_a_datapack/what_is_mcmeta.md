### What is pack.mcmeta?
`pack.mcmeta` is the file that tells minecraft to treat the folder like a data pack.

```json
{
    "pack": {
      "pack_format": 7,
      "description": "string"
    }
  }
```

 - `"pack_format"` tells minecraft what version the data pack is for.

| "pack_format" | Minecraft Version |
|---------------|-------------------|
| 1             | 1.6.1 - 1.8.9     |
| 2             | 1.9 - 1.10.2      |
| 3             | 1.11 - 1.12.2     |
| 4             | 1.13 - 1.14.4     |
| 5             | 1.15 - 1.16.1     |
| 6             | 1.16.2 - 1.16.5   |
| 7             | 1.17.x            |
| 8             | 1.18.x            |

 - `"description"` is a description for the data pack