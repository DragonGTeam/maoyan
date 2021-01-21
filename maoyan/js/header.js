$(function(){
	//1.查找触发事件的元素
	//2.绑定事件处理函数
	$(".ul").click(function(e){
		var $tar=$(e.target);
		//判断当前e.target是不是想要的a元素
		if($tar.is("a")){
			//3.查找要修改的元素
			//4.修改元素
			$tar.parent().addClass("active").siblings().removeClass("active");
		}
	})
})