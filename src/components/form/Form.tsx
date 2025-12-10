import { countries } from "../../data/countries.data";
import { Loader, Search } from "lucide-react";
import React, { useState } from "react";
import type { SearchType } from "../../types";
import { toast } from "sonner";

type Props = {
  fetchWeather: (search: SearchType) => Promise<void>;
  loading: boolean;
};

export const Form = ({ fetchWeather, loading }: Props) => {
  const [search, setSearch] = useState<SearchType>({
    city: "",
    country: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(search).includes("")) {
      toast.error("Por favor, completa todos los campos");
    }

    fetchWeather(search);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 space-y-6"
    >
      {/* Input ciudad */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="city"
          className="text-white text-sm font-medium tracking-wide"
        >
          Ciudad
        </label>

        <input
          type="text"
          id="city"
          name="city"
          value={search.city}
          onChange={handleChange}
          placeholder="Ejemplo: Madrid"
          className="px-4 py-3 rounded-xl bg-white/20 text-blue-400 placeholder-gray-500 
                     outline-none focus:ring-2 focus:ring-white/50 border border-white/30"
        />
      </div>

      {/* Select país */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="country"
          className="text-white text-sm font-medium tracking-wide"
        >
          País
        </label>

        <select
          value={search.country}
          name="country"
          id="country"
          onChange={handleChange}
          className="px-4 py-3 rounded-xl bg-white/20 text-white 
                     outline-none focus:ring-2 focus:ring-white/50 border border-white/30"
        >
          <option value="" className="text-black">
            -- Selecciona un país --
          </option>

          {countries.map((country) => (
            <option
              key={country.code}
              value={country.code}
              className="text-black"
            >
              {country.name}
            </option>
          ))}
        </select>
      </div>

      {/* Botón */}
      <button
        type="submit"
        className="cursor-pointer w-full flex items-center justify-center gap-2 bg-white/20 
                   text-white py-3 rounded-xl font-medium tracking-wide
                   hover:bg-white/30 transition border border-white/30"
      >
        {loading ? (
          <Loader className="w-5 h-5 animate-spin" />
        ) : (
          <Search className="w-5 h-5" />
        )}
        {loading ? "Buscando..." : "Buscar"}
      </button>
    </form>
  );
};
