# Comet Boards Theme - 1:1 PDF Design Implementation Guide

## Current Implementation Status

✅ **Completed:**
- Neon pink color system (#FF1493) fully implemented
- Hero section styling with geometric accents
- Shape cards section with neon hover effects
- Featured products grid section created
- Form section with neon pink button styling
- Product card hover effects with lift animation
- All typography enhanced for bold visual hierarchy
- Input field styling with subtle shadows
- Button hover effects with layered glow shadows

## Remaining Tasks

### 1. Hero Section - Astronaut Image ⏳
**Current:** Snowboarder image (`snowboarder-in-the-middle-of-a-flip-mountain-in-background.png`)
**Needed:** Astronaut/space-themed image

**Steps:**
1. Source or download an astronaut image matching the PDF design
   - Recommended sources:
     - [Freepik - Neon Astronaut](https://www.freepik.com/free-photos-vectors/neon-astronaut)
     - [Rawpixel - Astronaut PNG](https://www.rawpixel.com/search/astronaut%20transparent)
     - [Adobe Stock - Neon Space](https://stock.adobe.com/search?k=neon+space)

2. Look for:
   - Modern/neon aesthetic
   - PNG with transparency (preferred)
   - High resolution (1920x1080 minimum)
   - Space/astronaut themed

3. Upload to Shopify:
   - Go to Shopify Admin → Settings → Files
   - Upload the image
   - Note the filename

4. Update `/templates/index.json`:
   - Find line 48: `"image": "shopify://shop_images/snowboarder-in-the-middle-of-a-flip-mountain-in-background.png"`
   - Replace with: `"image": "shopify://shop_images/[your-astronaut-image-name].png"`

### 2. Featured Products Section - Blue Snowboards ⏳
**Current:** Configured to pull from "all" collection
**Needed:** 4 blue snowboard product images matching PDF design

**Option A: Use Existing Products (Recommended)**
1. Create/update 4 products in your Shopify store with blue snowboard images
2. Tag them with a collection or ensure they appear first in your product list
3. The featured grid will automatically display them

**Option B: Use Placeholder Images**
1. Create or download 4 blue snowboard images matching the PDF style
2. Upload to Shopify as product images
3. Create products with these images

**Option C: Use Stock Images**
- Recommended sources for blue snowboard/ski images:
  - [Unsplash - Snowboard](https://unsplash.com/s/photos/snowboard)
  - [Pexels - Snowboard](https://www.pexels.com/search/snowboard/)
  - [Pixabay - Blue Snowboard](https://pixabay.com/images/search/snowboard/)

**Steps to Configure:**
1. Ensure you have 4 products with blue snowboard images
2. The featured grid at line 173-188 in `/templates/index.json` pulls from "all" collection
3. Products will display automatically (first 4 by default)

## Design Elements Summary

### Color Scheme
- **Neon Pink (Primary Accent):** #FF1493
  - Used for: buttons, hover states, borders, glows
- **Dark Background (Shape Cards):** #252528
  - Light tan text: #ccc8be
- **Light Background (Form/Products):** #f0ede8 / #f5f5f4
  - Dark text: #302e35

### Typography
- **Headers:** Oswald font (140% scale)
- **Body:** Figtree font (100% scale)
- **All section titles:** Weight 800, uppercase, letter-spacing -0.02em to -0.03em

### Interactive Effects
All transitions use `0.3-0.4s ease` for smooth animations

**Button Hover:**
- Background: Neon pink (#FF1493)
- Shadow: `0 8px 30px rgba(255, 20, 147, 0.5), 0 0 25px rgba(255, 20, 147, 0.4)`
- Transform: `translateY(-3px)` (lift effect)

**Card Hover:**
- Border: Neon pink
- Shadow: `0 8px 32px rgba(255, 20, 147, 0.35-0.4)`
- Transform: `translateY(-4px)` (lift effect)
- Image scale: `1.05x` (zoom effect)

**Input Focus:**
- Border: Neon pink (#FF1493)
- Shadow: `0 0 0 3px rgba(255, 20, 147, 0.2)`

### Layout
- **Desktop:** 4-column product grid
- **Tablet:** 2-column product grid
- **Mobile:** 1-column product grid
- **Page width:** 1600px
- **Gap between elements:** 24px

## Files Modified for 1:1 PDF Match

1. **`/assets/component-neon-design.css`**
   - Neon color variables
   - Button styling with glow effects
   - Card hover effects
   - Section heading styling

2. **`/blocks/ai_gen_block_ae37131.liquid`** (Shape Cards)
   - Neon border hover effects
   - Lift animation on hover

3. **`/blocks/ai_gen_block_c29530f.liquid`** (Form)
   - Form title styling (bold, uppercase)
   - Button styling with layered shadows
   - Input field shadow depth

4. **`/sections/featured-products-grid.liquid`** (Products)
   - Product grid layout
   - Responsive column configuration
   - Card styling with neon effects

5. **`/templates/index.json`**
   - Featured products grid section added
   - Section ordering optimized

## Testing Checklist

Before final deployment, verify:

### Visual Elements
- [ ] Hero section shows astronaut/space image (once uploaded)
- [ ] "AVAILABLE NOW" heading is bold and prominent (2.8rem, weight 900)
- [ ] 4 blue snowboard product images display in grid
- [ ] All neon pink colors match (#FF1493)
- [ ] Dark backgrounds match (#252528)
- [ ] Light backgrounds match (#f5f5f4)

### Interactive Elements
- [ ] Button hover shows neon glow and lift effect
- [ ] Card hover shows neon border and glow
- [ ] Input focus shows neon pink border
- [ ] All transitions are smooth (0.3-0.4s)

### Responsive Design
- [ ] Desktop (1920px): 4 columns visible
- [ ] Tablet (768px): 2 columns visible
- [ ] Mobile (375px): 1 column visible
- [ ] Spacing and padding adapt correctly

### Performance
- [ ] Images load quickly
- [ ] No layout shifts on interaction
- [ ] Smooth animations without jank
- [ ] All CSS loads properly

## How the Featured Products Section Works

```
featured_products_grid_001 (in /templates/index.json)
├── Pulls from: "all" collection (all products)
├── Displays: First 4 products
├── Layout: 4 cols (desktop) → 2 cols (tablet) → 1 col (mobile)
├── Styling:
│   ├── Title: "AVAILABLE NOW" (uppercase, bold)
│   ├── Cards: Neon hover effects, lift animation
│   ├── Buttons: Neon pink with glow
│   └── Images: 1.05x zoom on hover
└── Product Info: Name, price, and primary image
```

To change which products appear:
1. Edit the collection in the featured grid settings
2. Or rearrange products in the "all" collection
3. Section will automatically display the first 4 products

## Next Steps

1. **Upload hero astronaut image** to Shopify
   - Update `/templates/index.json` line 48 with new image path

2. **Configure product images** in Shopify
   - Add/edit 4 products with blue snowboard images
   - Ensure they appear in the product list

3. **Test on Shopify Preview**
   - Load homepage
   - Verify all images display correctly
   - Test all hover states
   - Test responsive design

4. **Deploy to live store**
   - Once verified, deploy the theme to your live Shopify store

## Reference Files

- Main neon CSS: `/assets/component-neon-design.css`
- Shape cards: `/blocks/ai_gen_block_ae37131.liquid`
- Form section: `/blocks/ai_gen_block_c29530f.liquid`
- Products section: `/sections/featured-products-grid.liquid`
- Homepage config: `/templates/index.json`
- Theme layout: `/layout/theme.liquid`

---

All styling is ready for production. Just needs:
1. Astronaut hero image
2. Product images with blue snowboards

Once those are in place, the 1:1 PDF design match will be complete! ✨
