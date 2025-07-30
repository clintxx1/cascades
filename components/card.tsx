import { lato } from "@/lib/fonts";
import { CardProps } from "@/types";
import { LazyImage } from "@/components/ui/lazy-image";
import { shouldPrioritizeImage } from "@/lib/image-utils";

export const Card = ({ icon, title, description }: CardProps) => {
  const priority = shouldPrioritizeImage(icon);

  return (
    <div className="grid lg:place-items-start place-items-center gap-3">
      <LazyImage
        src={icon}
        alt={title}
        width={64}
        height={64}
        priority={priority}
        className="h-16 w-16 object-contain"
      />
      <p className="text-3xl font-semibold">{title}</p>
      <p
        className={`${lato.className} lg:text-[20px] lg:leading-[36px] leading-8 h-[144px] lg:text-start text-center`}
      >
        {description}
      </p>
    </div>
  );
};
