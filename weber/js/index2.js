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
			var s= document.getElementsByClassName('slid')[0];
		 	var l = document.getElementsByClassName('left11')[0];	
		 	var big= document.getElementsByClassName('big')[0];
		 	var Bimg = document.getElementsByClassName('Bimg')[0];
		 	var white = document.getElementsByClassName('white')[0];
		 	l.onmouseover = function(){
		 		s.style.display='block';
		 		big.style.display='block';
		 	}
		 	l.onmouseout = function(){
		 		s.style.display='none';
		 		big.style.display='none';
		 	}
		 	l.onmousemove = function(ev){
		 		var length = ev.clientY-237+getScrollTop()-s.offsetHeight/2;
		 		var oL = ev.clientX-white.offsetLeft-15-s.offsetWidth/2;		
		 		var oT = getScrollTop()>200?length+150:length;
		 	    var oMaxw = l.offsetWidth-s.offsetWidth;
		 		var oMaxh = l.offsetHeight-s.offsetHeight;
		 		oL = oL>oMaxw?oMaxw:oL<0?0:oL;
		 		oT = oT>oMaxh?oMaxh:oT<0?0:oT; 		
		 		s.style.left=oL+'px';
		 		s.style.top=oT+'px';
		 		Bimg.style.left='-'+oL+'px';
		 		Bimg.style.top='-'+oT+'px'; 		
		 	}
		 	function getScrollTop(){  
	        	var scrollPos;  
	        	if (window.pageYOffset) {  
	        		scrollPos = window.pageYOffset;
	        	}  
	       		else if (document.compatMode && document.compatMode != 'BackCompat'){ 
	        		scrollPos = document.documentElement.scrollTop;
	        	}  
	        	else if (document.body) { 
	        		scrollPos = document.body.scrollTop;
	        	}   
	        	return scrollPos;   
			}
			var left291 = document.getElementsByClassName('left291')[1];
			var a0 = document.getElementsByClassName('a0')[0];
			var a1 = document.getElementsByClassName('a1')[0];
			var a2 = document.getElementsByClassName('a11')[0];
			var a3 = document.getElementsByClassName('a121')[0];
			left291.onclick=function(){
				a0.style.display="block";
				a1.style.display="block";
			}
			a2.onclick=function(){
				a0.style.display="none";
				a1.style.display="none";
			}
			a3.onclick=function(){
				a0.style.display="none";
				a1.style.display="none";
			}
			var add = document.getElementById('add');
			var left2 = document.getElementsByClassName('left263')[0];
			var jian = document.getElementById('jian');			
			add.onmouseover=function(){
				if(left2.value<5){
					add.style.cursor="pointer";
				}else{
					add.style.cursor="not-allowed";
				}
			}
			add.onclick=function(){
				if(left2.value<5){
					left2.value++;
				}	
				else{
					add.style.cursor="not-allowed";
				}			
			}
			jian.onmouseover=function(){
				if(left2.value>1){
					jian.style.cursor="pointer";
				}else{
					jian.style.cursor="not-allowed";
				}			
			}
			jian.onclick=function(){
				if(left2.value>1){
					left2.value--;
				}else{
					jian.style.cursor="not-allowed";
				}					
			}
			var left3 = document.getElementsByClassName('left252')[0];
			var left4 = document.getElementsByClassName('left253')[0];
			var ml150 = document.getElementById('ml150');
			left3.onclick=function(){
				ml150.innerHTML=""+left3.innerHTML;
				left4.style.background="no-repeat bottom right";
				left4.style.borderColor="white";
				left3.style.borderColor="#ff0853";
			}
			left4.onclick=function(){
				ml150.innerHTML=left253.innerHTML;
				left3.style.background="no-repeat bottom right";
				left3.style.borderColor="white";
				left4.style.borderColor="#ff0853";
			}
			var imgpp = document.getElementById('imgpp');
			var bigpp = document.getElementById('bigpp');
			var left120 = document.getElementById('left120');
			var left123 = document.getElementById('left123');
			var left121 = document.getElementsByClassName('left121')[0];
			var left122 = document.getElementsByClassName('left122')[0];
			var flag = 1;
			function funa(){
				imgpp.src='../img/pp0.jpeg';
				bigpp.src='../img/big1.jpg';
				left121.style.borderColor="#ff9003";
				left122.style.borderColor="white";	
				flag = 1;											
			}
			function funb(){
				imgpp.src='../img/pp1.jpeg';
				left121.style.borderColor="white";
				left122.style.borderColor="#ff9003";
				flag = 0;
			}			
			function func(){
				if(flag==1){
					funb();
				}else{
					funa();
				}
			}	
			