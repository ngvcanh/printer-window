const PaperType = require('./Type');

class PaperLegal extends PaperType{

  constructor(props){
    super(props);
    this.width = '816px';
    this.height = '1346px';
    this.fullSize = false;
  }

}

module.exports = PaperLegal;