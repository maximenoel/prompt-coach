# prompt-coach

A Claude Code mod. It reviews each prompt you send with Haiku 5.5 and shows an improved version in a side pane, ready to copy or reuse.

## Install

```bash
claude plugin marketplace add maximenoel/prompt-coach
claude plugin install prompt-coach@prompt-coach
```

Start a new Claude Code session; the pane appears after your next prompt.

## Context

Each review sends Haiku a small context block next to your prompt, so it does not flag what the session already knows and can fill a rewrite with real values (a file path, repo, branch) instead of `<placeholders>`:

- working directory, git repo and branch (local `git`, no network)
- files touched by tools in the last 3 exchanges
- the last 3 exchanges, each cut short (user 400 chars, Claude's answer 600)

Prompts under 3 words ("yes", "ok go") are not reviewed.

The block is capped at 4000 characters (about 1k tokens): the full transcript is never sent. Tune it with the constants at the top of `hooks/register.tsx`.

## Layout

- `.claude-plugin/marketplace.json`: marketplace manifest
- `plugins/prompt-coach/`: the plugin (`hooks/register.tsx` holds the logic)

## License

MIT
