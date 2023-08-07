"use client";
import { Contenedor, DivDias } from "@/ui/contenedores";
import { TemplateClima, TemplateClimaDias } from "@/components/templateClima";
// import { DataClima } from "@/lib/hook";
import { Sun } from "@/components/sun";

export default function Home() {
   const data = true;
   // const { data } = DataClima();
   // const { tem } = Temperatura(data?.key);

   return (
      <Contenedor>
         <Sun />

         {data ? (
            <TemplateClima tem={300.55} senTem={300.55}></TemplateClima>
         ) : null}
         <DivDias>
            {["Lunes", "Martes", "Miercoles"].map((e: any, p: any) => {
               return (
                  <TemplateClimaDias
                     key={p}
                     dia={e}
                     maxTem={300.55}
                     minTem={300.55}
                     proLlu='50%'></TemplateClimaDias>
               );
            })}
         </DivDias>
      </Contenedor>
   );
}
// data.main.temp
// data.main.feels_like
