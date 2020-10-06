import { BaseModel } from './Base';
import { LEFT } from '../Align';
import { TABLE } from './Type';

export class PrinterWindowTableModel extends BaseModel{

  protected props = [
    'type', 'value', 'align', 'width', 
    'height', 'style', 'css', 'fontSize', 'table'
  ];

  constructor(body: any[][]){
    super();
    this.align(LEFT).body(body)._type = TABLE;
  }

}