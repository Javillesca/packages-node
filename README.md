Comandos:
  app show    Muestra por consola la tabla de multiplicar
  app create  Generación de archivo txt con tabla de multiplicación

show:
    Muestra por consola la tabla de multiplicar

    Opciones (valor base + valor maximo a alcanzar):
        --base, -b [requerido]
        --limit, -l [defecto: 10]

    Example:
        node app show --b 247 -l 6
        =========================
        Table * 247 to 6
        =========================
        247 * 1 = 247
        247 * 2 = 494
        247 * 3 = 741
        247 * 4 = 988
        247 * 5 = 1235
        247 * 6 = 1482

create:
    Generación de archivo txt con tabla de multiplicación

    Opciones (valor base + valor maximo a alcanzar):
        --base, -b [requerido]
        --limit, -l [defecto: 10]

    Example:
        node app create -b 247 -l 6    

        Archivo TableX247-to-6.txt creado correctamente.