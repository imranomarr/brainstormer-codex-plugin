# Changelog

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
