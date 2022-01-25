<h1>Módulo FS</h1>
<h2>Ejercicio 1</h2>
<p>Crear un servidor web que al recibir una petición de http://localhost:8080/tablas, entregue la página web todasLasTablas.html, que contiene un código escrito en html (no autogenerado) con las tablas de multiplicar del 1 al 10.</p>
<p>Archivo todasLasTablas.html</p>
<code>
        <!DOCTYPE html>
        <html>

        <head>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title>Tablas</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>

        <body>
            1 x 1 = 1<br>1 x 2 = 2<br>1 x 3 = 3<br>1 x 4 = 4<br>1 x 5 = 5<br>1 x 6 = 6<br>1 x 7 = 7<br>1 x 8 = 8<br>1 x 9 = 9<br>1
            x 10 = 10<br><br>2 x 1 = 2<br>2 x 2 = 4<br>2 x 3 = 6<br>2 x 4 = 8<br>2 x 5 = 10<br>2 x 6 = 12<br>2 x 7 = 14<br>2 x
            8 = 16<br>2 x 9 = 18<br>2 x 10 = 20<br><br>3 x 1 = 3<br>3 x 2 = 6<br>3 x 3 = 9<br>3 x 4 = 12<br>3 x 5 = 15<br>3 x 6
            = 18<br>3 x 7 = 21<br>3 x 8 = 24<br>3 x 9 = 27<br>3 x 10 = 30<br><br>4 x 1 = 4<br>4 x 2 = 8<br>4 x 3 = 12<br>4 x 4
            = 16<br>4 x 5 = 20<br>4 x 6 = 24<br>4 x 7 = 28<br>4 x 8 = 32<br>4 x 9 = 36<br>4 x 10 = 40<br><br>5 x 1 = 5<br>5 x 2
            = 10<br>5 x 3 = 15<br>5 x 4 = 20<br>5 x 5 = 25<br>5 x 6 = 30<br>5 x 7 = 35<br>5 x 8 = 40<br>5 x 9 = 45<br>5 x 10 =
            50<br><br>6 x 1 = 6<br>6 x 2 = 12<br>6 x 3 = 18<br>6 x 4 = 24<br>6 x 5 = 30<br>6 x 6 = 36<br>6 x 7 = 42<br>6 x 8 =
            48<br>6 x 9 = 54<br>6 x 10 = 60<br><br>7 x 1 = 7<br>7 x 2 = 14<br>7 x 3 = 21<br>7 x 4 = 28<br>7 x 5 = 35<br>7 x 6 =
            42<br>7 x 7 = 49<br>7 x 8 = 56<br>7 x 9 = 63<br>7 x 10 = 70<br><br>8 x 1 = 8<br>8 x 2 = 16<br>8 x 3 = 24<br>8 x 4 =
            32<br>8 x 5 = 40<br>8 x 6 = 48<br>8 x 7 = 56<br>8 x 8 = 64<br>8 x 9 = 72<br>8 x 10 = 80<br><br>9 x 1 = 9<br>9 x 2 =
            18<br>9 x 3 = 27<br>9 x 4 = 36<br>9 x 5 = 45<br>9 x 6 = 54<br>9 x 7 = 63<br>9 x 8 = 72<br>9 x 9 = 81<br>9 x 10 = 90<br><br>10
            x 1 = 10<br>10 x 2 = 20<br>10 x 3 = 30<br>10 x 4 = 40<br>10 x 5 = 50<br>10 x 6 = 60<br>10 x 7 = 70<br>10 x 8 = 80<br>10
            x 9 = 90<br>10 x 10 = 100<br>
        </body>
        </html>
</code>
<h2>Ejercicio 2</h2>
<p>En el servidor anterior, al acceder a la ruta /creartabla que cree en el servidor una nueva carpeta llamada tablas.</p>
