import { cn } from "@/lib/utils";

interface SatelliteIconProps {
  className?: string;
  'data-testid'?: string;
}

export function SatelliteIcon({ className, ...props }: SatelliteIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("w-8 h-8", className)}
      {...props}
    >
      {/* Satellite body */}
      <rect x="8" y="8" width="8" height="8" rx="2" />
      
      {/* Solar panels */}
      <path d="M4 8h4v8H4z" />
      <path d="M16 8h4v8h-4z" />
      
      {/* Antenna/communication dish */}
      <circle cx="12" cy="4" r="2" />
      <path d="M12 6v2" />
      
      {/* Signal waves */}
      <path d="M3 3l3 3" />
      <path d="M21 3l-3 3" />
      <path d="M3 21l3-3" />
      <path d="M21 21l-3-3" />
      
      {/* Connection lines */}
      <path d="M12 16v4" />
      <path d="M10 20h4" />
    </svg>
  );
}
