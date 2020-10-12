import { PrinterWindowPaperBase } from './Paper/Base';

export interface PrinterWindowOptions{
  pageType: PrinterWindowPaperBase;
  width: number;
  height: number;
  silent?: boolean;
  preview?: boolean;
  deviceName?: string;
  printBackground?: boolean;
  color?: boolean;
  landscape?: boolean;
  collate?: boolean;
  copies?: number;
}