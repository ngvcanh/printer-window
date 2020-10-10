import { PrinterWindowTable } from './Tables';
import { Align } from '../Align';
import { Vertical } from '../Vertical';
import { isValue } from '../helper';

export class PrinterWindowBaseModel{

  protected _type: string = '';

  private _value: string|object = '';

  private _align: string = Align.LEFT;

  private _vertical: string = Vertical.TOP;

  private _width: string = '';

  private _height: string = '';

  private _style: string = '';

  private _css: object = {};

  private _fontSize: number = 12;

  private _displayValue: boolean = true;

  private _table: PrinterWindowTable;

  protected props: string[] = [];

  constructor(value = ''){
    this._value = value;
    this._table = new PrinterWindowTable;
  }

  public align(align: string){
    Object.keys(Align).map(key => Align[key] === align && (this._align = align));
    return this;
  }

  public vertical(vertical: string){
    Object.keys(Vertical).map(key => Vertical[key] === vertical && (this._vertical = vertical));
    return this;
  }

  public width(width: string){
    width.match(/^\d+(px|%)$/g) && (this._width = width);
    return this;
  }

  public height(height: string){
    height.match(/^\d+(px|%)$/g) && (this._height = height);
    return this;
  }

  public style(style: string){
    this._style = style;
    return this;
  }

  public css(css: object){
    this._css = css;
    return this;
  }

  public fontSize(size: number){
    size > 0 && (this._fontSize = size);
    return this;
  }

  public displayValue(flag: boolean){
    this._displayValue = flag;
    return this;
  }

  public body(rows: any[][]){
    this._table.addRows(rows);
    return this;
  }

  public styleBody(style: string){
    this._table.styleBody(style);
    return this;
  }

  public header(columns: any){
    this._table.addHeader(columns);
    return this;
  }

  public styleHeader(style: string){
    this._table.styleHeader(style);
    return this;
  }

  public footer(columns: any){
    this._table.addFooter(columns);
    return this;
  }

  public styleFooter(style: string){
    this._table.styleFooter(style);
    return this;
  }

  public get(){
    let result = {};
    this.props.map(prop => {
      if (prop === 'table'){
        Object.assign(result, { table: this._table.get() });
      }
      else{
        isValue(this['_' + prop]) && Object.assign(result, { [prop]: this['_' + prop] });
      }
    });
    return result;
  }

}