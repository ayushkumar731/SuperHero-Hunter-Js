
    var search=document.getElementById("search-bar");
  var list=document.getElementById("search-list");
    var btn=document.getElementsByClassName('btn')[0];
    function fetchHero(){
        var xhrRequest=new XMLHttpRequest();
       var val=search.value;
       document.getElementById("search-list").innerHTML="";
        xhrRequest.onload=function(){
            var responseJson=JSON.parse(xhrRequest.response);
            for(var i=0;i<responseJson.results.length;i++){
                var imgUrl=responseJson.results[i].image.url;
                var name=responseJson.results[i].name;
                var strength=responseJson.results[i].powerstats.strength;

                var div=document.createElement("div");
                div.setAttribute("class","search-item");

               

                divDet=document.createElement("div");
                divDet.setAttribute("class","list-details");
                var para1=document.createElement('div');
                var node = document.createTextNode("name" + ":"+"  " +name);
                para1.appendChild(node);

                var para2=document.createElement('div');
                para2.innerHTML="Strength"+":"+" "+strength;

                var divBtn=document.createElement("div");
                divBtn.setAttribute("class","like-btn");
                var btn=document.createElement("button");
                btn.setAttribute("class","btn");
                btn.innerHTML="Like";
                var divImg=document.createElement("div");
                divImg.setAttribute("class","list-image");
                var image=document.createElement("img");
                image.setAttribute("src", imgUrl);

                var anchor=document.createElement("a");
                anchor.setAttribute("href","herodetail.html");
                anchor.setAttribute("onclick","herodetail("+responseJson.results[i].id+")")
                
                divBtn.appendChild(btn);

                divDet.appendChild(para1);
                divDet.appendChild(para2);
                divDet.appendChild(divBtn);

                divImg.appendChild(image);
                anchor.appendChild(divImg);
                div.appendChild(anchor);
                div.appendChild(divDet);

                list.appendChild(div);

            }
            
        }
        xhrRequest.open('get',"https://superheroapi.com/api.php/2645388492343736/search/"+val,true);
        xhrRequest.send();
    }
     search.addEventListener('keyup',fetchHero);


     function herodetail(id){
        localStorage.setItem("heroId",id);
        console.log(id);
    }