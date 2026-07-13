# Support

For Brainstormer Codex plugin setup, OAuth, session approval, or tool issues, contact `imran@brainstormer.chat`.

Please include:

- Codex surface and operating system.
- Brainstormer plugin version.
- MCP server version from `https://brainstormer.chat/api/codex-mcp/health`.
- The safe error code shown by Codex.
- Whether reconnecting and starting a new Codex task changed the result.

Never include bearer tokens, OAuth codes, refresh tokens, private Brainstormer content, or raw database output.

## Earlier Local Betas

Developers who installed pre-release local packages may see duplicate Brainstormer skills or servers. Install and verify the current `brainstormer` marketplace release in a new Codex task first. Then remove older `brainstormer-codex@personal` and `brainstormer-codex@brainstormer-beta` installations. Remove a separately configured `mcp_servers.brainstormer` entry only after the bundled MCP server is visible and OAuth works.
