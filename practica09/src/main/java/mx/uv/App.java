package mx.uv;

import static spark.Spark.*;
/**
 * Salut!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );

        get("/",
            (request,response)->"<h1>hola mundo</h1>"
        );
        get("/ruta1",
            (request,response)->"<h1>adios mundo</h1>"
        );
        get("/ruta2",
            (request,response)->"<h1>hola oaxaca</h1>"
        );
        get("/ruta3",
            (request,response)->"{'alumno':'john','carrera':'tc','semestre':'6'}"
        );
    }
}
