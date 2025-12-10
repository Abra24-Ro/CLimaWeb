import { CloudSun } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-b border-white/20 flex items-center gap-3">
      <CloudSun className="w-6 h-6 text-white drop-shadow" />
      <h1 className="text-xl font-semibold text-white tracking-wide">
       Buscar Clima
      </h1>
    </header>
  );
};
