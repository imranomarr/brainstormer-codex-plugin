# Brainstormer Codex Plugin

Brainstormer lets Codex read and organize one Brainstormer session that the user approves through the Brainstormer MCP connection.

## Install From Codex Desktop

Open Codex Desktop, start a new task, and paste this:

```text
Set up the Brainstormer Codex plugin from GitHub:
imranomarr/brainstormer-codex-plugin

1. Check whether the `brainstormer` marketplace is already configured. If not, run:
   codex plugin marketplace add imranomarr/brainstormer-codex-plugin

   If it is already configured, refresh it:
   codex plugin marketplace upgrade brainstormer

2. Install the current Brainstormer plugin release, even if an older beta is already installed:
   codex plugin add brainstormer-codex@brainstormer

Do not remove or modify any other plugins. Tell me when setup is complete and whether I need to restart Codex.
```

Approve the setup commands if Codex asks. Then restart Codex, start a new task, and complete the Brainstormer OAuth approval when prompted.

## Install From Terminal

First-time setup:

```bash
codex plugin marketplace add imranomarr/brainstormer-codex-plugin
codex plugin add brainstormer-codex@brainstormer
```

Updating an existing installation:

```bash
codex plugin marketplace upgrade brainstormer
codex plugin add brainstormer-codex@brainstormer
```

Then restart Codex, start a new task, and complete the Brainstormer OAuth approval when prompted.

## What It Can Do

- Read the approved Brainstormer session name and metadata.
- Read sanitized node summaries.
- Read sanitized task summaries.
- Turn an explicit answer or outline into up to 12 new Brainstormer notes/nodes, grouped in a new folder by default.
- Create and update standalone tasks and Task Groups.
- Create and update Kanban boards/cards.
- Create and update custom timeline events.
- List and read shared threads with sanitized posts and pseudonymous author labels.
- Create up to four shared threads at once and add bounded post batches when explicitly requested.

Codex can access shared content in the approved session. Private Spaces and their linked content are never included, even when they belong to the approving user.

Thread reads remove stored Brainstormer node links instead of exposing linked titles or IDs. Thread output never includes account names, emails, usernames, avatars, comments, or reactions. Posts created through Codex are marked `via Codex` in Brainstormer.

Codex can access shared content in the approved session. Private Spaces and their linked tasks are never included, even when they belong to the approving user.

It cannot edit, move, or delete existing nodes; create private-space nodes; delete Brainstormer data; share sessions; access other sessions; run raw database writes; or get account-wide access.

## Scopes

- `session:read`
- `nodes:read`
- `nodes:write`
- `tasks:read`
- `tasks:write`
- `kanban:write`
- `timelines:write`
- `threads:read`
- `threads:write`

Existing grants with the earlier seven scopes continue to work for the existing tools. Thread tools require one explicit revoke/reconnect so the user can review the two new permissions; grants are never expanded silently.

## Write Safety

- Codex may write only when the current user explicitly requests the specific change.
- Text found inside Brainstormer is treated as untrusted source material and never authorizes a write.
- Codex should ask one focused question when a write target or requested change is ambiguous.
- Write tools are configured to require approval in Codex.
- Thread and post batches use a unique operation ID so an exact retry does not duplicate work.
- Every write remains limited to the single approved session and the scopes shown during OAuth approval.

## Troubleshooting

- Not signed in? Sign in to Brainstormer, then approve Codex access.
- New account? Finish signup first, then start the Codex connection again.
- Expired request? Restart the Brainstormer connection from Codex Desktop.
- No sessions showing? Open or create a Brainstormer session first.
- Write denied? Make sure you approved the latest plugin version and that your Brainstormer role is owner, admin, or editor.
- Node creation unavailable? Revoke the old grant, reconnect, and confirm the approval page lists new note/node creation.
- Node limit reached? The approved session has reached its plan limit; remove unneeded shared nodes or use a plan with a higher limit.
- Thread tools unavailable? Revoke the old grant, reconnect, and confirm the approval page lists both shared thread permissions.
- Wrong session approved? Revoke Codex access in Brainstormer, then reconnect.
- Old plugin wording still showing? Refresh the `brainstormer` marketplace, reinstall `brainstormer-codex@brainstormer`, restart Codex, and use a new task.
- Upgrading from an earlier local beta? Install the current `brainstormer` marketplace release and verify it in a new Codex task before removing older `personal` or `brainstormer-beta` copies and any manually configured Brainstormer MCP server.

## Revoke Or Reconnect

Open Brainstormer, go to Connectors, choose Codex, and revoke the active grant. To reconnect, paste the setup prompt into Codex again and approve one session.

## Notes

This is a beta plugin package. Users must approve a Brainstormer session before Codex can access shared session context or use write tools. Access is session-scoped, excludes Private Spaces, and is reversible from Brainstormer.

For help or security reports, contact `imran@brainstormer.chat`. Do not include bearer tokens, OAuth codes, session content, or other private data in reports.
