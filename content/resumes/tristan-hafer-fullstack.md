# Tristan Hafer
### Full-Stack Software Developer

Orange County, CA • tristan@ultpcs.com • [tristanhafer.com](https://tristanhafer.com)

---

## Summary

Full-stack developer with six years of end-to-end ownership across a medical device company's product line — from React/TypeScript customer portals down through PHP APIs, MariaDB databases, and Rust/WebAssembly performance-critical modules. Comfortable moving between frontend UX work, backend services, and the CI/CD and database infrastructure that ties them together.

## Skills

**Frontend:** React 19, Vite, TypeScript, Material-UI, React Query, Zod, react-hook-form
**Backend:** PHP, Rust, REST APIs, WebAssembly (WASM/FFI)
**Data:** MariaDB / SQL
**Infrastructure:** Docker, self-hosted GitLab CI/CD, VPN, DNS
**Languages:** Rust, PHP, TypeScript/JavaScript, C#, C/C++

## Experience

**Applied Cardiac Systems, Inc.** — Irvine, CA
*Project Manager, Software Developer* — September 2019 – Present

**React Cloud Portal** — customer/internal study & monitor management dashboard | 2020 – Present
- Built and maintain a React 19 + Vite frontend with Material-UI and a PHP API backend for managing cardiac monitoring studies and devices
- Integrated a Rust/WebAssembly module (`acsd_wfdb_wasm`) into the frontend ECG viewer to accelerate physiological waveform parsing and rendering
- Implemented data grids with Material React Table, server-state management with React Query, and form validation with Zod/react-hook-form
- Ran and maintained SQL queries against the production `live_acsd_cloud` MariaDB database for monitor and eSIM data analysis

**acsd-sdk / libwfdb** — Rust/WASM ECG (WFDB) parsing library | Ongoing
- Authored a Rust library for parsing ECG/WFDB physiological data, compiled to WebAssembly and published as a scoped npm package
- Replaced panics (`unwrap()`/`expect()`) with proper `Result`-based error propagation for production reliability
- Used `strum` `EnumDiscriminants` for clean FFI boundary mapping between Rust and JavaScript

**Study Archival Tool** | 2024
- Built an automated Rust/Docker tool for archiving and packaging historical study records for seamless re-import

**Intranet** — engineering support tooling | 2021 – Present
- Designed and deployed an internal Docker-based suite covering GitLab project management, CI/CD pipelines, VPN, and DNS

**Public Business Site** (acsd4u.com) | 2022 – Present
- Manage a customer-facing WordPress site hosted in Docker containers; handle theming, content, and performance optimization (caching, image compression)

## References

Available upon request — including Wes Koerber (Sr. Software Developer) and Braden Walker (Sr. Full-Stack Web Developer)
