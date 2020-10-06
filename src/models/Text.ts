import { BaseModel } from './Base';
import { LEFT } from '../Align';
import { TEXT } from './Type';

export class PrinterWindowTextModel extends BaseModel{

  protected props = [
    'type', 'value', 'align', 'width', 
    'height', 'style', 'css', 'fontSize'
  ];

  constructor(value: string){
    super(value);
    this.align(LEFT)._type = TEXT;
  }

}