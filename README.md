# aakashkolli.github.io

Built with [Zola](https://www.getzola.org/) (v0.22.1), deployed to GitHub Pages.

## Structure

```text
content/        # Frontmatter-only Markdown files (one per page)
templates/      # Tera HTML templates
  partials/     # nav.html, footer.html
static/         # CSS, JS, images, icons, favicons
```

## Local development

```bash
zola serve      # dev server at http://127.0.0.1:1111
zola build      # production build → public/
```

Requires [Zola](https://www.getzola.org/documentation/getting-started/installation/) (`brew install zola` - macOS).
