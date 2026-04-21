Respuesta a las preguntas

1. ¿Por qué usamos un Observable y un .subscribe() en lugar de simplemente asignar el resultado de la función http.get() a nuestra variable?

R// Esto se hace ya que cuando hacemos http.get(), no obtenemos directamente los datos sino un flujo que se completa a lo largo del tiempo haciendo que pueda no solo tardar sino llegar a fallar.Para solucionar el problema sabemos que al hacer http.get() vamos a obtener un Observable, para el cual vamos a necesitar de un .subscribe() para solucionar la problematica mencionada anteriormente,permitiendo este ultimo que se ejecute la peticion, nos avise cuando llegue la respuesta, y permita manejar errores o finalizacion. 

2. ¿Qué sucede si olvidamos declarar nuestro SerieListComponent en el arreglo de declarations del módulo, pero intentamos usar su selector en el app.component.html?

R// Esto puede generar errores ya sea a la hora de compilar, ya que angular no va a reconocer ese componente, ademas de que cuando la queramos usar en el programa, este probablemente no la podra exportar y usar al no reconocerla. 