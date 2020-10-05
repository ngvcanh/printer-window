const PaperType = require('./Type');

class PaperLedger extends PaperType{

  constructor(props){
    super(props);
    this.width = '1054px';
    this.height = '1633px';
    this.fullSize = false;
  }

}

module.exports = PaperLedger;