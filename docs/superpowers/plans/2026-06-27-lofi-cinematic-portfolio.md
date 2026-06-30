# Lofi Cinematic Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a premium dark cinematic lofi personal portfolio for a junior web developer, starting from the current empty repository.

**Architecture:** Create a React + Vite + TypeScript single-page portfolio with focused reusable components, centralized content data, Framer Motion animation primitives, and a CSS theme tuned for a professional nocturnal coding aesthetic. The experience is visual and polished, but must remain readable, responsive, accessible, and appropriate for job applications.

**Tech Stack:** React, Vite, TypeScript, Tailwind CSS, Framer Motion, lucide-react, CSS custom properties, npm scripts.

---

## Current Project State

The workspace at `C:\Users\Usuario\Documents\PortFolio` is currently empty except for `.git`. Implementation should initialize the frontend project in the repository root.

Deletion rule: do not bulk-delete files or directories. Never use `del /s`, `rd /s`, `rmdir /s`, `Remove-Item -Recurse`, or `rm -rf`. If a file must be deleted, delete exactly one explicit file path at a time.

## Product Direction

The portfolio should feel like a quiet late-night programming session: dark, cinematic, glassy, focused, and slightly tactile. It should not look like a generic SaaS landing page, a loud animation demo, or a template with decorative effects added on top.

The target visitor is a recruiter, hiring manager, or developer reviewing a junior web developer. The site should communicate taste, technical care, learning mindset, and readiness to work on real frontend projects.

## Visual Language

- Base mood: dark cinematic lofi.
- Background: deep charcoal / near-black with subtle cool highlights, soft radial lighting, gentle cursor parallax, and a barely visible grain layer.
- UI surfaces: translucent glassmorphism panels with blur, fine borders, restrained shadows, and soft inner highlights.
- Typography: clean sans-serif, strong hierarchy, compact professional copy.
- Color accents: muted cyan, warm amber, and soft violet used sparingly. Avoid a one-color purple/blue template look.
- Motion: advanced but calm. Every animation should support comprehension rather than distract from content.

## Required Page Sections

1. Navbar
   - Sticky or fixed at top.
   - Glassmorphism background with blur.
   - Links: Home, About, Skills, Projects, Contact.
   - Includes Focus Mode toggle.

2. Hero
   - First-screen signal: developer identity and portfolio personality.
   - Animated title appears word by word.
   - Subcopy explains junior web developer positioning.
   - Primary CTA to Projects and secondary CTA to Contact.
   - Integrates or visually coordinates with `LofiPlayer`.

3. About
   - Concise professional narrative.
   - Emphasize learning constantly, building carefully, and frontend focus.

4. Skills
   - Staggered appearance of technology chips.
   - Group by frontend, tooling, and workflow.

5. Projects
   - Project cards with image area, slow zoom on hover, 3D tilt, tech chips, and CTA links.
   - Use polished visual placeholders if real project screenshots are not available.

6. Contact
   - Clear hiring-oriented closing section.
   - Links for email, GitHub, LinkedIn, and CV placeholder.

7. LofiPlayer
   - Glassmorphism component.
   - No autoplay.
   - Visual-only player unless an audio file is later added.

8. Focus Mode
   - Toggle state that calms the interface and visually highlights the player.

## Exact File Structure

Create this structure from the repository root:

```text
.
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── src
│   ├── App.tsx
│   ├── main.tsx
│   ├── styles
│   │   └── index.css
│   ├── data
│   │   └── portfolio.ts
│   ├── components
│   │   ├── About.tsx
│   │   ├── BackgroundScene.tsx
│   │   ├── Contact.tsx
│   │   ├── FocusModeOverlay.tsx
│   │   ├── Hero.tsx
│   │   ├── LofiPlayer.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Projects.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── Skills.tsx
│   │   ├── TechChip.tsx
│   │   └── TiltCard.tsx
│   ├── hooks
│   │   ├── useMouseParallax.ts
│   │   └── usePrefersReducedMotion.ts
│   └── lib
│       └── motion.ts
└── public
    └── noise.svg
```

## Component Responsibilities

