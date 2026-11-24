// Funniest Time Machine Warning Label — one-line warning label (107 chars, gate 1-120).
// r1-rev: clarify header comment; entry line unchanged.
// Gate: /output/entry.txt, 1-120 chars, one line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "WARNING: Do not meet your past self. He has your face, your debts, and he already knows about the accident.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
