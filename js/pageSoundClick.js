function playAudio(){
    var click = new Audio;
    click.src = "./click/pageclick.wav";
    click.play();
 }

 jQuery(function(){
     $('#click').click(function(){
       playAudio();
     });
  });

function playAudio(){
    var click1 = new Audio;
    click1.src = "./click/pageclick.wav";
    click1.play();
 }

 jQuery(function(){
     $('#click1').click(function(){
       playAudio();
     });
  });