import { BrowserWindow } from 'electron';
import { OptionsDefault } from "./OptionsDefault";
import { PrinterWindowEvents, PrinterWindowEvent } from "./Events";
import { PrinterWindowOptions } from "./Options";

export class PrinterWindow{

  private events: PrinterWindowEvents;

  private options: PrinterWindowOptions;

  private window;

  private readonly timePrintLine: number = 400;

  private readonly timePrintDelay: number = 200;

  private cloneOptionDefault(){
    return JSON.parse(JSON.stringify(OptionsDefault));
  }

  private setOptions(options){
    Object.assign(this.options, options);
    return this;
  }

  private createWindow(){
    this.window = new BrowserWindow({
      
    });
  }

  constructor(options?: PrinterWindowOptions){
    this.events = new PrinterWindowEvents;
    this.options = this.cloneOptionDefault();
    this.setOptions(options);
  }

  public on(eventName: string, callback?: Function){
    this.events.add(new PrinterWindowEvent(eventName, callback));
    return this;
  }

  public create(options?: object){
    this.setOptions(options).createWindow();
  }

}