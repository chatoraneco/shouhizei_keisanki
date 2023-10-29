console.log("main.js!!");


/*
// jQuery入門
//	公式サイト: https://jquery.com/
//	チュートリアル: https://snome.jp/programming/jquery1/
//	チートシート: https://web-cheatsheet.com/jquery-to-vanillajs
*/



$(document).ready(()=>{
	console.log("ready");
	let zei = 0;
	$("#btn").click(()=>{
		console.log("クリックしたよ");

		const honntaikakaku = $("#zeibetu").val();
		const zeibetu = parseInt(honntaikakaku);
		console.log("zeibetu:", zeibetu);
		

		var element = document.getElementById( "target" ) ;
		var radioNodeList = element.zeiritu ;
		var va = radioNodeList.value ;
		
		if (va === ""){
			
		}else{
			console.log("va:", va);
		}
		if(va === "a"){
			 zei = 0.08;
		}else if(va === "b"){
			 zei = 0.1;
		}
		
		console.log("zei:", zei);


		const result = zeibetu + zeibetu * zei;
		console.log("result:", result);
		const result2 = result - zeibetu;
		console.log("result2:", result2);

		
		$("#zeikomi").text(result);
		$("#shoihizei").text(result2);
	
	});
});
