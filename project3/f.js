function function1(x) {

    var output = 5*x-3*x*x+13;
    return output;
}

function function2(x,y,z){
    var output="Hello, "+x+" "+y+" "+z+"!";
    return output;
}



function function3(x,y){
    if (x>y){
        var text="banana";
        var color="yellow";
    }

    else if(y>x){
        var text="porcupine";
        var color="brown";

    }
    else if(x==y && x<0){
         var text="red apples";
        var color="red";

    }
    else{
        var text="green apples";
        var color="green";

    }


 content.innerHTML=text;
 content.style.color=color;


}


function function4(x){
    var count=0;
    for (var i=0;i<x.length;i++){
        var curr=x.charAt(i);
        if (['0','1','2','3','4','5','6','7','8','9'].indexOf(curr)>=0){
            //first digit
            if (count==0){
                var first=curr;

            }
            count++;
        }

    }

    if (count==10 || (count==11 && first=='1')){
        var text='valid';
        var color="green";
    }

    else{
        var text='invalid';
        var color="red";
    }

    content.innerHTML=text;
    content.style.color=color;

}

function function5(x){
    var list=x.split(",");

    content.innerHTML=list[2];
}

function function6(){

    var id_str=$(this).attr("name");

    document.getElementById("first").innerHTML="test";
}

function function7() {

    var buttons = document.getElementsByTagName("button");
var buttonsCount = buttons.length;
for (var i = 0; i <= buttonsCount; i += 1) {
    buttons[i].onclick = function(e) {
            document.getElementById("1").style.backgroundColor='White';
            document.getElementById("2").style.backgroundColor='White';
            document.getElementById("3").style.backgroundColor='White';
            document.getElementById("4").style.backgroundColor='White';
            document.getElementById("5").style.backgroundColor='White';
        //alert(this.id);
        var testnumber=this.id;
        var curr=parseInt(this.id);
        if (curr<=4){
            var result=(curr+1).toString();
            document.getElementById(result).style.backgroundColor='CornflowerBlue';
        }
        if (curr==5){

            document.getElementById("1").style.backgroundColor='red';
            document.getElementById("2").style.backgroundColor='red';
            document.getElementById("3").style.backgroundColor='red';
            document.getElementById("4").style.backgroundColor='red';
            document.getElementById("5").style.backgroundColor='red';

        }

    };

}

}








