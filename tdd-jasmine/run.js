import Jasmine from 'jasmine';
import Reporter from 'jasmine-terminal-reporter';

let options = {
  'isVerbose': true,
  'includeStackTrace': true,
};

const jasmine = new Jasmine();
const reporter = new Reporter(options);

jasmine.loadConfigFile('spec/support/jasmine.json');
jasmine.addReporter(reporter);
jasmine.execute();
