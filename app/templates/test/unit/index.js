import <%= global %> from '../../src/<%= global %>';

describe('#<%= repo %>', function () {
  beforeEach(function () {
    this.chart = new <%= global %>(d3.select('#test'));
  });

  it('should exist', function () {
    expect(this.chart).to.exist;
  });
});
