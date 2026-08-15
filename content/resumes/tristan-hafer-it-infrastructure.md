# Tristan Hafer
### IT / Infrastructure Engineer

Orange County, CA • tristan@ultpcs.com • [tristanhafer.com](https://tristanhafer.com)

---

## Summary

Software developer who also owns IT and infrastructure for his organization — email hosting, server migrations, self-hosted CI/CD, VPN/DNS, and containerized service hosting — with an active homelab that mirrors and extends that professional work (reverse proxying, SSO, NVR, backups).

## Skills

**Infrastructure:** Docker/Docker Compose, self-hosted GitLab CI/CD, VPN, DNS, Traefik reverse proxy
**Identity/Auth:** OIDC/SSO (Pocket ID), cross-subdomain session/cookie configuration
**Systems:** Linux administration (CachyOS/Arch, systemd, networking), TrueNAS, email hosting, server migrations
**Hosting:** WordPress hosting/optimization, Windows service deployment/virtualization (KVM)

## Experience

**Applied Cardiac Systems, Inc.** — Irvine, CA
*Project Manager, Software Developer* — September 2019 – Present

**IT & Infrastructure**
- Own infrastructure and IT for the organization, including email hosting, server migrations, and CI/CD on a self-hosted GitLab instance

**Intranet** — engineering support tooling | 2021 – Present
- Designed and deployed an internal Docker-based suite for GitLab project management, CI/CD, VPN, and DNS

**Public Business Site** (acsd4u.com) | 2022 – Present
- Manage and maintain a customer-facing WordPress site hosted in Docker containers in the cloud
- Configure themes/styling for consistent branding and optimize performance through caching and image compression

## Personal Infrastructure Projects

**Self-Hosted Homelab** — Beelink mini PC + TrueNAS
- Runs and maintains a self-hosted service stack: Traefik (reverse proxy), Pocket ID (OIDC/SSO), Vaultwarden, Immich, Frigate NVR, Syncthing, and multiple Docker Compose stacks
- Integrated a Frigate NVR + go2rtc camera streaming stack behind Traefik OIDC authentication, resolving WebRTC ICE candidate configuration and cross-subdomain session cookie issues
- Set up Pocket ID OIDC authentication in front of multiple self-hosted services
- Diagnosed and resolved a Windows 11 KVM VM (on TrueNAS) losing connectivity due to power-management/sleep states
- Troubleshot Cloudflare Rocket Loader breaking a SvelteKit app's CSP, and a PKCE state-loss issue in a self-hosted app
- Configured Syncthing for cross-device file sync

## References

Available upon request — including Wes Koerber (Sr. Software Developer) and Braden Walker (Sr. Full-Stack Web Developer)
