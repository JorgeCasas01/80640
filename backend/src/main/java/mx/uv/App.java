package mx.uv;

//esta es la parte en la que dice que el codigo lo hice yo (o si solo copio y pego diria que el autor es "fulano de tal")

import static spark.Spark.*;

public class App {
    public static String nombre = " ";

    public static void main(String[] args) {
        options("/*", (request, response) -> {

            String accessControlRequestHeaders = request.headers("Access-Control-Request-Headers");

            if (accessControlRequestHeaders != null) {

                response.header("Access-Control-Allow-Headers", accessControlRequestHeaders);

            }

            String accessControlRequestMethod = request.headers("Access-Control-Request-Method");

            if (accessControlRequestMethod != null) {

                response.header("Access-Control-Allow-Methods", accessControlRequestMethod);

            }

            return "OK";

        });

        before((request, response) -> response.header("Access-Control-Allow-Origin", "*"));

        get("/crt",
                (request, response) -> {
                    System.out.println("Creando nombre: " + request.queryParams("nombre"));
                    nombre = request.queryParams("nombre");
                    return "creado";
                });

        get("/rd",
                (request, response) -> {
                    System.out.println("Leyendo nombre: " + nombre);
                    return "leido";
                });

        get("/upd",
                (request, response) -> {
                    System.out.println("Editando nombre: " + request.queryParams("nombre"));
                    nombre = request.queryParams("nombre");
                    return "Editado";
                });

        get("/del",
                (request, response) -> {
                    nombre = " ";
                    System.out.println("borrando" + nombre);
                    return "borrado";
                });

    }
}