# Tristan Hafer
### Embedded Systems Developer

Orange County, CA • tristan@ultpcs.com • [tristanhafer.com](https://tristanhafer.com)

---

## Summary

Embedded/firmware developer with professional experience building C/C++ firmware for a cellular-connected medical monitoring device, including real-time data acquisition, wireless transmission, and power optimization. Extends that experience through deep personal work in 3D printer firmware, motion control, and low-level hardware debugging.

## Skills

**Languages:** C/C++, Rust, Zig
**Embedded/Firmware:** Real-time ECG data acquisition, Cat M1 cellular connectivity, power management & transmission protocol optimization
**Firmware/Motion Control:** Klipper/Kalico configuration, sensorless homing (TMC2209 StallGuard), input shaping (ADXL345 accelerometer), Z-axis calibration (BTT Eddy current probe, TAP, `Z_TILT_ADJUST`)
**Hardware:** Circuit debugging (relay/Raspberry Pi power control), MCU boards (BTT SKR Pico/Turbo, LDO Nitehawk), USB/MCU connectivity troubleshooting, custom mechanical design (OpenSCAD)
**Tooling:** Cross-compilation (Zig + Cargo), self-hosted GitLab CI/CD

## Experience

**Applied Cardiac Systems, Inc.** — Irvine, CA
*Project Manager, Software Developer* — September 2019 – Present

**Core 2/3** — Cat M1-enabled ambulatory heart monitor | 2021 – Present
- Developed C/C++ firmware for real-time ECG monitoring and remote alerts on a wearable cardiac device
- Integrated Cat M1 cellular connectivity for continuous patient data transmission
- Enhanced device efficiency through optimized power management and transmission protocols

## Personal Projects

**AM8 3D Printer Build** — ongoing
- Designed and built a custom electronics mounting plate and toolhead/carriage assembly (OpenSCAD)
- Configured Klipper/Kalico firmware on a BTT SKR Pico and (in the current revision) BTT SKR 1.4 Turbo main board, with an LDO Nitehawk 36 toolhead board, Orbitool O2S, BTT Eddy current probe (`eddy-ng` plugin), and ADXL345 accelerometer for input shaping
- Debugged relay and Raspberry Pi power control circuitry for the mainboard
- Diagnosed and resolved persistent MCU disconnect issues traced to host (Orange Pi) USB instability; migrated firmware hosting to a NUC for reliability
- Configured sensorless homing (TMC2209 StallGuard), BTT Eddy probe calibration/TAP, bed mesh, and `Z_TILT_ADJUST`

**"geoff" cross-compilation tooling**
- Configured a Zig + Cargo cross-compilation pipeline (`x86_64-pc-windows-gnu`) as part of building a cross-platform Windows service/CLI tool

## References

Available upon request — including Wes Koerber (Sr. Software Developer) and Braden Walker (Sr. Full-Stack Web Developer)
