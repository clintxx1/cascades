# Lazy Loading Implementation Guide

This guide explains how to implement lazy loading for all images in your Next.js application.

## What's Already Implemented

### 1. Custom LazyImage Component
- **Location**: `components/ui/lazy-image.tsx`
- **Features**:
  - Built-in loading state with skeleton (only when no blur placeholder)
  - Automatic priority detection
  - Smooth opacity transitions
  - Smart blur placeholder handling
  - **NEW**: Only shows skeleton when no blur placeholder is provided

### 2. Enhanced Next.js Configuration
- **Location**: `next.config.mjs`
- **Features**:
  - WebP and AVIF format support
  - Optimized device and image sizes
  - SVG support with security policies
  - Minimum cache TTL settings

### 3. Image Utility Functions
- **Location**: `lib/image-utils.ts`
- **Features**:
  - Priority detection for above-the-fold images
  - Responsive image prop generation
  - Optimal size calculation
  - **NEW**: Smart placeholder handling utilities

## Smart Placeholder Handling

### How It Works Now:

1. **With Blur Placeholder** (`blurDataURL` provided):
   - Shows the blur placeholder from Next.js
   - **No skeleton overlay** (cleaner UX)
   - Smooth transition to full image

2. **Without Blur Placeholder** (no `blurDataURL`):
   - Shows custom skeleton overlay
   - Provides visual feedback during loading
   - Smooth opacity transition

### Usage Examples:

#### With Blur Placeholder (Recommended)
```typescript
import { LazyImage } from "@/components/ui/lazy-image";

<LazyImage
  src="/hero-image.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority={true}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

#### Without Blur Placeholder (Fallback)
```typescript
<LazyImage
  src="/content-image.jpg"
  alt="Content"
  width={300}
  height={200}
  // No blurDataURL = shows skeleton
/>
```

#### Using Utility Function
```typescript
import { createLazyImageProps } from "@/lib/image-utils";

const imageProps = createLazyImageProps(
  "/image.jpg",
  "Description",
  300,
  200,
  "custom-class",
  {
    priority: true,
    blurDataURL: "data:image/jpeg;base64,..."
  }
);

<LazyImage {...imageProps} />
```

## How to Update Remaining Files

### Option 1: Manual Update (Recommended for Control)

1. **Replace Import Statement**:
   ```typescript
   // Before
   import Image from "next/image";
   
   // After
   import { LazyImage } from "@/components/ui/lazy-image";
   ```

2. **Replace Image Components**:
   ```typescript
   // Before
   <Image
     src="/path/to/image.jpg"
     alt="Description"
     width={300}
     height={200}
   />
   
   // After
   <LazyImage
     src="/path/to/image.jpg"
     alt="Description"
     width={300}
     height={200}
     priority={shouldPrioritizeImage(src)} // Optional
   />
   ```

3. **Add Priority for Above-the-Fold Images**:
   ```typescript
   // For hero, banner, logo, navigation images
   <LazyImage
     src="/hero-image.jpg"
     alt="Hero"
     width={1200}
     height={600}
     priority={true}
   />
   ```

### Option 2: Automated Script

Run the provided script to automatically update all files:

```bash
node scripts/update-images.js
```

**Note**: Review all changes after running the script.

## Priority Guidelines

### High Priority (Above-the-Fold)
- Hero/banner images
- Navigation logos
- Main content images visible on page load
- Critical UI elements

### Low Priority (Below-the-Fold)
- Gallery images
- Content images further down the page
- Decorative images
- Background images

## Best Practices

### 1. Use Blur Placeholders When Possible
```typescript
// Better UX - shows blur while loading
<LazyImage
  src="/image.jpg"
  alt="Description"
  width={300}
  height={200}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### 2. Use Appropriate Sizes
```typescript
// Responsive sizes
sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
```

### 3. Provide Meaningful Alt Text
```typescript
alt="Detailed description of the image content"
```

### 4. Optimize Image Sources
- Use WebP/AVIF formats when possible
- Provide multiple sizes for responsive design
- Use CDN for better delivery

## Testing Your Implementation

### 1. Check Network Tab
- Open browser dev tools
- Go to Network tab
- Refresh page
- Verify images load progressively

### 2. Test Performance
- Use Lighthouse for performance audit
- Check Core Web Vitals
- Monitor Largest Contentful Paint (LCP)

### 3. Test on Different Devices
- Mobile devices
- Slow network conditions
- Different screen sizes

### 4. Test Placeholder Behavior
- Verify blur placeholders show correctly
- Check skeleton only appears when no blur
- Test smooth transitions

## Troubleshooting

### Images Not Loading
1. Check if image URLs are correct
2. Verify Next.js image configuration
3. Check browser console for errors

### Performance Issues
1. Ensure priority is set correctly
2. Optimize image sizes
3. Use appropriate formats (WebP/AVIF)

### Layout Shift
1. Always specify width and height
2. Use aspect ratio containers
3. Test on different screen sizes

### Placeholder Issues
1. Verify `blurDataURL` is valid base64
2. Check placeholder prop is set correctly
3. Ensure skeleton only shows when needed

## Files Already Updated

The following files have been updated with LazyImage:
- `components/card.tsx`
- `components/navbar.tsx`
- `components/communityCard.tsx`
- `app/_components/firstSection.tsx`

## Next Steps

1. **Update remaining files** using the manual or automated approach
2. **Test thoroughly** on different devices and network conditions
3. **Monitor performance** using browser dev tools and Lighthouse
4. **Optimize further** based on performance metrics
5. **Add blur placeholders** to critical images for better UX

## Additional Resources

- [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)
- [Web Vitals](https://web.dev/vitals/)
- [Image Optimization Best Practices](https://web.dev/fast/#optimize-your-images) 