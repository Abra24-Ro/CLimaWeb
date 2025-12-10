export type SearchType = {
  city: string;
  country: string;
};

export type CountryType = {
  name: string;
  code: string;
};

export type WeatherType = {
  name: string;
  main: {
    // feels_like: number;
    // grnd_level: number;
    // humidity: number;
    // pressure: number;
    // sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
};
