document.addEventListener("DOMContentLoaded",function(){if(typeof ClipboardJS!=="undefined"){$("figure.highlight").each(function(){var t="code-"+Date.now()+(Math.random()*1e3|0);$(this).attr("id",t);$(this).prepend($(`<button class="button is-borderless is-radiusless is-small copy" data-clipboard-target="#${t} .code" title="Copy"><i class="fas fa-copy"></i></button>`))});new ClipboardJS(".highlight .copy")}});