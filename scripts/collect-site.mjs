// Collects every project's dist/ into one static site (site/) for GitHub Pages.
import { cpSync, existsSync, rmSync, mkdirSync, writeFileSync } from 'node:fs';
import { readFileSync } from 'node:fs';

const root = JSON.parse(readFileSync('package.json', 'utf8'));
const out = 'site';

rmSync(out, { recursive: true, force: true });
mkdirSync(out);

for (const project of root.workspaces) {
  const dist = `${project}/dist`;
  if (!existsSync(dist)) throw new Error(`Missing build output: ${dist}`);
  cpSync(dist, `${out}/${project}`, { recursive: true });
}

cpSync('showcase', out, { recursive: true });
writeFileSync(`${out}/.nojekyll`, '');
console.log(`Site ready in ./${out} (${root.workspaces.length} projects)`);
