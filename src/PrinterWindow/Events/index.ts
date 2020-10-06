import { PrinterWindowEvent } from "./Event";
import { EventNames } from './Name';
import { isFunction } from '../../helper';

export { PrinterWindowEvent, EventNames };

export class PrinterWindowEvents{

  public add(event: PrinterWindowEvent){
    event.name in EventNames && (this[event.name] = event);
    return this;
  }

  public run(eventName: string, ...args: any){
    if (eventName in EventNames && eventName in this){
      isFunction(this[eventName].callback) && this[eventName].callback(...args);
    }
  }

}