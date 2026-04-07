# Mermaid Diagrams Toggle Guide

## Quick Toggle

**Important**: Changing the environment variable requires a rebuild to take effect. This is because `NEXT_PUBLIC_*` variables are embedded at build time in Next.js.

### Disable mermaid (via environment variable)

```bash
# In .env or .env.local
NEXT_PUBLIC_ENABLE_MERMAID=false
```

### Enable mermaid (via environment variable)

```bash
# In .env or .env.local
NEXT_PUBLIC_ENABLE_MERMAID=true
```

### Use default from config (remove env var)

If you remove the environment variable, the value from `data/site-metadata.ts` will be used.

## Configuration Options

### Option 1: Environment Variable (Recommended for quick toggles)

The environment variable `NEXT_PUBLIC_ENABLE_MERMAID` takes precedence over the config file.

| Value | Result |
|-------|--------|
| `"true"` | Mermaid enabled |
| `"false"` | Mermaid disabled |
| Not set | Uses config file value |

### Option 2: Site Config (Default setting)

Edit `data/site-metadata.ts`:

```typescript
export const SITE_METADATA = {
  // ... other config
  features: {
    mermaid: true,  // change to false to disable by default
  },
}
```

## When Disabled

When mermaid is disabled, code blocks with mermaid syntax will:
1. Display the raw mermaid code
2. Show a message: "Mermaid diagrams disabled"

This allows readers to still see the diagram source code.

## Troubleshooting

### Diagrams not rendering

1. Check browser console for errors
2. Verify `NEXT_PUBLIC_ENABLE_MERMAID` is not set to `"false"`
3. Check `data/site-metadata.ts` has `features.mermaid: true`

### Build errors on Cloudflare

If you see errors about Playwright or rehype-mermaid:
1. Ensure `rehype-mermaid` is commented out in `contentlayer.config.ts`
2. The client-side approach doesn't need Playwright

### Syntax errors in diagrams

When mermaid syntax is invalid:
1. An error message from mermaid library will be displayed
2. The raw code will be shown below the error
3. Fix the syntax according to [mermaid documentation](https://mermaid.js.org/syntax/flowchart.html)
