<h1>Amigo Secreto - README</h1>
<h2>Descripción</h2>
Esta aplicación web permite organizar un sorteo de "Amigo Secreto" de manera sencilla. Los usuarios pueden ingresar los nombres de los participantes y luego realizar el sorteo aleatorio para asignar un amigo secreto.

<h2>Funcionalidades principales</h2>
<h3>Agregar participantes:</h3>

Ingresa nombres en el campo de texto.

Presiona "Añadir" para agregarlos a la lista.

Validación: No permite agregar nombres vacíos.

<h3>Realizar sorteo:</h3>

Presiona el botón "Sortear amigo" para seleccionar un ganador aleatorio.

Validación: Requiere al menos un nombre en la lista.

<h3>Visualización:</h3>

Muestra la lista de participantes agregados.

Muestra el resultado del sorteo con un mensaje destacado.

<h2>Posibles Mejoras</h2>

Por ahora no hay forma de reiniciar el juego de manera natural. Como esta estructurado,
luego de sortear un amigo el mensaje se queda ahi incluso cuando se ingresan mas nombres, tambien
es clave hacer notar que aunque la lista 'li' vuelva a estar vacia, la lista de personas no vuelve a estarlo.
Mientras hacia el codigo me preguntaba para se necesitaria un ciclo for para mostrar la lista en pantalla y ahora me doy cuenta de porque era importante.
De todas formas, segun como se muestra en el video del desafio, la lista se vuelve a vacia cuando se sortea, asi que se puede inferir
que la lista de personas tambien, aunque esto no tendria mucho sentido si el usuario quiere probar una vez mas con los mismos nombres.
Si alguna de los instructores revisa este README agradeceria tambien que los desafios adicionales se traten de resolver estos problemas.