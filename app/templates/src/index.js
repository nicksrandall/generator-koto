import d3 from 'd3';
import koto from 'koto';
import configs from './configs';

// Define Chart
class <%= global %> extends koto.Base {
  constructor(selection) {
    super(selection);

    var _Chart = this;

    // load configs
    configs.forEach(function (config) {
      _Chart.configs.set(config.name, config);
    });

    // Setup

  }
}

// Export
koto.<%= global %> = <%= global %>;
export default koto.<%= global %>;
