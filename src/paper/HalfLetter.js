const PaperType = require('./Type');

class PaperHelfLetter extends PaperType{

  constructor(props){
    super(props);
    this.width = '529px';
    this.height = '816px';
    this.fullSize = false;
  }

}

module.exports = PaperHelfLetter;