$(document).ready(() =>{  
    $('.hint-box').click(()=>{
      $('.hint').slideToggle(300);
    });
    $('.wrong-answer-one').click(()=>{
      $('.wrong-answer-one').fadeOut('slow');
      $('.frown').show();
    });
    $('.wrong-answer-two').click(()=>{
      $('.wrong-answer-two').fadeOut('slow');
      $('.frown').show();
    });
    $('.wrong-answer-three').click(()=>{
      $('.wrong-answer-three').fadeOut('slow');
      $('.frown').show();
    });
    $('.correct-answer').click(()=>{
      $('.frown').hide();
      $('.smiley').show();
      $('.wrong-answer-one').fadeOut('slow');
      $('.wrong-answer-two').fadeOut('slow');
      $('.wrong-answer-three').fadeOut('slow');
    })
  });
  

