$(document).ready(() =>{
    $('#cart').on('click',()=>{
      $('.dropdown-menu').on('mouseleave',()=>{
        $('.dropdown-menu').hide()
      })
      $('#cartMenu').show();
    });
    $('#account').on('click',()=>{
      $('.dropdown-menu').on('mouseleave', ()=>{
        $('.dropdown-menu').hide()
      })
      $('#accountMenu').show();
    });
    $('#help').on('click',()=>{
      $('.dropdown-menu').on('mouseleave',()=>{
        $('.dropdown-menu').hide()
      })
      $('#helpMenu').show();
    });
  });