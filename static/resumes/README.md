# Resume PDFs

Generated PDFs are served publicly at `https://tristanhafer.com/resumes/<file>`. Do not edit them by hand — they are produced from the markdown sources in `content/resumes/`.

Regenerate with:

```sh
npm run resumes
```

Requires `chromium` on PATH (or set `CHROMIUM_BIN`). Sources carry the variant title in the document itself (`# Tristan Hafer` / `### <Variant>`), and the filename matches the variant:

- `tristan-hafer-fullstack.pdf` — Full-Stack Software Developer
- `tristan-hafer-frontend.pdf` — Frontend
- `tristan-hafer-backend.pdf` — Backend
- `tristan-hafer-embedded.pdf` — Embedded Systems Developer
- `tristan-hafer-desktop.pdf` — Desktop
- `tristan-hafer-it-infrastructure.pdf` — IT Infrastructure

There is no index page; share the direct URL of the relevant variant. The header "Resume" link points to `tristan-hafer-fullstack.pdf`.