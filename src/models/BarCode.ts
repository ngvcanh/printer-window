import { BaseModel } from './Base';
import { LEFT } from '../Align';
import { BARCODE } from './Type';

export class PrinterWindowBarCodeModel extends BaseModel{

  protected props = [
    'type', 'value', 'align', 'width', 'height', 
    'style', 'css', 'fontSize', 'displayValue'
  ];

  constructor(value: string){
    super(value);
    this.align(LEFT)._type = BARCODE;
  }

}