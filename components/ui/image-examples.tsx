import { LazyImage } from "./lazy-image";

// Example component showing different placeholder behaviors
export const ImageExamples = () => {
  return (
    <div className="space-y-8 p-6">
      <h2 className="text-2xl font-bold">LazyImage Placeholder Examples</h2>

      {/* Example 1: With Blur Placeholder - Shows blur, no skeleton */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">1. With Blur Placeholder</h3>
        <p className="text-sm text-gray-600">
          Shows Next.js blur placeholder, no skeleton overlay
        </p>
        <LazyImage
          src="https://ik.imagekit.io/cascades/cascades/home/Pic1.png"
          alt="Example with blur"
          width={300}
          height={200}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          className="border rounded-lg"
        />
      </div>

      {/* Example 2: Without Blur Placeholder - Shows skeleton */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">2. Without Blur Placeholder</h3>
        <p className="text-sm text-gray-600">
          Shows custom skeleton overlay during loading
        </p>
        <LazyImage
          src="https://ik.imagekit.io/cascades/cascades/Group-1-o9huxdwud2prv6i94n374a0uhto5mn9pg7eokvt8lq.png"
          alt="Example without blur"
          width={300}
          height={200}
          className="border rounded-lg"
        />
      </div>

      {/* Example 3: Priority Loading */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">
          3. Priority Loading (Above-the-Fold)
        </h3>
        <p className="text-sm text-gray-600">
          Loads immediately, no lazy loading
        </p>
        <LazyImage
          src="https://ik.imagekit.io/cascades/cascades/Cascades%20School.png"
          alt="Priority example"
          width={300}
          height={100}
          priority={true}
          className="border rounded-lg"
        />
      </div>
    </div>
  );
};
