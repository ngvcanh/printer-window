import { defaultOptions } from './DefaultOption';

export class PrinterWindowOptions{

  public readonly pageSize: string;

  public readonly width: number;

  public readonly height: number;

  public readonly silent: boolean = false;

  public readonly preview: boolean = true;

  public readonly deviceName: string;

  public readonly printBackground: boolean = true;

  public readonly color: boolean = true;

  public readonly landscape: boolean = false;

  public readonly collate: boolean = false;

  public readonly copies: number = 1;

  public constructor(options: object){
    const originOptions = JSON.parse(JSON.stringify(defaultOptions));
    Object.assign(originOptions, { ...options });
    Object.assign(this, originOptions);
  }

  get(){
    let result = {};
    Object.keys(defaultOptions).map(key => result[key] = this[key]);
    return result;
  }
  
}