
    //access all id 

    var search=document.getElementById("search-bar");
    var list=document.getElementById("search-list");
    var btn=document.getElementsByClassName('btn')[0];
    var arr=[];
    //function to heroes image and name and strenth

    function fetchHero(){

        //initialize request
        var xhrRequest=new XMLHttpRequest();

        //take the value of search bar

       var val=search.value;

    //    refresh search list 
       document.getElementById("search-list").innerHTML="";

       

       //onload function

        xhrRequest.onload=function(){
            var responseJson=JSON.parse(xhrRequest.response);
            for(var i=0;i<responseJson.results.length;i++){


               
              

                //fetching image url

                var imgUrl=responseJson.results[i].image.url;
                //fetching name
                var name=responseJson.results[i].name;

                //fetching powerstats
                var strength=responseJson.results[i].powerstats.strength;


                //creting elemens and append it
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
                anchor.setAttribute("onclick","herodetail("+responseJson.results[i].id+")");
                
                divBtn.appendChild(btn);

                divDet.appendChild(para1);
                divDet.appendChild(para2);
                divDet.appendChild(divBtn);

                divImg.appendChild(image);
                anchor.appendChild(divImg);
                div.appendChild(anchor);
                div.appendChild(divDet);

                list.appendChild(div);

                btn.addEventListener('click',function(){
                    var index = localStorage.length;
                    var data = JSON.stringify(responseJson.results[0]);
                    localStorage.setItem(index,data);

                });

            }
            
        }
        //initializing request
        xhrRequest.open('get',"https://superheroapi.com/api.php/2645388492343736/search/"+val,true);

        //sending request
        xhrRequest.send();
    }
search.addEventListener('keyup',fetchHero);

        //this function is calling when someone click on photo and  the id in the local storage

function herodetail(id){
    localStorage.setItem("heroId",id);
}

