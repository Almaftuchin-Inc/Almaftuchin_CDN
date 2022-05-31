$(document).ready(function(){$("#flippy").click(function(){$("#flippanel").slideToggle("normal")})});
// Video Melayang
var $window=$(window),$floatvideoWrap=$(".floatvideo-wrapper"),$floatvideo=$(".floatvideo"),floatvideoHeight=$floatvideo.outerHeight();$window.on("scroll",function(){$window.scrollTop()>floatvideoHeight+$floatvideoWrap.offset().top?($floatvideoWrap.height(floatvideoHeight),$floatvideo.addClass("fly")):($floatvideoWrap.height("auto"),$floatvideo.removeClass("fly"))}),setTimeout(function(){$(".video-youtube").each(function(){$(this).replaceWith('<iframe class="video-youtube loader" src="'+$(this).data("src")+'" allowfullscreen="allowfullscreen" height="281" width="500"></iframe>')})},5e3);
// Double Click
$('i[rel="pre"]').replaceWith(function(){return $("<pre><code>"+$(this).html()+"</code></pre>")});for(var pres=document.querySelectorAll("pre,code,kbd,blockquote,td"),i=0;i<pres.length;i++)pres[i].addEventListener("dblclick",function(){var e=getSelection(),t=document.createRange();t.selectNodeContents(this),e.removeAllRanges(),e.addRange(t)},!1);
function downloadJSAtOnload(){var e=document.createElement("script");e.src="https://cdn.jsdelivr.net/gh/Indzign/theme@master/highlightprox.js",document.body.appendChild(e)}window.addEventListener?window.addEventListener("load",downloadJSAtOnload,!1):window.attachEvent?window.attachEvent("onload",downloadJSAtOnload):window.onload=downloadJSAtOnload;
// Light Gallery
$('#animated-thumbnail').lightGallery({thumbnail:true,getCaptionFromTitleOrAlt:true,selector:"a[style]"});
// Lazy Related Post
var lazyrelate=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazyrelate||0!=document.body.scrollTop&&!1===lazyrelate)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://cdn.almaftuchin.com/js/related.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),lazyrelate=!0)},!0);
