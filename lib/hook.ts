import useSWRImmutable from "swr/immutable";
const key = "df77582fbdbf3b7c31080f0f954234e8";
async function fetchApi(api: any) {
   // const apiSearch = api[0] || {};
   console.log();
   const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?` + api[0],
      {}
   );

   const data = await response.json();
   return data;
}
export function DataClima() {
   const api = `lat=${"-34.9187403"}&lon=${"-58.40779"}&appid=${key}`;
   const { data } = useSWRImmutable([api, {}], fetchApi);
   console.log(data);
   return { data };
}
