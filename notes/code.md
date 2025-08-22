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

## Emojis

- <https://gist.github.com/rxaviers/7360908>
- <https://emojipedia.org/>

## Mermaid Diagram Style

Website Link: https://www.mermaidchart.com/

```md
---
config:
  look: handDrawn
  theme: neutral
---
graph TD
    APP["**Device-independent Code**<br/><i>Example: led.set_high()</i>"]
    HAL["**Hardware Abstraction Layer (HAL)**<br/><i>Unified Interface</i>"]
    subgraph "**Hardware Driver Code**"
        D1[embassy-rp]
        D2[embassy-stm32]
        D3["<span style='color:gray'><i>Other Driver</i></span>"]
    end
    subgraph "**Physical Hardware**"
        H1[Raspberry Pi Pico]
        H2[STM32]
        H3["<span style='color:gray'><i>Other Device</i></span>"]
    end
    APP --> HAL
    HAL --> D1
    HAL --> D2
    HAL --> D3
    D1 --> H1
    D2 --> H2
    D3 --> H3

    style APP fill:#e1f5e1
    style HAL fill:#e1f5e1
    style D1 fill:#e1f5e1
    style D2 fill:#e1f5e1
    style D3 fill:#e1f5e1
    style H1 fill:#e1f5e1
    style H2 fill:#e1f5e1
    style H3 fill:#e1f5e1
```
