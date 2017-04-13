window.onload = function () {
	var obanner = document.getElementById('banner');
	var oBtn = document.getElementsByTagName('anniu');
	var oAn = obanner.getElementsByTagName('a');
	var otu = obanner.getElementsByTagName('p');
	var oleft = document.getElementById('left');
	var oright = document.getElementById('right');
	var timer = null;
	var n = 0;

	for(var i=0;i<oAn.length;i++){
		oAn[i].index = i;
		oAn[i].onmouseover = function () {
			for(var i=0;i<oAn.length;i++){
				oAn[i].className = '';
				otu[i].className = '';
			};
				this.className = 'show';
				otu[this.index].className= 'active';
				n = this.index;
		};
	};
	
	//左
	oleft.onclick = z;
	function z(){
		n--;
		if(n == -1){
			n=oAn.length-1;
		};
		for(var i=0;i<oAn.length;i++){
			oAn[i].className = '';
			otu[i].className = '';
		};
			oAn[n].className = 'show';
			otu[n].className = 'active';
	};
	//右
	oright.onclick = y;
	function y(){
		n++;
		if(n == oAn.length){
			n=0;
		};
		for(var i=0;i<oAn.length;i++){
			oAn[i].className = '';
			otu[i].className = '';
		};
			oAn[n].className = 'show';
			otu[n].className = 'active';
	};

	//开启定时器
	timer = setInterval(y,2000);
	//移入图片让左右显示
	obanner.onmouseover = function () {
		oleft.style.display = 'block';
		oright.style.display = 'block';
		clearInterval(timer);
	};

	//移出图片让左右隐藏
	obanner.onmouseout = function () {
		oleft.style.display = 'none';
		oright.style.display = 'none';
		timer = setInterval(y,1000);
	};	
};