# Strive Soda - Plan of Action (POA)
**Generated:** October 22, 2025
**Based on:** October 21, 2025 Meeting with Jack & Chris
**Focus:** Strive Soda website completion (Hive project excluded)

---

## Executive Summary

This POA consolidates all remaining Strive Soda website tasks based on the October 21st meeting with Jack (Founder) and Chris (CMO). The work is organized into three phases with clear priorities and deadlines.

**Key Deadlines:**
- **By Friday, Oct 25:** UI/UX consistency fixes (P0)
- **Next Week (Oct 28-Nov 1):** Full-time focus on polish and content refinement (P1)
- **Ongoing:** Store locator integration when Chris provides data (P1)

---

## Phase 1: Critical UI/UX Fixes (P0 - Due Friday, Oct 25)

### Responsiveness & Layout Bugs
**Priority: CRITICAL** - These affect user experience across devices

| Issue | Description | Location | Status |
|-------|-------------|----------|--------|
| **Product Page Scroll Bug** | Cannot scroll to top of page | All product pages | 🔴 Not Started |
| **Peach Image Height** | Peach product image too short | `/products/peach-perfect` | 🔴 Not Started |
| **Homepage Video White Space** | Video scrunches leaving white space on desktop resize | Homepage hero section | 🔴 Not Started |
| **Mobile Video White Space** | White space appearing above video on mobile | Homepage hero (mobile) | 🔴 Not Started |

**Technical Notes:**
- Pages are componentized, should be "flip of a switch" fixes
- Reference: `sections/gs-hero.liquid` (lines 205-435 for video positioning)

---

### Design Consistency Issues
**Priority: HIGH** - Brand polish and professional appearance

#### 1. Button Shape Standardization
**Issue:** Buttons have inconsistent corner radius across site
- Homepage: Full bubble buttons with drop shadow
- Product page: Mix of rounded and square corners
- Add to cart: Squared corners (component-based, may have limitations)

**Solution:**
- Standardize ALL custom buttons to rounded corners (matching homepage "Shop Flavors")
- Investigate if Shopify "Add to Cart" / "Buy with Shop" components can be rounded
- Use consistent border-radius across all button components in library

**Locations to Update:**
- Homepage CTAs ✓ (already done)
- Science page buttons
- Product page CTAs
- About Us page CTAs
- Collection/Shop page buttons

---

#### 2. Font Weight & Size Consistency
**Issue:** Headings vary wildly in weight and size across pages

**Science Page Example:**
- "Over 75% of adults chronically dehydrated" - Clean, consistent (✓ KEEP THIS STYLE)
- "Why Hydration Matters" - Totally different weight/size
- "Why Honey?" - Different again
- "Not All Sweeteners Are Created Equal" - Inconsistent with above

**Solution:**
- Use "75% of adults" heading style as template for ALL major headings
- Match font weights: heading weight should be consistent site-wide
- Match body copy weight: paragraph text should be uniform
- Apply brand font hierarchy from Poly Sans family

**Files to Update:**
- `sections/science-checkerboard-fold.liquid`
- `sections/science-honey.liquid`
- `sections/science-electrolytes.liquid`
- `sections/product-benefits.liquid`
- `sections/about-checkerboard-fold.liquid`

---

#### 3. Brand Font Implementation
**Action Required:** Import and apply Poly Sans Mono font family

**Chris provided:**
- Drive Soda Toolkit (Dropbox folder with all brand fonts)
- Poly Sans Mono = "sciency" typeface for technical elements
- Should match nutrition panel font on product cans

**Where to Apply:**
- Nutrition Facts panel on product pages (primary use)
- Science page technical sections (electrolyte breakdowns)
- Any "data-driven" content areas

**Technical Requirements:**
- Use web-friendly formats (WEBP/SVG)
- Ensure text remains editable (not rasterized images)
- Nutrition diagram created in Figma → brought over as code

**Files to Update:**
- `snippets/global-fonts.liquid`
- `assets/app.css` (add @font-face declarations)
- Product nutrition sections

---

## Phase 2: Content & Visual Enhancements (P1 - Next Week)

### Homepage Updates

#### 1. Messaging Pivot: Soda-First Approach
**Current:** Leads with sodium/potassium/magnesium electrolyte breakdown
**New Direction:** Start with "this is a delicious soda" → THEN reveal hydration benefits

