---
name: base-name
description: Resolve ENS (.eth) names to addresses
metadata: {"clawdbot":{"emoji":"🕵️‍♂️","category":"identity"}}
---

# Domain Detective Instructions

Use this skill when the user provides a human-readable name (like "vitalik.eth" or "yele.eth") and asks for the address.

## Usage

### Resolve Name
Run the script with the name as an argument.
```bash
cd scripts && npx tsx index.ts <name>
