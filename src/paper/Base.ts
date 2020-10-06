export class PaperBase{

  protected _size: string = '';

  protected _fullSize: boolean = true;

  public parseSize(size: string): number[]{
    if (!size.match(/^\d+(cm|mm|px|in)x\d+(cm|mm|px|in)$/g)) return [0, 0];
    let arr = size.split('x');
    let unit = arr.map(p => p.replace(/\d/g, ''));
    arr = arr.map(p => p.replace(/[^\d]/g, ''));
    return arr.map((p, i) => this.converToPixel(+p, unit[i]));
  }

  public converToPixel(size: number, unit: string): number{
    if (unit === 'px') return size;
    return size;
  }

}