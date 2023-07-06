function Product(name, price) {
    var self = this;

    self.name = name;
    self.price = price;
    self.quantity = ko.observable(0);
}



function CartViewModel() {
    var self = this;

    self.products = [
        new Product("Product 1", 10),
        new Product("Product 2", 15),
        new Product("Product 3", 20)
    ];

    self.cartItems = ko.observableArray([]);
    
    self.isLogged = ko.observable(false)

    self.login = function () {
        var storedUsername = localStorage.getItem("username");
        var storedPassword = localStorage.getItem("password");

        if (
            self.username() === storedUsername &&
            self.password() === storedPassword
        ) {
            self.isLoggedIn(true);
        } else {
            alert("Invalid credentials!");
        }
    };

    self.addToCart = function (product) {
        if (product.quantity() > 0) {
            var existingCartItem = ko.utils.arrayFirst(self.cartItems(), function (item) {
                return item.name === product.name;
            });

            if (existingCartItem) {
                existingCartItem.quantity(existingCartItem.quantity() + product.quantity());
            } else {
                self.cartItems.push(ko.utils.clone(product));
            }

            product.quantity
        }
    }
}