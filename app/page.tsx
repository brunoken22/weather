'use client';
import {Contenedor, DivDias} from '@/ui/contenedores';
import {TemplateClima, TemplateClimaDias} from '@/components/templateClima';
import {DataClima, NameCiudad, DataPorDias} from '@/lib/hook';

export default function Home() {
  //   const data = true;
  //   const dataName = true;
  const dataDias: any = DataPorDias(-58.40779, -34.9187403);
  const {data} = DataClima();
  const {dataName} = NameCiudad(data?.coord.lon, data?.coord.lat);

  return (
    <Contenedor>
      {data && dataName ? (
        <TemplateClima
          tem={data.main.temp}
          img={data.weather[0].icon}
          senTem={data.main.feels_like}
          lugar={dataName}></TemplateClima>
      ) : null}
      <DivDias>
        {dataDias
          ? dataDias.dataDias.map((e: any, p: any) => {
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
            })
          : null}
      </DivDias>
    </Contenedor>
  );
}
// data.main.temp
// data.main.feels_like
