import { BaseModel } from './Base';
import { LEFT } from '../Align';
import { QRCODE } from './Type';

export class PrinterWindowQRCodeModel extends BaseModel{

  protected props = [
    'type', 'value', 'align', 'width', 
    'height', 'style', 'css', 'fontSize'
  ];

  constructor(value: string){
    super(value);
    this.align(LEFT)._type = QRCODE;
  }

}