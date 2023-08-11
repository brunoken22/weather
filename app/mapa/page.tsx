'use client';
import mapboxgl, {Popup} from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {useEffect, useRef, useState} from 'react';
import {DivMap, Sidebar, DivSearch} from '@/ui/contenedores';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX as string;
export default function Mapa() {
  const mapContainer = useRef(null);
  const map: any = useRef(null);
  const geocoderContainer: any = useRef(null); // Ref para el contenedor del geocoder
  const [lng, setLng] = useState(-58.6645);
  const [lat, setLat] = useState(-34.6747);
  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current as any,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
    });

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      marker: false,
      mapboxgl: mapboxgl,
    });
    // Agregar el geocodificador al mapa

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(11));
    });
    geocoderContainer.current.appendChild(geocoder.onAdd(map.current));

    geocoder.on('result', (event) => {
      const resultLngLat = event.result.center;
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${resultLngLat[1]}&lon=${resultLngLat[0]}&appid=${process.env.NEXT_PUBLIC_WEATHER}`
      )
        .then((response) => response.json())
        .then((res) => {
          const popUp = new Popup({closeButton: false, anchor: 'left'}).setHTML(
            `<div class="popup" style="color:#000">${res.name} <br/>[${
              resultLngLat[0]
            },  ${resultLngLat[1]}]<br/>Tem: ${
              Number(Math.round((res.main.temp - 273) * 10) / 10) + '°c'
            }<br/>Humedad: ${res.main.humidity}%</div>`
          );
          const el = document.createElement('div');
          el.className = 'marker';
          el.style.backgroundImage = `url(https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png)`;
          el.style.width = '100px';
          el.style.height = '100px';
          el.style.backgroundSize = '100%';
          map.current.setCenter(resultLngLat);
          new mapboxgl.Marker(el)
            .setLngLat(resultLngLat)
            .setPopup(popUp)
            .addTo(map.current);
        });
    });
  }, []);

  return (
    <DivMap>
      <DivSearch ref={geocoderContainer}></DivSearch>
      <Sidebar>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </Sidebar>
      <div ref={mapContainer} className='map' style={{height: '100%'}} />
    </DivMap>
  );
}
