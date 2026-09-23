- ¿Qué problema intenta resolver Singleton?

Evita que se creen múltiples instancias de una clase cuando solo debe existir una compartida en toda la aplicación (por ejemplo, una conexión o configuración).


- ¿Por qué suele utilizarse un constructor private?

Para impedir que cualquier parte del código pueda hacer new Clase() libremente desde fuera.


- ¿Cómo se obtiene una instancia de la clase?




- ¿Qué ocurriría si pudiéramos utilizar new libremente?

Se crearían objetos distintos en memoria, perdiendo el estado compartido y gastando recursos innecesarios.


- Pon un ejemplo real donde utilizarías Singleton.



- ¿Qué inconveniente puede tener abusar de Singleton?

