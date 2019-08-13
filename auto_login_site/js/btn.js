if(location.hostname=="member.ithome.com.tw")
{
	var element = document.getElementById('account');
	element.value="a1";

	var element = document.getElementById('password');
	element.value="a2";

	var click = document.getElementsByClassName("btn btn-agree btn-margin")[0].click();
	console.log(click);
}