import useSWRImmutable from 'swr/immutable';
const keyWeather = process.env.NEXT_PUBLIC_WEATHER;

const keyMapbox = process.env.NEXT_PUBLIC_MAPBOX;
async function fetchApi(api: any) {
  // const apiSearch = api[0] || {};
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/` + api[0],
    {}
  );

  const data = await response.json();
  return data;
}
export function DataClima(lon: any, lat: any) {
  const api = `weather?lat=${lat}&lon=${lon}&appid=${keyWeather}`;
  const {data, isLoading} = useSWRImmutable(lon ? [api, {}] : null, fetchApi);
  return {data, isLoading};
}

export function NameCiudad(lng: any, lat: any) {
  const {data} = useSWRImmutable(
    lng & lat ? [lng, lat] : null,
    fetchApiNameCiudad
  );
  return {dataName: data};
}
async function fetchApiNameCiudad(api: any) {
  const accessToken = keyMapbox;
  const apiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${api[0]},${api[1]}.json?access_token=${accessToken}`;

  const respuesta = await fetch(apiUrl);
  const data = await respuesta.json();

  if (data.features && data.features.length > 0) {
    const country = data.features.find((feature: any) =>
      feature.place_type.includes('country')
    );
    const city = data.features.find((feature: any) =>
      feature.place_type.includes('place')
    );
    const cityName = city.text;

    const countryName = country.text;
    return [cityName, countryName];
  } else {
    console.log('No se encontró ningún lugar.');
  }
}
export function DataPorDias(lng: any, lat: any) {
  const api = `forecast?lat=${lat}&lon=${lng}&appid=${keyWeather}`;
  const {data} = useSWRImmutable([api, {}], fetchApi);
  if (data) {
    let fechaActual = new Date();
    let diaSemanaActual = fechaActual.getDay();
    let newData = data.list?.filter((e: any) => {
      const fechaComparar = new Date(e.dt_txt);
      let diaSemanas = fechaComparar.getDay();
      if (diaSemanas !== diaSemanaActual) {
        diaSemanaActual = diaSemanas;
        return e;
      }
    });
    return {dataDias: newData};
  }
  return {dataDias: null};
}
