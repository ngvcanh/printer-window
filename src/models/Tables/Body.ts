import { PrinterWindowTableBodyRow } from './BodyRow';

export class PrinterWindowTableBody{

  private rows: PrinterWindowTableBodyRow[] = [];

  private style: string = '';

  constructor(rows = []){
    this.addRows(rows);
  }

  public addRows(rows: any[][]){
    rows.map(row => this.addRow(row));
    return this;
  }

  public addRow(row: any[]){
    this.rows.push(new PrinterWindowTableBodyRow(row));
    return this;
  }

  public setStyle(style: string){
    this.style = style;
    return this;
  }

  public get(){
    let rows: any[] = [];
    this.rows.map(row => row.isEmpty() || rows.push(row.get()));
    return { rows, style: this.style };
  }

}