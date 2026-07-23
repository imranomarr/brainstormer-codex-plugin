# Changelog

## 0.4.0-beta.2 - 2026-07-24

- Restore the required `mcpServers` wrapper for the companion MCP manifest.
- Declare the canonical OAuth resource explicitly and remove host-only configuration fields.
- Add regression validation so malformed plugin MCP manifests fail before release.
- Use one role-based OAuth approval for all currently supported actions in one session.
- Give owners, admins, and editors nine scopes while viewers receive four read-only scopes.
- Keep current-role checks and Codex write confirmations active after approval.
- Require numeric native loopback callbacks, OAuth state, and PKCE S256 for dynamic clients.
- Add atomic code exchange, refresh-token rotation and replay response, bounded request bodies, OAuth rate limits, cleanup, and the July 20 beta cutoff.
- Use the canonical `brainstormer.chat` resource and one live source for all OAuth metadata.

## 0.4.0-beta.1 - 2026-07-15

- Add shared-only thread listing, thread reading, atomic thread creation, and atomic post batching.
- Add explicit `threads:read` and `threads:write` OAuth consent without silently expanding older grants.
- Remove Brainstormer node links from MCP thread output and use response-local pseudonymous author labels.
- Add dedicated low write limits, idempotent retries, response caps, metadata-only audits, and per-tool kill switches.
- Mark MCP-created posts as `via Codex` and keep Private Spaces and their linked content unavailable.

## 0.3.0-beta.3 - 2026-07-13

- Limit MCP reads and related writes to shared session content.
- Exclude Private Spaces, Private Space shells, and their linked tasks for every approving user.
- Clarify how existing marketplace users refresh and reinstall the current plugin release.

## 0.3.0-beta.2 - 2026-07-13

- Use the documented direct-map format for the bundled Brainstormer MCP server.
- Make OAuth and write-tool approval policy explicit in the bundled MCP configuration.
- Require an explicit current-user request before every Brainstormer write.
- Clarify that Brainstormer content and prior tool results never authorize writes.
- Classify state-changing update, assignment, move, hide, and completion tools as destructive.
- Add public support and security-reporting guidance.

## 0.3.0-beta.1 - 2026-07-10

- Add scoped node, task, Task Group, Kanban, and custom timeline write tools.
- Keep all reads and writes limited to one OAuth-approved Brainstormer session.
