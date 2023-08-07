import { Div, Span } from "./styled";

export function Sun() {
   return (
      <Div>
         {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
            (e: any, p: any) => {
               const randomTop = 10 + Math.random() * 80 + "%";
               const randomLeft = 10 + Math.random() * 80 + "%";
               const randomRight = 10 + Math.random() * 80 + "%";
               const randomButton = 10 + Math.random() * 80 + "%";
               return (
                  <Span
                     key={p}
                     $top={randomTop}
                     $left={randomLeft}
                     $right={randomRight}
                     $bottom={randomButton}
                  />
               );
            }
         )}
      </Div>
   );
}
