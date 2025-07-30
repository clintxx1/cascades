import { StaticImageData } from "next/image";

// Utility function to determine if an image should be prioritized (above the fold)
export const shouldPrioritizeImage = (
  src: string | StaticImageData
): boolean => {
  // Prioritize images that are likely above the fold
  const priorityPatterns = [
    "hero",
    "banner",
    "logo",
    "nav",
    "header",
    "main",
    "primary",
  ];

  const srcString = typeof src === "string" ? src : src.src;
  return priorityPatterns.some((pattern) =>
    srcString.toLowerCase().includes(pattern)
  );
};

// Utility function to generate blur data URL for placeholder
export const generateBlurDataURL = (width: number, height: number): string => {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    ctx.fillStyle = "#f3f4f6";
    ctx.fillRect(0, 0, width, height);
  }

  return canvas.toDataURL();
};

// Utility function to get optimal image sizes based on viewport
export const getOptimalImageSizes = (containerWidth: number): number[] => {
  const sizes = [containerWidth];

  // Add common breakpoints
  if (containerWidth > 768) sizes.push(768);
  if (containerWidth > 1024) sizes.push(1024);
  if (containerWidth > 1440) sizes.push(1440);

  return sizes;
};

// Utility function to create responsive image props
export const createResponsiveImageProps = (
  src: string | StaticImageData,
  alt: string,
  width: number,
  height: number,
  className?: string
) => {
  const priority = shouldPrioritizeImage(src);

  return {
    src,
    alt,
    width,
    height,
    className,
    loading: priority ? ("eager" as const) : ("lazy" as const),
    priority,
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  };
};

// Utility function to create LazyImage props with proper placeholder handling
export const createLazyImageProps = (
  src: string | StaticImageData,
  alt: string,
  width: number,
  height: number,
  className?: string,
  options?: {
    priority?: boolean;
    blurDataURL?: string;
    placeholder?: "blur" | "empty";
  }
) => {
  const priority = options?.priority ?? shouldPrioritizeImage(src);
  const blurDataURL = options?.blurDataURL;
  const placeholder = blurDataURL ? "blur" : options?.placeholder ?? "empty";

  return {
    src,
    alt,
    width,
    height,
    className,
    priority,
    placeholder,
    blurDataURL,
    loading: priority ? ("eager" as const) : ("lazy" as const),
  };
};
