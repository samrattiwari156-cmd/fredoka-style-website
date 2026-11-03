import { Camera } from "lucide-react";
import { media } from "@/assets/media";
import { BrushBand } from "./BrushBand";

const PHOTOS = [
  media.group,
  media.food1,
  media.charity2,
  media.care1,
  media.elderly1,
  media.village,
  media.medical,
  media.child,
  media.crowd,
  media.volunteer3,
];

export function Gallery() {
  return (
    <section className="bg-white">
      <div className="bg-brand-maroon pb-48 pt-4 text-center">
        <BrushBand className="text-white" />
        <p className="flex items-center justify-center gap-2 font-script text-3xl text-white md:text-4xl">
          <Camera className="h-6 w-6" strokeWidth={1.6} /> Our Gallery
        </p>
        <h2 className="mt-1 font-display text-4xl font-semibold text-brand-yellow md:text-5xl">
          Gallery
        </h2>
      </div>
      <div className="mx-auto -mt-40 max-w-7xl px-4 pb-20">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {PHOTOS.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl shadow-md">
              <img
                src={src}
                alt={`Saanidhya Care Foundation activity ${(i + 1).toString()}`}
                loading="lazy"
                className="h-40 w-full object-cover transition duration-500 hover:scale-110 md:h-44"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
