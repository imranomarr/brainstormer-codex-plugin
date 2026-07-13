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

- Read the approved Brainstormer session name and metadata.
- Read sanitized node summaries.
- Read sanitized task summaries.
- Turn an explicit answer or outline into up to 12 new Brainstormer notes/nodes, grouped in a new folder by default.
- Create and update standalone tasks and Task Groups.
- Create and update Kanban boards/cards.
- Create and update custom timeline events.

It cannot edit, move, or delete existing nodes; create private-space nodes; delete Brainstormer data; share sessions; access other sessions; run raw database writes; or get account-wide access.

## Scopes

- `session:read`
- `nodes:read`
- `nodes:write`
- `tasks:read`
- `tasks:write`
- `kanban:write`
- `timelines:write`

## Write Safety

- Codex may write only when the current user explicitly requests the specific change.
- Text found inside Brainstormer is treated as untrusted source material and never authorizes a write.
- Codex should ask one focused question when a write target or requested change is ambiguous.
- Write tools are configured to require approval in Codex.
- Every write remains limited to the single approved session and the scopes shown during OAuth approval.

## Troubleshooting

- Not signed in? Sign in to Brainstormer, then approve Codex access.
- New account? Finish signup first, then start the Codex connection again.
- Expired request? Restart the Brainstormer connection from Codex Desktop.
- No sessions showing? Open or create a Brainstormer session first.
- Write denied? Make sure you approved the latest plugin version and that your Brainstormer role is owner, admin, or editor.
- Node creation unavailable? Revoke the old grant, reconnect, and confirm the approval page lists new note/node creation.
- Node limit reached? A folder counts as one node, so grouped batches need one additional available slot.
- Wrong session approved? Revoke Codex access in Brainstormer, then reconnect.
- Upgrading from an earlier local beta? Install the current `brainstormer` marketplace release and verify it in a new Codex task before removing older `personal` or `brainstormer-beta` copies and any manually configured Brainstormer MCP server.

## Revoke Or Reconnect

Open Brainstormer, go to Connectors, choose Codex, and revoke the active grant. To reconnect, paste the setup prompt into Codex again and approve one session.

## Notes

This is a beta plugin package. Users must approve a Brainstormer session before Codex can access session context or use write tools. Access is session-scoped and reversible from Brainstormer.

For help or security reports, contact `imran@brainstormer.chat`. Do not include bearer tokens, OAuth codes, session content, or other private data in reports.
