import { PrinterWindowBaseModel } from './Base';
import { Align } from '../Align';
import { TYPE } from './Type';

export class PrinterWindowBarCodeModel extends PrinterWindowBaseModel{

  protected props = [
    'type', 'value', 'align', 'width', 'height', 
    'style', 'css', 'fontSize', 'displayValue'
  ];

  constructor(value: string){
    super(value);
    this.align(Align.LEFT)._type = TYPE.BARCODE;
  }

}