import { PrinterWindowTextModel } from './Text';
import { PrinterWindowImageModel } from './Image';
import { PrinterWindowBarCodeModel } from './BarCode';
import { PrinterWindowQRCodeModel } from './QRCode';
import { PrinterWindowTableModel } from './Table';
import * as TYPE from './Type';

export { TYPE };

export function text(value: string){
  return new PrinterWindowTextModel(value);
}

export function image(filepath){
  return new PrinterWindowImageModel(filepath);
}

export function barcode(value: string){
  return new PrinterWindowBarCodeModel(value);
}

export function qrcode(value: string){
  return new PrinterWindowQRCodeModel(value);
}

export function table(body: any[][]){
  return new PrinterWindowTableModel(body);
}