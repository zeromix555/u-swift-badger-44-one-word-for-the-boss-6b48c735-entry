// One Word for the Boss — make.fun entry
// Writes exactly one word describing the boss to /output/entry.txt.
// No phrase, no caption, no explanation: the word stands alone.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Hovercraft";

// The gate: /output/entry.txt must be UTF-8 text of 1-30 characters,
// not only whitespace, and a single word — no spaces, no caption.
if (!/^\S{1,30}$/.test(WORD)) {
  throw new Error(`entry word must be a single word of 1-30 chars, got: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
console.log(`wrote ${WORD.length} chars to /output/entry.txt`);
