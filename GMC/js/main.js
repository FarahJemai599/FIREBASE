


$("#c").click(function(){
    $("#text").fadeOut("6000");
});
$("#ph1").click(function(){
    $("#ph1").fadeOut("5000");
});
$("#B").click(function(){
    if($("#text").css("font-weight")==400){
        $("#text").css("font-weight","bold")
    }
    else{
        $("#text").css("font-weight","normal")

    }
});

$("#I").click(function(){
    if ($("#text").css("font-style")=="normal"){
        $("#text").css("font-style","italic");
    }
    else{
        $("#text").css("font-style","normal");
    }

});


$("#UN").click(function(){
   if($("#text").css("text-decoration")=="underline solid rgb(0, 0, 0)"){
       $("#text").css("text-decoration","none"); 
   }
   else{
       $("#text").css("text-decoration","underline");
   }
});

$("#px").click(function(){
    $("#text").css("font-size",$("#px").val());
});
$("#police").click(function(){
    $("#text").css("font-family",$("#police").val());
});
$("#b1").mouseover(function(){
    $("#butt1").css("display","flex");
    $("#b1").css("opacity","0.7");
})
$("#b2").mouseover(function(){
    $("#butt2").css("display","flex");
    $("#b2").css("opacity","0.7");
})
$("#b3").mouseover(function(){
    $("#butt3").css("display","flex");
    $("#b3").css("opacity","0.7");
})    
$("#b4").mouseover(function(){
    $("#butt4").css("display","flex");
    $("#b4").css("opacity","0.7");
})    
$("#b5").mouseover(function(){
    $("#butt5").css("display","flex");
    $("#b5").css("opacity","0.7");
})    
$("#b6").mouseover(function(){
    $("#butt6").css("display","flex");
    $("#b6").css("opacity","0.7");
})
$("#b7").mouseover(function(){
    $("#butt7").css("display","flex");
    $("#b7").css("opacity","0.7");
})        
$("#b8").mouseover(function(){
    $("#butt8").css("display","flex");
    $("#b8").css("opacity","0.7");
}) 
$("#b9").mouseover(function(){
    $("#butt9").css("display","flex");
    $("#b9").css("opacity","0.7");
})   
$("#b1").mouseleave(function(){
    $("#butt1").css("display","none");
    $("#b1").css("opacity","1");
})  
$("#b2").mouseleave(function(){
    $("#butt2").css("display","none");
    $("#b2").css("opacity","1");
}) 
$("#b3").mouseleave(function(){
    $("#butt3").css("display","none");
    $("#b3").css("opacity","1");
})   
$("#b4").mouseleave(function(){
    $("#butt4").css("display","none");
    $("#b4").css("opacity","1");
})  
$("#b5").mouseleave(function(){
    $("#butt5").css("display","none");
    $("#b5").css("opacity","1");
})  
$("#b6").mouseleave(function(){
    $("#butt6").css("display","none");
    $("#b6").css("opacity","1");
}) 
$("#b7").mouseleave(function(){
    $("#butt7").css("display","none");
    $("#b7").css("opacity","1");
})  
$("#b8").mouseleave(function(){
    $("#butt8").css("display","none");
    $("#b8").css("opacity","1");
})  
$("#b9").mouseleave(function(){
    $("#butt9").css("display","none");
    $("#b9").css("opacity","1");
})  
var firebaseConfig = {
    apiKey: "AIzaSyDR5StnIllh6RQo0HcSmSPss2k8aYyl8lo",
    authDomain: "gmcbase-51b02.firebaseapp.com",
    databaseURL: "https://gmcbase-51b02.firebaseio.com",
    projectId: "gmcbase-51b02",
    storageBucket: "",
    messagingSenderId: "871351752973",
    appId: "1:871351752973:web:767f9cddcbc9526f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var messageRef = firebase.database().ref("gmcbase-51b02");
function submiteForm(e){
    e.preventDefault();
    var name =document.getElementById("name").value;
    var email =document.getElementById("email").value;
    var track =document.getElementById("track").value;
    var number =document.getElementById("number").value;
    saveMessage(name,email,track,number);
}
document.getElementById("formSubmit").addEventListener("submit",submiteForm);
function saveMessage(name,email,track,number){
    var newMessageRef = messageRef.push()
    newMessageRef.set({
        name: name,
        email: email,
        track: track,
        number: number
    })
}