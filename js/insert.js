!function(){function t(t,n){var o=document.createElement("script");o.onload=function(t){this.parentNode&&this.parentNode.removeChild(this),n&&n()},o.onerror=i,o.src=t,e(o)}function e(t){var n=document.getElementsByTagName("body")[0];n?n.appendChild(t):setTimeout(e.bind(void 0,t),100)}function i(){console.error("chaport: can't get latest version")}window.chaportInitResult="",t("https://app.chaport.com/info/asset-name/js/insert-main?jsonpCallback=true",function(){window.chaportInitResult?(t("https://app.chaport.com"+window.chaportInitResult),delete window.chaportInitResult):i()})}(window);
var style = document.createElement('style');
  style.innerHTML = `
 /*Chaport*/
.chaport-container.chaport-window-dark-gray .chaport-launcher .chaport-launcher-button, .chaport-content.chaport-window-dark-gray .chaport-launcher .chaport-launcher-button, .chaport-faq-container.chaport-window-dark-gray .chaport-launcher .chaport-launcher-button {background: #4E1FD5 !mportant;}
a#chaport-powered-by {display: none !important;}
  `;
  document.head.appendChild(style);
