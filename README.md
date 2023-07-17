# Assessments

#  what is the requirement of the task

The requirement of the task is to create a products page where when you enter details in the form you will get it reflected in the the products table which is 2 way binded




# your solution approach
I had 1 ko viewmodel and 1 class. In the class it has all the details and once we press add a product a new object will be instantiated and view model will be activated

features of Product class:
1..productId 
2.productName 
3.productType 
4.productQuantity
5.productAvailability
6.discountTypes


features of ProductViewModel:
1.add
this will add the new Product object to the array

2.remove:
this will remove the object from the array

3.submit:
I had used an observable and set the show to false and it changes and displays the table once the product is submitted

4.reset:
I will delete all the values in the array


# duration of the task Vs. ETA

duration: 1day
eta: 3hrs



# test cases which you run
{1,'curtain','mobile',5,yes,['HDFC']}
{2,'bedsheet,'laptop',7,no,['HDFC','mastercard]}





# Specify if there are any bugs

NO bugs




# corrections
 Code indentation is not followed. I can see most part of the code is not aligned properly ------------> corrected
 
* Use descriptive variable names. Some variable names are too generic and even files too could have been named better.
*   Also, use consistent naming conventions like camelCase or snake_case-------------->corrected
*   
* Using const or let instead of var for variable declarations is recommended. You can just learn the differences between them and use them appropriately.---->corrected

* 
* Remove or discard the unused code or commented-out code from the repository----->corrected
* 
* Separate the CSS styles into a separate file and add or remove classes to modify styles instead of setting up style using style.display='block' ---->corrected
* 

* It's okay to use traditional function keywords to define/declare a function. However, It's better to learn about arrow functions and try to modify your code to use arrow functions.
*
