interface INotification {
  send(message: string): void;
}


class EmailNotification implements INotification {
  send(message: string): void {
    console.log(`[Email] Enviando: ${message}`);
  }
}

class SmsNotification implements INotification {
  send(message: string): void {
    console.log(`[SMS] Enviando: ${message}`);
  }
}

class PushNotification implements INotification {
  send(message: string): void {
    console.log(`[Push] Enviando: ${message}`);
  }
}


class NotificationFactory {
  public static create(type: "email" | "sms" | "push"): INotification {
    if (type === "email") return new EmailNotification();
    if (type === "sms") return new SmsNotification();
    if (type === "push") return new PushNotification();
    throw new Error("Tipo de notificación no soportado");
  }
}


// Comprobación
const notif1 = NotificationFactory.create("email");
notif1.send("Bienvenido a la plataforma");

const notif2 = NotificationFactory.create("sms");
notif2.send("Tu código es 1234");