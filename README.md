(Para inicializar el proyecto usar
```
npm run start
```
Luego de clonarlo
)


# ¿Qué es la arquitectura Hexagonal? 👆

Esta es una arquitectura que está separada por capas que busca principalmente el **desacoplamiento**, lo que significa que los módulos internos van a ser independientes de cualquier marco externo, llámese framework, base de datos o interfaz de usuario.
Para conseguirlo separa la lógica de negocio de los sistemas externos. 

Esta arquitectura se basa en la inyección de dependecias para lograr su cometido de desacoplamiento. 


## ¿Qué capas tiene? 🧅

Cuando creamos un hexágono este cuenta de 3 capas principales. 
(que por cierto no tiene sentido que se llame hexágono, los 6 lados literalmente no tienen nada que ver)
1. Dominio: 📩
   El dominio es la capa más interna del hexágono. En esta arquitectura las dependencias se conectan de las capas externas hacia las internas. Lo que quiere decir que las capas externas pueden acceder a las internas pero las internas no hacia las externas. El domino al ser la más interna solo tiene acceso a sí misma. En esta capa se definen las interfaces y las reglas de negocio que nos ayudan a representar el modelo del sistema de la vida real al software.

2. Aplicación: 🧩
   En la capa de aplicación van los llamados "casos de uso", estos casos de uso son las utilización de las interfaces definidas en el dominio. Por ejemplo, si definimos un usario en nuestro dominio un caso de uso sería enviarle mensajes a ese usuario, conectar este usaurio con otro, etc.

3. Infraestructura: 🖥
   Esta es la capa más externa de nuestro hexágono y es donde se realizan las conexiones y las adaptaciones de las tecnologías externas a nuestra aplicación. Aquí se integrarían la Base de datos (MySql, Mongo, Sqlite), el framework de la aplicación o también se haría la salida de los datos para que nuestra app pueda ser usada externamente por otro ambiente, por ejemplo un sistema de interfaz. 
   Al ser la capa más externa, la infraestructura tiene acceso tanto a las dos capas interiores y a sí misma por supuesto.


## Complementar Vertical Slicing

Un problema que puede tener la arquitectura hexagonal es que, al final, las capas que mencionamos antes no son más que carpetas. Sí, carpetas donde se guardan los ficheros que cumplen con las características de cada capa. 

Entonces, si nuestra aplicación crece demasiado y ya no tenemos solo usuarios, si no también productos, mensajes, foros, etc. 

Al tener solo 3 carpetas de separación, cada una va a ser bastante cargada de ficheros. Para evitar esto la hexagonal se puede complementar con la arquitectura Vertical Slicing. 

Este es un patrón arquitectónico no muy conocido que se basa en separar cada interfaz de las reglas de negocio en su propia carpeta (una carpeta de usuarios, otra de productos, otra de mensajes) y que en cada una de ellas esté armado un hexágono. Básicamente una carpeta de las 3 carpetas anteriores (dominio, aplicación e infraestructura)

Tener separadas estas capas nos permite poder hacer cambios dentro de nuestra aplicación sin afectar en gran medida a los módulos internos. Quizá, si en algún momento necesitamos cambiar de base de datos, por ejemplo, podríamos hacerlo sin literalmente modificar ninguna parte de la aplicación o el dominio, todo gracias al desacoplamiento. Por esta misma razón es muy fácil de testear un sistema construido con esta arquitectura.
Ahora bien, hay que tener en cuenta que la arquitectura hexagonal puede ser llegar de las más complejas de entender (tiene algunos conceptos abstractos) y para muchos proyectos puede llegar a ser sobre-ingeniería, así que antes de utilizarla debemos plantearnos muy bien si realmente la necesitamos.


[Ver diagrama](https://excalidraw.com/#json=rQC1nVtVHIgMuTwyYCN_E,gc5NX_EB3gsfNIlAvMbung)