`src/App.tsx`
- Owns `focusMode` state.
- Composes the full page.
- Passes focus mode state to Navbar, Hero, BackgroundScene, LofiPlayer, and FocusModeOverlay.

`src/data/portfolio.ts`
- Stores all visible portfolio content.
- Exports `profile`, `skills`, `projects`, and `contactLinks`.
- Keeps copy separate from components.

`src/components/Navbar.tsx`
- Renders glass navigation.
- Smooth-scrolls to sections using anchor links.
- Provides Focus Mode toggle.

`src/components/BackgroundScene.tsx`
- Renders cinematic background layers.
- Applies subtle cursor parallax.
- Responds to focus mode by darkening and slowing perceived motion.

`src/components/Hero.tsx`
- Renders main identity, word-by-word title animation, CTAs, and supporting text.
- Uses Framer Motion stagger variants.

`src/components/LofiPlayer.tsx`
- Owns local `isPlaying` state.
- Does not autoplay audio.
- Renders now-playing text, play/pause button, visual progress bar, animated waveform, and rotating disc/icon.
- Uses visual-only behavior by default.

`src/components/FocusModeOverlay.tsx`
- Displays the sentence `Building quietly. Learning constantly.` only when focus mode is active.
- Adds subtle background dimming through CSS class changes or Framer Motion opacity.

`src/components/TiltCard.tsx`
- Generic reusable card wrapper with soft 3D hover tilt.
- Disables tilt when reduced motion is active.

`src/components/ProjectCard.tsx`
- Uses `TiltCard`.
- Renders project image area, title, description, tech stack, and links.
- Image slowly zooms on hover.

`src/components/Skills.tsx`
- Renders grouped technology chips with staggered entrance.

`src/components/About.tsx`
- Renders concise personal story and professional traits.

`src/components/Contact.tsx`
- Renders closing CTA and contact links.

`src/lib/motion.ts`
- Centralizes Framer Motion variants and transition settings.

`src/hooks/useMouseParallax.ts`
- Tracks cursor position and returns normalized movement values.

`src/hooks/usePrefersReducedMotion.ts`
- Returns whether the user prefers reduced motion.

## Content Defaults

Use these defaults until the owner provides personal details:

```ts
export const profile = {
  name: "Your Name",
  role: "Junior Web Developer",
  headline: "Building quiet interfaces for real people.",
  heroWords: ["Junior", "Web", "Developer", "building", "with", "focus."],
  summary:
    "I create responsive, accessible web experiences with React, TypeScript, and a strong eye for detail.",
  focusQuote: "Building quietly. Learning constantly.",
};
```

Projects should be believable junior developer projects:

```ts
export const projects = [
  {
    title: "TaskFlow Dashboard",
    description:
      "A responsive productivity dashboard with task filters, status views, and clean component architecture.",
    imageTone: "cyan",
    tech: ["React", "TypeScript", "Tailwind"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Weather Focus App",
    description:
      "A compact weather interface focused on readable states, API handling, and mobile-first layout.",
    imageTone: "amber",
    tech: ["React", "API", "CSS"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Portfolio Case Study",
    description:
      "A case-study page exploring layout, animation restraint, and developer storytelling.",
    imageTone: "violet",
    tech: ["Vite", "Framer Motion", "UX"],
    liveUrl: "#",
    repoUrl: "#",
  },
];
```

## Motion Specification

All major motion should use Framer Motion. CSS transitions can be used for hover polish.

Hero title:
- Split title into words.
- Parent variant uses `staggerChildren`.
- Each word animates from opacity `0`, y `24`, blur `8px` to opacity `1`, y `0`, blur `0`.

Scroll animations:
- Use `whileInView`.
- Use `viewport={{ once: true, amount: 0.25 }}`.
- Sections fade and rise gently.

Cards:
- 3D tilt should be subtle: rotateX and rotateY should stay within about `-5deg` to `5deg`.
- Hover lift should be restrained: about `translateY(-4px)`.

Project image:
- Default scale `1`.
- Hover scale `1.06`.
- Transition duration around `900ms`.

