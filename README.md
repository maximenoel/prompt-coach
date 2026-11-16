# prompt-coach

A Claude Code mod. It reviews each prompt you send with Haiku 5.5 and shows an improved version in a side pane, ready to copy or reuse.

## Install

```bash
claude plugin marketplace add maximenoel/prompt-coach
claude plugin install prompt-coach@prompt-coach
```

Start a new Claude Code session; the pane appears after your next prompt.

## Layout

- `.claude-plugin/marketplace.json`: marketplace manifest
- `plugins/prompt-coach/`: the plugin (`hooks/register.tsx` holds the logic)

## License

MIT
