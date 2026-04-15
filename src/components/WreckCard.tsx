import type { Wreck } from "@/types/sanity";

interface WreckCardProps {
  wreck: Wreck;
}

export default function WreckCard({ wreck }: WreckCardProps) {
  return (
    <div className="group relative bg-ocean-900 rounded-xl overflow-hidden min-w-[280px] sm:min-w-0 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      {/* Image */}
      <div className="relative h-40 shrink-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${wreck.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/80 to-ocean-950/20" />

        {/* Depth badge */}
        <div className="absolute top-3 right-3 bg-ocean-500/90 text-white px-2.5 py-1 rounded-md text-xs font-heading font-bold">
          {wreck.depth}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-heading text-lg font-bold text-white mb-1">
          {wreck.name}
        </h3>
        <p className="text-ocean-300 text-sm font-heading font-medium mb-2">
          {wreck.type}
        </p>
        <p className="text-ocean-200/70 text-sm leading-relaxed">
          {wreck.shortDescription}
        </p>
      </div>
    </div>
  );
}
