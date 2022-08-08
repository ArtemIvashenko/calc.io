let displayCalc  = document.getElementById("displayCalc");
        
       
        function calk(){
          let hystory_1 = displayCalc.value;
          
            document.getElementById("hystory_1").innerHTML = hystory_1;
            
        
            let operator = "";
            let res = "";
        
            for( let i=0; i<displayCalc.value.length; i++){
                         if (displayCalc.value[i]=="+"){
                             operator="+";
                            res=displayCalc.value.split(operator);
                            displayCalc.value = parseFloat(res[0]) + parseFloat(res[1]);
                             alert(displayCalc.value);
                 } 
                 else 
                        if (displayCalc.value[i]=="-"){
                             operator="-";
                             res=displayCalc.value.split(operator);
                            displayCalc.value = parseFloat(res[0]) - parseFloat(res[1]);
                            alert(displayCalc.value);

                 }
                else 
                        if (displayCalc.value[i]=="*"){
                            operator="*";
                            res=displayCalc.value.split(operator);
                            displayCalc.value = parseFloat(res[0]) * parseFloat(res[1]);
                            alert(displayCalc.value);
                 }
                else    if (displayCalc.value[i]=="/"){
                            operator="/";
                            res=displayCalc.value.split(operator);
                            displayCalc.value = parseFloat(res[0]) / parseFloat(res[1]);
                            alert(displayCalc.value);
                 }
                else 
                        if (displayCalc.value[i]=="%"){
                             operator="%";
                            res=displayCalc.value.split(operator);
                            displayCalc.value = parseFloat(res[0]) % parseFloat(res[1]);
                            alert(displayCalc.value);

                        }
                    }
       
            
            
         //  displayCalc.value = eval(displayCalc.value);
            
        
            document.getElementById("displayCalc").innerHTML = displayCalc.value;
            
            
            }

           
function clearr(){
    displayCalc.value = '';
  document.getElementById("displayCalc").innerHTML = displayCalc.value;
}
        
         
        function buttonpress(pressbtn){
            displayCalc.value  = displayCalc.value + pressbtn;
            document.getElementById("displayCalc").innerHTML = displayCalc.value;
        }
        function bakspase(){
            displayCalc.value = displayCalc.value.slice(0,length-1);
            document.getElementById("displayCalc").innerHTML = displayCalc.value
        }
        calk1.onclick = function(){
            
            calk();
         }

         document.addEventListener('keydown', function(event) {
  if ( event.keyCode == 13 ) {
    calk();
  }
});
