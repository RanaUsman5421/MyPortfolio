# Professional AI Portfolio — React + Tailwind CSS

A componentized React/Vite conversion of the supplied portfolio HTML. The visual system stays in the same black/charcoal + orange/amber direction, with the same major interaction patterns and animation language.

## Included

- React JavaScript (no TypeScript)
- Tailwind CSS for component styling
- Dark / light theme toggle
- Responsive glass pill navbar and mobile menu
- Animated hero portrait with parallax, halo and orbital rings
- Moving ambient grid, glow, beams and circuit canvas
- Animated marquee
- About, projects, expertise, process, principles, stack, FAQ and contact sections
- Interactive project case-study modal
- Contact-form front-end validation
- Magnetic CTA buttons
- Scroll reveal animations
- Custom interactive cursor
- Original portfolio portrait asset included in `src/assets`

## Run

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Main files

- `src/App.jsx` — section composition
- `src/components/` — every portfolio section/component
- `src/data/projects.js` — project cards/modal content
- `src/data/content.js` — expertise/process/principles/FAQ data
- `tailwind.config.js` — palette, fonts, custom keyframes and animations
- `src/index.css` — only Tailwind directives + Tailwind-applied global base rules

Replace `YOUR NAME`, `hello@yourdomain.com`, social links and project details with your final data.
