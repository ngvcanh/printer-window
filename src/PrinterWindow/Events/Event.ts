import { PrinterWindowBaseEvent } from './BaseEvent';

export class PrinterWindowEvent implements PrinterWindowBaseEvent{

  public readonly name: string;

  public readonly callback = null;

  constructor(name: string, callback?: any){
    this.name = name;
    this.callback = callback;
  }

}