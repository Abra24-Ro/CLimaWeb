import { Form } from "../components/form/Form";
import { WeatherDetails } from "../components/weather/WeatherDetails";
import { useWeather } from "../hooks/useWeather";
import { CloudOff } from "lucide-react";

export const Main = () => {
  const { fetchWeather, weather, hasWeatherData, loading } = useWeather();


  return (
    <main
      className="
        flex flex-col 
        md:flex-row 
        items-center 
        md:items-start 
        justify-center 
        gap-12 
        pt-28 
        px-6 
        min-h-[calc(100vh-80px)]
        w-full
      "
    >
      
      {/* Formulario */}
      <section className="w-full max-w-md animate-fadeIn">
        <Form fetchWeather={fetchWeather} loading={loading} />
      </section>

      {/* Resultados del clima */}
      <section className="w-full max-w-xl flex justify-center animate-fadeIn delay-150">
        {hasWeatherData ? (
          <WeatherDetails weather={weather} loading={loading} />
        ) : (
          <div className="text-center bg-white/10 backdrop-blur-md px-8 py-8 rounded-2xl border border-white/20 shadow-lg flex flex-col items-center gap-3">
            {/* Ícono cuando no hay clima */}
            <CloudOff className="w-12 h-12 text-white/80" />

            <p className="text-white text-lg font-medium tracking-wide">
              No hay datos del clima aún
            </p>

            <p className="text-white/70 text-sm">
              Ingresa una ciudad para comenzar.
            </p>
          </div>
        )}
      </section>
    </main>
  );
};
