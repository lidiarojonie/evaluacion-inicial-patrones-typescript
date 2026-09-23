class ConfigService {
  private static instance: ConfigService;

  public appName: string = "MiAplicacion";

  private constructor() {}

  public static getInstance(): ConfigService {
    if (!ConfigService.instance) {
      ConfigService.instance = new ConfigService();
    }
    return ConfigService.instance;
  }
}

// Comprobación
const config1 = ConfigService.getInstance();
const config2 = ConfigService.getInstance();

console.log("config1 appName:", config1.appName);
config2.appName = "NuevoNombre";
console.log("config1 appName tras cambiar config2:", config1.appName);

console.log("¿Son exactamente la misma instancia?:", config1 === config2);