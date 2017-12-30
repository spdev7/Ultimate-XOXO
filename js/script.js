$(document).ready(function(){
  var x = "x";
  var o = "o";
  var turns = 0;

  var spot1 =$('#spot1');
  var spot1 =$('#spot2');
   var spot1 =$('#spot3');
   var spot1 =$('#spot4');
   var spot1 =$('#spot5');
   var spot1 =$('#spot6');
   var spot1 =$('#spot7');
   var spot1 =$('#spot8');
   var spot1 =$('#spot9');

  $('#board li').on('click',function(){
                  if(spot1.hasClass('o')&& spot2.hasClass) && spot3.hasClass('o') ||
                  spot4.hasClass('o')&& spot5.hasClass) && spot6.hasClass('o') ||
                  spot7.hasClass('o')&& spot8.hasClass) && spot9.hasClass('o') ||
                  spot1.hasClass('o')&& spot5.hasClass) && spot9.hasClass('o') ||
                  spot3.hasClass('o')&& spot5.hasClass) && spot7.hasClass('o') ||
                  spot1.hasClass('o')&& spot4.hasClass) && spot7.hasClass('o') ||{
                    spot2.hasClass('o')&& spot5.hasClass) && spot8.hasClass('o') ||
                    spot3.hasClass('o')&& spot6.hasClass) && spot9.hasClass('o')
                  ){
                    alert('Winner: x');
                    $('#board li').text('+');
                    $('#board li').removeClass('disable');
                    $('#board li').removeClass('o');
                    $('#board li').removeClass('x');

                  }else if(spot1.hasClass('x')&& spot2.hasClass) && spot3.hasClass('x') ||
                    spot4.hasClass('x')&& spot5.hasClass) && spot6.hasClass('x') ||
                    spot7.hasClass('x')&& spot8.hasClass) && spot9.hasClass('x') ||
                    spot1.hasClass('x')&& spot5.hasClass) && spot9.hasClass('x') ||
                    spot3.hasClass('x')&& spot5.hasClass) && spot7.hasClass('x') ||
                    spot1.hasClass('x')&& spot4.hasClass) && spot7.hasClass('x') ||{
                      spot2.hasClass('x')&& spot5.hasClass) && spot8.hasClass('x') ||
                      spot3.hasClass('x')&& spot6.hasClass) && spot9.hasClass('x')
                    ){
                      alert('Winner: x');
                      $('#board li').text('+');
                      $('#board li').removeClass('disable');
                      $('#board li').removeClass('o');
                      $('#board li').removeClass('x');

                    } else if(turns == 9){
                         alert('Tie Game ');
                         $('#board li').text('+');
                         $('#board li').removeClass('disable');
                         $('#board li').removeClass('o');
                         $('#board li').removeClass('x');
                           turns = 0;
                         }
                         else if ($(this).hasClass('disable')) {
                              alert('This spot is already filled');
                          }else if (turns%2 == 0) {
                            turns++;
                            $(this).text(o);
                            (this).addClass('disable o');
                            if(spot1.hasClass('o')&& spot2.hasClass) && spot3.hasClass('o') ||
                            spot4.hasClass('o')&& spot5.hasClass) && spot6.hasClass('o') ||
                            spot7.hasClass('o')&& spot8.hasClass) && spot9.hasClass('o') ||
                            spot1.hasClass('o')&& spot5.hasClass) && spot9.hasClass('o') ||
                            spot3.hasClass('o')&& spot5.hasClass) && spot7.hasClass('o') ||
                            spot1.hasClass('o')&& spot4.hasClass) && spot7.hasClass('o') ||{
                              spot2.hasClass('o')&& spot5.hasClass) && spot8.hasClass('o') ||
                              spot3.hasClass('o')&& spot6.hasClass) && spot9.hasClass('o')
                            ){
                              alert('Winner: o');
                              turns = 0;
                            }
                            }else {
                              turns++;
                              $(this).text(x);
                              (this).addClass('disable x');
                              if(spot1.hasClass('x')&& spot2.hasClass) && spot3.hasClass('x') ||
                              spot4.hasClass('x')&& spot5.hasClass) && spot6.hasClass('x') ||
                              spot7.hasClass('x')&& spot8.hasClass) && spot9.hasClass('x') ||
                              spot1.hasClass('x')&& spot5.hasClass) && spot9.hasClass('x') ||
                              spot3.hasClass('x')&& spot5.hasClass) && spot7.hasClass('x') ||
                              spot1.hasClass('x')&& spot4.hasClass) && spot7.hasClass('x') ||{
                                spot2.hasClass('x')&& spot5.hasClass) && spot8.hasClass('x') ||
                                spot3.hasClass('x')&& spot6.hasClass) && spot9.hasClass('x')
                              ){
                                alert('Winner: x');
                                turns = 0;

                            }

                          }
                        });
                           //Reset handler
                           $("#reset").click(function(){
                             $("#board li").text("+");
                             $('#board li').removeClass('disable');
                             $('#board li').removeClass('o');
                             $('#board li').removeClass('x');
                               turns = 0;


                  });
});
