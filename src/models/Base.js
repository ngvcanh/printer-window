class BaseModel{

  _type = null;

  _value = null;

  _position = null;

  _width = null;

  _height = null;

  _style = null;

  _css = {};

  _fontSize = null;

  _displayValue = false;

  _table = {
    header: {
      columns: [],
      style: null
    }, 
    body: {
      rows: [],
      style: null
    },
    footer: {
      columns: [],
      style: null
    }
  };

}