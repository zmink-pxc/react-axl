# React Axioline

Component library to render axio bus components

(x)H indicates the axioline housing type.

## Migration: Removed @bit imports

- All `@bit/...` imports have been replaced with local paths under `src/**`.
- Bit tooling has been removed; the `bit` section in `package.json` no longer exists.
- Use the local components under `src/components/**` directly.

Common replacements:
- `@bit/zmink.axioline.axl-module` → `src/components/Core/AxlModule/AxlModule`
- `@bit/zmink.axioline.axl-connector` → `src/components/Core/AxlConnector/AxlConnector`
- `@bit/zmink.axioline.smart-elements.se-module` → `src/components/Core/SeModule/SeModule`
- `@bit/zmink.axioline.load-modules` → `src/components/Modules/load-modules`

## Viewing/Testing

Storybook has been integrated for viewing, documenting and testing components.

To start interacting with the component library locally, run:

```bash
npm run storybook
```