window.addEventListener("load" , function(){
    var txtX = document.getElementById("txt-x");
    var txtY = document.getElementById("txt-y");
    var btnAdd = document.getElementById("btn-add");
    var txtSum = document.getElementById("txt-sum");
    console.log("ok");
    
    btnAdd.onclick = function(){
       
        var x = parseInt(txtX.Value);
        var y = parseInt(txtY.Value); //문자열로 받아오기때문에 int로 바꿔줌
        txtSum.value = x + y;
        console.log("add");
    };


});