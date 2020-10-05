const PaperType = require('./Type');

class PaperA4 extends PaperType{

  constructor(props){
    super(props);
    this.width = '794px';
    this.height = '1123px';
    this.fullSize = false;
  }

}

module.exports = PaperA4;