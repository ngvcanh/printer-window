class Paper{}

Paper.TYPE = {};

Paper.TYPE.POSTHERMAL = 'pos-thermal';

Paper.TYPE.POSHANDHELD = 'pos-handheld';

Paper.TYPE.POSSTANDARD = 'pos-standard';

Paper.TYPE.HELFLETTER = 'helf-letter';

Paper.TYPE.LETTER = 'letter';

Paper.TYPE.LEGAL = 'legal';

Paper.TYPE.JUNIORLEGAL = 'junior-legal';

Paper.TYPE.LEDGER = 'ledger';

Paper.TYPE.TABLOID = 'tabloid';

Paper.TYPE.A5 = 'a5';

Paper.TYPE.A4 = 'a4';

Paper.TYPE.A3 = 'a3';

Paper.TYPE.WINDOW = 'window';

Paper.PaperPOSThermal = require('./POSThermal');

Paper.PaperPOSHandheld = require('./POSHandheld')

Paper.PaperPOSStandard = require('./POSStandard');

Paper.PaperHelfLetter = require('./HalfLetter');

Paper.PaperLetter = require('./Letter');

Paper.PaperJuniorLegal = require('./JuniorLegal');

Paper.PaperLegal = require('./Legal');

Paper.PaperLedger = require('./Ledger');

Paper.PaperTabloid = require('./Tabloid');

Paper.PaperA5 = require('./A5');

Paper.PaperA4 = require('./A4');

Paper.PaperA3 = require('./A3');

module.exports = Paper;