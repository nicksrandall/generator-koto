// FOR USE WITH DOMO APP BUILDER
AutoWidgets.register({
  name: '<%= global %>',
  data: [{
      name: 'model',
      columnNames: [{
        name: 'name',
        type: 'string'
      }, {
        name: 'value',
        type: 'string'
      }],
      defaultValues: [
        [{name: 'North', value: 51}],
        [{name: 'East', value: 71}],
        [{name: 'South', value: 21}],
        [{name: 'West', value: 61}]
      ]
  }]
});
