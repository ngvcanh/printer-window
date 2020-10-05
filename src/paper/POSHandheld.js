const PaperType = require('./Type');

class PaperPOSHandheld extends PaperType{

  constructor(props){
    super(props);
    this.width = '215px';
    this.height = '189px';
    this.fullSize = false;
  }

}

module.exports = PaperPOSHandheld;