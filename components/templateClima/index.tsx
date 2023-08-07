import CMSSVG from "@/ui/icons/cloud-moon-solid.svg";
import { Body } from "@/ui/typography";
import { DivClima, Dias } from "@/ui/contenedores";

export function TemplateClima(props: any) {
   return (
      <DivClima>
         <Body>Presidente Peron</Body>
         <Body>Argentina</Body>
         <CMSSVG />
         <p style={{ fontSize: "1.5rem" }}>
            {Number(Math.round((props.tem - 273) * 10) / 10) + "°c"}
         </p>
         <p>RealFeel {Number(Math.round((props.senTem - 273) * 10) / 10)}°</p>
      </DivClima>
   );
}

export function TemplateClimaDias(props: any) {
   return (
      <Dias>
         <Body>{props.dia}</Body>
         <CMSSVG style={{ width: "50px" }} />
         <div>
            <p>
               Max-Temp:{" "}
               {Number(Math.round((props.maxTem - 273) * 10) / 10) + "°"}
            </p>
            <Body>
               Min-Temp: {Number(Math.round((props.minTem - 273) * 10) / 10)}°
            </Body>
            <Body>Lluvia: {props.proLlu}</Body>
         </div>
      </Dias>
   );
}
