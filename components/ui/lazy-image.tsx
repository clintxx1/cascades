"use client";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface LazyImageProps extends Omit<ImageProps, "loading"> {
  priority?: boolean;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
}

export const LazyImage = ({
  priority = false,
  placeholder = "empty",
  blurDataURL,
  className,
  ...props
}: LazyImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  // Only show skeleton if there's no blur placeholder
  const shouldShowSkeleton = !blurDataURL && placeholder !== "blur";

  return (
    <div className={`relative overflow-hidden ${className || ""}`}>
      <Image
        {...props}
        loading={priority ? "eager" : "lazy"}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        onLoad={() => setIsLoading(false)}
        className={`transition-opacity duration-300 ${
          isLoading && shouldShowSkeleton ? "opacity-0" : "opacity-100"
        } ${className || ""}`}
      />
      {isLoading && shouldShowSkeleton && (
        <div className="absolute inset-0 bg-gray-200/50 animate-pulse" />
      )}
    </div>
  );
};
