 $(document).ready(function() {

     $('#setData_37 > #Main_Container').append('<div style="position: absolute; left: 905px; top: 628px; width: 70px; height: 70px;" id="btnA"></div>')




     $('#btnA,#btnB,#btnC,#btnD,#btnE').bind('mousedown', function(e) {

         $('#setData_37 > #Main_Container').append('<img id="popup" style="position: absolute;z-index:111111; left:0" src="./Book/T790_NewCampain_UAE_097_Study_design/assets/img/img/popup_' + this.id + '.png" />');
         $('#popup').bind('mousedown', function(e) {
             $("#popup").remove();
         });
     });


 });