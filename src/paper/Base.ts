export class PrinterWindowPaperBase{

  protected _size: string = '';

  protected _fullSize: boolean = true;

  protected split(pos){
    let size = this._size.split('x')[pos];
    let unit = size.replace(/[\d]/g, '');
    size = size.replace(/[^\d]/g, '');
    return +size;
  }

  public getWidth(){
    return this.split(0);
  }

  public getHeight(){
    return this.split(1);
  }

  public parseSize(size: string): any[]{
    if (!size.match(/^\d+(cm|mm|px|in)x\d+(cm|mm|px|in)$/g)) return [0, 0];
    return size.split('x');
  }

}