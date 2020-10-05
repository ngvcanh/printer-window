const PaperType = require('./Type');

class PaperJuniorLegal extends PaperType{

  constructor(props){
    super(props);
    this.width = '480px';
    this.height = '767px';
    this.fullSize = false;
  }

}

module.exports = PaperJuniorLegal;