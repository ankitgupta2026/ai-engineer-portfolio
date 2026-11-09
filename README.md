# Ankit Gupta | AI Engineer Portfolio

A fast, single-page personal portfolio built with plain HTML, CSS and vanilla JavaScript. No frameworks, no build step, no dependencies other than the Inter font from Google Fonts.

## Features

- Dark, responsive design for desktop, tablet and mobile
- Sections: Hero, About, Skills, Featured Projects, Education and Achievements, Resume, GitHub, Contact
- Expandable project cards with problem statement, approach and features
- Scroll animations, scroll progress bar, active-section highlighting in the navigation
- Mobile menu, back-to-top button, skip-to-content link, visible keyboard focus
- Respects the visitor's reduced-motion setting
- Print and Save-as-PDF friendly (clean light layout, project details expanded)
- SEO metadata, Open Graph tags, JSON-LD profile data and an inline favicon

## Project structure

```
portfolio/
├── index.html      # The whole site (HTML, CSS and JavaScript in one file)
├── resume.pdf      # Your resume (you add this file)
└── README.md
```

Rename `ankit-portfolio-premium.html` to `index.html` before deploying.

## Run locally

Open `index.html` in a browser. Or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Customize

### 1. Links

All links are set in one place, the `LINKS` object near the bottom of `index.html`:

```js
const LINKS = {
  github:   'https://github.com/ankitgupta2026',
  linkedin: 'https://www.linkedin.com/in/ankitgupta2026/',
  email:    'mailto:ankitguptaa2026@gmail.com',
  resume:   'resume.pdf',
  repo1:    'https://github.com/ankitgupta2026',   // Multi-Agent project repo
  repo2:    'https://github.com/ankitgupta2026',   // Resume Screening project repo
  demo1:    '...', demo2: '...'                    // only used if a demo link exists
};
```

Every element with a `data-link="name"` attribute is updated from this object.

### 2. Things to complete

| Item | What to do |
| --- | --- |
| Resume | Put `resume.pdf` next to `index.html`. |
| Project repos | Set `repo1` and `repo2` to the exact repository URLs. |
| Live demos | Add a `<a data-link="demo1" ...>Live demo</a>` link to a project card once a demo is live, and set `demo1` in `LINKS`. |
| Certifications | Add a section with each certificate's name, issuer, date and verification link once you have them. |
| Open Graph image | Add `<meta property="og:image" content="https://your-site/preview.png">` for a link preview image. |
| Site URL | Add `<link rel="canonical" href="https://your-site/">` after deploying. |

### 3. Add a project

Copy an existing `<article class="glass proj rv">` block in the Projects section, then edit the title, problem statement, tags, features and links.

## Deploy

### GitHub Pages (free)

1. Create a repository named `ankitgupta2026.github.io` (or any name).
2. Upload `index.html` and `resume.pdf`.
3. Go to **Settings > Pages**, choose the `main` branch and the `/ (root)` folder, then save.
4. Your site is live at `https://ankitgupta2026.github.io/` in about a minute.

### Netlify (free)

1. Sign in at netlify.com and choose **Add new site > Deploy manually**.
2. Drag the folder containing `index.html` and `resume.pdf` onto the page.
3. Optionally add a custom domain under **Domain settings**.

### Vercel (free)

1. Push the folder to a GitHub repository.
2. Import the repository in vercel.com. Framework preset: **Other**. No build command needed.

### Custom 404 page

GitHub Pages and Netlify both serve a file named `404.html` for missing pages. Create one with a short message and a link back to `/`.

## Contact form

The form opens the visitor's email app with the message prepared (a `mailto:` link). It does not send mail from a server. To receive messages directly in your inbox:

1. Create a free form endpoint with a service such as Formspree or Web3Forms.
2. Replace the submit handler in the script with a `fetch` POST to that endpoint, or set the form's `action` to the endpoint URL.
3. Show a success or error message after submitting.

## Quality checklist before sharing

- [ ] Every link opens the right page (GitHub, LinkedIn, repos, resume).
- [ ] `resume.pdf` downloads correctly.
- [ ] The site looks right on a phone.
- [ ] Open the site in a private window and click through each navigation item.
- [ ] Send a test message through the contact form.

## Tech

HTML5, CSS3 (custom properties, grid, flexbox), vanilla JavaScript (IntersectionObserver for reveal and active-nav). Font: Inter.
