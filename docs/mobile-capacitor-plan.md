## Drepto Capacitor Mobile Plan

### Goals
- Mirror the existing Vite/React web experience pixel-for-pixel on Android and iOS.
- Layer enterprise non-functional requirements: security, scalability, performance, observability.
- Maintain a single source of truth for UI/state while exposing native enhancements through Capacitor plugins.

### Architecture
- **Shared Web Bundle**: Keep UI in `App.tsx`, `components/*`, and associated state/hooks. Build with Vite → output `dist/`.
- **Capacitor Shell**: `capacitor.config.ts` points to `dist`. Native projects live in `android/` and `ios/`.
- **Monorepo Ready**: Current repo can evolve into an Nx/Turborepo workspace with `apps/web` and `apps/mobile` plus shared `packages/`.
- **Bridge Layer**: Create a `src/native` module to wrap Capacitor plugins (push, secure storage, biometrics, background tasks, remote config).

### Enterprise Enhancements
- **Security**
  - Enforce OIDC/OAuth2 with short-lived tokens + refresh rotation.
  - Device posture checks: jailbreak/root detection, minimum OS, MDM compliance flags.
  - Certificate pinning for API calls via native HTTP stacks or TLS-aware plugins.
  - Hardware-backed key storage for tokens (Secure Enclave/Keystore) via secure-storage plugin.
  - Encrypted SQLite for offline data with per-user keys.
- **Scalability & Reliability**
  - Offline-first data layer with background sync tasks and conflict resolution.
  - Server-driven pagination + delta sync to keep payloads small.
  - Remote config/feature flags to gate enterprise features.
  - Structured logging and tracing bridged to native monitoring SDKs (AppCenter/Sentry).
- **Performance**
  - Lazy load dashboard modules, memoize heavy lists, prefetch critical assets.
  - Tune WebView (WKWebView/Chromium) for 60fps; enable hardware acceleration and cache control.
  - Background fetch for notifications, analytics batching.

### Implementation Phases
1. **Scaffold**
   - `npm run cap:sync` after every web change.
   - Add baseline plugins: App, Device, Network, Storage, Push Notifications, Secure Storage (community), Background Task.
2. **Security Hardening**
   - Integrate enterprise auth SDK.
   - Implement secure storage + biometrics guard.
3. **Offline & Sync**
   - Establish local DB schema, queue mutations, conflict resolver.
4. **Observability**
   - Hook native crash + performance SDKs, unify logging pipeline.
5. **Testing & Release**
   - Unit: Jest/Vitest on shared code.
   - Integration: Capacitor plugin mocks.
   - E2E: Detox/Appium across Android/iOS device farms.
   - CI/CD: GitHub Actions → Fastlane/AppCenter for signed builds and distribution.

### Next Steps
1. Document current web data flows to map into shared services.
2. Build `src/native` wrappers with type-safe APIs.
3. Add platform-specific design tokens if mobile needs adjustments.
4. Define compliance checklist (SOC2, HIPAA, etc.) and map to implementation tasks.

