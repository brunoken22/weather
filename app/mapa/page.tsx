'use client';
import mapboxgl, {Popup} from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {useEffect, useRef, useState} from 'react';
import {DivMap, Sidebar, DivSearch} from '@/ui/contenedores';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZGVuaXNwYXJhZGEiLCJhIjoiY2t2cmhwbjZlMDM5czJ2cWlyczZoODg4cSJ9.6obRc3i_TK7qdx_A6_y-qg';
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
      mapboxgl: mapboxgl,
    });

    // const initialMarker = new mapboxgl.Marker({color: '#ff0000', scale: 1.5})
    //   .setLngLat([lng, lat])
    //   .setPopup(new mapboxgl.Popup().setText('Ubicación Inicial'))
    //   .addTo(map.current);

    // Agregar el geocodificador al mapa
    geocoderContainer.current.appendChild(geocoder.onAdd(map.current));

    // Manejar el evento 'result' del geocodificador

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(11));
    });
    geocoder.on('result', (event) => {
      const resultLngLat = event.result.center;

      // Eliminar el marcador inicial
      const popUp = new Popup({closeButton: false, anchor: 'left'}).setHTML(
        `<div class="popup" style="color:#000">You click here: <br/>[${map.current
          .getCenter()

          .lng.toFixed(4)},  ${map.current
          .getCenter()
          .lat.toFixed(4)}]<br/>Tem:${'18°'}<br/>${'soleado'}</div>`
      );
      // Crear un nuevo marcador en la ubicación seleccionada
      new mapboxgl.Marker({color: '#63df29', scale: 1})
        .setLngLat(resultLngLat)
        .setPopup(popUp)
        .addTo(map.current);
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
