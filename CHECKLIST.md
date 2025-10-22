# STRIVE SODA PROJECT CHECKLIST

**Last Updated:** October 22, 2025
**Next Major Deadline:** Friday, October 25 (UI/UX Fixes)
**Full Focus Week:** October 28 - November 1, 2025

> **Reference:** See `PLAN-OF-ACTION.md` for complete details and context from October 21, 2025 meeting.

---

## P0 - CRITICAL (Due Friday, October 25)
**UI/UX consistency fixes - affects user experience and brand polish**

### Responsiveness & Layout Bugs

- [ ] **Fix product page scroll bug** - Cannot scroll to top on all product pages
  - Files: Product page templates, componentized sections
  - Should be quick "flip of a switch" fix

- [ ] **Fix peach image height** - Image appears too short on product page
  - Location: `/products/peach-perfect`
  - File: Product image component

- [ ] **Fix homepage video white space (desktop)** - Video scrunches leaving white space when browser resizes
  - File: `sections/gs-hero.liquid` (lines 205-435)
  - Priority: HIGH - affects desktop UX

- [ ] **Fix homepage video white space (mobile)** - White space appearing above video on mobile
  - File: `sections/gs-hero.liquid`
  - Priority: HIGH - affects mobile UX

### Design Consistency

- [ ] **Standardize button corner radius across entire site**
  - Target: Rounded corners (match homepage "Shop Flavors" bubble style)
  - Locations: Homepage CTAs ✓, Science page, Product pages, About Us, Collection/Shop
  - Note: "Add to Cart" / "Buy with Shop" are Shopify components - investigate if can be rounded
  - Files: `assets/app.css` (button components in library)

- [ ] **Fix font weight & size consistency across all pages**
  - Template: Use "Over 75% of adults chronically dehydrated" heading style site-wide
  - Apply uniform heading weights and body copy weights
  - Pages to update: Science, About Us, Product pages
  - Files:
    - `sections/science-checkerboard-fold.liquid`
    - `sections/science-honey.liquid`
    - `sections/science-electrolytes.liquid`
    - `sections/product-benefits.liquid`
    - `sections/about-checkerboard-fold.liquid`

- [ ] **Import and apply Poly Sans Mono brand font**
  - Source: Drive Soda Toolkit (Dropbox - received from Chris)
  - Primary use: Nutrition Facts panels (match can design)
  - Secondary use: Science page technical sections
  - Requirements: Web-friendly formats (WEBP/SVG), keep text editable
  - Files:
    - `snippets/global-fonts.liquid`
    - `assets/app.css` (@font-face declarations)
    - Product nutrition sections

---

## P1 - HIGH PRIORITY (Week of Oct 28 - Nov 1)
**Content refinement and feature additions**

### Homepage Updates

- [ ] **Implement "soda-first" messaging approach**
  - Current: Leads with sodium/potassium/magnesium
  - New: Emphasize taste first, THEN hydration benefits
  - Goal: "The soda you WANT to drink that HAPPENS to hydrate"
  - Include smooth transition/CTA to Science page
  - File: `templates/index.json`

- [ ] **3D can integration** (if timeline allows)
  - Status: Pending
  - Priority: Medium (visual enhancement, not critical)

### Science Page Enhancements

- [ ] **Create "75% Dehydration" section with solution CTA**
  - Content: "75% of adults are chronically dehydrated..."
  - Layout: Left = stat + copy, Right = "Why choose Strive" + CTA
  - File: `sections/science-checkerboard-fold.liquid`

- [ ] **Redesign "Why Honey?" section to be visually "sexier"**
  - Current state: Bland, doesn't pop
  - Updates needed:
    - Bolder colors, larger type
    - Add hover effects to benefit boxes:
      - "Rich in Antioxidants" → hover shows: "Honey is packed with flavonoids..."
      - "Natural Sweetness" → hover shows expanded benefit
    - Change background image/color for contrast
    - Match visual hierarchy from top of page
  - Benefits: Adds interactivity, improves SEO/AEO
  - File: `sections/science-honey.liquid`

