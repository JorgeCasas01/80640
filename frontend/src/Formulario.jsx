import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function Formulario (props) {
    const [Cargando, setCargando] = useState(false)
    const [datosFormulario, setDatosFormulario] = useState(
        {nombre: ''}
    )

    const crt = async () => {
        try{
            const response = await axios.get('http://localhost:4567/crt',{params: datosFormulario})
            console.log(response.data)
            return response.data
        }catch (error){
            throw error
        }
    }
    const rd = async () => {
        try{
            const response = await axios.get('http://localhost:4567/rd',{params: datosFormulario})
            console.log(response.data)
            return response.data
        }catch (error){
            throw error
        }
    }
    const upd = async () => {
        try{
            const response = await axios.get('http://localhost:4567/upd',{params: datosFormulario})
            console.log(response.data)
            return response.data
        }catch (error){
            throw error
        }
    }
    const del = async () => {
        try{
            const response = await axios.get('http://localhost:4567/del',{params: datosFormulario})
            console.log(response.data)
            return response.data
        }catch (error){
            throw error
        }
    }

    const cambiosFormulario = (evento) => {
        console.log(evento.target)
        const {name, value} = evento.target
        setDatosFormulario ({
            ...datosFormulario,
            [name]: value
        })
    }

    return (
        <>
            <form>
            <h1>Formulario</h1>
                <Box m={5}>
                    <TextField label="Nombre:" variant="outlined" fullWidth onChange={cambiosFormulario} name="nombre" value={datosFormulario.nombre}></TextField>
                </Box>
                <Box m={5}>
                    <Button onClick={crt} variant="contained" color="primary" fullWidth disabled={Cargando}>Crear</Button>
                </Box>
                <Box m={5}>
                    <Button onClick={rd} variant="contained" color="primary" fullWidth disabled={Cargando}>Leer</Button>
                </Box>
                <Box m={5}>
                    <Button onClick={upd} variant="contained" color="primary" fullWidth disabled={Cargando}>Editar</Button>
                </Box>
                <Box m={5}>
                    <Button onClick={del} variant="contained" color="primary" fullWidth disabled={Cargando}>Eliminar</Button>
                </Box>
            </form>
        </>
    ) 
}

export default Formulario;