Focus Mode:
- Background dim overlay opacity increases.
- Player border and glow become more visible.
- Animation durations become longer and easing calmer.

Reduced motion:
- Disable cursor parallax.
- Disable 3D tilt.
- Replace staggered movement with simple opacity fades.
- Keep hover states functional without movement-heavy transitions.

## LofiPlayer Behavior

Default state:
- `isPlaying = false`
- progress bar can animate visually only while `isPlaying` is true.
- waveform bars animate only while `isPlaying` is true.
- disc rotates only while `isPlaying` is true.

Displayed text:
- Label: `Now playing`
- Station: `lofi.dev / focus mode`
- Title: `Coding Session 01`

Audio:
- Do not autoplay.
- Do not fetch remote audio.
- Do not assume an audio file exists.
- Build visual-only first.
- If `public/audio/coding-session-01.mp3` is later added, the component may be extended to use it after user click.

## Focus Mode Behavior

Focus Mode is a global boolean state.

When active:
- Add `data-focus-mode="true"` to the app shell or root container.
- Slightly darken background.
- Increase `LofiPlayer` visual emphasis.
- Make background motion slower and softer.
- Show `Building quietly. Learning constantly.` near the hero/player area.
- Keep all content readable and navigable.

When inactive:
- Remove dimming.
- Player returns to normal emphasis.
- Quote fades out.
- All transitions remain smooth.

## Implementation Tasks

### Task 1: Initialize Project

**Files:**
- Create: root Vite React TypeScript project files

- [ ] **Step 1: Confirm repository root is empty except documentation and Git metadata**

Run:

```powershell
rg --files
```

Expected: only documentation files may appear before initialization.

- [ ] **Step 2: Create Vite React TypeScript app in the current directory**

Run:

```powershell
npm create vite@latest . -- --template react-ts
```

Expected: Vite creates `index.html`, `package.json`, `src`, and TypeScript config files.

- [ ] **Step 3: Install runtime dependencies**

Run:

```powershell
npm install framer-motion lucide-react
```

Expected: dependencies are added to `package.json`.

- [ ] **Step 4: Install Tailwind CSS tooling**

Run:

```powershell
npm install -D tailwindcss postcss autoprefixer
```

Expected: dev dependencies are added to `package.json`.

- [ ] **Step 5: Initialize Tailwind config**

Run:

```powershell
npx tailwindcss init -p
```

Expected: `tailwind.config.js` or `tailwind.config.ts` and `postcss.config.js` exist.

### Task 2: Configure Theme and Global CSS

**Files:**
- Modify: `tailwind.config.ts` or `tailwind.config.js`
- Modify: `src/styles/index.css`
- Modify: `src/main.tsx`
- Create: `public/noise.svg`

- [ ] **Step 1: Configure Tailwind content paths**

Use:

```ts
content: ["./index.html", "./src/**/*.{ts,tsx}"]
```

- [ ] **Step 2: Create global CSS**

`src/styles/index.css` must include:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: dark;
  --bg: #07080d;
  --surface: rgba(17, 20, 31, 0.62);
  --surface-strong: rgba(24, 28, 42, 0.78);
  --border: rgba(255, 255, 255, 0.12);
  --text: #f4f7fb;
  --muted: #a5adbd;
  --cyan: #77e4ff;
  --amber: #f2c36b;
  --violet: #b9a3ff;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  background: var(--bg);
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

.grain-layer {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 60;
  opacity: 0.055;
  mix-blend-mode: screen;
  background-image: url("/noise.svg");
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.001ms !important;
  }
}
```

### Task 3: Add Data Model

**Files:**
- Create: `src/data/portfolio.ts`

- [ ] **Step 1: Export profile, skills, projects, and contact links**

Use typed arrays:

```ts
export type Project = {
  title: string;
  description: string;
  imageTone: "cyan" | "amber" | "violet";
  tech: string[];
  liveUrl: string;
  repoUrl: string;
};

export const profile = {
  name: "Your Name",
  role: "Junior Web Developer",
  headline: "Building quiet interfaces for real people.",
  heroWords: ["Junior", "Web", "Developer", "building", "with", "focus."],
  summary:
    "I create responsive, accessible web experiences with React, TypeScript, and a strong eye for detail.",
  focusQuote: "Building quietly. Learning constantly.",
};