- [ ] **Update electrolyte bubble colors from June Shine placeholders to Strive brand**
  - Colors: Tiffany Blue (#0ABAB5), Orange (#FF7A00), + one more
  - File: `sections/science-electrolytes.liquid`

### About Us Page

- [ ] **Create complete "Strive Story" content** (Jack & Gavin call Oct 22)
  - Method: Talk it out → write notes → ChatGPT polish → edit
  - Sections needed:
    1. Hero: "We Strive Together" + mission
    2. Founder Story: Jack's journey (need founder photo)
    3. Mission: Purpose and values
    4. CTA: "Ready to Join the Strive Movement?"
  - Add surf video: "Born and raised in San Diego" vibe

- [ ] **Add updated images from studio shoot**
  - Chris sending photo album by Oct 25
  - Add team photos
  - Replace placeholder images

- [ ] **Consolidate layout - remove empty placeholder sections**
  - Current: Looks "halfway built"
  - Action: Only show completed content, tighten spacing
  - File: `sections/about-checkerboard-fold.liquid`, `templates/page.about.json`

### Product Pages

- [ ] **Update Nutrition Facts panels with correct data**
  - **Peach Perfect:** 10g total carbs, 8g sugars
  - **Tropical Recharge:** 10g total carbs, 8g sugars
  - Technical: Editable web fonts (not images)
  - File: `sections/product-nutrition-label.liquid`

- [ ] **Verify image quality and consistency across all products**
  - Check aspect ratios
  - Mobile responsiveness
  - Ensure hero images are properly sized

### Navigation & Store Locator

- [ ] **Add Store Locator to header navigation**
  - Option 1: About Us → dropdown (Our Story, Store Locator)
  - Option 2: Standalone "Find Us" nav item
  - File: `sections/header.liquid`

- [ ] **Implement Store Locator as CTA on multiple pages**
  - Add to: Homepage (under products), Product pages, About Us, Science page, Shop page
  - CTA copy: "Find Strive Near You" / "Shop Local"
  - Design for scalability (San Diego now, national later)
  - Strategic priority: Retail will outpace DTC in 12 months

- [ ] **Integrate store locator data from Chris** (expected by Oct 25)
  - Build dedicated store locator page
  - Future-proof for retail expansion (Target, Whole Foods, etc.)

---

## P2 - POST-LAUNCH POLISH
**Nice-to-haves and optimization**

### SEO & AEO Optimization

- [ ] Add alt text to all images
- [ ] Implement descriptive hover text throughout site
- [ ] Optimize for AI search engines (ChatGPT, Perplexity, etc.)
- [ ] Ensure fast load times (<3 seconds)
- [ ] Mobile-first indexing compliance
- [ ] Target keywords: "hydration soda", "electrolyte soda", "honey sweetened soda"

### Additional Features

- [ ] Community & Ambassador section
- [ ] Enhanced review features (video testimonials, photo carousel)
- [ ] Heat maps integration for user flow tracking
- [ ] Analytics dashboard setup
- [ ] A/B testing framework for CTAs
- [ ] Performance optimization (image lazy loading)

---

## COMPLETED ✅

### October 15-17, 2025 Session
- [x] Fixed Shop Page CTA to "Learn More About Hydration Soda"
- [x] Fixed honey image display on Science page (object-fit: cover)
- [x] Built componentized About Us page with checkerboard sections (Tiffany Blue + Orange)
- [x] Created footer phone widget with social media hub (JuneShine-inspired)
- [x] Implemented horizontal footer layout for desktop
- [x] Moved FAQ from header to footer navigation
- [x] Fixed hero video white space gaps at mobile/tablet breakpoints

### October 12-14, 2025 Session
- [x] Product page layout fix (moved custom sections outside grid)
- [x] Font consistency applied (Polysans Standard / Inter)
- [x] Tiffany Blue color correction (#81d8d0 → #0ABAB5)
- [x] Font-weight 800 for headings and buttons
- [x] Science-honey.liquid section created
- [x] Sweetener comparison component built
- [x] Custom product.css stylesheet
- [x] CSS variables for brand colors
- [x] Shopify theme pushed to both development & production themes
- [x] Local development server configured (http://127.0.0.1:9292)

### GitHub & Deployment
- [x] All theme files committed to GitHub (251 files, 46,636 insertions)
- [x] Pushed to Production theme (#182679339300) - Live on StriveSoda.com
- [x] Pushed to Development theme (#182818734372) - Local dev server
- [x] Comprehensive deployment commit message with full changelog

---

## DECISION LOG

### October 21, 2025 Meeting Decisions

**Approved ✓:**
- Checkerboard design with Tiffany Blue + Orange (About Us page)
- Footer phone widget design (keep as-is, including mobile)
- Rounded button corners as site-wide standard
- "75% of adults" heading style as template for all major headings
- Poly Sans Mono font for nutrition panels and science content
- Store locator as critical priority (multi-page CTA)
- "Soda-first" messaging approach for homepage

**Pending Discussion:**
- 3D can implementation timeline
- Store locator: Dropdown nav vs. standalone nav item
- About Us navigation: Keep "About Us" or rename to "Our Story"
- Poly Sans Mono scope: Just nutrition or broader science sections?

**Deferred to Future:**
- Mobile footer simplification (keep full iPhone widget for now)
- Video testimonials
- Ambassador program section
- Advanced SEO/AEO optimization

---

## MEETING SCHEDULE & TIMELINE

### This Week (Oct 21-25)
- **Tuesday, Oct 22:** Jack & Gavin call (About Us story content creation)
- **Friday, Oct 25:**
  - ✅ UI/UX fixes complete (buttons, fonts, responsiveness)
  - ✅ Chris sends: Photo album + store locator data

### Next Week (Oct 28 - Nov 1)
- **Full Week:** Gavin dedicates entire week to Strive polish and content refinement
- **Early Next Week:** Team review meeting to check progress
- **By Nov 1:** Strive site polished and launch-ready

### Ongoing
- Compensation discussion (Jack & Gavin - ongoing)
- Long-term retention conversation (month-to-month arrangement)
- Motion AI notetaker in all future meetings

---

## DEPENDENCIES & BLOCKING ITEMS

### Waiting on Chris (by Oct 25):
- Photo album from studio shoot
- Store locator data (locations, addresses, hours)

### Waiting on Jack & Gavin Call (Oct 22):
- Complete "Strive Story" narrative for About Us page
- Finalized About Us page copy top-to-bottom

### Internal (Gavin):
- Import brand fonts from Drive Soda Toolkit
- Review Figma nutrition panel designs
- Test Shopify component customization (Add to Cart button rounding)

---

## KEY CONTACTS

- **Jack Espy (jack@strivesoda.com):** Founder, final decision maker, always available
- **Chris Clark (chris@strivesoda.com):** CMO, brand/marketing lead, content provider
- **Gavin McNamara:** Developer, design lead, implementation

---

## TECHNICAL REMINDERS

### Brand Standards
- **Primary Color:** Tiffany Blue (#0ABAB5)
- **Secondary Color:** Orange (#FF7A00)
- **Fonts:** Polysans Standard / Inter fallback, weight 800 for headings
- **Sciency Font:** Poly Sans Mono (nutrition panels, technical content)
- **Button Style:** Rounded corners (bubble style)

### Development
- Test all changes on mobile FIRST (most traffic from Instagram)
- Maintain componentized architecture for easy updates
- Use web-friendly font formats (WEBP/SVG) for editability
- Dev server: http://127.0.0.1:9292
- Production theme: #182679339300
- Development theme: #182818734372

### Quality Checks
- Site loads fast (<3 seconds)
- All interactive elements functional
- Typography hierarchy clear and consistent
- Mobile experience optimized
- All CTAs properly linked
- SEO fundamentals in place (alt text, meta descriptions)

---

## SUCCESS CRITERIA

**Definition of "Done" for Strive Launch:**

- [ ] All P0 responsiveness bugs fixed
- [ ] Complete design consistency (buttons, fonts, headings)
- [ ] About Us page fully populated with real content and photos
- [ ] Store locator integrated and functional
- [ ] All nutrition facts accurate (10g carbs, 8g sugars)
- [ ] Homepage messaging reflects "soda-first" approach
- [ ] Science page visually engaging with hover effects
- [ ] Mobile experience optimized across all pages
- [ ] Site looks professional and cohesive
- [ ] Brand identity (Tiffany Blue + Orange) consistent throughout
- [ ] Easy path to purchase (DTC + retail locator)
- [ ] All stakeholders (Jack, Chris) approve final design

**Quality Indicators:**
- Brand story is compelling and authentic
- User journey is intuitive (awareness → education → purchase)
- Site differentiates Strive from competitors
- Content reflects "hydration soda" positioning
- Retail strategy supported through store locator prominence

---

## NOTES

### Motion AI Integration
Starting with October 21, 2025 meeting, all sessions recorded with Motion AI notetaker:
- Captures action items automatically
- Creates timestamped transcripts
- Reduces manual note-taking
- Easy reference for follow-ups
- Location: `/docs/meeting-notes/[DATE]/`

### Compensation Discussion
Jack & Gavin ongoing conversation about:
- Fair rate for work completed to date
- Hourly vs. project-based pricing for future work
- Long-term month-to-month retention
- Availability for Hive project (separate timeline)

### Future Projects
- Hive for the Holidays landing page (Nov 1 deadline - separate project)
- Ongoing Strive maintenance and updates
- Potential new sections (ambassador program, community features)

---

**Document Owner:** Gavin McNamara (Developer)
**Stakeholders:** Jack Espy (Founder), Chris Clark (CMO)
**Reference:** `PLAN-OF-ACTION.md` for full meeting context
**Last Updated:** October 22, 2025
**Next Review:** Early week of October 28, 2025
