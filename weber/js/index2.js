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
			var s= document.getElementById("slide1");
		 	var l = document.getElementById("left11");	
		 	var big= document.getElementById("big1");
		 	var Bimg = document.getElementById("bigpp");
		 	var wh = document.getElementById("wh1");
		 	l.onmouseover = function(){
		 		s.style.display='block';
		 		big.style.display='block';
		 	}
		 	l.onmouseout = function(){
		 		s.style.display='none';
		 		big.style.display='none';
		 	}
		 	l.onmousemove = function(ev){
		 		var length = ev.clientY-235+getScrollTop()-s.offsetHeight/2;
		 		var oL = ev.clientX-wh.offsetLeft-15-s.offsetWidth/2;		
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
			var left274 = document.getElementById("left2741");
			var a0 = document.getElementById("a0");
			var a1 = document.getElementById("a1");
			var a2 = document.getElementById("a2");
			var a3 = document.getElementById("a3");
			left274.onclick=function(){
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
			var jia = document.getElementById('add');
			var left2 = document.getElementById("left263");
			var jian = document.getElementById('jian');			
			jia.onmouseover=function(){
				if(left2.value<5){
					jia.style.cursor="pointer";
				}else{
					jia.style.cursor="not-allowed";
				}
			}
			jia.onclick=function(){
				if(left2.value<5){
					left2.value++;
				}	
				else{
					jia.style.cursor="not-allowed";
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
			var left3 = document.getElementById("left252");
			var left4 = document.getElementById("left253");
			var ml150ml = document.getElementById('ml150');
			left3.onclick=function(){
				ml150ml.innerHTML=""+left3.innerHTML;
				left4.style.background="no-repeat bottom right";
				left4.style.borderColor="white";
				left3.style.borderColor="#ff0853";
			}
			left4.onclick=function(){
				ml150ml.innerHTML=left4.innerHTML;
				left3.style.background="no-repeat bottom right";
				left3.style.borderColor="white";
				left4.style.borderColor="#ff0853";
			}
			var imgpp = document.getElementById('imgpp');
			var bigpp = document.getElementById('bigpp');
			var left5 = document.getElementById('left120');
			var left6 = document.getElementById("left13");
			var left7 = document.getElementById("left14");
			var left8 = document.getElementById('left123');
			var tag = 1;
			function funa(){
				tag = 1;	
				imgpp.src='../img/pp0.jpeg';
				bigpp.src='../img/big1.jpg';
				left6.style.borderColor="#ff9003";
				left7.style.borderColor="white";											
			}
			function funb(){
				tag = 0;
				imgpp.src='../img/pp1.jpeg';
				left6.style.borderColor="white";
				left7.style.borderColor="#ff9003";
			}			
			function func(){
				if(tag==0){
					funa();
				}else{
					funb();
				}
			}	
			