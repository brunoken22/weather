import useSWRImmutable from 'swr/immutable';
const key = process.env.WEATHER;
async function fetchApi(api: any) {
  // const apiSearch = api[0] || {};
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/` + api[0],
    {}
  );

  const data = await response.json();
  return data;
}
export function DataClima() {
  const api = `weather?lat=${'-34.9187403'}&lon=${'-58.40779'}&appid=df77582fbdbf3b7c31080f0f954234e8`;
  const {data} = useSWRImmutable([api, {}], fetchApi);
  //   console.log(data);
  return {data};
}

export function NameCiudad(lng: number, lat: number) {
  const {data} = useSWRImmutable(
    lng & lat ? [lng, lat] : null,
    fetchApiNameCiudad
  );
  return {dataName: data};
}
async function fetchApiNameCiudad(api: any) {
  const accessToken =
    'pk.eyJ1IjoiZGVuaXNwYXJhZGEiLCJhIjoiY2t2cmhwbjZlMDM5czJ2cWlyczZoODg4cSJ9.6obRc3i_TK7qdx_A6_y-qg';
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
export function DataPorDias(lng: number, lat: number) {
  const api = `forecast?lat=${lat}&lon=${lng}&appid=df77582fbdbf3b7c31080f0f954234e8`;
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
}
