requirejs.config(
    {
        paths:{
            knockout: 'knockout1',
            viewModel: 'viewModel'
        }
    }
)

require(['knockout', 'viewModel'], function(ko, ViewModel) {
    ko.applyBindings(new ViewModel());
  });