var favList=document.getElementById("fav-list");
var arr=localStorage.getItem('likeName');
var arr1=JSON.parse(arr);
var i;
for( i=0;i<arr1.length;i++){
        
        var xhrName=new XMLHttpRequest();
        xhrName.onload=function(){
            var responseName=JSON.parse(xhrName.response);
            var nameUrl=responseName.name;

            var btn=document.createElement('button');
            btn.setAttribute('class','btn');
            btn.setAttribute("onclick","remove("+i+")");
            btn.innerHTML="Unlike";
           
            var anchor=document.createElement('a');
            anchor.setAttribute('href','herodetail.html');
            anchor.innerHTML=nameUrl;

            var divBtn=document.createElement('div');
            divBtn.setAttribute("class","hero-name");

            var divName=document.createElement('div');
            divName.setAttribute("class","name");

            divBtn.appendChild(anchor);
            divName.appendChild(divBtn);
            divName.appendChild(btn);
            favList.appendChild(divName);
        }

        xhrName.open('get',"https://superheroapi.com/api.php/2645388492343736/search/"+arr1[i],true);
        xhrName.send();
      
}
