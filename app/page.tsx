'use client';
import {Contenedor, DivDias, DivInfo, Button, DivUbi} from '@/ui/contenedores';
import {TemplateClima, TemplateClimaDias} from '@/components/templateClima';
import {DataClima, NameCiudad, DataPorDias} from '@/lib/hook';
import {useState} from 'react';
import {Title} from '@/ui/typography';

export default function Home() {
  const [lngLat, setLngLat] = useState([Number, Number]);
  const {data} = DataClima(lngLat[0], lngLat[1]);
  const {dataDias} = DataPorDias(lngLat[0], lngLat[1]);
  const {dataName} = NameCiudad(lngLat[0], lngLat[1]);

  const handleClick = (e: any) => {
    e.preventDefault();
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude: any = position.coords.latitude;
        const longitude: any = position.coords.longitude;
        setLngLat([longitude, latitude]);
      });
    }
  };
  return (
    <Contenedor>
      {data && dataName ? (
        <TemplateClima
          tem={data.main.temp}
          img={data.weather[0].icon}
          senTem={data.main.feels_like}
          lugar={dataName}></TemplateClima>
      ) : (
        <DivUbi>
          <Title>Weather App</Title>
          <Button onClick={handleClick}>Dar Ubicacion</Button>
        </DivUbi>
      )}
      {dataDias ? (
        <DivDias>
          {dataDias.map((e: any, p: any) => {
            const fechaComparar = new Date(e.dt_txt);
            const diaSemana = fechaComparar.getDay();
            let dia = '';
            switch (diaSemana) {
              case 0:
                dia = 'Domingo';
                break;
              case 1:
                dia = 'Lunes';
                break;
              case 2:
                dia = 'Martes';
                break;
              case 3:
                dia = 'Miércoles';
                break;
              case 4:
                dia = 'Jueves';
                break;
              case 5:
                dia = 'Viernes';
                break;
              case 6:
                dia = 'Sábado';
                break;
              default:
                console.log('Valor de día inválido');
                break;
            }
            return (
              <TemplateClimaDias
                key={p}
                dia={dia}
                maxTem={e.main.temp_max}
                minTem={e.main.temp_min}
                img={e.weather[0].icon}
                humidity={e.main.humidity}></TemplateClimaDias>
            );
          })}
        </DivDias>
      ) : null}
    </Contenedor>
  );
}
// data.main.temp
// data.main.feels_like
