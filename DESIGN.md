---
name: Medina's Cleaning Services
description: A photo-led Manhattan cleaning service with a calm, confident editorial presence.
colors:
  ink: "#162224"
  ink-deep: "#0d1718"
  cream: "#f5f0e7"
  cream-muted: "#ded8cd"
  clay: "#bd4b34"
  clay-soft: "#d9907d"
  clay-light: "#dd907b"
  proof-surface: "#d7d1c7"
  line: "rgba(22, 34, 36, .2)"
typography:
  display:
    fontFamily: "Archivo Variable, Arial, sans-serif"
    fontSize: "clamp(3.25rem, 5.4vw, 5.8rem)"
    fontWeight: 680
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  hero:
    fontFamily: "Archivo Variable, Arial, sans-serif"
    fontSize: "clamp(4.1rem, 7.4vw, 7.3rem)"
    fontWeight: 680
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Archivo Variable, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 430
    lineHeight: 1.55
  intro:
    fontFamily: "Archivo Variable, Arial, sans-serif"
    fontSize: "clamp(1rem, 1.35vw, 1.18rem)"
    fontWeight: 430
    lineHeight: 1.5
  proof-body:
    fontFamily: "Archivo Variable, Arial, sans-serif"
    fontSize: "clamp(1rem, 1.25vw, 1.16rem)"
    fontWeight: 430
    lineHeight: 1.58
  lead-body:
    fontFamily: "Archivo Variable, Arial, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 430
    lineHeight: 1.6
  service:
    fontFamily: "Archivo Variable, Arial, sans-serif"
    fontSize: "clamp(1.6rem, 2.5vw, 2.55rem)"
    fontWeight: 680
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  confirmation:
    fontFamily: "Archivo Variable, Arial, sans-serif"
    fontSize: "clamp(3rem, 5vw, 4.7rem)"
    fontWeight: 680
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  label:
    fontFamily: "Archivo Variable, Arial, sans-serif"
    fontSize: "0.69rem"
    fontWeight: 680
    letterSpacing: "0.07em"
  wordmark:
    fontFamily: "Archivo Variable, Arial, sans-serif"
    fontSize: "0.61rem"
    fontWeight: 450
    lineHeight: 1
    letterSpacing: "0.11em"
  mobile-nav:
    fontFamily: "Archivo Variable, Arial, sans-serif"
    fontSize: "1.65rem"
    fontWeight: 650
    lineHeight: 1
    letterSpacing: "-0.03em"
  compact-hero:
    fontFamily: "Archivo Variable, Arial, sans-serif"
    fontSize: "3.6rem"
    fontWeight: 680
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  micro-label:
    fontFamily: "Archivo Variable, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 650
    lineHeight: 1
    letterSpacing: "0.06em"
rounded:
  action: "0"
  circular-action: "50%"
spacing:
  page-pad: "clamp(1.25rem, 5vw, 5.5rem)"
  button-y: "0.75rem"
  button-x: "1.1rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cream}"
    rounded: "{rounded.action}"
    padding: "{spacing.button-y} {spacing.button-x}"
  button-light:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.action}"
    padding: "{spacing.button-y} {spacing.button-x}"
---

# Design System: Medina's Cleaning Services

## Overview

**Creative North Star: "The Manhattan Reset Ledger"**

The system feels considered and capable rather than glossy or overly precious. A dark, blue-black field gives the real work photography and generous cream typography a grounded, confident setting. The visual language takes its clarity from the supplied BlackSheepPropertyMgmt reference while the close, photo-first composition belongs to Medina's work.

The page moves in strong editorial blocks: statement, service ledger, team proof, work gallery, and an uncomplicated next step. It uses no decorative card system; rules, scale, tonal shifts, and authentic photographs create the rhythm.

**Key Characteristics:**

- Dark operational ink paired with warm paper-like cream
- Oversized but compact display type with human, real-work imagery
- Square, direct controls and hairline ledger rules
- One warm clay accent reserved for labels and attention points

## Colors

