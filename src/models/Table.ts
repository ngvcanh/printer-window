import { PrinterWindowBaseModel } from './Base';
import { Align } from '../Align';
import { TYPE } from './Type';

export class PrinterWindowTableModel extends PrinterWindowBaseModel{

  protected props = [
    'type', 'value', 'align', 'width', 
    'height', 'style', 'css', 'fontSize', 'table'
  ];

  constructor(body: any[][]){
    super();
    this.align(Align.LEFT).body(body)._type = TYPE.TABLE;
  }

}