require.config({
  baseUrl: 'scripts',
  paths: {
    'knockout': 'knockout',


  },

});

require(['knockout'], function (ko) {



  function FormViewModel() {
    let self = this;
    self.productId = ko.observable('');
    self.productName = ko.observable('');
    self.productType = ko.observable('');
    self.productQuantity = ko.observable('');
    self.productAvailability = ko.observable('');
    self.discountTypes = ko.observableArray([]);


  }
  function AppViewModel() {
    let self = this;
    self.isSubmit = ko.observable(false)


    self.forms = ko.observableArray([new FormViewModel()])


    self.addForm = function () {

      self.forms.push(new FormViewModel())


    }

    self.removeProduct = function (product) {

      self.forms.remove(product)
    }

    self.submitForm = function () {

      self.isSubmit(true)
    }

    self.resetForm = function () {
      self.forms([])

    }




  }



  var appViewModel = new AppViewModel();
  ko.applyBindings(appViewModel);
});