The palette is warm against a dense, professional dark ground; it should feel at home in a Manhattan workplace after hours, not like a generic cleaning template.

### Primary

- **Operational Ink:** The principal dark surface for the hero, gallery, footer, and primary actions.
- **Paper Cream:** The readable counterweight used for primary text, light buttons, and the quote area.

### Secondary

- **Clay Signal:** The sparse warm accent for labels, selection, and focus indication. It should remain the exception on a screen.

### Neutral

- **Deep Ink:** The darker photo-gallery and footer field.
- **Muted Paper:** Supporting text on dark surfaces.
- **Ledger Line:** Low-contrast divider used to separate related content without creating boxes.

### Named Rules

**The Paper-and-Ink Rule.** Every major surface is either operational ink or paper cream; warm clay only sharpens an existing hierarchy.

## Typography

**Display Font:** Archivo Variable (with Arial fallback)

**Body Font:** Archivo Variable (with Arial fallback)

**Character:** A single variable grotesk carries both the bold service statement and the compact operational details. Scale and weight, not a decorative second face, create the hierarchy.

### Hierarchy

- **Display:** Heavy, tightly tracked responsive headlines for the hero and section statements.
- **Headline:** Large, compact section titles that often break over two lines for measured rhythm.
- **Title:** Weighty service names that remain clearly scannable in a ledger row.
- **Body:** Relaxed 1rem supporting copy at 1.55 line-height.
- **Label:** Small uppercase labels with expanded tracking for location, form fields, and wayfinding.

### Named Rules

**The Plainspoken Scale Rule.** Do not decorate headlines with type effects; their authority comes from size, compact leading, and a deliberate italic weight shift only where emphasis is needed.

## Layout

The shared page inset uses the page-pad scale and expands from 1.25rem to 5.5rem. Desktop starts with a near-even split hero, a split service ledger, and asymmetric photography. The gallery uses a 12-column mosaic rather than uniform cards. At 760px and below, navigation becomes a compact menu, the hero becomes one vertical story, the form becomes one column, and gallery tiles settle into useful two-column or full-width crops. Content never relies on horizontal scrolling.

## Elevation & Depth

The system is intentionally flat. Depth comes from dark-to-light surface changes, editorial cropping, the fixed translucent header after scroll, and photography—not from ambient card shadows.

## Shapes

The default control is square and direct: zero-radius buttons, fields, and section containers. The only circular silhouette is the small service-row action button, where the rotation hover gives the row a compact, physical response. Hairline borders divide rather than frame.

## Components

### Buttons

- **Shape:** Square corners (0).
- **Primary:** Operational ink on paper cream for the quote form; paper cream on operational ink in the hero.
- **Hover / Focus:** Invert to the host surface with a 1px border; focus uses the clay signal outline.

### Inputs / Fields

- **Style:** Borderless, transparent fields defined by a single bottom ledger line.
- **Focus:** Bottom line shifts to the clay signal.
- **Error / Disabled:** Browser constraint validation handles errors; do not add decorative error panels.

### Navigation

- **Style:** Fixed, high-contrast header with small uppercase links and an underlining hover state.
- **Mobile treatment:** The desktop links collapse into a full-width cream menu directly beneath the header.

### Service Ledger

- **Style:** A ruled list with large service title, practical supporting copy, and a small circular arrow action.
- **State:** On hover, the arrow button inverts and rotates; the row itself stays stable.

## Do's and Don'ts

### Do:

- **Do** lead with genuine work photography; finished spaces and people doing the work are the strongest proof.
- **Do** use page-scale dark and light surface shifts to define stages of a service story.
- **Do** keep calls to action clear, all-caps, and action-specific.
- **Do** preserve the 760px single-column mobile transition when adding new page sections.

### Don't:

- **Don't** turn service categories into equal padded cards or stack decorative shadows under content.
- **Don't** introduce rounded, glassy UI or gradient text; they conflict with the direct ink-and-paper material language.
- **Don't** invent trust claims, reviews, pricing, or contact details that the business has not supplied.
