# Brainstormer Codex Plugin

Brainstormer lets Codex read one Brainstormer session that the user approves through the Brainstormer MCP connection.

## Install From Codex Desktop

Open Codex Desktop, start a new thread, and paste this:

```text
Install the Brainstormer Codex plugin marketplace from GitHub:
imranomarr/brainstormer-codex-plugin

If needed, run:
codex plugin marketplace add imranomarr/brainstormer-codex-plugin
```

Approve the setup command if Codex asks. Then restart Codex, open Plugins, choose Brainstormer, and install Brainstormer.

## Install From Terminal

```bash
codex plugin marketplace add imranomarr/brainstormer-codex-plugin
```

Then restart Codex, open Plugins, choose Brainstormer, and install Brainstormer.

## What It Can Do

- Read the approved Brainstormer session name and metadata.
- Read sanitized node summaries.
- Read sanitized task summaries.

It cannot create, edit, delete, move, or share Brainstormer data.

## Notes

This is a beta plugin package. Users must approve a Brainstormer session before Codex can read session context.
