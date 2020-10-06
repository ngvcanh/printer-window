import { BaseModel } from './Base';
import { LEFT } from '../Align';
import { IMAGE } from './Type';

export class PrinterWindowImageModel extends BaseModel{

  protected props = [
    'type', 'value', 'align', 'width', 
    'height', 'style', 'css', 'fontSize'
  ];

  constructor(filepath: string){
    super(filepath);
    this.align(LEFT)._type = IMAGE;
  }

}