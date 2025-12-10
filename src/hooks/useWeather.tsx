import axios from "axios";
import type { SearchType } from "../types";
import z from "zod";
import { useMemo, useState } from "react";
import { toast } from "sonner";

const weatherSchema = z.object({
  name: z.string(),
  main: z.object({
    temp: z.number(),
    temp_max: z.number(),
    temp_min: z.number(),
  }),
});

export type WeatherSchemaType = z.infer<typeof weatherSchema>;

const initialWeatherState: WeatherSchemaType = {
  name: "",
  main: { temp: 0, temp_max: 0, temp_min: 0 },
};

export const useWeather = () => {
  const [weather, setWeather] =
    useState<WeatherSchemaType>(initialWeatherState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (search: SearchType) => {
    const apiKey = import.meta.env.VITE_API_KEY;

    try {
      setLoading(true);
      setWeather(initialWeatherState);

      const geoURL = `https://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${apiKey}`;
      const { data } = await axios(geoURL);

      if (!data[0]) {
        throw new Error("No se encontraron resultados");
      }

      const lat = data[0].lat;
      const lon = data[0].lon;

      const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
      const { data: weatherData } = await axios(weatherURL);

      const result = weatherSchema.safeParse(weatherData);

      if (result.success) {
        setWeather(result.data);
      } else {
        setError("Error en validación");
      }
    } catch (error) {
      setError(` ${error}`);
      toast.error(`${error}`);
    } finally {
      setLoading(false);
    }
  };

  const hasWeatherData = useMemo(() => weather.name, [weather]);
  return {
    fetchWeather,
    weather,
    hasWeatherData,
    loading,
    error,
    initialWeatherState,
  };
};
