const PaperType = require('./Type');

class PaperA3 extends PaperType{

  constructor(props){
    super(props);
    this.width = '1123px';
    this.height = '1588px';
    this.fullSize = false;
  }

}

module.exports = PaperA3;