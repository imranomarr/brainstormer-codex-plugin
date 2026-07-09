# Brainstormer Codex Plugin

Brainstormer lets Codex read one Brainstormer session that the user approves through the Brainstormer MCP connection.

## Install From Codex CLI

```bash
codex plugin marketplace add imranomarr/brainstormer-codex-plugin
```

Then restart Codex, open Plugins, choose the Brainstormer marketplace, and install Brainstormer.

## What It Can Do

- Read the approved Brainstormer session name and metadata.
- Read sanitized node summaries.
- Read sanitized task summaries.

It cannot create, edit, delete, move, or share Brainstormer data.

## Notes

This is a beta plugin package. Users must approve a Brainstormer session before Codex can read session context.
