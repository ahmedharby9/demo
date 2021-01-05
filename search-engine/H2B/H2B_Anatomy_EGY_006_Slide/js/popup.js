 $(document).ready(function(){

$('.popup').bind('mousedown',function(e)
	{
		clear();
		$('.popup').css({'opacity':.5,'z-index':1000});
		$('#guid1,#guid2').css({'opacity':.5,'z-index':1000});
		$('#'+this.id).css({'opacity':1});
		$('#guid'+this.id.substr(3)).css({'opacity':1});
		$('#Main_Container').append('<div id="popup_container"><img id="popup" src="images/popup'+this.id.substr(3)+'.png" style="position:absolute; z-index:999;"/></div>');
		$("#popup").bind('mousedown', function(e) {
			clear();
			$('.popup').css({'opacity':1,'z-index':998});
		});
	});	
function clear()
{
	$("#popup").remove();
	$("#popup_container").remove();
}
//$('#btn1').mousedown();
	
});