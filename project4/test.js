
$(function(){
    $("#1").click(function(){
      let x = $("#1input").val();
      $("#1output").text(5*x-3*x*x+13);
    });
    $("#2").click(function(){
      let x = $("#21input").val();
      let y = $("#22input").val();
      let z = $("#23input").val();
      let result = "Hello, " + x + " " + y + " " + z + "!";
      $("#2output").text(result);
    });

    $("#3").click(function(){
      let x = $("#31input").val();
      let y = $("#32input").val();
      let text, color;
      if (x > y) {
        text = "bananas";
        color = "yellow";
      }
      else if (y > x) {
        text = "porcupine";
        color = "brown";
      }
      else if (x === y && x < 0 ) {
        text = "red apples";
        color = "red";
      } else {
        text = "green apples";
        color = "green";
      }
      $("#3output").text(text);
      $("#3output").css({'color' : color});
    });

    $("#4").click(function(){
      let x = $("#4input").val();

      let text, color;


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
        text='valid';
        color="green";
    }

    else{
        text='invalid';
        color="red";
    }


      $("#4output").text(text);
      $("#4output").css({'color' : color});
    });

    $("#5").click(function(){
      let x = $("#5input").val();


      var list=x.split(",");


      $("#5output").text(list[2]);
      $("#5output").css({'color' : color});
    });



      $("#61").click(function(){
      $("#61").css({'background':'White'});
      $("#62").css({'background':'Blue'});
      $("#63").css({'background':'White'});
      $("#64").css({'background':'White'});
      $("#65").css({'background':'White'});

    });
    $("#62").click(function(){
      $("#61").css({'background':'White'});
      $("#62").css({'background':'White'});
      $("#63").css({'background':'Blue'});
      $("#64").css({'background':'White'});
      $("#65").css({'background':'White'});
    });
    $("#63").click(function(){
      $("#61").css({'background':'White'});
      $("#62").css({'background':'White'});
      $("#63").css({'background':'White'});
      $("#64").css({'background':'Blue'});
      $("#65").css({'background':'White'});
    });
    $("#64").click(function(){
      $("#61").css({'background':'White'});
      $("#62").css({'background':'White'});
      $("#63").css({'background':'White'});
      $("#64").css({'background':'White'});
      $("#65").css({'background':'Blue'});
    });
    $("#65").click(function(){
      $("#61").css({'background':'Red'});
      $("#62").css({'background':'Red'});
      $("#63").css({'background':'Red'});
      $("#64").css({'background':'Red'});
      $("#65").css({'background':'Red'});
    });







});
