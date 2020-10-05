const PaperType = require('./Type');

class PaperPOSStandard extends PaperType{

  constructor(props){
    super(props);
    this.width = '302px';
    this.height = '302px';
    this.fullSize = false;
  }

}

module.exports = PaperPOSStandard;