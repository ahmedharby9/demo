$(document).ready(function() {
    $('#setData_33 > #Main_Container').append('<div style="position: absolute; left: 905px; top: 628px; width: 70px; height: 70px;" id="btnA"></div><div style="position: absolute; left: 26px; top: 399px; width: 758px; height: 19px;" id="btnB"></div>')

    $('#btnA,#btnB,#btnC,#btnD,#btnE').bind('mousedown', function(e) {
        $('#setData_33 > #Main_Container').append('<img id="popup" style="position: absolute;z-index:111111; left:0" src="./Book/T790_NewCampain_UAE_084_T790M_mutation/assets/img/img/popup_' + this.id + '.png" /><img id="img1_84"style="position: absolute;z-index:111111;" src="./Book/T790_NewCampain_UAE_084_T790M_mutation/assets/img/img/img1.png" /><img id="img2_84"style="position: absolute;z-index:111111;" src="./Book/T790_NewCampain_UAE_084_T790M_mutation/assets/img/img/img2.png" />')
        $('#popup').bind('mousedown', function(e) {
            $('#popup,#img1_84,#img2_84').remove()
        })
    })
})