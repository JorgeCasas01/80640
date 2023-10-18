import MiFieldSet from "./MiFieldSet"
import DatosPersonales from "./datosPersonales"
import DatosEscolares from "./DatosEscolares"
function Formulario() {
    return(
        <>
        <form action="">
            <DatosPersonales></DatosPersonales>
            <DatosEscolares></DatosEscolares>
            <input type="submit" value="enviar datos"></input>
        </form>

        </>
    )
    
}

export default Formulario