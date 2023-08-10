import CMSSVG from '@/ui/icons/cloud-moon-solid.svg';
import {Body} from '@/ui/typography';
import {DivClima, Dias} from '@/ui/contenedores';
import Image from 'next/image';
export function TemplateClima(props: any) {
  return (
    <DivClima>
      <Body>{props.lugar[0]}</Body>
      <Body>{props.lugar[1]}</Body>
      <div>
        <Image
          src={`https://openweathermap.org/img/wn/${props.img}@2x.png`}
          width={80}
          height={80}
          alt={`${props.img}`}></Image>
        <p style={{fontSize: '1.5rem', margin: '0'}}>
          {Number(Math.round((props.tem - 273) * 10) / 10) + '°c'}
        </p>
      </div>
      <p>RealFeel {Number(Math.round((props.senTem - 273) * 10) / 10)}°</p>
    </DivClima>
  );
}

export function TemplateClimaDias(props: any) {
  return (
    <Dias>
      <Body>{props.dia}</Body>
      {/* <CMSSVG style={{width: '50px'}} /> */}
      <Image
        src={`https://openweathermap.org/img/wn/${props.img}@2x.png`}
        width={50}
        height={50}
        alt={`${props.img}`}></Image>
      <div>
        <p>
          Max-Temp: {Number(Math.round((props.maxTem - 273) * 10) / 10) + '°'}
        </p>
        <Body>
          Min-Temp: {Number(Math.round((props.minTem - 273) * 10) / 10)}°
        </Body>
        <Body>Humedad: {props.humidity}%</Body>
      </div>
    </Dias>
  );
}
