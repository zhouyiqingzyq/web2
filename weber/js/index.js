			window.onload = function(){
				var one_0 = document.getElementsByClassName('one_0')[0];
				window.onscroll=function(){
					var st = document.documentElement.scrollTop || document.body.scrollTop;
					if(st>230){
						one_0.style.position = 'fixed';			
						one_0.style.backgroundColor="white";
					}else{
						one_0.style.position = 'static';
					}
				}
			}
			var rb2 = document.getElementsByClassName('rb2')[0];
			rb2.style.left='0px';
			var a1;
			rb2.onmouseover=function(){
				clearInterval(a1);
				a1=setInterval(you1,1);
			}
			rb2.onmouseout=function(){
				clearInterval(a1);
				a1=setInterval(you11,1);
			}
			function you1(){  
				var you1 = parseInt(rb2.style.left);
				if(rb2.style.left=='-80px'){
					clearInterval(a1);
				}else{
					rb2.style.left=you1-1+'px';
				}
			}
			function you11(){
				var you11 = parseInt(rb2.style.left);
				if(rb2.style.left=='0px'){
					clearInterval(a1);
				}else{
					rb2.style.left=you11+1+'px';
				}
			}
			//second
			var you112 = document.getElementsByClassName('rb2')[1];
			you112.style.left='0px';
			var a2;
			function you2(){  
				var you1 = parseInt(you112.style.left);
				if(you112.style.left=='-80px'){
					clearInterval(a2);
				}else{
					you112.style.left=you1-1+'px';
				}
			}
			function you21(){
				var you11 = parseInt(you112.style.left);
				if(you112.style.left=='0px'){
					clearInterval(a2);
				}else{
					you112.style.left=you11+1+'px';
				}
			}
			you112.onmouseover=function(){
				clearInterval(a2);
				a2=setInterval(you2,1);
			}
			you112.onmouseout=function(){
				clearInterval(a2);
				a2=setInterval(you21,1);
			}
			var you113 = document.getElementsByClassName('rb2')[2];
			var erwei = document.getElementById('erwei');
			var erwei1 = document.getElementById('erwei1');
			erwei.appendChild(erwei1);
			you113.style.left='0px';
			var a3;
			function you3(){  
				var you1 = parseInt(you113.style.left);
				if(you113.style.left=='-80px'){
					clearInterval(a3);
				}else{
					you113.style.left=you1-1+'px';
				}
			}
			function you31(){
				var you11 = parseInt(you113.style.left);
				if(you113.style.left=='0px'){
					clearInterval(a3);
				}else{
					you113.style.left=you11+1+'px';
				}
			}
			you113.onmouseover=function(){
				erwei1.src = '../img/erwei.png';
				erwei.setAttribute('class','erwei2')			
				clearInterval(a3);
				a3=setInterval(you3,1);
			}
			you113.onmouseout=function(){
				erwei1.src = '../img/serwei.png';
				erwei.setAttribute('class','erwei1');					
				clearInterval(a3);
				a3=setInterval(you31,1);
			}
			var you114 = document.getElementsByClassName('rb2')[3];
			you114.style.left='0px';
			var a4;
			function you4(){  
				var you1 = parseInt(you114.style.left);
				if(you114.style.left=='-80px'){
					clearInterval(a4);
				}else{
					you114.style.left=you1-1+'px';
				}
			}
			function you41(){
				var you11 = parseInt(you114.style.left);
				if(you114.style.left=='0px'){
					clearInterval(a4);
				}else{
					you114.style.left=you11+1+'px';
				}
			}
			you114.onmouseover=function(){
				clearInterval(a4);
				a4=setInterval(you4,1);
			}
			you114.onmouseout=function(){
				clearInterval(a4);
				a4=setInterval(you41,1);
			} 
			var biao2 = document.getElementsByClassName('biao2')[0];
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
			function gonggao(){
				var top = parseInt(biao2.style.top);
				if(biao2.style.top=='-355px'){
					biao2.style.top='0px';
				}else{
					biao2.style.top=top-1+'px';
				}
			}
			biao2.timer = setInterval(gonggao,25);
			biao2.onmouseover=function(){
				clearInterval(biao2.timer);
			}
			biao2.onmouseout=function(){
				biao2.timer=setInterval(gonggao,25);
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
			var timer = setInterval(next,2000);
			left21.onmouseover = function(){
				clearInterval(timer);
				animate(left,{opacity:100});
				animate(right,{opacity:100});

			}
			left21.onmouseout = function(){
				animate(left,{opacity:0});
				animate(right,{opacity:0});
				timer = setInterval(next,3000);
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
			var button = document.getElementsByClassName('button')[0];
			coin1.onchange=function(){
				coin2.innerHTML="￥"+" "+coin1.value;
			}
			button.onclick=function(){
				alert(coin1.value+"元话费充值成功！");
			}
			window.onload = function(){
				var one_0 = document.getElementsByClassName('one_0')[0];
				window.onscroll=function(){
					var st = document.documentElement.scrollTop || document.body.scrollTop;
					if(st>100){
						one_0.style.position = 'fixed';						
						one_0.style.backgroundColor="white";
					}else{
						one_0.style.position = 'static';
					}
				}
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