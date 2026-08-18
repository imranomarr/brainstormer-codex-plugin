# Changelog

## 0.5.0-beta.3 - 2026-08-18

- Request Brainstormer OAuth during plugin installation by changing the marketplace authentication policy from `ON_USE` to `ON_INSTALL`.
- Update the setup flow to wait for approval during installation, fall back to `codex mcp login brainstormer` when needed, and restart Codex only after authentication completes.
- Keep installation and authorization status separate and avoid forcing reauthorization when Codex already has a usable Brainstormer connection.

## 0.5.0-beta.2 - 2026-08-18

- Align the marketplace setup and consent guidance with the approval UI: read/write is selected by default, and users can switch to read-only before approving.
- Keep existing grants unchanged until reconnect and preserve live role enforcement plus normal Codex write confirmations.

## 0.5.0-beta.1 - 2026-08-17

- Replace per-session OAuth approval with one explicit account-level connection.
- Add `brainstormer_list_sessions` with cursor pagination and duplicate-name disambiguators.
- Require the full returned `session_id` on every session-bound tool while preserving a temporary legacy-grant fallback.
- Add read-only and read/write consent choices, with read-only as the default and no silent scope upgrades.
- Recheck live ownership or collaboration access on every call; removed access takes effect immediately.
- Remove the private-beta sunset from new OAuth grants and use rolling 90-day inactivity expiry.
- Keep Private Spaces excluded and preserve existing write confirmations, role checks, rate limits, audits, and kill switches.

## 0.4.0-beta.5 - 2026-08-03

- Make the Codex Desktop App setup prompt include restart, first-use, and OAuth approval steps.
- Clarify inside the copied prompt that installing the plugin does not mean OAuth is connected.

## 0.4.0-beta.4 - 2026-08-03

- Start Brainstormer OAuth on the first Brainstormer tool use so command-line and Plugin page installations follow the same connection flow.
- Clarify that plugin installation and Brainstormer authorization are separate steps.
- Replace reinstall-based recovery guidance with first-use OAuth and `codex mcp login brainstormer`.

## 0.4.0-beta.3 - 2026-08-03

- Keep active Brainstormer OAuth connections working through normal Codex restarts and access-token expiry.
- Use 60-minute access tokens and rolling 90-day refresh inactivity, capped by the November 20 private-beta sunset.
- Recover a retried immediate-parent refresh token without disconnecting the user.
- Continue revoking the affected connection when an older refresh-token ancestor is replayed.
- Clarify that repeatedly reinstalling the plugin is not the normal sign-in or recovery flow.

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
