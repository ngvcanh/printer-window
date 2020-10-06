import { PrinterWindowTableHeader } from "./Header";
import { PrinterWindowTableFooter } from './Footer';
import { PrinterWindowTableBody } from './Body';

export class PrinterWindowTable{

  private header: PrinterWindowTableHeader;

  private body: PrinterWindowTableBody;

  private footer: PrinterWindowTableFooter;

  constructor(body = []){
    this.body = new PrinterWindowTableBody(body);
    this.header = new PrinterWindowTableHeader;
    this.footer = new PrinterWindowTableFooter;
  }

  public addRows(rows: any[][]){
    this.body.addRows(rows);
    return this;
  }

  public addRow(row: string[]|object[]){
    this.body.addRow(row);
    return this;
  }

  public styleBody(style: string){
    this.body.setStyle(style);
    return this;
  }

  public addHeader(columns: string|number|any[], style = ''){
    this.header.setColumns(columns).setStyle(style);
    return this;
  }

  public styleHeader(style: string){
    this.header.setStyle(style);
    return this;
  }

  public addFooter(columns: string|number|any[], style = ''){
    this.footer.setColumns(columns).setStyle(style);
    return this;
  }

  public styleFooter(style: string){
    this.footer.setStyle(style);
    return this;
  }

  public get(){
    return {
      header: this.header.get(),
      body: this.body.get(),
      footer: this.footer.get()
    };
  }

}