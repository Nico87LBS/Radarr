var Backbone = require('backbone');
var _ = require('underscore');
var ImportSeriesModel = require('./ImportSeriesModel');
var AsSelectableCollection = require('Mixins/Collection/AsSelectableCollection');

let ImportSeriesCollection = Backbone.Collection.extend({
  model: ImportSeriesModel,

  importSelected(options = {}) {
    const selected = this.getSelected();

    const savePromise = _.map(selected, (model) => {
      const series = model.get('selectedSeries');
      series.set(options);
      return series.save();
    });

    return $.when(savePromise);
  }
});

ImportSeriesCollection = AsSelectableCollection.apply(ImportSeriesCollection);

module.exports = ImportSeriesCollection;