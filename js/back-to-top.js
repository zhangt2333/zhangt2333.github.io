$(document).ready(function(){var e=$("#back-to-top");var n=$("footer.footer");var t=$(".column-main");var i=$(".column-left");var o=$(".column-right");var r=0;var s=20;var a=20;var l=null;var d={base:{classname:"card has-text-centered",left:"",width:64,bottom:a,"border-radius":4}};d["desktop-hidden"]=Object.assign({},d.base,{classname:d.base.classname+" rise-up"});d["desktop-visible"]=Object.assign({},d["desktop-hidden"],{classname:d["desktop-hidden"].classname+" fade-in"});d["desktop-dock"]=Object.assign({},d["desktop-visible"],{classname:d["desktop-visible"].classname+" fade-in",width:40,"border-radius":"50%"});d["mobile-hidden"]=Object.assign({},d.base,{classname:d.base.classname+" fade-in",right:s});d["mobile-visible"]=Object.assign({},d["mobile-hidden"],{classname:d["mobile-hidden"].classname+" rise-up"});function c(e,n){for(var t in e){if(!n.hasOwnProperty(t)||n[t]!==e[t]){return false}}for(var t in n){if(!e.hasOwnProperty(t)||e[t]!==e[t]){return false}}return true}function u(n){if(l!==null&&c(l,n)){return}e.attr("class",n.classname);for(let t in n){if(t==="classname"){continue}e.css(t,n[t])}l=n}function f(){return window.innerWidth>=1078}function h(){return window.innerWidth>=768&&!f()}function b(){return $(window).scrollTop()<r&&$(window).scrollTop()>0}function m(){return i.length>0}function w(){return o.length>0}function p(){if(!w()){return 0}return Math.max.apply(null,o.find(".widget").map(function(){return $(this).offset().top+$(this).outerHeight(true)}))}function v(){return $(window).scrollTop()}function g(){return $(window).scrollTop()+$(window).height()}function k(){return e.outerWidth(true)}function O(){return e.outerHeight(true)}function j(){r=$(window).scrollTop()}function T(){if(f()||h()&&!m()&&w()){var e;var i=(t.outerWidth()-t.width())/2;var o=$(window).width()-k()-s;var r=n.offset().top+O()/2+a;if(v()==0||g()<p()+i+O()){e=d["desktop-hidden"]}else if(g()<r){e=d["desktop-visible"]}else{e=Object.assign({},d["desktop-dock"],{bottom:g()-r+a})}var l=t.offset().left+t.outerWidth()+i;e=Object.assign({},e,{left:Math.min(l,o)});u(e)}else{if(!b()){u(d["mobile-hidden"])}else{u(d["mobile-visible"])}j()}}T();$(window).resize(T);$(window).scroll(T);$("#back-to-top").on("click",function(){$("body, html").animate({scrollTop:0},400)})});