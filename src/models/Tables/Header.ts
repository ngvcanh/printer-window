import { isString, isNumber } from '../../helper';

export class PrinterWindowTableHeader{

  private columns: any[] = [];

  private style: string = '';

  constructor(columns?: any){
    this.setColumns(columns);
  }

  public setStyle(style: string){
    this.style = style;
    return this;
  }

  public setColumns(columns: string|number|any[]){
    if (isString(columns) || isNumber(columns)){
      this.columns.push(columns);
    }
    else if (Array.isArray(columns)){
      this.columns = columns;
    }
    return this;
  }

  public get(){
    return { columns: this.columns, style: this.style };
  }

}