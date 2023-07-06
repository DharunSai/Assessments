$(function()
{
  
  
var display = $("#result");
var operatorClicked = false;
var currentVal = null;
var previousValue = null;
var currentOperator = null;


    $('.cell').on('click',function(evt)
    {
        
        var number = $(this).text()
        
        if(operatorClicked)
        {
            display.val(number);
            operatorClicked= false
        }
        else{
            currentVal = display.val()
            console.log(currentVal)
            display.val(currentVal + number)
        }

    })

    $(".operator").click(function() {
        var operator = $(this).text();
        console.log(operator)
        operatorClicked = true;
        previousValue = parseFloat(display.val());
        console.log(previousValue)
        currentOperator = operator;
      });

      $('#idSubmit').click(
        function()
        {
            var value = parseFloat(display.val());
            var result;
            console.log('value',value)
            switch (currentOperator) {
                case "+":
                  result = previousValue + value;
                  break;
                case "-":
                  result = previousValue - value;
                  break;
                case "*":
                  result = previousValue * value;
                  break;
                case "/":
                  result = previousValue / value;
                  break;
                case "%":
                    result=previousValue % value;
                    break;
              }
            //    display.val(result);
    
          if(result)
          {
            display.val(result);
    
          }
          else if(result==0/1){
            display.val('Infinityerror')
          }
          else{
    
            
            display.val("enter only numbers")
          }

        }
      )
      function calculateResult1()
      {
        var value = parseFloat(display.val());
        var result;
        console.log('value',value)
        console.log('helloo',display.val())
        k=display.val()
        flag=false
        // console.log(k)
        
        // display.val(eval(k))
        k=k.substring(0,k.length)
        console.log(k)
        if(/^[^A-Za-z!@#$^&,?":{}|<>]+$/.test(k) && (k.includes('+')||k.includes('-')||k.includes('*')||k.includes('/')||k.includes('%')||k.includes('(')||k.includes(')')))
        {
          var regex = /^[+*/%]$/;
          
          for(var i=0;i<k.length;i++)
          {
            console.log('loop',i,flag)
            if((regex.test(k[i]) && !(i!=k.length-1 && regex.test(k[i+1])  ) && !(i!=0 && regex.test(k[i-1]))) || (k[i]=='-' && i!=k.length-1)  )
            {

              if((k[i]=='-' && (i!=k.length-1 && k[i+1]=='-')))
              {
                flag=false
                console.log('-',flag, k[i])
                
                break;
              }
              if(regex.test(k[k.length-1]))
              {
                flag=false;
                break;
              }
              else
              {
              console.log(k[i],i)
              flag=true
            }
          }

          
           
          }
          if(k[k.length-1]=='-')
          {
            flag=false
          }
          if(regex.test(k[k.length-1]))
            {
              flag=false
            }
            else if(regex.test[k[0]])
            {
              flag =false
            }
           
          }
          else{
            flag =false
          }
            
            
        

        console.log(flag)
        if(flag)
        {
          console.log(flag)


          display.val(eval(k))
        }
        else
        {
          display.val('enter onlynumbers')
        }
      }
    //     for(i=0;i<k.length;i++)
    //     {
    //         if((k[i]=='+'|| k[i]=='-'|| k[i]=='*'|| k[i]=='/') )
    //         {
    //             previousValue=parseFloat(k.substring(0,i))
    //             value=parseFloat(k.substring(i+1,k.length))
    //             currentOperator = k[i]
                
    //             if(!value)
    //             {
    //                console.log('hihi')
    //                 k1=display.val() 
    //                 for(i=0;i<k1.length;i++)
    //                 {
    //                     if(k1[i]=='+'|| k1[i]=='-'|| k1[i]=='*'|| k1[i]=='/')
    //                     {
    //                         previousValue = parseFloat(k1.substring(0,i))
    //                         value=parseFloat(k1.substring(i+1,k1.length))
    //                         currentOperator=k1[i]
    //                         console.log(eval(k1))
                            
    //                     }
    //                 }
                  
    //             }

                
    //         }
    //     }


        
    //     console.log(previousValue,value,currentOperator)
    //     switch (currentOperator) {
    //         case "+":
    //           result = previousValue + value;
    //           break;
    //         case "-":
    //           result = previousValue - value;
    //           break;
    //         case "*":
    //           result = previousValue * value;
    //           break;
    //         case "/":
    //           result = previousValue / value;
    //           break;
    //         case "%":
    //             result=previousValue % value;
    //             break;
    //       }
    //     //    display.val(result);

        

    //   if(result)
    //   {
    //     display.val(result);

    //   }
    //   else if(result==0/1){
    //     display.val('Infinityerror')
    //   }
    //   else{

        
    //     display.val("enter only numbers")
    //   }
      



      function calculateResult()
      {
        var value = parseFloat(display.val());
        var result;
        console.log('value',value)
        console.log('helloo',display.val())
        k=display.val()
        // console.log(k)
        
        // display.val(eval(k))
        k=k.substring(0,k.length)
        console.log(k)
        for(i=0;i<k.length;i++)
        {
            if((k[i]=='+'|| k[i]=='-'|| k[i]=='*'|| k[i]=='/') )
            {
                previousValue=parseFloat(k.substring(0,i))
                value=parseFloat(k.substring(i+1,k.length))
                currentOperator = k[i]
                
                if(!value)
                {
                   console.log('hihi')
                    k1=display.val() 
                    for(i=0;i<k1.length;i++)
                    {
                        if(k1[i]=='+'|| k1[i]=='-'|| k1[i]=='*'|| k1[i]=='/')
                        {
                            previousValue = parseFloat(k1.substring(0,i))
                            value=parseFloat(k1.substring(i+1,k1.length))
                            currentOperator=k1[i]
                            console.log(eval(k1))
                            
                        }
                    }
                  
                }

                
            }
        }


        
        console.log(previousValue,value,currentOperator)
        switch (currentOperator) {
            case "+":
              result = previousValue + value;
              break;
            case "-":
              result = previousValue - value;
              break;
            case "*":
              result = previousValue * value;
              break;
            case "/":
              result = previousValue / value;
              break;
            case "%":
                result=previousValue % value;
                break;
          }
        //    display.val(result);

        

      if(result)
      {
        display.val(result);

      }
      else if(result==0/1){
        display.val('Infinityerror')
      }
      else{

        
        display.val("enter only numbers")
      }
       
        
      }



      $("#equal").click(function(e){

        
        calculateResult(e)
      })


      $('#iddel').on('click',function()
      {
        k=display.val()
        console.log('del',k)
        k = k.substring(0,k.length-1)
        display.val(k)
      })

      $('#idReset').on('click', function()
      {
        location.reload();
      })

      $('#idC').on('click',function()
      {
        currentVal=null
        display.val(null)
      })

      $(document).keypress(function(event)
      {
        if(event.which==13)
        {
            calculateResult1();
        }
      })


      
      
      

      
})