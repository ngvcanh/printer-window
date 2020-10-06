import { BaseModel } from './Base';
import { Align } from '../Align';
import { TYPE } from './Type';

export class PrinterWindowQRCodeModel extends BaseModel{

  protected props = [
    'type', 'value', 'align', 'width', 
    'height', 'style', 'css', 'fontSize'
  ];

  constructor(value: string){
    super(value);
    this.align(Align.LEFT)._type = TYPE.QRCODE;
  }

}