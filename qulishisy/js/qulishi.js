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
	
	
	
	
	function time(){
    //获得显示时间的div
    t_div = document.getElementById('showtime');
   var now=new Date()
    //替换div内容 
   t_div.innerHTML = "现在是"+now.getFullYear()
    +"年"+(now.getMonth()+1)+"月"+now.getDate()
    +"日"+now.getHours()+"时"+now.getMinutes()
    +"分"+now.getSeconds()+"秒";
    //等待一秒钟后调用time方法，由于settimeout在time方法内，所以可以无限调用
   setTimeout(time,1000);
  }
	
	
	var historyWarName=document.getElementsByClassName('historyWarName')
	for(var i=0;i<ull.children.length;i++){ 
		ull.children[i].index=i;	
		ull.children[i]['onmouseover']=function(){
			for(var i=0;i<ull.children.length;i++){
				historyWarName[i].style.display="none"
				
			}
		   historyWarName[this.index].style.display="block"
		   
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	var renwu1_b=document.getElementsByClassName('renwu1_b')
	for(var i=0;i<rwul.children.length;i++){ 
		rwul.children[i].index=i;	
		rwul.children[i]['onmouseover']=function(){
			for(var i=0;i<rwul.children.length;i++){
				renwu1_b[i].style.display="none"
				
			}
		  renwu1_b[this.index].style.display="block"
		   
		}
	}
	
	
	
	
	
};








