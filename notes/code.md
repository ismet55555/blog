# CODE

Just random useful blog website code snippets

## Aside Blocks

```mdx
<span class="font-bold text-accentColor">My accented and bolded text</span>

<aside variant="warning">Use this to tell people not to do something.</aside>

<aside variant="tip">Use this to tell people not to do something.</aside>

<aside variant="note">Use this to tell people not to do something.</aside>
```

## Notes and Ignored Comments

```mdx
{/*
This code is not visible in a .mdx file
*/}
```

## Code Block Stuff

Titel, line numbers, and colapse sections

```toml title="my_dir/my_file.toml" showLineNumbers collapse={7-10, 16-29, 35-36}
some code
some code
```

File trees

```sh frame="none"
.
├── rust-toolchain.toml
└── src
    └── main.rs
```
