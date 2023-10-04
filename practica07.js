const formulario =document.getElementById("formulario")
const miFieldSet= (legend,txt1,txt2)=>{
    Return `
    <fieldset>
        <legend>${legend}</legend>
            <label for="01"> ${txt1}:</label>
            <input type="text" id=${txt1}>
            <label for="02"> ${txt2}:</label>
            <input type="text" id=${txt2}>
    </fieldset>
    `
}
formulario.innerHTML=miFieldSet("leyenda","1","2")
formulario.innerHTML+=miFieldSet("leyenda 2","3","4")
