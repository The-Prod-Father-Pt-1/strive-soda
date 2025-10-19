/**
 * PLAYWRIGHT TEST: Hero Section Text Cutoff Issue
 *
 * Issue: "Meet the Soda" text gets cut off on MacBook Pro (medium desktop widths)
 * Reported by: Chris Clark (CMO) on Oct 17, 2025
 *
 * Problem: On MacBook Pro screens that aren't fully expanded rail-to-rail,
 * the hero heading text "MEET THE SODA FOR MOVERS, SHAKERS, DOERS" gets cut off.
 *
 * Test Strategy:
 * 1. Test at common MacBook Pro widths (1280px, 1440px, 1512px, 1680px)
 * 2. Verify text is fully visible without overflow
 * 3. Check for horizontal scrolling (should not exist)
 * 4. Validate responsive text sizing works correctly
 */

const { chromium } = require('playwright');

async function testHeroTextCutoff() {
  console.log('\n🧪 TESTING: Hero Section Text Cutoff Issue\n');
  console.log('=' .repeat(70));

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  const url = 'http://127.0.0.1:9292/';

  // Common MacBook Pro widths (not fully expanded)
  const testWidths = [
    { width: 1024, name: 'Small Desktop (1024px)' },
    { width: 1280, name: 'MacBook Pro 13" (1280px)' },
    { width: 1440, name: 'MacBook Pro 14" partial (1440px)' },
    { width: 1512, name: 'MacBook Pro 14" full (1512px)' },
    { width: 1680, name: 'MacBook Pro 15" (1680px)' }
  ];

  const results = [];

  for (const { width, name } of testWidths) {
    console.log(`\n📱 Testing: ${name}`);
    console.log('-'.repeat(70));

    // Set viewport size
    await page.setViewportSize({ width, height: 900 });

    // Navigate to homepage
    await page.goto(url, { waitUntil: 'load', timeout: 10000 });

    // Wait for hero section to load
    await page.waitForSelector('.hero', { state: 'visible' });

    // Find the hero heading (mobile version is used on desktop too)
    const heroHeading = await page.locator('.hero-h1--mobile').first();

    // Check if heading exists
    const headingExists = await heroHeading.count() > 0;

    if (!headingExists) {
      console.log('❌ Hero heading not found!');
      results.push({
        width,
        name,
        pass: false,
        reason: 'Heading element not found'
      });
      continue;
    }

    // Get heading text
    const headingText = await heroHeading.textContent();
    console.log(`  Heading text: "${headingText}"`);

    // Get heading bounding box
    const headingBox = await heroHeading.boundingBox();

    if (!headingBox) {
      console.log('❌ Could not get heading bounding box');
      results.push({
        width,
        name,
        pass: false,
        reason: 'Could not measure heading'
      });
      continue;
    }

    // Get container (content-wrapper) bounding box
    const container = await page.locator('.hero .content-wrapper').first();
    const containerBox = await container.boundingBox();

    if (!containerBox) {
      console.log('❌ Could not get container bounding box');
      results.push({
        width,
        name,
        pass: false,
        reason: 'Could not measure container'
      });
      continue;
    }

    // Calculate measurements
    const headingWidth = headingBox.width;
    const containerWidth = containerBox.width;
    const headingRight = headingBox.x + headingBox.width;
    const containerRight = containerBox.x + containerBox.width;

    // Check if text overflows container
    const overflowsContainer = headingRight > containerRight;

    // Check for horizontal scroll
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = width;
    const hasHorizontalScroll = bodyWidth > viewportWidth;

    // Check computed styles
    const styles = await heroHeading.evaluate(el => {
      const computed = window.getComputedStyle(el);
      return {
        fontSize: computed.fontSize,
        overflow: computed.overflow,
        textOverflow: computed.textOverflow,
        whiteSpace: computed.whiteSpace,
        maxWidth: computed.maxWidth
      };
    });

    console.log(`  Heading width: ${headingWidth.toFixed(2)}px`);
    console.log(`  Container width: ${containerWidth.toFixed(2)}px`);
    console.log(`  Font size: ${styles.fontSize}`);
    console.log(`  Overflow: ${styles.overflow}`);
    console.log(`  Text overflow: ${styles.textOverflow}`);
    console.log(`  White space: ${styles.whiteSpace}`);

    // Determine if test passes
    const textCutoff = overflowsContainer || hasHorizontalScroll;
    const pass = !textCutoff;

    if (pass) {
      console.log(`  ✅ PASS: Text fits within container`);
    } else {
      if (overflowsContainer) {
        console.log(`  ❌ FAIL: Text overflows container by ${(headingRight - containerRight).toFixed(2)}px`);
      }
      if (hasHorizontalScroll) {
        console.log(`  ❌ FAIL: Page has horizontal scroll (body: ${bodyWidth}px, viewport: ${viewportWidth}px)`);
      }
    }

    results.push({
      width,
      name,
      pass,
      headingWidth,
      containerWidth,
      fontSize: styles.fontSize,
      overflow: overflowsContainer,
      horizontalScroll: hasHorizontalScroll
    });
  }

  // Summary
  console.log('\n' + '='.repeat(70));
  console.log('📊 TEST SUMMARY');
  console.log('='.repeat(70));

  const passCount = results.filter(r => r.pass).length;
  const failCount = results.filter(r => !r.pass).length;

  results.forEach(result => {
    const status = result.pass ? '✅ PASS' : '❌ FAIL';
    console.log(`${status} - ${result.name} (${result.width}px)`);
    if (!result.pass) {
      if (result.overflow) {
        console.log(`  → Text overflows container`);
      }
      if (result.horizontalScroll) {
        console.log(`  → Page has horizontal scroll`);
      }
    }
  });

  console.log('\n' + '-'.repeat(70));
  console.log(`✅ Passed: ${passCount}/${results.length}`);
  console.log(`❌ Failed: ${failCount}/${results.length}`);
  console.log('='.repeat(70) + '\n');

  await browser.close();

  return {
    totalTests: results.length,
    passed: passCount,
    failed: failCount,
    results
  };
}

// Run the test
testHeroTextCutoff()
  .then(summary => {
    if (summary.failed > 0) {
      console.log('⚠️  ISSUE CONFIRMED: Hero text cutoff detected at some screen widths\n');
      process.exit(1);
    } else {
      console.log('✅ ALL TESTS PASSED: No text cutoff issues detected\n');
      process.exit(0);
    }
  })
  .catch(error => {
    console.error('❌ TEST ERROR:', error);
    process.exit(1);
  });
