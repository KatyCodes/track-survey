//backend code

//frontend

$(document).ready(function() {
  $("form#survey").submit(function(event) {

    var answerq1 = $("input:radio[name=q1]:checked").val();
    var answerq2 = $("input:radio[name=q2]:checked").val();
    var answerq3 = $("input:radio[name=q3]:checked").val();
    var answerq4 = $("input:radio[name=q4]:checked").val();
    var answerq5 = $("input:radio[name=q5]:checked").val();

    var design = 0;
    var jva = 0;
    var php = 0;
    var csharp = 0;
    var ruby = 0;
// question 1 results
    if (answerq1 === "art"){
      design += 3;
    }
    else if (answerq1 === "science"){
      jva += 2;
    }
    else if (answerq1 === "theater"){
      php += 2;
    }
    else if (answerq1 === "math"){
      csharp += 2;
      ruby += 1;
    }
// question 2 results
    if (answerq2 === "fun"){
      design += 1;
      jva += 2;
      php += 1;
      csharp += 1;
      ruby += 1;
    }
    else if (answerq2 === "career"){
      design -= 2;
      php += 2;
      ruby += 2;
    }
    else if (answerq2 === "logic"){
      jva += 3;
      csharp += 3;
    }
    else if (answerq2 === "play"){
      design += 4;
      php += 2;
    }
// question 3 results
    if (answerq3 === "large"){
      csharp += 4;
      jva += 2;
    }
    else if (answerq3 === "startup"){
      ruby += 4;
      php += 2;
    }
    else if (answerq3 === "indi"){
      design += 3;
      php += 2;
    }
    else if (answerq3 === "anywhere"){
       design += 2;
       jva += 2;
       csharp += 1;
       ruby += 1;
    }
// question 4 results
    if (answerq4 === "nocolor"){
      jva += 1;
      php += 1;
      csharp += 1;
      ruby += 1;
    }
    else if (answerq4 === "all"){
      design += 2;
    }
    else if (answerq4 === "play"){
      design += 4;
    }
//question 5 results
    if (answerq5 === "everywhere"){
      jva += 3;
      csharp += 1;
      ruby += 1;
    }
    else if (answerq5 === "client"){
      design += 200;
      php += 1;
    }
    else if (answerq5 === "nowhere"){
      jva += 1;
      php += 1;
      csharp += 2;
      ruby += 3;
    }

    var result = ""

  if ((design>jva) && (design>php) && (design>csharp) && (design>ruby)){
  $("#resultdesign").fadeIn("slow");
  $("#resultjva").hide();
  $("#resultphp").hide();
  $("#resultcsharp").hide();
  $("#resultruby").hide();
  $("#tryagain").hide();
  }
  else if((jva>design) && (jva>php) && (jva>csharp) && (jva>ruby)){
  $("#resultjva").fadeIn("slow");
  $("#resultdesign").hide();
  $("#resultphp").hide();
  $("#resultcsharp").hide();
  $("#resultruby").hide();
  $("#tryagain").hide();
  }
  else if((php>design) && (php>jva) && (php>csharp) && (php>ruby)){
  $("#resultphp").fadeIn("slow");
  $("#resultdesign").hide();
  $("#resultjva").hide();
  $("#resultcsharp").hide();
  $("#resultruby").hide();
  $("#tryagain").hide();
  }
  else if((csharp>design) && (csharp>jva) && (csharp>php) && (jva>ruby)){
  $("#resultcsharp").fadeIn("slow");
  $("#resultdesign").hide();
  $("#resultjva").hide();
  $("#resultphp").hide();
  $("#resultruby").hide();
  $("#tryagain").hide();
  }
  else if((ruby>design) && (ruby>jva) && (ruby>php) && (ruby>csharp)){
  $("#resultruby").fadeIn("slow");
  $("#resultdesign").hide();
  $("#resultjva").hide();
  $("#resultphp").hide();
  $("#resultcsharp").hide();
  $("#tryagain").hide();
  }
  else {
    $("#tryagain").fadeIn("slow");
    $("#resultruby").hide();
    $("#resultdesign").hide();
    $("#resultjva").hide();
    $("#resultphp").hide();
    $("#resultcsharp").hide();
  }
event.preventDefault();
  });

});
