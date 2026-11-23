import { mkdirSync, writeFileSync } from "node:fs";

// One-star review of gravity: a deadpan complaint filed in earnest
// against an everyday essential that cannot be fixed.
const REVIEW =
  "I have trusted gravity with my phone, keys and coffee all my life, and it has never once caught a single thing. Its customer service line is just the floor.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
