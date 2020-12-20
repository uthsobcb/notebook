function changeLeft(x,z){
    document.getElementById(x).style.transform ="rotateY(0deg)";
    setTimeout(function(){
        document.getElementById(x).style.zIndex=z;
    },500);
    document.getElementById(x).style.color = 'black';
}

function changeRight(y,z){
    document.getElementById(y).style.transform ="rotateY(-90deg)";
    setTimeout(function(){
        document.getElementById(y).style.zIndex=z;
    },500);
    document.getElementById(y).style.color = 'transparent';
}

function waterMark(wh, left, top,fontSize){
    var mark = document.createElement("div");
    var link = document.createElement("a");
    document.getElementById("firstPage").appendChild(link);
    link.href="#";
    link.appendChild(mark);
    mark.style=`
        position:absolute;
        left:${left};
        top:${top};
        width:${wh};
        height:${wh};
        border-radius:50%;
        background:url(${"https://www.sololearn.com/Icons/Avatars/7938943.jpg"} );
        background-size:cover;
        background-position:center;
        text-align:center;
        line-height:${wh};
        color:white;
        font-size:${fontSize};
        opacity:1;
        box-shadow:0 0 1px black;
        transform:translate(-50%, -50%)
        `;
    mark.innerText="Original";
}

window.onload = function(){
    waterMark("25vmin", "50%", "50%", "3.5vmin");
};


var position = false;
function secretPage(){
    if(position === false){
        document.getElementById("secretPaper").style.top="-100vh";
    document.getElementById("secretPaper").style.transform ="rotate(0deg)";
    document.getElementById("lastArrow").style.display="none";
    setTimeout(function(){
        document.getElementById("secretPaper").style.top="30%";
        document.getElementById("secretPaper").style.zIndex = "2";
        position = true;
        },1500);
    }
    else{
        document.getElementById("secretPaper").style.top="-100vh";
    document.getElementById("secretPaper").style.transform ="rotate(15deg)";
    setTimeout(function(){
        document.getElementById("secretPaper").style.top="30%";
        document.getElementById("secretPaper").style.zIndex = "-1";
        document.getElementById("lastArrow").style.display="block";
        position = false;
    },1500);
    }
}
