
 (function () {
     document.querySelector('#add').addEventListener('click', function () {
         let input = document.querySelector('#text');
         let list = document.querySelector('#list');

         let item = document.createElement('li'); 
         let itemText = document.createTextNode(input.value); 

         item.appendChild(itemText); 
         list.appendChild(item); 

         //input.value ="";  
     });
 })();   
 
    
  