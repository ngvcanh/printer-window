export class PrinterWindowPaperBase{

  protected _size: string = '';

  protected _fullSize: boolean = true;

  public parseSize(size: string): any[]{
    if (!size.match(/^\d+(cm|mm|px|in)x\d+(cm|mm|px|in)$/g)) return [0, 0];
    return size.split('x');
  }

}