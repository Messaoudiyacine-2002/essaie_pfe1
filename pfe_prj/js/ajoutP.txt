
          var i =0;
          function  ajout() {
 
              let   ajoutt =""; 
                           var name=document.getElementById('NomP').value;
                           var surname=document.getElementById('PrenomPa').value;
                           var age=document.getElementById('DateNaissancePI').value;
                           var sexe=document.getElementById('SexeP').value;
                           var telepone=document.getElementById('telephoneP').value;
                    ajoutt += ` <tr id="indice${i}">
                          <td id="iname${i}">${name}</td>
                          <td id="isurname${i}">${surname}</td>
                          <td>${age}</td>
                          <td>${sexe}</td>
                          <td>${telepone}</td>
                          <td> <button    onclick="rmv(${i})">x</button></td>
                   
                           </p>`
             
                     i++;
                    document.getElementById('ajouter').insertAdjacentHTML("beforeend",ajoutt);
 
 
 }
 
 
 function rmv(i) {
     var el = document.getElementById('indice'+i).remove();
 }