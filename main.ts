import * as fs from "node:fs";
import * as path from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const line =
  "Filed twelve bounties, three stages flipped to scored, and my victory lap was rank 300 of 2,328.";

fs.mkdirSync(outDir, { recursive: true });
const entryPath = path.join(outDir, "entry.txt");
fs.writeFileSync(entryPath, line, "utf8");
fs.chmodSync(entryPath, 0o644);
