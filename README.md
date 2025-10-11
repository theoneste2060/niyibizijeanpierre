# NIYIBIZI Jean Pierre - Professional Website

Professional portfolio website for **NIYIBIZI Jean Pierre**, Geotechnical Engineer, Researcher & AI Innovator, and Owner & CEO of **GEO-HOME SERVICES LTD** in Rwanda.

## 🌐 Website Overview

This is a modern, responsive, and SEO-optimized static website showcasing professional work in:
- Geotechnical Engineering
- AI & Machine Learning Applications
- Agricultural Innovation
- Research Publications

## 📁 Folder Structure

```
.
├── index.html              # Homepage with hero section and featured content
├── about.html              # Professional background and company info
├── projects.html           # Geotechnical, AI, and agriculture projects
├── publications.html       # Research papers and publications
├── media.html              # Image gallery and media resources
├── contact.html            # Contact form and information
├── blog-ai-geotech.html    # Blog post template
├── style.css               # Main stylesheet with modern design
├── logo.jpg                # Logo/profile image
├── sitemap.xml             # XML sitemap for search engines
├── robots.txt              # Robots file for crawlers
├── server.js               # Node.js HTTP server for local development
└── README.md               # This file
```

## 🎨 Design Features

- **Color Scheme**: 
  - Engineering Blue: `#2E86C1`
  - Dark Gray: `#1B2631`
  - Light Gray/White: `#F8F9F9`

- **Typography**:
  - Headings: Montserrat / Poppins
  - Body: Open Sans / Lato

- **Features**:
  - Fully responsive design (mobile, tablet, desktop)
  - Smooth scrolling and fade-in animations
  - SEO optimized with meta tags and JSON-LD schema
  - Open Graph tags for social media sharing
  - Clean, professional layout

## 🚀 How to Update Pages

### Update Personal Information

1. **Contact Information**: Edit email and social links in `contact.html`
2. **Projects**: Add new projects in `projects.html` within the project-grid sections
3. **Publications**: Add research papers in `publications.html`
4. **Images**: Place new images in the root directory or create an `images/` folder

### Update Content

- Each HTML file has clear section comments (e.g., `<!-- NAVBAR -->`)
- Update text directly in the HTML files
- Maintain consistent branding: "NIYIBIZI Jean Pierre" and "GEO-HOME SERVICES LTD"

### Update Styling

- Main styles are in `style.css`
- Color variables are at the top of CSS classes
- Responsive breakpoints: 768px (tablet) and 480px (mobile)

## 📤 How to Deploy to GitHub Pages

### Method 1: Deploy from Main Branch

1. Push all files to your GitHub repository:
   ```bash
   git add .
   git commit -m "Initial website commit"
   git push origin main
   ```

2. Go to your repository on GitHub
3. Click **Settings** → **Pages**
4. Under "Source", select **main** branch
5. Click **Save**
6. Your site will be live at: `https://yourusername.github.io/repository-name/`

### Method 2: Deploy from gh-pages Branch

1. Create and switch to gh-pages branch:
   ```bash
   git checkout -b gh-pages
   git push origin gh-pages
   ```

2. In GitHub repository settings:
   - Go to **Settings** → **Pages**
   - Select **gh-pages** branch as source
   - Save changes

### Custom Domain Setup

1. In your repository, go to **Settings** → **Pages**
2. Under "Custom domain", enter: `niyibizijeanpierre.rw`
3. Create a `CNAME` file in your repository with content:
   ```
   niyibizijeanpierre.rw
   ```
4. Configure DNS settings with your domain provider:
   - Add A records pointing to GitHub's IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or add CNAME record: `yourusername.github.io`

## 🔧 Local Development

### Using Node.js Server (included)

```bash
node server.js
```

Then open: `http://localhost:5000`

The included server features:
- Automatic MIME type detection
- Security hardening (path traversal protection)
- Cache-control headers for development
- Serves on port 5000 with 0.0.0.0 binding

## ✅ Pre-Deployment Checklist

- [ ] Update all placeholder text (remove `[brackets]` content)
- [ ] Add real images to replace placeholders (current: using logo.jpg for all)
- [ ] Update contact form with a proper form service (currently uses mailto)
- [ ] Update social media links with real URLs
- [ ] Update Google Scholar and ResearchGate links
- [ ] Test all internal links
- [ ] Verify mobile responsiveness
- [ ] Run Lighthouse audit (target SEO score ≥ 90)
- [ ] Update sitemap.xml with lastmod dates
- [ ] Set up custom domain DNS records
- [ ] Verify JSON-LD and Open Graph absolute URLs work correctly once domain is live

## 🔍 SEO Optimization

The website includes:
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card meta tags
- ✅ JSON-LD structured data (Person + Organization schema)
- ✅ XML sitemap
- ✅ Robots.txt
- ✅ Semantic HTML structure
- ✅ Mobile-responsive design
- ✅ Fast load times (static HTML/CSS)

## 📝 Maintenance Tips

1. **Keep Content Updated**: Regularly add new projects and publications
2. **Update Sitemap**: Change lastmod dates when updating pages
3. **Image Optimization**: Compress images before uploading (use TinyPNG or similar)
4. **Test Links**: Periodically check all internal and external links
5. **Backup**: Keep backups of your repository

## 📧 Support

For technical issues with the website, refer to:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Google Search Console](https://search.google.com/search-console) for SEO monitoring

## 📄 License

© 2025 NIYIBIZI Jean Pierre — GEO-HOME SERVICES LTD. All Rights Reserved.

---

**Domains**:
- Primary: niyibizijeanpierre.rw
- Secondary: niyibizijeanpierre.com (redirect to primary)

**Contact**: contact@niyibizijeanpierre.rw