**Chris's Vision:**
> "Shift from sodium, potassium, and magnesium content to a soda-first approach transitioning into the hydration science page"

**Implementation:**
- Rewrite hero/opening copy to emphasize taste and refreshment first
- Position as "the soda you WANT to drink" that HAPPENS to hydrate
- Use electrolyte breakdown as supporting science (not lead message)
- Smooth transition/CTA to Science page for deep dive

**File:** `templates/index.json` (homepage template)

---

#### 2. 3D Can Integration
**Status:** Still pending
**Priority:** Medium (visual enhancement, not critical path)

**Notes:**
- Discussed in previous meetings
- Adds interactive element to homepage
- Defer if timeline is tight

---

### Science Page Enhancements

#### 1. "75% Dehydration" Section with CTA
**Content:** "75% of adults are chronically dehydrated. Most people walk around slightly dehydrated throughout the day without realizing it, even before workout or hot day."

**Design:**
- Left side: Dehydration stat + expanded copy
- Right side: "This is why you choose Strive" solution messaging
- Strong CTA button to Shop page

**File:** `sections/science-checkerboard-fold.liquid`

---

#### 2. "Why Honey?" Section Redesign
**Current State:** Bland, doesn't pop
**Issue:**
- Boring background color
- Small font size
- Lacks visual interest
- Benefits boxes (Rich in Antioxidants, Natural Sweetness) feel flat

**Solution:**
- Make visually "sexier" - bolder colors, larger type
- Add hover effects to benefit boxes (like electrolyte bubbles)
  - Hover over "Rich in Antioxidants" → shows: "Honey is packed with flavonoids and phenolic compounds"
  - Hover over "Natural Sweetness" → shows expanded benefit
- Consider changing background image/color for contrast
- Match visual hierarchy from top of page

**Benefits of Hover Effects:**
- Adds interactivity and life to page
- Improves SEO/AEO (more indexable content with images)
- Encourages user engagement

**File:** `sections/science-honey.liquid` (already modified for object-fit: cover)

---

#### 3. Update Electrolyte Bubble Colors
**Current:** Copied from June Shine (placeholder)
**Action:** Apply Strive brand colors to sodium/potassium/magnesium bubbles

