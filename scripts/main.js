require.config({
    baseUrl: 'scripts',
    paths: {
      'knockout': 'knockout',
      
      
    },
    
  });
  
  require(['knockout'], function(ko) {
    // ViewModel for the main application


    function FormViewModel()
    {
        var self = this;
        self.productId = ko.observable('');
        self.name = ko.observable('');
        self.type = ko.observable('');
        self.quantity = ko.observable('');
        self.availability = ko.observable('');
        self.discountTypes = ko.observableArray([]);


    }
    function AppViewModel() {
        let self = this;
        self.isSubmit = ko.observable(false)


        self.forms = ko.observableArray([new FormViewModel()])


        self.addForm = function(){

        self.forms.push(new FormViewModel())

        
        }

        self.removeProduct = function(product){

        self.forms.remove(product)
         }

        self.submitForm = function()
        {

          self.isSubmit(true)
        }

        self.resetForm = function()
        {
          self.forms([])
          
        }


  
     
    }
    // Apply bindings and initialize the main application

    
  
    // Register the product-form component
 
  
        var appViewModel = new AppViewModel();
        ko.applyBindings(appViewModel);
  });
  
  // <button type="button" data-bind="click: addProduct">Add</button>