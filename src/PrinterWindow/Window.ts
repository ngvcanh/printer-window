import { PrinterWindowEvents, PrinterWindowEvent } from "./Events";
import { PrinterWindowOptions } from "./Options";

export class PrinterWindow{

  events: PrinterWindowEvents;

  options: PrinterWindowOptions;

  constructor(options: object = {}){
    this.events = new PrinterWindowEvents;
    this.options = new PrinterWindowOptions(options);
  }

  public on(eventName: string, callback?: Function){
    this.events.add(new PrinterWindowEvent(eventName, callback));
    return this;
  }

  public create(options: object = {}){
    let currentOptions = this.options.get();
    Object.assign(currentOptions, { ...options });
    this.options = new PrinterWindowOptions(currentOptions);
  }

}