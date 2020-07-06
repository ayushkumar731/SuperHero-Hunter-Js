var favList=document.getElementById("fav-list");
for( i=0;i<localStorage.length;i++){
        
        // var xhrName=new XMLHttpRequest();
        // xhrName.onload=function(){
        //     var responseName=JSON.parse(xhrName.response);
        //     var id=responseName.results[0].id;
        //     console.log(id);
        // }
            var heroname=localStorage.key(i);
            console.log(heroname);
            var heroval=localStorage.getItem(name);

            var btn=document.createElement('button');
            btn.setAttribute('class','btn');
            btn.setAttribute("onclick","remove("+i+")");
            btn.innerHTML="Unlike";
           
            var anchor=document.createElement('a');
            anchor.setAttribute('href','#');
            anchor.innerHTML=heroname;
            var divBtn=document.createElement('div');
            divBtn.setAttribute("class","hero-name");

            var divName=document.createElement('div');
            divName.setAttribute("class","name");

            divBtn.appendChild(anchor);
            divName.appendChild(divBtn);
            divName.appendChild(btn);
            favList.appendChild(divName);

            // var heroName=document.createElement('div');
            // heroName.setAttribute("class","hero-name");
            // heroName.innerHTML=heroname;
            // list.appendChild(heroName);

}

        // xhrName.open('get',"https://superheroapi.com/api.php/2645388492343736/search/"+heroname,true);
        // xhrName.send();
        document.getElementsByClassName("btn")[0].addEventListener('click',remove);

        function remove(){
                anchor.innerHTML="";
                localStorage.removeItem(heroname);
                location.reload();

        }
      
