const PaperType = require('./Type');

class PaperA5 extends PaperType{

  constructor(props){
    super(props);
    this.width = '559px';
    this.height = '794px';
    this.fullSize = false;
  }

}

module.exports = PaperA5;