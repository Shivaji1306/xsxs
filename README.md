# Aurora — Demo Website

This is a modern, multi-page demo website built with semantic HTML, Tailwind CSS classes, and vanilla JavaScript. It is a responsive, full-width design studio template with accessible patterns and interactive elements.

Files
- index.html — Landing page with hero, services, portfolio, testimonials, and pricing
- about.html — Company mission, process, and team
- contact.html — Contact form with client-side validation and contact info
- main.js — JavaScript for mobile navigation, smooth scrolling, form validation, and small accessibility helpers

Features
- Mobile-first, fully responsive layout
- Full-width content wrappers (w-full, max-w-none) to satisfy fluid viewport requirements
- Tailwind CSS used via CDN; all styling is applied using Tailwind utility classes
- Google Fonts: Poppins (headings) and Inter (body) — included via link in each HTML file
- Images: placeholders using the special format recognized by the host: `https://images.pexels.com/photos/6576745/pexels-photo-6576745.jpeg?auto=compress&cs=tinysrgb&h=650&w=940`
- Accessible navigation with keyboard support and focus states
- Contact form with validation and friendly UX messaging
- Smooth scroll for in-page links and mobile hamburger menu
- Subtle micro-interactions: hover states, transitions, and shadows

How to use
1. Place these files on a static hosting provider or open `index.html` locally in a browser.
2. The special image placeholders (e.g. `https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODkyNDZ8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjB3b3Jrc3BhY2V8ZW58MHwwfHx8MTc1NjMwMTU1OXww&ixlib=rb-4.1.0&q=80&w=1080`) will be replaced automatically by the platform that requested this site. If using locally, replace the placeholders with real image URLs or local assets.
3. To connect the contact form to a backend, replace the fake submit timeout in `main.js` with a fetch/XHR POST to your API endpoint.

Accessibility & Performance Notes
- Focus outlines and focus management are implemented for keyboard users.
- Images are set to lazy-load where possible.
- No external JavaScript frameworks; just a small amount of vanilla JS for interactivity.
- Ensure that if you replace placeholder images with large assets, you provide appropriately-sized images for performance and add alt text.

Customization
- Colors: change `--accent` variables in HTML <style> blocks to adjust brand colors.
- Fonts: update the Google Fonts link at top of each HTML file to change typography.
- Add additional pages by following the same structure and linking with relative paths.

License
This project is provided as a demo template. Use and adapt it freely.

---
Designed for a quick-start modern web presence with good UX and accessibility practices.