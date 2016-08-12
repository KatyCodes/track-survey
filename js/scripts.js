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
      design += 1;
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
      jva += 1;
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
       design += 1;
       jva += 1;
       php += 1;
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
      design += 2;
      php += 1;
    }
    else if (answerq5 === "nowhere"){
      jva += 1;
      php += 1;
      csharp += 1;
      ruby += 1;
    }

    var result = ""

if ((design>jva) && (design>php) && (design>csharp) && (design>ruby)){
  (#resultdesign).show;
}
event.preventDefault();
  });

});
// var design = 0;
// var jva = 0;
// var php = 0;
// var csharp = 0;
// var ruby = 0;

// if((trump>jill) && (trump>gary) && (trump>clinton)){
//       result = "<h2>You should vote for Donald Trump!</h2>";
//       result += "<a href='https://www.donaldjtrump.com/' target='_blank'><img src='img/trump.jpg'></a>"
//     } else if ((gary>jill) && (gary>trump) && (gary>clinton)){
//       result = "<h2>You should vote for Gary Johnson!</h2>";
//       result += "<a href='https://www.johnsonweld.com/' target='_blank'><img src='img/gary.jpg'></a>"
//     } else if ((jill>gary) && (jill>trump) && (jill>clinton)){
//       result = "<h2>You should vote for Jill Stein!</h2>";
//       result += "<a href='http://www.jill2016.com/' target='_blank'><img src='img/jill.png'></a>"
//     } else if ((clinton>jill) && (clinton>trump) && (clinton>gary)){
//       result = "<h2>You should vote for Hillary Clinton!</h2>";
//       result += "<a href='https://www.hillaryclinton.com/' target='_blank'><img src='img/hillary.jpg'></a>"
//     } else {
//       result = "<h2>You're undecided! Do more research.</h2><div class='row'>";
//       result += "<div class='col-sm-3'><a href='https://www.johnsonweld.com/' target='_blank'><img src='img/gary.jpg'></a></div>"
//       result += "<div class='col-sm-3'><a href='https://www.hillaryclinton.com/' target='_blank'><img src='img/hillary.jpg'></a></div>"
//       result += "<div class='col-sm-3'><a href='https://www.donaldjtrump.com/' target='_blank'><img src='img/trump.jpg'></a></div>"
//       result += "<div class='col-sm-3'><a href='http://www.jill2016.com/' target='_blank'><img src='img/jill.png'></a></div></div>"
//     }
