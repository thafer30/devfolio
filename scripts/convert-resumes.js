const { execFileSync } = require('child_process');
const {
  mkdtempSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} = require('fs');
const { tmpdir } = require('os');
const { join, resolve } = require('path');
const { marked } = require('marked');

const ROOT = resolve(__dirname, '..');
const SOURCE_DIR = join(ROOT, 'content', 'resumes');
const OUTPUT_DIR = join(ROOT, 'static', 'resumes');
const CHROMIUM = process.env.CHROMIUM_BIN || 'chromium';

const template = (title, body) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<title>${title}</title>
<style>
  @page { size: Letter; margin: 0.55in; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 10.5pt;
    line-height: 1.45;
    color: #1a202c;
    margin: 0;
  }
  h1 { font-size: 20pt; margin: 0 0 2pt; }
  h1 + h3 { margin-top: 0; color: #4a5568; }
  h3 { font-size: 12pt; margin: 0 0 4pt; }
  h2 {
    font-size: 11.5pt;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-bottom: 1px solid #cbd5e0;
    padding-bottom: 3pt;
    margin: 14pt 0 6pt;
    break-after: avoid;
  }
  p { margin: 4pt 0; }
  ul { margin: 4pt 0 8pt; padding-left: 18pt; }
  li { margin: 2pt 0; break-inside: avoid; }
  strong { color: #000; }
  a { color: inherit; text-decoration: none; }
  hr { border: none; border-top: 1px solid #e2e8f0; margin: 10pt 0; }
  code { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 9pt; }
</style>
</head>
<body>
${body}
</body>
</html>`;

const files = readdirSync(SOURCE_DIR)
  .filter((f) => f.endsWith('.md'))
  .sort();

if (!files.length) {
  console.error(`No markdown files found in ${SOURCE_DIR}`);
  process.exit(1);
}

const tempDir = mkdtempSync(join(tmpdir(), 'resumes-'));

try {
  for (const file of files) {
    const markdown = readFileSync(join(SOURCE_DIR, file), 'utf8');
    const title = (markdown.match(/^#\s+(.+)$/m) || [])[1] || file;
    const html = template(title, marked.parse(markdown));
    const htmlPath = join(tempDir, file.replace(/\.md$/, '.html'));
    const pdfPath = join(tempDir, file.replace(/\.md$/, '.pdf'));
    writeFileSync(htmlPath, html);

    execFileSync(
      CHROMIUM,
      [
        '--headless=new',
        '--disable-gpu',
        '--no-pdf-header-footer',
        `--print-to-pdf=${pdfPath}`,
        `file://${htmlPath}`,
      ],
      { stdio: 'pipe' }
    );

    writeFileSync(
      join(OUTPUT_DIR, file.replace(/\.md$/, '.pdf')),
      readFileSync(pdfPath)
    );
    console.log(`Generated ${file.replace(/\.md$/, '.pdf')}`);
  }
} finally {
  rmSync(tempDir, { recursive: true, force: true });
}
