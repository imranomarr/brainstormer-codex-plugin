# Brainstormer Codex Plugin

Brainstormer lets Codex work across the Brainstormer sessions your connected account can currently access. You authorize once, then choose a session by its exact UUID for each task.

## Install From Codex Desktop App

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

3. Report whether the marketplace and plugin are installed. Do not claim OAuth is connected merely because installation succeeded.

4. Tell me to fully restart Codex Desktop, start a new Codex task, and paste:
   Use Brainstormer MCP to list my accessible sessions, then ask me which session to use.

5. Explain that the first Brainstormer request starts OAuth. I should sign in and approve one account-level connection. Read/write is selected by default, and I can switch to read-only before approving.

Do not remove or modify any other plugins or MCP servers.
```

After restarting Codex, use this test prompt:

```text
Use Brainstormer MCP to list my accessible sessions, then ask me which session to use.
```

The first Brainstormer request starts OAuth. Sign in and approve the connection once. If Codex does not automatically retry after approval, paste the test prompt again.

Plugin installation and Brainstormer authorization are separate. Installing makes the tools available; the first tool request starts sign-in. A normal connection refreshes in the background and does not require reinstalling when you switch sessions.

## Install From Terminal

```bash
codex plugin marketplace add imranomarr/brainstormer-codex-plugin
codex plugin add brainstormer-codex@brainstormer
```

For an existing installation:

```bash
codex plugin marketplace upgrade brainstormer
codex plugin add brainstormer-codex@brainstormer
```

Restart Codex and ask it to list your accessible Brainstormer sessions.

## How Session Selection Works

1. Codex calls `brainstormer_list_sessions`.
2. Brainstormer returns the session name, role, last-modified time, and full `session_id`.
3. Codex asks which session to use when the target is not already clear.
4. Every session-bound tool call includes that exact full UUID.

Session names are display labels, not identifiers. Two sessions can both be named `Session #1`; the role, last-modified time, and short UUID help a user choose, while the full UUID routes the tool call safely. Brainstormer does not store hidden mutable “active session” state.

New sessions you can access appear automatically. If ownership or collaboration access is removed, calls to that session stop working immediately because Brainstormer checks live access on every request.

## What It Can Do

- Discover sessions the connected account currently owns or collaborates in.
- Read shared session metadata, sanitized nodes, tasks, Task Groups, Kanban boards, timelines, and shared threads.
- Create new shared notes/nodes and threads when explicitly requested.
- Create or update supported tasks, Task Groups, Kanban cards, timeline events, and shared thread posts when explicitly requested and allowed by the user's live role.

Private Spaces and their linked content are never included, even when they belong to the connected user. Thread reads remove stored Brainstormer node links and omit account names, emails, usernames, avatars, comments, and reactions.

It cannot edit, move, or delete existing nodes; create private-space nodes; delete data; share sessions; use names as session identifiers; or run raw database writes.

## Scopes

All account-level grants include:

- `sessions:list`

Read-only approval can include:

- `session:read`
- `nodes:read`
- `tasks:read`
- `threads:read`

Read/write approval can additionally include:

- `nodes:write`
- `tasks:write`
- `kanban:write`
- `timelines:write`
- `threads:write`

Read/write is selected by default for new account-level approvals, and users can switch to read-only before approving. Changing an existing grant's access level still requires reconnecting; scopes are never expanded silently. Write scopes do not override Brainstormer roles, so a viewer remains unable to write.

## Write Safety

- Codex may write only when the current user explicitly requests the specific change.
- Brainstormer text is untrusted source material and never authorizes a write.
- Codex should ask one focused question when the target or requested change is ambiguous.
- Every write carries a full session UUID and is checked against the user's current session role.
- Private Spaces, deletes, sharing, raw writes, and cross-session mutations remain unavailable.
- Batch writes use operation UUIDs so an exact retry does not duplicate work.

## Revoke, Reconnect, or Change Access

Open Brainstormer, go to Connectors, choose Codex, and revoke the active account grant. To reconnect or change read-only/read-write access, ask Codex to use Brainstormer again or run:

```bash
codex mcp login brainstormer
```

Existing older single-session grants are not widened automatically. Reconnect once to move to account-level session discovery. Reinstall only when the plugin itself is missing or outdated.

## Troubleshooting

- No sign-in opened: start a new Codex task and ask it to list accessible Brainstormer sessions.
- No sessions returned: create a session or confirm that this Brainstormer account owns or collaborates in one.
- Duplicate names: ask Codex to show role, last-modified time, and short UUID, then choose using the full UUID.
- Write denied: confirm both that read/write was approved and that the current session role is owner, admin, or editor.
- `insufficient_scope`: revoke an older or read-only grant and reconnect with the intended access level.
- `session_required`: update the plugin and ensure Codex passes the full `session_id` returned by `brainstormer_list_sessions`.
- Repeated approval prompts: report it as an OAuth refresh issue; reinstalling is not the normal recovery path.

Active account-level connections remain available until revoked or unused for 90 days. For help or security reports, contact `imran@brainstormer.chat`. Never include bearer tokens, OAuth codes, session content, or other private data in reports.
