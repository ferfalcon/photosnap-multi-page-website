# Repository Guidelines

## Project Structure & Module Organization

This repository contains the Photosnap multi-page website implementation and design source material. The Astro app lives in `frontend/`; run development commands from that directory. Current source code is under `frontend/src/`, with route files in `frontend/src/pages/`. Static files served directly by Astro belong in `frontend/public/`. The `docs/starter-content/` directory contains provided HTML, images, and SVG assets used as implementation reference material. Root-level files such as `README.md` and `preview.jpg` document the project.

## Build, Test, and Development Commands

- `cd frontend && pnpm install`: install Astro dependencies from `pnpm-lock.yaml`.
- `cd frontend && pnpm dev`: start the local Astro dev server.
- `cd frontend && pnpm build`: build the production site into `frontend/dist/`.
- `cd frontend && pnpm preview`: preview the production build locally.
- `cd frontend && pnpm astro -- --help`: inspect available Astro CLI commands.

There is no root package script; avoid running package commands from the repository root unless one is added later.

## Coding Style & Naming Conventions

Use Astro components and semantic HTML for page structure. Keep styles maintainable with CSS custom properties and mobile-first responsive rules. Follow the existing formatting: tabs for nested markup in `.astro` files, two spaces for JSON and JavaScript module files. Use kebab-case for route filenames and static asset names, and PascalCase for reusable component files when `frontend/src/components/` is introduced. Keep public asset paths stable because they are referenced from generated pages.

## Testing Guidelines

No automated test framework is currently configured. For now, treat `pnpm build` as the required validation step before opening a pull request. Manually verify responsive layouts at mobile, tablet, and desktop widths, plus keyboard focus and hover states for navigation, buttons, cards, pricing controls, and calls to action. If automated tests are added, document the framework and command here, and prefer colocated names such as `Component.test.ts`.

## Commit & Pull Request Guidelines

Recent history uses concise imperative commits, with occasional Conventional Commit prefixes such as `feat:`. Keep commit subjects short and specific, for example `Add pricing comparison layout` or `feat: add stories page`.

Pull requests should include a brief summary, validation steps performed, linked issues when relevant, and screenshots or screen recordings for visual changes. Note any intentional deviations from the starter content or Figma design.

## Agent-Specific Instructions

`frontend/AGENTS.md` contains additional Astro development instructions. Follow it for files under `frontend/`; those nested instructions take precedence there.
