/*!
 * fullpage.js Scroll Horizontally Extension 0.0.3 for fullPage.js v3
 * https://github.com/alvarotrigo/fullPage.js
 *
 *
 * Copyright (C) 2016 alvarotrigo.com - A project by Alvaro Trigo
 */
window.fp_scrollHorizontallyExtension=function(){var e=this,r=fp_utils,c=fp_utils.$,l=fullpage_api.getFullpageData(),f=l.options,t=l.internals,p=".fp-section",s=".fp-slide";e.getScrollSection=function(e,l){var t,i=c(".fp-section.active")[0],n=c(s,i).length,o=f.scrollHorizontally&&1<n,a=1==c(p).length;if(o)if(t=c(".fp-slide.active",i)[0],"down"===e){if(r.index(t)+1!=n||a)return fullpage_api.moveSlideRight}else if(r.index(t)||a)return fullpage_api.moveSlideLeft;return l},e.c=t.c;var i=e["common".charAt(0)];return"complete"===document.readyState&&i("scrollHorizontally"),window.addEventListener("load",function(){i("scrollHorizontally")}),e};