**Brand Colors:**
- Primary: Tiffany Blue (#0ABAB5)
- Secondary: Orange (#FF7A00)
- Consider color theory for 3rd electrolyte

**File:** `sections/science-electrolytes.liquid`

---

### About Us Page

#### 1. Checkerboard Design (Already Implemented ✓)
**Status:** Chris & Jack LOVE the Tiffany Blue + Orange checkerboard pattern

**Jack's Reaction:**
> "You know what's hilarious? I never told Gavin about orange. We were between this exact orange and this blue as our brand color. It looks really good having the orange be the secondary color."

**Current Structure:**
- Alternating Tiffany Blue / Orange blocks
- Creates visual interest and breaks up content
- Can be applied to other pages as needed

**File:** `sections/about-checkerboard-fold.liquid`

---

#### 2. Content Creation (In Progress)
**Missing:**
- Complete "Strive Story" narrative (top to bottom)
- Team photos
- Updated lifestyle images from recent studio shoot

**Action Plan:**
- **Tomorrow (Oct 22):** Jack & Gavin call during Jack's drive to work on story content
- Use "flow state" method: talk it out → write notes → ChatGPT polish → edit
- Chris sending photo album from studio by end of week

**Content Sections Needed:**
1. **Hero:** "We Strive Together" + mission statement
2. **Founder Story:** Jack's journey (need founder photo)
3. **Mission:** Purpose and values
4. **CTA:** "Ready to Join the Strive Movement?"

**Where to Add Surf Video:**
Jack wants surf footage integrated: "Born and raised in San Diego" vibe

---

#### 3. Layout Consolidation
**Issue:** Currently looks "halfway built" with empty spaces

**Chris's Feedback:**
> "If we don't have something to put in one of these spaces, let's consolidate. Take it off until it's ready to go on. Maybe just so it doesn't look like halfway built."

**Action:**
- Remove empty placeholder sections
- Tighten up spacing
- Only show completed content
- Iterate as photos/copy arrives

---

### Product Pages

#### 1. Nutrition Facts Panel Updates
**Data Corrections Needed:**

| Product | Current | Correct |
|---------|---------|---------|
| Peach Perfect | Total Carbs: ?? / Sugars: ?? | **10g carbs / 8g sugars** |
| Tropical Recharge | Total Carbs: ?? / Sugars: ?? | **10g carbs / 8g sugars** |

**Technical:**
- Diagrams created in Figma
- Imported as web fonts (editable, not images)
- Can be updated in code

**Files:**
- `sections/product-nutrition-label.liquid`
- Individual product templates

---

#### 2. Image Quality Check
**Issue:** Peach image appears "too short" on product page

**Action:**
- Verify image dimensions across all products
- Ensure consistent aspect ratios
- Check mobile responsiveness

---

### Footer Social Media Widget

#### Status: ✅ Complete and Approved
**Jack's Reaction:** "I like it. Yeah."

**Features:**
- iPhone-style frame with background slideshow
- Social icons (Instagram, Twitter, Facebook, TikTok, YouTube, LinkedIn)
- Links tested and working in Shopify
- Desktop: Horizontal layout (2-column grid)
- Mobile: May need simplification (show icons only, not full iPhone?)

**Gavin's Question:**
> "For mobile, we can always make it responsive so it just shows the icons rather than the entire mobile design. Totally up to you guys."

**Decision:** Keep as-is for now, monitor mobile UX

**Files:**
- `assets/footer-phone.css`
- `assets/footer-phone.js`
- `snippets/footer-phone.liquid`

---

## Phase 3: Navigation & Store Locator (P1 - Ongoing)

### Store Locator Integration
**Priority:** CRITICAL for retail strategy

**Chris's Strategic Context:**
> "Retail sales should outpace direct to consumer sales within the next 12 months. In the long run, if we look 3 years in the future, retail is going to destroy direct to consumer every day of the week."

**Implementation Requirements:**

#### 1. Header Navigation Update
**Current:** About Us → (no dropdown)
**Proposed:** About Us → dropdown with:
- Our Story
- **Store Locator** ← NEW

**Alternative:** Standalone "Find Us" or "Store Locator" in main nav

---

#### 2. Store Locator as CTA (Multi-Page)
**Add to:**
- Homepage (right under product showcase section)
- Product pages (below Add to Cart)
- About Us page
- Science page
- Collection/Shop page

**CTA Copy Ideas:**
- "Find Strive Near You"
- "Available at These Retailers"
- "Shop Local"

---

#### 3. Future-Proofing for Retail Expansion
**Current:** Only in San Diego
**Future:** National distribution

**Design Considerations:**
- Scalable store locator (works for 10 stores or 1,000)
- Highlight major retailers (Target, Whole Foods, etc.)
- Consider June Shine / Unwell Hydration model: Shop page → Store Locator (primary)

**Timeline:**
- Chris providing store locator data by **Friday, Oct 25**
- Gavin to implement next week

---

## Phase 4: SEO & Performance Optimization (P2 - Future)

### SEO & AEO Strategy
**Gavin's Recommendation:**

> "Having images on hover helps with being able to show up higher in searches. SEO and there's AEO, which is like more of the ChatGPT version of search, which is fairly new."

**Action Items:**
1. Add alt text to all images
2. Implement hover effects with descriptive text
3. Optimize for AI search engines (AEO)
4. Ensure fast load times
5. Mobile-first indexing compliance

**Keywords to Target:**
- "hydration soda"
- "electrolyte soda"
- "honey sweetened soda"
- "healthy soda alternative"

---

## Compensation & Ongoing Work Discussion

### Topics for Tomorrow's Call (Oct 22)
**Attendees:** Jack & Gavin

**Agenda:**
1. Review hourly rate / project-based pricing for ongoing work
2. Discuss long-term retention (month-to-month arrangement)
3. Set expectations for Strive maintenance vs. new projects
4. Align on availability for November 1st Hive deadline

**Gavin's Perspective:**
> "I'm still so fresh in this business that I'm trying to figure out how to put like, I don't want to ever throw a number out where it's like, what the h***? And so I wanted to ask you guys for the work that's been done and moving forward."

**Jack's Response:**
> "Chris and I can discuss it and then why don't you and I talk about it tomorrow as well. Obviously we want this to be more long term."

---

## Timeline & Milestones

### Week of October 21-25, 2025
- **Mon-Thu:** Gavin focused on other client deadlines
- **Friday, Oct 25:**
  - ✅ UI/UX fixes complete (buttons, fonts, responsiveness)
  - ✅ Chris sends photo album from studio
  - ✅ Chris sends store locator data

### Week of October 28 - November 1, 2025
- **Full Week:** Gavin dedicates entire week to Strive polish
- **Ongoing:** Content refinement with Jack (About Us story, copy updates)
- **By Nov 1:** Strive site polished and ready for prime time

### Ongoing
- Store locator integration (as soon as data arrives)
- 3D can implementation (when bandwidth allows)
- SEO/AEO optimization
- Performance monitoring

---

## Files Reference

### Key Files to Modify

**Homepage:**
- `templates/index.json` - Main homepage template
- `sections/gs-hero.liquid` - Hero video section (white space bug)

**Science Page:**
- `sections/science-checkerboard-fold.liquid` - 75% dehydration section
- `sections/science-honey.liquid` - Why honey section (make sexier)
- `sections/science-electrolytes.liquid` - Bubble colors update

**About Us:**
- `templates/page.about.json` - About Us page template
- `sections/about-checkerboard-fold.liquid` - Checkerboard sections

**Product Pages:**
- `sections/product-nutrition-label.liquid` - Nutrition facts (update carbs/sugars)
- `templates/product.json` - Product page template (scroll bug)

**Global:**
- `snippets/global-fonts.liquid` - Font family imports
- `assets/app.css` - Global styles, button components
- `sections/header.liquid` - Navigation (store locator dropdown)

**Footer:**
- `sections/footer.liquid` - Footer with phone widget
- `snippets/footer-phone.liquid` - Social media iPhone widget
- `assets/footer-phone.css` - Widget styles

---

## Meeting Notes System

**New Protocol:** Use Motion AI notetaker in all meetings

**Benefits:**
- Captures all action items automatically
- Creates timestamped transcript
- Reduces note-taking burden
- Easy reference for follow-ups

**Gavin's Suggestion:**
> "Motion AI notetaker. What we can do is just make sure that we have each time, maybe even takes 15 minutes, whatever it is, just run through the list."

---

## Success Metrics

**Definition of "Done":**
- [ ] All P0 responsiveness bugs fixed
- [ ] Complete design consistency (buttons, fonts, headings)
- [ ] About Us page fully populated with real content
- [ ] Store locator integrated and functional
- [ ] All nutrition facts accurate
- [ ] Homepage messaging reflects "soda-first" approach
- [ ] Science page visually engaging with hover effects
- [ ] Mobile experience optimized
- [ ] Site loads fast (<3 seconds)
- [ ] SEO fundamentals in place

**Quality Check:**
- Site looks professional and cohesive across all pages
- Brand identity (Tiffany Blue + Orange) consistent
- Typography hierarchy clear and intentional
- All interactive elements functional
- Content tells compelling Strive story
- Easy path to purchase (DTC + retail locator)

---

## Questions for Resolution

1. **Mobile Footer:** Keep full iPhone widget or simplify to icons only?
2. **3D Can:** Priority level and timeline?
3. **Store Locator:** Dropdown nav vs. standalone nav item?
4. **About Us Nav:** Keep "About Us" or rename to "Our Story"?
5. **Poly Sans Mono:** Which sections get the sciency font? (Just nutrition or broader?)

---

## Next Steps (Immediate)

1. ✅ Review this POA with Jack & Chris
2. ✅ Prioritize any items missed in this document
3. ✅ Jack & Gavin call tomorrow (Oct 22) - About Us story content
4. ✅ Gavin: Fix P0 bugs by Friday (Oct 25)
5. ✅ Chris: Send photo album + store locator data by Friday
6. ✅ Schedule next review meeting for early next week

---

## Appendix: Brand Assets Shared

**Chris sent to Gavin:**
- Drive Soda Toolkit (Dropbox) - All brand fonts
- Poly Sans Mono font files (for sciency typeface)
- Brand book (reference for font hierarchy)

**Pending from Chris:**
- Photo album from studio shoot (by Oct 25)
- Store locator data (by Oct 25)

---

**Document Owner:** Gavin McNamara (Developer)
**Stakeholders:** Jack Espy (Founder), Chris Clark (CMO)
**Last Updated:** October 22, 2025
**Next Review:** Week of October 28, 2025
