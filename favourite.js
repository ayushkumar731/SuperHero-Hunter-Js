var favList=document.getElementById("fav-list");

for(let i=0;i<localStorage.length;i++){

        var json=JSON.parse(localStorage.getItem(i));

        var btn=document.createElement('button');
         btn.setAttribute('class','btn');
        btn.setAttribute("onclick","remove("+i+")");
        btn.innerHTML="Unlike";
                   
        var anchor=document.createElement('a');
        anchor.setAttribute('href','herodetail.html');
        anchor.innerHTML=json.name;
        anchor.addEventListener('click',function(){
                localStorage.setItem("heroId",json.id);
        })
        var divBtn=document.createElement('div');
        divBtn.setAttribute("class","hero-name");
        
        var divName=document.createElement('div');
        divName.setAttribute("class","name");
        
        var divImg=document.createElement('div');
        divImg.setAttribute("class","image");
        var img=document.createElement('img');
        img.setAttribute("src",json.image.url);
        divImg.appendChild(img);

        divBtn.appendChild(anchor);
         
        divName.appendChild(divBtn); 
        divName.appendChild(divImg);  
        divName.appendChild(btn);    
        favList.appendChild(divName);

        function remove(){
                localStorage.removeItem(i);
                location.reload();
        }
       
}
