# Brainstormer Codex Plugin

Brainstormer lets Codex read and organize one Brainstormer session that the user approves through the Brainstormer MCP connection.

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

- Read approved session context, nodes, and tasks.
- Create and update tasks and Task Groups.
- Organize Kanban boards and custom timeline events.
- Turn one answer into up to 12 new editable Brainstormer notes in one batch.

Every connection is limited to one approved session. The plugin cannot delete or share data, access other sessions, edit or move existing notes, or create notes in private spaces.

Existing read-only approvals do not gain write access automatically. Revoke and reconnect Brainstormer to approve the new scopes.

## Troubleshooting

- Not signed in? Sign in to Brainstormer, then approve Codex access.
- New account? Finish signup first, then start the Codex connection again.
- Expired request? Restart the Brainstormer connection from Codex Desktop.
- No sessions showing? Open or create a Brainstormer session first.
- Wrong session approved? Revoke Codex access in Brainstormer, then reconnect.
- Write tool missing? Revoke the existing grant, reconnect, and start a new Codex thread.

## Notes

This is a beta plugin package. Users must approve one Brainstormer session before Codex can use its scoped tools. Access is reversible from Brainstormer, and older grants remain limited to their originally approved scopes.
