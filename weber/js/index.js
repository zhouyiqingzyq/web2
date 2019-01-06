			window.onload = function(){
				var one_0 = document.getElementById("one_0");
				window.onscroll=function(){
					var st = document.documentElement.scrollTop || document.body.scrollTop;
					if(st>200){
						one_0.style.position = 'fixed';			
						one_0.style.backgroundColor="white";
					}else{
						one_0.style.position = 'static';
					}
				}
			}
			var rb21 = document.getElementById("rb21");
			rb21.style.left='0px';
			var a1;
			rb21.onmouseover=function(){
				clearInterval(a1);
				a1=setInterval(fun1,1);
			}
			rb21.onmouseout=function(){
				clearInterval(a1);
				a1=setInterval(fun2,1);
			}
			function fun1(){  
				var c = parseInt(rb21.style.left);
				if(rb21.style.left=='-80px'){
					clearInterval(a1);
				}else{
					rb21.style.left=c-1+'px';
				}
			}
			function fun2(){
				var d = parseInt(rb21.style.left);
				if(rb21.style.left=='0px'){
					clearInterval(a1);
				}else{
					rb21.style.left=d+1+'px';
				}
			}
			var rb21 = document.getElementById("rb22");
			rb21.style.left='0px';
			var a2;
			function fun3(){  
				var e = parseInt(rb21.style.left);
				if(rb21.style.left=='-70px'){
					clearInterval(a2);
				}else{
					rb21.style.left=e-1+'px';
				}
			}
			function funbb(){
				var d = parseInt(rb21.style.left);
				if(rb21.style.left=='0px'){
					clearInterval(a2);
				}else{
					rb21.style.left=d+1+'px';
				}
			}
			rb21.onmouseover=function(){
				clearInterval(a2);
				a2=setInterval(fun3,1);
			}
			rb21.onmouseout=function(){
				clearInterval(a2);
				a2=setInterval(funbb,1);
			}
			var rb23 = document.getElementById("rb23");
			var erwei = document.getElementById('erwei');
			var erwei1 = document.getElementById('erwei1');
			erwei.appendChild(erwei1);
			rb23.style.left='0px';
			var a3;
			function func(){  
				var f = parseInt(rb23.style.left);
				if(rb23.style.left=='-80px'){
					clearInterval(a3);
				}else{
					rb23.style.left=f-1+'px';
				}
			}
			function funcc(){
				var you11 = parseInt(rb23.style.left);
				if(rb23.style.left=='0px'){
					clearInterval(a3);
				}else{
					rb23.style.left=you11+1+'px';
				}
			}
			rb23.onmouseover=function(){
				erwei1.src = '../img/erwei.png';
				erwei.setAttribute('class','erwei2')			
				clearInterval(a3);
				a3=setInterval(you3,1);
			}
			rb23.onmouseout=function(){
				erwei1.src = '../img/serwei.png';
				erwei.setAttribute('class','erwei1');					
				clearInterval(a3);
				a3=setInterval(you31,1);
			}
			var rb24 = document.getElementById("rb24");
			rb24.style.left='0px';
			var a4;
			function funaa(){  
				var you1 = parseInt(rb24.style.left);
				if(rb24.style.left=='-80px'){
					clearInterval(a4);
				}else{
					rb24.style.left=you1-1+'px';
				}
			}
			function funab(){
				var you11 = parseInt(rb24.style.left);
				if(rb24.style.left=='0px'){
					clearInterval(a4);
				}else{
					rb24.style.left=you11+1+'px';
				}
			}
			rb24.onmouseover=function(){
				clearInterval(a4);
				a4=setInterval(funaa,1);
			}
			rb24.onmouseout=function(){
				clearInterval(a4);
				a4=setInterval(funab,1);
			} 
			var biao2 = document.getElementById("biao2");
			for(var i=1;i<14;i++){
				var div = document.createElement('div');
				var text = document.createTextNode("[公告] 帮购及VIP服务调整"+i);
				div.appendChild(text);
				div.setAttribute('class','biao3');
				biao2.appendChild(div);
			}
			for(var i=1;i<12;i++){
				var div = document.createElement('div');
				var text = document.createTextNode("[公告] 帮购及VIP服务调整"+i);
				div.appendChild(text);
				div.setAttribute('class','biao3');
				biao2.appendChild(div);
			}
			biao2.style.top='0px';
			function fung(){
				var top = parseInt(biao2.style.top);
				if(biao2.style.top=='-355px'){
					biao2.style.top='0px';
				}else{
					biao2.style.top=top-1+'px';
				}
			}
			biao2.timer = setInterval(fung,25);
			biao2.onmouseover=function(){
				clearInterval(biao2.timer);
			}
			biao2.onmouseout=function(){
				biao2.timer=setInterval(fung,25);
			}
	    	//轮播图
			var slider = document.getElementById('slider');
			var left21 = document.getElementById('left21');
			var left = document.getElementById('left');
			var right = document.getElementById('right');
			var oNavlist = document.getElementById('nav').children;
			var index=1;
			function next(){
				index++;
				animate(slider,{left:-809*index},function(){
					if(index==7){
						slider.style.left = '-809px';
						index=1;
					}
				});
				navChange();
			}
			function prev(){
				index--;
				animate(slider,{left:-809*index},function(){
					if(index==0){
						slider.style.left = '-4045px';
						index=6;
					}
				});	
				navChange();	
			}
			var time = setInterval(next,2000);
			left21.onmouseover = function(){
				clearInterval(time);
				animate(left,{opacity:100});
				animate(right,{opacity:100});

			}
			left21.onmouseout = function(){
				animate(left,{opacity:0});
				animate(right,{opacity:0});
				time = setInterval(next,3000);
			}
			right.onclick = next;
			left.onclick = prev;
			for(var i=0;i<oNavlist.length;i++){
				oNavlist[i].idx = i;
				oNavlist[i].onclick = function(){
					index = this.idx+1;
					animate(slider,{left:-809*index});
					navChange();
				}
			}
			function navChange(){
				for(var i=0;i<oNavlist.length;i++){
					oNavlist[i].className='';
				}
				if(index==7){
					oNavlist[0].className='active';
				}
				else if(index==0){
					oNavlist[5].className='active';
				}else{
					oNavlist[index-1].className='active';
				}
			}		
			var coin1 = document.getElementById('coin1');
			var coin2 = document.getElementById('coin2');
			var button11 = document.getElementById("button11");
			coin1.onchange=function(){
				coin2.innerHTML="￥"+" "+coin1.value;
			}
			button11.onclick=function(){
				alert(coin1.value+"元话费充值成功！");
			}
			function animate(obj,json,callback){
				clearInterval(obj.timer);
				obj.timer = setInterval(
					function(){	
						var isStop=true;
					    for(var attr in json){
					    	if(attr=='opacity'){
					    		var now = parseInt(100*getStyle(obj,attr));
					    	}else{
					    		var now = parseInt(getStyle(obj,attr));
					    	}							
						    var speed=(json[attr]-now)/5;
						    speed = speed>0?Math.ceil(speed):Math.floor(speed);
						    if(attr=='opacity'){
						    	obj.style[attr] = (now+speed)/100;
						    }else{
						    	obj.style[attr] = now+speed+'px';
						    }													    
						    var current=now+speed;
						    if(json[attr]!=current){
						    	isStop=false;
						    }
						}
						if(isStop){
							clearInterval(obj.timer);
							callback&&callback();
						}													
					},20);
			}
			function getStyle(obj,style){
				if(obj.currentStyle){
					return obj.currentStyle[style];
				}
				else{
					return getComputedStyle(obj)[style];
				}
			}