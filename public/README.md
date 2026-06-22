Place your resume file named `resume.pdf` in this `public/` folder so it will be available at `/resume.pdf` when running the dev server or after build.

Steps:

1. Add your PDF: `public/resume.pdf`
2. In the site, the download button in `src/components/Contact.tsx` links to `/resume.pdf` and uses the `download` attribute.

If you prefer another filename or path, update the `href` in `Contact.tsx` accordingly.
