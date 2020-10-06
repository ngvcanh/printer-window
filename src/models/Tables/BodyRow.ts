export class PrinterWindowTableBodyRow{

  private row: any[] = [];

  constructor(row: any[]){
    this.setRow(row);
  }

  public setRow(row: any[]){
    this.row = row;
    return this;
  }

  public isEmpty(){
    return !!this.row.length;
  }

  public get(){
    return this.row;
  }

}