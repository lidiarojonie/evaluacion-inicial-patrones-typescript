- ¿Qué problema resuelve Factory?

Centraliza la lógica de creación de objetos en un único punto para que el código cliente no tenga que saber cómo instanciar cada clase concreta.


- ¿Qué ventaja tiene respecto a utilizar new directamente por toda la aplicación?




- ¿Qué tendría que ocurrir si mañana añadimos WhatsAppNotification?

Solo creamos la clase WhatsAppNotification e incluimos una nueva condición dentro del método create() de NotificationFactory. El resto de la app no cambia.


- ¿Quién tiene la responsabilidad de crear los objetos?

La clase Factory (NotificationFactory).


- ¿Qué ventaja proporciona Factory respecto al acoplamiento?

