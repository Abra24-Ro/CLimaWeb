import { Cloud } from "lucide-react";

interface SpinnerProps {
  text?: string;
}

export const Spinner = ({ text = "Loading..." }: SpinnerProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4">
      {/* Icono de nube con animación */}
      <Cloud className="w-12 h-12 animate-pulse-slow text-white" />

      {/* Texto */}
      <span className="text-white text-sm font-bold tracking-wide user-select-none">{text}</span>
    </div>
  );
};
