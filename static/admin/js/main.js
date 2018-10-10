function nocturno() {
  /*var d = new Date();
  d.getHours();*/
    if(document.getElementById("cbox").checked){
        //document.getElementsByTagName("body")[0].style.backgroundColor = "#212f3c";
        document.getElementsByTagName("body")[0].background = "/static/admin/img/nocturno2.jpg";
        document.getElementById("wrapperp").style.backgroundColor = "#1f618d";
        document.getElementsByClassName("col5")[0].style.backgroundImage ="url('/static/admin/img/nocturno2.jpg')";
        document.getElementsByClassName("col8")[0].style.backgroundColor = "  #95a5a6 ";
        if (document.getElementsByClassName("col4").length!=0) {
          document.getElementsByClassName("col4")[0].style.backgroundColor = " #16a085 ";
        }
        document.getElementsByClassName("col5")[0].style.color = "#E6E6FA";
        var arrayMenu = document.getElementsByClassName("menu");
        arrayMenu[0].style.color = "#A9A9A9";
        arrayMenu[1].style.color = "#A9A9A9";
        arrayMenu[2].style.color = "#A9A9A9";
        arrayMenu[3].style.color = "#A9A9A9";
        arrayMenu[4].style.color = "#A9A9A9";
        arrayMenu[5].style.color = "#A9A9A9";

        var arrayH1 = document.getElementsByTagName("h1");
        var arrayH2 = document.getElementsByTagName("h2");
        var arrayH3 = document.getElementsByTagName("h3");
        var arrayH4 = document.getElementsByTagName("h4");
        for ( var i = 0;  i < arrayH1.length; i++ ) {
        arrayH1[ i ].style.color = " #f8c471";
    }
    for ( var i = 0;  i < arrayH2.length; i++ ) {
        arrayH2[ i ].style.color = " #5499c7 ";
    }
    for ( var i = 0;  i < arrayH3.length; i++ ) {
        arrayH3[ i ].style.color = " #5499c7 ";
    }
    for ( var i = 0;  i < arrayH4.length; i++ ) {
        arrayH4[ i ].style.color = " #5499c7 ";
    }

        if (document.getElementsByClassName("fab") != []) {
          var arrayFab = document.getElementsByClassName("fab");
          arrayFab[0].style.backgroundColor = "#000";
          arrayFab[1].style.backgroundColor = "#000";
          arrayFab[2].style.backgroundColor = "#000";
        }
        
        
   } 
   else{
      document.getElementsByTagName("body")[0].style.backgroundColor = "#fff";
        document.getElementById("wrapperp").style.backgroundColor = "#333335";
        document.getElementsByClassName("col8")[0].style.backgroundColor = "skyblue";
        document.getElementsByClassName("col5")[0].style.backgroundColor = "#fff";
        document.getElementsByClassName("col5")[0].style=""
        document.getElementsByTagName("body")[0].background = "";
        if (document.getElementsByClassName("col4").length!=0) {
          document.getElementsByClassName("col4")[0].style.backgroundColor = "#00ff8a";
        }
        document.getElementsByClassName("col5")[0].style.color = "#666666";
        var arrayMenu = document.getElementsByClassName("menu");
        arrayMenu[0].style.color = "#fff";
        arrayMenu[1].style.color = "#fff";
        arrayMenu[2].style.color = "#fff";
        arrayMenu[3].style.color = "#fff";
        arrayMenu[4].style.color = "#fff";
        arrayMenu[5].style.color = "#fff";
        var arrayH1 = document.getElementsByTagName("h1");
        var arrayH2 = document.getElementsByTagName("h2");
        var arrayH3 = document.getElementsByTagName("h3");
        var arrayH4 = document.getElementsByTagName("h4");
        for ( var i = 0;  i < arrayH1.length; i++ ) {
        arrayH1[ i ].style.color = " rgb(102, 102, 102)";
        }
        for ( var i = 0;  i < arrayH2.length; i++ ) {
            arrayH2[ i ].style.color = " rgb(102, 102, 102) ";
        }
        for ( var i = 0;  i < arrayH3.length; i++ ) {
            arrayH3[ i ].style.color = " rgb(102, 102, 102)";
        }
        for ( var i = 0;  i < arrayH4.length; i++ ) {
            arrayH4[ i ].style.color = " rgb(102, 102, 102)";
        }
       var arrayFab = document.getElementsByClassName("fab");
        arrayFab[0].style.backgroundColor = "#fff";
        arrayFab[1].style.backgroundColor = "#fff";
        arrayFab[2].style.backgroundColor = "#fff";
   }
       
}


function validar(){
  var good = 0;
    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellidos");
    var email = document.getElementById("email");
    var asunto = document.getElementById("asunto");
    var cuerpo = document.getElementById("cuerpo");
    var valNomAp = /^([a-zA-Z_]{2,15} [a-zA-Z_]{2,15})$/;
    var valEmail = /^(\w+@[a-zA-Z_]+?\.[a-zA-Z_]{2,6})$/;
    if (!valNomAp.test(nombre.value)) {
      nombre.style.background="#FFDDDD";
    }else{
      nombre.style.background="#FFFFFF";
      good = good + 1;
    }

    if (!valNomAp.test(apellidos.value)) {
      apellidos.style.background="#FFDDDD";
  
    }else{
      apellidos.style.background="#FFFFFF";
      good = good + 1;
    }

    if(!valEmail.test(email.value)){
      email.style.background="#FFDDDD";
      
    }else{
      email.style.background="#FFFFFF";
      good = good + 1;
    }

    if(asunto.value==""){
      asunto.style.background="#FFDDDD";
      
    }else{
      asunto.style.background="#FFFFFF";
      good = good + 1;
    }

    if(cuerpo.value==""){
      cuerpo.style.background="#FFDDDD";
      
    }else{
      cuerpo.style.background="#FFFFFF";
      good = good + 1;
    }
    
   if (good == 5) {
    alert("Su mensaje fue enviado con exito!");
     document.getElementById("form_contactanos").reset();
   }
  }
