---
title: Standalone Interpreter Features
---

## Sources 

The following additional sources are available in the new standalone interpreter:

### One-of Sources

With the `oneof` modifier, Numscript will try each source in order and use the first one that can fully provide the required funds.

**Syntax:**
```
source = oneof {
    source_expression1
    source_expression2
    ...
  }
```

**Example:**
```numscript
send [COIN 100] (
  source = oneof {
    @source1
    @source2
  }
  destination = @orders:001
)
```

This differs from ordered sources, which combine funds from multiple sources to reach the total.

## Destinations

The following additional destinations are available in the new standalone interpreter:

### One-of Destinations

With the `oneof` modifier, Numscript will try each destination in order and use the first one that can accept the funds:

```numscript
send [GEM 10] (
  source = @world
  destination = oneof {
    max [GEM 9] to @a
    max [GEM 10] to @b
    remaining to @rem
  }
)
```

This represents mutually exclusive alternatives rather than a sequence of transfers.