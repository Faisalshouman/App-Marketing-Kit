import { copyFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

for (const filename of ['navigation.mjs', 'navigation.d.mts']) {
  copyFileSync(
    fileURLToPath(new URL('../src/' + filename, import.meta.url)),
    fileURLToPath(new URL('../dist/' + filename, import.meta.url)),
  );
}
