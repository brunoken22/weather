'use client';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {useEffect, useRef, useState} from 'react';
import {DivMap, Sidebar, DivSearch} from '@/ui/contenedores';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZGVuaXNwYXJhZGEiLCJhIjoiY2t2cmhwbjZlMDM5czJ2cWlyczZoODg4cSJ9.6obRc3i_TK7qdx_A6_y-qg';
export default function Mapa() {
  const mapContainer = useRef(null);
  const map: any = useRef(null);
  const geocoderContainer: any = useRef(null); // Ref para el contenedor del geocoder
  const [lng, setLng] = useState(-58.6645);
  const [lat, setLat] = useState(-34.6747);
  const [zoom, setZoom] = useState(9);

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

    geocoderContainer.current.appendChild(geocoder.onAdd(map.current));

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(9));
    });
  }, [lng, lat, zoom]);

  return (
    <DivMap>
      <link
        rel='stylesheet'
        href='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.css'
        type='text/css'></link>
      <DivSearch ref={geocoderContainer}></DivSearch>
      <Sidebar>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </Sidebar>
      <div ref={mapContainer} className='map' style={{height: '100%'}} />
    </DivMap>
  );
}
