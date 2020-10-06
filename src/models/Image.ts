import { BaseModel } from './Base';
import { Align } from '../Align';
import { TYPE } from './Type';

export class PrinterWindowImageModel extends BaseModel{

  protected props = [
    'type', 'value', 'align', 'width', 
    'height', 'style', 'css', 'fontSize'
  ];

  constructor(filepath: string){
    super(filepath);
    this.align(Align.LEFT)._type = TYPE.IMAGE;
  }

}