export const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
  styling: ["Tailwind CSS", "Responsive Design", "Accessibility", "Framer Motion"],
  workflow: ["Git", "Vite", "Component Design", "Debugging"],
};

export const projects: Project[] = [
  {
    title: "TaskFlow Dashboard",
    description:
      "A responsive productivity dashboard with task filters, status views, and clean component architecture.",
    imageTone: "cyan",
    tech: ["React", "TypeScript", "Tailwind"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Weather Focus App",
    description:
      "A compact weather interface focused on readable states, API handling, and mobile-first layout.",
    imageTone: "amber",
    tech: ["React", "API", "CSS"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Portfolio Case Study",
    description:
      "A case-study page exploring layout, animation restraint, and developer storytelling.",
    imageTone: "violet",
    tech: ["Vite", "Framer Motion", "UX"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

export const contactLinks = [
  { label: "Email", href: "mailto:hello@example.com" },
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "CV", href: "#" },
];
```

### Task 4: Add Motion and Hooks

**Files:**
- Create: `src/lib/motion.ts`
- Create: `src/hooks/useMouseParallax.ts`
- Create: `src/hooks/usePrefersReducedMotion.ts`

- [ ] **Step 1: Add reusable Framer Motion variants**

`src/lib/motion.ts`:

```ts
export const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

export const wordReveal = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};
```

- [ ] **Step 2: Add reduced motion hook**

`src/hooks/usePrefersReducedMotion.ts`:

```ts
import { useEffect, useState } from "react";

export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(query.matches);

    const handleChange = () => setPrefersReducedMotion(query.matches);
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  return prefersReducedMotion;
}
```

### Task 5: Build Layout Components

**Files:**
- Create: `src/components/Navbar.tsx`
- Create: `src/components/BackgroundScene.tsx`
- Create: `src/components/SectionHeader.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create Navbar with Focus Mode toggle**

Navbar props:

```ts
type NavbarProps = {
  focusMode: boolean;
  onToggleFocusMode: () => void;
};
```

Navbar must use a blurred translucent surface, accessible button text, and anchor links to all sections.

- [ ] **Step 2: Create BackgroundScene**

BackgroundScene props:

```ts
type BackgroundSceneProps = {
  focusMode: boolean;
};
```

It must render:
- radial light layers,
- subtle parallax transforms,
- focus-mode dim layer,
- grain handled by `.grain-layer`.

- [ ] **Step 3: Compose app shell**

`App.tsx` must:
- declare `const [focusMode, setFocusMode] = useState(false)`,
- render `BackgroundScene`,
- render `Navbar`,
- render all page sections,
- render `LofiPlayer`,
- render `FocusModeOverlay`,
- render `<div className="grain-layer" />`.

### Task 6: Build Hero and LofiPlayer

**Files:**
- Create: `src/components/Hero.tsx`
- Create: `src/components/LofiPlayer.tsx`
- Create: `src/components/FocusModeOverlay.tsx`

- [ ] **Step 1: Implement Hero**

Hero props:

```ts
type HeroProps = {
  focusMode: boolean;
};
```

Hero must:
- map `profile.heroWords` into animated word spans,
- use Framer Motion stagger,
- include professional junior developer copy,
- include CTA buttons to `#projects` and `#contact`.

- [ ] **Step 2: Implement LofiPlayer**

LofiPlayer props:

```ts
type LofiPlayerProps = {
  focusMode: boolean;
};
```

State:

```ts
const [isPlaying, setIsPlaying] = useState(false);
```

Required UI:
- `Now playing`
- `lofi.dev / focus mode`
- `Coding Session 01`
- Play/Pause button
- visual progress bar
- animated wave bars
- rotating disc/icon while playing

Behavior:
- no autoplay,
- no remote audio,
- visual-only by default.

- [ ] **Step 3: Implement FocusModeOverlay**

FocusModeOverlay props:

```ts
type FocusModeOverlayProps = {
  active: boolean;
};
```

It must animate the sentence `Building quietly. Learning constantly.` in and out.

### Task 7: Build Content Sections and Cards

**Files:**
- Create: `src/components/TiltCard.tsx`
- Create: `src/components/TechChip.tsx`
- Create: `src/components/About.tsx`
- Create: `src/components/Skills.tsx`
- Create: `src/components/Projects.tsx`
- Create: `src/components/ProjectCard.tsx`
- Create: `src/components/Contact.tsx`

- [ ] **Step 1: Implement TiltCard**

TiltCard must:
- accept `children`,
- apply small pointer-based rotation on hover,
- reset transform on pointer leave,
- disable tilt when reduced motion is preferred.

- [ ] **Step 2: Implement Skills**

Skills must:
- render grouped skills from `src/data/portfolio.ts`,
- stagger chips on scroll,
- keep chip text readable on mobile.

- [ ] **Step 3: Implement Projects**

Projects must:
- render `ProjectCard` for each project,
- stagger project cards,
- keep layout responsive: one column mobile, two or three columns desktop depending width.

- [ ] **Step 4: Implement ProjectCard**

ProjectCard must:
- use `TiltCard`,
- include a cinematic placeholder image panel based on `imageTone`,
- zoom the image panel slowly on hover,
- display tech chips,
- provide Live and Code links.

- [ ] **Step 5: Implement About and Contact**

About must be concise and professional.

Contact must provide recruiter-friendly closing text and contact links.

### Task 8: Responsive, Accessibility, and Polish

**Files:**
- Modify: `src/styles/index.css`
- Modify: component files as needed

- [ ] **Step 1: Check mobile layout**

Verify at widths:
- 375px
- 768px
- 1440px

No text should overlap. The LofiPlayer should not cover essential contact or project content on small screens.

- [ ] **Step 2: Check accessibility**

Requirements:
- buttons have accessible labels,
- links have visible focus states,
- contrast remains readable,
- motion respects `prefers-reduced-motion`.

- [ ] **Step 3: Check visual restraint**

The final page should feel premium and quiet. Reduce animation intensity if any section feels noisy, gimmicky, or distracting.

### Task 9: Verification and Local Preview

**Files:**
- No new files required unless fixes are found.

- [ ] **Step 1: Run lint**

Run:

```powershell
npm run lint
```

Expected: no lint errors.

- [ ] **Step 2: Run production build**

Run:

```powershell
npm run build
```

Expected: build completes successfully and outputs `dist`.

- [ ] **Step 3: Start development server**

Run:

```powershell
npm run dev
```

Expected: Vite prints a local preview URL, usually `http://localhost:5173/`.

- [ ] **Step 4: Manual QA**

Confirm:
- Hero title animates word by word.
- Cursor parallax is very subtle.
- Navbar blur works.
- Scroll animations trigger once.
- Cards tilt softly.
- Project visuals zoom slowly on hover.
- LofiPlayer does not autoplay.
- Play/Pause toggles visual state.
- Focus Mode highlights the player and dims the background.
- Focus Mode shows `Building quietly. Learning constantly.`
- Reduced motion mode calms or disables movement-heavy effects.

## Final Acceptance Criteria

The project is complete when:

- The app is initialized with React + Vite + TypeScript.
- Tailwind CSS and Framer Motion are configured and used.
- The page contains Navbar, Hero, About, Skills, Projects, Contact, LofiPlayer, and Focus Mode.
- The visual style is dark, cinematic, lofi, and professional.
- Animations are subtle, polished, and responsive to reduced motion preferences.
- LofiPlayer is visual-only by default and never autoplays.
- Focus Mode works globally and restores state smoothly when disabled.
- Desktop and mobile layouts are polished.
- `npm run lint` passes.
- `npm run build` passes.
- The local development server URL is provided to the user.

## Future Personalization Checklist

After the base project is generated, replace these values:

- `Your Name`
- `hello@example.com`
- GitHub URL
- LinkedIn URL
- CV URL
- project titles
- project descriptions
- live demo links
- repository links
- real project screenshots if available

Do not block the initial build on these values; the first implementation should use polished placeholders and remain production-quality.
