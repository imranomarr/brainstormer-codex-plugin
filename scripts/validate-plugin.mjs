import { access, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = path.resolve(process.cwd());
const pluginRoot = path.join(root, "plugins", "brainstormer-codex");
const manifestPath = path.join(pluginRoot, ".codex-plugin", "plugin.json");
const mcpPath = path.join(pluginRoot, ".mcp.json");
const marketplacePath = path.join(root, ".agents", "plugins", "marketplace.json");
const expectedUrl = "https://brainstormer.chat/api/codex-mcp";

async function readJson(filePath) {
  return JSON.parse(await readFile(filePath, "utf8"));
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const [manifest, mcp, marketplace] = await Promise.all([
  readJson(manifestPath),
  readJson(mcpPath),
  readJson(marketplacePath),
]);

assert(manifest.name === "brainstormer-codex", "plugin name must be brainstormer-codex");
assert(
  /^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$/.test(manifest.version),
  "plugin version must be valid SemVer"
);
assert(manifest.mcpServers === "./.mcp.json", "plugin must reference ./.mcp.json");
assert(
  Array.isArray(manifest.interface?.defaultPrompt)
    && manifest.interface.defaultPrompt.length > 0
    && manifest.interface.defaultPrompt.length <= 3,
  "defaultPrompt must contain between one and three prompts"
);

const topLevelMcpKeys = Object.keys(mcp);
assert(
  topLevelMcpKeys.length === 1 && topLevelMcpKeys[0] === "mcpServers",
  ".mcp.json must contain only the top-level mcpServers field"
);
const server = mcp.mcpServers?.brainstormer;
assert(server && typeof server === "object", "mcpServers.brainstormer is required");
assert(server.type === "http", "Brainstormer MCP transport must be http");
assert(server.url === expectedUrl, "Brainstormer MCP URL must use the canonical public endpoint");
assert(
  server.oauth_resource === expectedUrl,
  "Brainstormer OAuth resource must match the canonical MCP endpoint"
);
assert(!("auth" in server), "host-only auth field must not be bundled in .mcp.json");
assert(
  !("default_tools_approval_mode" in server),
  "host-only default_tools_approval_mode field must not be bundled in .mcp.json"
);

const entry = marketplace.plugins?.find((plugin) => plugin.name === manifest.name);
assert(entry, "marketplace must include brainstormer-codex");
assert(
  entry.source?.source === "local"
    && entry.source?.path === "./plugins/brainstormer-codex",
  "marketplace source must point to the bundled plugin"
);
assert(entry.policy?.installation === "AVAILABLE", "plugin must remain available");
assert(entry.policy?.authentication === "ON_INSTALL", "OAuth must remain ON_INSTALL");

for (const relativePath of [
  manifest.interface?.composerIcon,
  manifest.interface?.logo,
]) {
  assert(typeof relativePath === "string", "plugin icon and logo paths are required");
  await access(path.resolve(pluginRoot, relativePath));
}

console.log(`Validated ${manifest.name} ${manifest.version}`);
