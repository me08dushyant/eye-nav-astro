/* krpanoJS 1.0.8.15 scrollarea plugin (build 2012-10-05) */
var krpanoplugin=function(){function D(){if(g){var a=g.sprite.parentNode;if(a)if(a=a.kobject){a.maskchildren=true;o=a.pixelwidth;p=a.pixelheight;if(isNaN(o))o=0;if(isNaN(p))p=0;J=o>0||p>0}}}function E(){if((j&1)==1)g.x=d;else d=0;if((j&2)==2)g.y=e;else e=0}function K(a){for(;q.length>0;){if(a-q[0].time<=100)break;q.shift()}}function L(){D();

var a=String(g.align).toLowerCase();if(a==""||a=="null")a="lefttop";r=s=1;m=n=0.5;z=A=0;if(a.indexOf("")>=0){n=A=0;s=+1}if(a.indexOf("top")>=
if(a.indexOf("bottom")>=0){z=1;m=0;r=-1}}function M(a){L();q=[];window.addEventListener(h._isrealdesktop?"mouseup":"touchend",N,true);window.addEventListener(h._isrealdesktop?"mousemove":"touchmove",O,true);

var b=a.changedTouches&&a.changedTouches.length>0?a.changedTouches[0]:a;a=b.pageX/v;b=b.pageY/v;w=false;B=a;C=b;return false}function O(a){
	
var b=a.changedTouches&&a.changedTouches.length>0?a.changedTouches[0]:a,c=b.pageX/v;b=b.pageY/v;if(w==
false)if(j&1&&Math.abs(c-B)>5||j&2&&Math.abs(b-C)>5){x=false;if(i!=null){clearInterval(i);i=null}w=true;B=c;C=b;d=Number(g.x);e=Number(g.y);if(isNaN(F))d=0;if(isNaN(G))e=0;F=d;G=e}if(w){a=a.timeStamp;K(a);q.push({time:a,x:c,y:b});d=F+(c-B)*s;e=G+(b-C)*r;c=-(t-o);a=-(u-p);d+=c*n;e+=a*m;d-=c>0?(d-c*n)/2:(d>0?d:d<c?d-c:0)/2;e-=a>0?(e-a*m)/2:(e>0?e:e<a?e-a:0)/2;d-=c*n;e-=a*m;E()}return false}function N(a){window.removeEventListener(h._isrealdesktop?"mouseup":"touchend",N,true);window.removeEventListener(h._isrealdesktop?
"mousemove":"touchmove",O,true);if(w){K(a.timeStamp);if(q.length>1){a=q[0];

var b=q[q.length-1],c=b.y-a.y,f=(b.time-a.time)/15;k=(b.x-a.x)/f*s;l=c/f*r}else l=k=0;i=setInterval(H,1E3/60)}}function R(){setTimeout(function(){D();if(i==null)i=setInterval(H,1E3/60)},100)}function H(){d+=k;e+=l;k*=0.95;l*=0.95;

var a=0,b=0,c=-(t-o),f=-(u-p);d+=c*n;e+=f*m;if(c>0)a=d-c*n;else if(x)a=d-P;else if(d<c)a=d-c;else if(d>0)a=d;if(a*a<0.1)a=0;if(f>0)b=e-f*m;else if(x)b=e-Q;else if(e<f)b=e-f;else if(e>0)b=e;if(b*b<
0.1)b=0;d-=c*n;e-=f*m;if((j&1)==0)k=a=0;if((j&2)==0)l=b=0;if(a!=0){a*=-1;if(a*k<=0)k+=a*0.08;else k=a*0.15}if(b!=0){b*=-1;if(b*l<=0)l+=b*0.08;else l=b*0.15}if(a==0&&b==0&&Math.sqrt(k*k+l*l)<0.05){x=false;l=k=0;clearInterval(i);i=null}E()}function I(a,b,c){L();if(J==false)setTimeout(function(){I(a,b,c)},10);else{a=Number(a);if(isNaN(a))a=0;b=Number(b);if(isNaN(b))b=0;

var f=o-t,y=p-u;a=A*t+a*s;b=z*u+b*r;a*=-1;b*=-1;a+=o/2;if(a>0)a=0;if(a<f)a=f;b+=p/2;if(b>0)b=0;if(b<y)b=y;if(c===true){x=true;P=a;Q=
b;if(i==null)i=setInterval(H,1E3/60)}else{f=-(t-o);y=-(u-p);if(f<0)a-=f*n;else a=0;if(y<0)b-=y*m;else b=0;d=a;e=b;E()}}}function S(a,b){I(a,b,true)}

var h=null,g=null,T=false,v=1,j=3,t=0,u=0,J=false,o=0,p=0,x=false,P=0,Q=0,s=1,r=1,n=0,m=0,A=0,z=0,w=false,B=0,C=0,d=0,e=0,F=0,G=0,i=null,q=[],k=0,l=0;this.registerplugin=function(a,b,c){h=a;g=c;if(h.build.charAt(0)!="%"&&h.build<"2012-06-01"){h.trace(3,"scrollarea plugin - too old krpano version (min. version 1.0.8.15 / build 2012-06-01)");g=h=null}else{T=
h._have_top_access;v=h.stagescale;g.registerattribute("direction","all",function(f){f=String(f).toLowerCase();j=0;j|=1*(f.indexOf("h")>=0);j|=2*(f.indexOf("v")>=0);j|=3*(f.indexOf("all")>=0)},function(){if((j&3)==3)return"all";else if((j&1)==1)return"h";return"v"});g.sprite.addEventListener(h._isrealdesktop?"mousedown":"touchstart",M,true);h.set("events["+g.name+"_scrollarea].keep",true);h.set("events["+g.name+"_scrollarea].onresize",R)}};this.onresize=function(a,
b){if(!h)return false;t=a;u=b;D();return false};this.unloadplugin=function(){if(h&&g){h.set("events["+g.name+"_scrollarea].name",null);if(i!=null){clearInterval(i);i=null}g.sprite.removeEventListener(h._isrealdesktop?"mousedown":"touchstart",M,true)}h=g=null}};
