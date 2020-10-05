const PaperType = require('./Type');

class PaperLetter extends PaperType{

  constructor(props){
    super(props);
    this.width = '816px';
    this.height = '1054px';
    this.fullSize = false;
  }

}

module.exports = PaperLetter;