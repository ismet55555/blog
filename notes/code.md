# CODE

Just random useful blog website code snippets

## Images

```mdx
import tba from '../../images/tba.png';

<Figure
  src={tba}
  caption="TODO"
  url="TODO"
/>

<Figure
  src={tba}
  caption="TODO"
  url="TODO"
/>
```

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

```md
---
config:
  look: handDrawn
  theme: redux
---
flowchart LR
    XTAL["Crystal<br>Oscillator<br>*(12 MHz)*"] == multiply ==> PLL_SYS["System<br>PLL"] & PLL_USB["USB<br>PLL"]
    ROSC["Ring<br>Oscillator<br>*(~6.5 MHz)*"] ==> RTC["Real-Time<br>Clock<br>*(~47 kHz)*"]
    
    PLL_SYS == direct ==> CPU["CPU<br>Cores"]
    PLL_SYS == divide ==> PERIPH["Peripherals<br>(UART, SPI, I2C)"]
    PLL_USB == direct ==> USB["USB<br>Controller"]
    PLL_USB == divide ==> ADC["ADC<br>Sampling"]
    
    style XTAL fill:#e1f5e1
    style ROSC fill:#ffe0b2
    style PLL_SYS fill:#e1f5e1
    style PLL_USB fill:#e1f5e1
    style RTC fill:#ffe0b2
```

```md
---
config:
  look: handDrawn
  theme: redux
---
stateDiagram-v2
    [*] --> OFF         : Car purchased
    OFF --> ON          : Start engine
    ON --> MOVING       : Press gas pedal
    MOVING --> ON       : Press brake (stop)
    ON --> OFF          : Turn off engine
    
    OFF: 🔑 Engine off
    ON: ⚡ Engine on, not moving
    MOVING: 🚗 Driving


    style OFF fill:#e1f5e1
    style ON fill:#e1f5e1
    style MOVING fill:#e1f5e1
```

```md
---
config:
  look: handDrawn
  theme: redux
  themeVariables:
    fontSize: 16px
  flowchart:
    curve: basis
    padding: 20
    nodeSpacing: 80
    rankSpacing: 80
    diagramPadding: 20
---
graph TD
    A["<b>⬇️ Button Pressed Down</b>"] --> B{"<b>Released before<br/>long hold timeout?</b>"}
    B -->|"&nbsp;&nbsp;✓ Yes&nbsp;&nbsp;"| C{"<b>Press Duration<br/>< long press threshold?</b>"}
    B -->|"&nbsp;&nbsp;✗ No&nbsp;&nbsp;<br/>(Timeout expires)"| D["<b>🔴 LONG HOLD</b>"]
    C -->|"&nbsp;&nbsp;✓ Yes&nbsp;&nbsp;"| E["<b>🟢 SHORT PRESS</b>"]
    C -->|"&nbsp;&nbsp;✗ No&nbsp;&nbsp;"| F["<b>🟡 LONG PRESS</b>"]
    
    style A fill:#e1f5e1,stroke:#000000,stroke-width:3px,color:#000000
    style B fill:#e1f5e1,stroke:#000000,stroke-width:3px,color:#000000
    style C fill:#e1f5e1,stroke:#000000,stroke-width:3px,color:#000000
    style E fill:#86efac,stroke:#22c55e,stroke-width:4px,color:#000000
    style F fill:#fde047,stroke:#eab308,stroke-width:4px,color:#000000
    style D fill:#fca5a5,stroke:#ef4444,stroke-width:4px,color:#000000
    
    linkStyle default stroke:#000000,stroke-width:3px
    
    classDef decision fill:#e1f5e1,stroke:#000000,stroke-width:2px
    class B,C decision
```


```md
## NOTES

- Diagram
    - broker/event-bus, publishers, subscribers, topics, messages
    - In embassy, no broker, topic is a channel
- Decoupling of components
    - Publishers and subscribers don't even have to know about each other
    - Common message format
- Generally used for mobile and IoT devices, however for our application we
  are using it for communication within the microcontroller chip
- Common uses:
    - Event notification system
    - System state change
- In our case
    - The button is a publisher
    - Anything that is interested in the button press events can subscribe
- Benefits
    - Decoupling of internal systems (button, LED, buzzer, WiFi requests, etc)
    - Faster response time (nanoseconds) - No polling (periodically checking of state)

- Implementation Variations
    - Filtering and Subscription Schemes - **IMPLEMENT THIS???**
        - Topic-based pub-sub
        - Content-based pub-sub
        - Type-based pub-sub
            - `subscriber.subscribe::<TemperatureEvent>();`
        - Hybrid Systems
    - Architectural
        - Broker-based - Central routing point
        - Brokerless (peer-to-peer) - **THIS**
            - Typically refers to seperate servcie or process
            - Embassy is this
            - Shared memory/in-memory broker-like pattern
                - Think of the broker as the allocated memory
            - No seperate broker processes or services
            - Not like MQTT or RabbitMQ)
            - Advantages
                - zero network overhead - low lateency - nanoseconds
    - Delivery Guarantee Variations
        - Fire and forget - **THIS?**
        - Guaranteed delivery, possible duplicates
        - Guaranteed single delivery

- Embassy Framework

    - Good for embedded here
        - No dynamic memory allocation (no heap)
        - Support async operations - tasks wait for messages without "busy-waiting"
        - Power efficient - CPU sleep while waiting
        - Multiple async tasks can publish and subscribe to shared channels

    - `embassy-sync` crate *move to implementation*

- State machine integration *move to implementation*
    - Can subscribe to events state transition (consumer)
    - State change can trigger publishing of event
    - Move to state machine implmenmetation section?
   
- Messaging synchronization primitives in Embassy (or whatever these are called)
    - `PubSubChannel`
        - Boardcast to multiple handlers (LED, buzzer, API client, etc)
    - `Channel`
        - point-to-point communication
        - Only one task should process each message
    - `PriorityChannel`
        - Multiple producer, multiple consumes
        - Each message is only received by single consumer
        - Higher priority items shifted to the front of the channel
        - Critical events must be processed before normal events
    - `Watch`
        - multiple receivers and immediately overwrites the previous value when new one is sent
        - Receivers always provided with latest values
        - Broadcasting state updates
    - `Mutex` (Async)
    - `RwLock` (Read-Write Lock)
    - `Semaphore`
    - `Pipe`
        - Streaming byte data between tasks
        - Serial protocol
    - `Oncecell`/`OnceLock`
    - `AtomicU32`
        - Share a simple U32 (or less in size) value among tasks
        - Simple flags
        - Performance-critical application

    - Create a chart / Comparison matrix
        - Multiple cosumers, messge queue, latest value only, popular use-case

    - Recommendation:
        - Button Events - `PubSubChannel`
        - System status - `Watch` - **SHOULD CHANGE FROM `Signal`?**
    

- Embassy and Pub-sub *move to implementation*

    - `PubSubChannel` - Why this one specifically
    - See other options (maybe folded section)

- Rust module explained

    - Why group like-code

- Resources (At end)

    - https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern
    - https://www.geeksforgeeks.org/system-design/what-is-pub-sub/
```
