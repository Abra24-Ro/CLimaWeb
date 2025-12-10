import type { WeatherSchemaType } from "../../hooks/useWeather";
import { Thermometer, ArrowUp, ArrowDown, MapPin } from "lucide-react";
import { formatTemperature } from "../../utils/formatCelcius";
import { Spinner } from "../spinner/Spinner";

type Props = {
  weather: WeatherSchemaType;
  loading: boolean;
};

export const WeatherDetails = ({ weather, loading }: Props) => {
  if (loading) {
    return <Spinner text="Cargando clima..." />;
  }
  return (
    <div
      className="
        w-full 
        bg-white/10 
        backdrop-blur-lg 
        border border-white/20 
        rounded-3xl 
        p-8 
        shadow-xl 
        text-white 
        animate-fadeIn
      "
    >
      {/* Nombre de la ciudad */}
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="w-6 h-6 text-white/90" />
        <h2 className="text-2xl font-semibold tracking-wide">{weather.name}</h2>
      </div>

      {/* Temperatura principal */}
      <div className="flex items-center gap-4 mb-6">
        <Thermometer className="w-10 h-10 text-white/90" />
        <p className="text-5xl font-bold">
          {formatTemperature(weather.main.temp)}°C
        </p>
      </div>

      {/* Min y Max */}
      <div className="flex flex-col gap-3 text-base">
        <div className="flex items-center gap-2">
          <ArrowUp className="w-5 h-5 text-red-300" />
          <span className="font-medium">
            Máxima: {formatTemperature(weather.main.temp_max)}°C
          </span>
        </div>

        <div className="flex items-center gap-2">
          <ArrowDown className="w-5 h-5 text-blue-300" />
          <span className="font-medium">
            Mínima: {formatTemperature(weather.main.temp_min)}°C
          </span>
        </div>
      </div>
    </div>
  );
};
