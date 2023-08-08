import { DivHamburg,DivDev ,DivEnlaces} from "./styled";
import { SubTitle } from "@/ui/typography";
import Linkedin from "@/ui/icons/linkedin.svg"
import Github from '@/ui/icons/github.svg'

export function Hamburg() {
   return (
      <DivHamburg>
         <DivEnlaces>
            <a href=""><SubTitle>Mapa</SubTitle></a>
            <a href=""><SubTitle>Sobre nosotros</SubTitle></a>
         </DivEnlaces>
         <DivDev>
            <Linkedin/>   
            <Github/>
         </DivDev>   
      </DivHamburg>
   );
}
