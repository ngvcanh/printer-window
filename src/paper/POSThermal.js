const PaperType = require('./Type');

class PaperPOSThermal extends PaperType{

  constructor(props){
    super(props);
    this.width = '215px';
    this.height = '151px';
    this.fullSize = false;
  }

}

module.exports = PaperPOSThermal;