# Tristan Hafer
### Backend Developer

Orange County, CA • tristan@ultpcs.com • [tristanhafer.com](https://tristanhafer.com)

---

## Summary

Backend-focused developer working primarily in Rust and PHP, building APIs, data pipelines, and performance-critical services for a medical device platform — from a production PHP API and MariaDB database to Rust services handling cellular eSIM management and WebAssembly-compiled data parsing libraries.

## Skills

**Languages:** Rust, PHP, SQL, C/C++
**APIs & Services:** REST APIs (PHP), Rust HTTP clients (ureq), WebAssembly/FFI
**Data:** MariaDB, SQL query authoring and analysis
**Infrastructure:** Docker, self-hosted GitLab CI/CD

## Experience

**Applied Cardiac Systems, Inc.** — Irvine, CA
*Project Manager, Software Developer* — September 2019 – Present

**React Cloud Portal — API & data layer** | 2020 – Present
- Built and maintain the PHP API backend powering the customer/internal study and monitor management portal
- Run and maintain SQL queries against the production `live_acsd_cloud` MariaDB database for monitor and eSIM data analysis

**acsd-sdk / libwfdb** — Rust/WASM ECG (WFDB) parsing library | Ongoing
- Built a Rust library for parsing ECG/WFDB physiological data, compiled to WebAssembly and published as a scoped npm package for frontend consumption
- Replaced panics (`unwrap()`/`expect()`) with proper `Result`-based error propagation
- Used `strum` `EnumDiscriminants` for FFI boundary mapping between Rust and JavaScript; debugged Cargo multi-target/`wasm-pack` conflicts and GitLab CI publishing pipeline issues

**Teal eSIM Integration Tooling** — Rust
- Built Rust tooling for Teal eSIM API integration, including deactivation workflows and clip-to-eSIM matching logic
- Used `chrono` for datetime handling and the `ureq` HTTP client for API communication

**Study Archival Tool** | 2024
- Built an automated Rust/Docker tool for archiving and packaging historical study records for seamless re-import

**clip-file-daemon** — Rust
- Built a Rust background service; resolved Docker networking issues and configured its GitLab CI/CD pipeline

**Intranet** — engineering support tooling | 2021 – Present
- Designed and deployed an internal Docker-based suite covering GitLab project management, CI/CD pipelines, VPN, and DNS

## References

Available upon request — including Wes Koerber (Sr. Software Developer) and Braden Walker (Sr. Full-Stack Web Developer)
