function DatosPersonales() {
    return(
        <>
          <fieldset>
                <legend >datos personales</legend>
                <label htmlFor="nombre">nombre</label>
                <input type="text" id="nombre"></input>
                <label htmlFor="materno">Apellido Materno</label>
                <input type="text" id="materno"></input>
                <label htmlFor="paterno">Apellido Paterno</label>
                <input type="text" id="paterno"></input>  
                <label htmlFor="password">Contraseña</label>
                <input type="password " id="password"></input>
            </fieldset>
       </>
    )
}

export default DatosPersonales