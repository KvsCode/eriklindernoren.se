function showWork(){$("#contact").hide();var o="."+$(this).children(".workButton").children("a").data("target");$("#popDownWrapper").css({height:$(".ericsson").outerHeight()+180+"px"}),isShowing&&o!=lastUsed?($(lastUsed).css({opacity:"0","z-index":"-1"}),$(lastUsed).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).removeClass("slideOutRight")}).addClass("slideOutRight"),$(o).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).removeClass("slideInFromLeft")}).addClass("slideInFromLeft"),$(o).css({opacity:"1","z-index":"3"})):isShowing?($(lastUsed).css({opacity:"0","z-index":"-1"}),$(lastUsed).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).removeClass("slideUp")}).addClass("slideUp"),$("#popDownWrapper").delay(100).queue(function(o){$(this).css("height","0"),$(".experience").css({"box-shadow":"none"}),$(".bigButton > div").css({"box-shadow":"0px 0px 0px 0px rgb(0,0,0)"}),o()}),isShowing=!1):($(o).css({opacity:"1","z-index":"3"}),$(o).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).removeClass("slideDown")}).addClass("slideDown"),isShowing=!0,$(".experience").css({"box-shadow":"0px 6px 10px -2px rgba(0,0,0,0.4)"}),$(".bigButton > div").css({"box-shadow":"0px 6px 10px -2px rgba(0,0,0,0.4)"})),lastUsed=o}function scrollAnimations(){var o=$(window).scrollTop();whatBackground(o);for(var n=($(".projects").offset().top+$(window).height(),$(".timelineDot")),i=0;i<n.length;i++){var e=n[i];isPartlyScrolledIntoView(e)&&$(e).addClass("growAndShrink")}if(!penAnimationDone&&isFullyScrolledIntoView($(".timelineDot")[3])&&($("#arrowLine").css({height:"100%"}),$("#penHolder").css({top:"110px"}),setTimeout(function(){$("#arrowHead").css({width:"50px",bottom:"18px",left:"7px","border-color":"#F64747"}),$("#penHolder").css({transition:"1.0s ease",top:"79px",left:"42px",transform:"rotateZ(-25deg)"})},1700),setTimeout(function(){$("#penHolder").css({transition:"0.6s ease",top:"110px",left:"88px",transform:"rotateZ(-30deg)"})},2700),setTimeout(function(){$("#arrowHead").css({height:"50px",bottom:"36px",left:"25px"}),$("#penHolder").css({transition:"1.0s ease",top:"69px",left:"133px",transform:"rotateZ(-35deg)"})},3300),setTimeout(function(){$("#penHolder").css({transition:"0.5s ease",top:"130px",left:"130px",transform:"rotateZ(15deg)"})},4300),penAnimationDone=!0),isFullyScrolledIntoView($(".timelineDotUpper")[3]))for(var i=0;6>i;i++)$($(".timelineDotUpper")[i]).addClass("growAndShrink"+(i+1));for(var t=$("#navigationButtonWrapper a"),i=0;i<t.length;i++){var e=t[i];isPartlyScrolledIntoView(e)&&$(e).addClass("appearFromTop")}isFullyScrolledIntoView("#aboutMe")&&$("#aboutMe").addClass("appearFromLeft"),isPartlyScrolledIntoView("#timelineDotHeader")&&$("#timelineDotHeader").addClass("rotate360").addClass("appearFromTopCentered"),isFullyScrolledIntoView(".slideDir")&&$("#projImages").addClass("appearFromBottom");for(var s=$(".bigButton"),i=0;i<s.length;i++){var e=s[i];isFullyScrolledIntoView(e)&&$(e).addClass("slideDownBig"+i)}}function whatBackground(o){var n=$(window).scrollTop()+$(window).height(),i=$(".projects").offset().top+$(".projects").height()-100;n>i?($("#contact").show(),$(".schoolImg").hide()):($("#contact").hide(),isPartlyScrolledIntoView(".education")?$(".schoolImg").show():$(".schoolImg").hide())}function isPartlyScrolledIntoView(o){var n=$(o),i=$(window),e=i.scrollTop(),t=e+i.height(),s=n.offset().top,a=s+n.height(),r=a>t&&t>s,d=a>e&&e>s;return r||d||isFullyScrolledIntoView(o)}function isFullyScrolledIntoView(o){var n=$(o),i=$(window),e=i.scrollTop(),t=e+i.height(),s=n.offset().top,a=s+n.height();return t>=a&&s>=e}$(document).ready(function(){function o(){var o=$(window).scrollTop();$("#mountainHolder2").css("transform","translateY("+Math.round(.25*o)+"px)"),$("#mountainHolder").css("transform","translateY("+Math.round(.5*o)+"px)")}function n(){var o=[[20,60],[45,55],[20,35],[25,85],[15,75],[45,15],[25,10],[15,25],[10,50],[50,25],[60,40],[60,85],[50,70]];for(i=0;i<13;i++){var n=$(".s"+(i+1)),e=o[i][0],t=o[i][1];$(n).css({top:e+"%",left:t+"%"})}a=!0}function e(){var o=$(window).scrollTop();$(".scrollToTop").css(o>200&&window.innerWidth>668?{transform:"translateY(-100px)"}:{transform:"translateY(100px)"})}$(window).bind("scroll",function(n){o()});var t=function(){$("#overResume .bulb").css({"border-color":"#F39C12","background-color":"#FDE3A7","box-shadow":"0px 0px 10px 0px #F39C12"}),$("#overResume .bulbShine").css({"border-color":"white"}),$("#screen").css({"background-color":"rgb(240,240,240)"}),$(".computerLine").css({"border-color":"rgb(160,160,160)"}),$(".hiddenCompLine").css({visibility:"visible"}),$("#underResume .bulb").css({"border-color":"#F39C12","background-color":"#FDE3A7","box-shadow":"0px 0px 10px 0px #F39C12"}),$("#underResume .bulbShine").css({"border-color":"white"}),$("#pSquare1").css({"border-color":"#F64747","background-color":"rgba(246,71,71,0.2)"}),$("#pSquare2").css({"border-color":"#03A678","background-color":"rgba(3,166,120,0.2)"}),$("#pCircle1").css({"border-color":"#F39C12","background-color":"rgba(243,156,18,0.2)"}),$("#pCircle2").css({"border-color":"#6BB9F0","background-color":"rgba(107,185,240,0.2)"})},s=function(){$("#overResume .bulb").css({"border-color":"#2C3E50","background-color":"rgb(240,240,240)","box-shadow":"none"}),$("#overResume .bulbShine").css({"border-color":"transparent"}),$("#screen").css({"background-color":"rgb(200,200,200)"}),$(".computerLine").css({"border-color":"white"}),$(".hiddenCompLine").css({visibility:"hidden"}),$("#underResume .bulb").css({"border-color":"#2C3E50","background-color":"rgb(240,240,240)","box-shadow":"none"}),$("#underResume .bulbShine").css({"border-color":"transparent"}),$("#selfPortrait div").css({"border-color":"#2C3E50","background-color":"transparent"})};$("#resume").hover(t,s),$(document).on("click",".navbuttons",function(o){o.preventDefault();var n="#"+this.getAttribute("data-target");"#aboutDown"==n&&(n="#about"),"#contact"==n?($("html, body").animate({scrollTop:$(document).height()},2e3,"easeInOutQuart"),setTimeout(function(){$(".schoolImg").hide()},2e3)):$("html, body").animate({scrollTop:$(n).offset().top},1200,"easeInOutQuart")});var a=!1;a||n(),$(".navbuttons").hover(function(){var o=this.getAttribute("data-target"),n=0;if("about"==o?n=1:"education"==o?n=2:"experience"==o?n=3:"projects"==o?n=4:"contact"==o&&(n=5),0!=n)for(var i=1;6>i;i++)n!=i&&$("#span"+i).css({color:"transparent"})},function(){$("#message p span").css({color:"white"})}),$(".imageDiv").hover(function(){$(this).children(".imgText").delay(150),$(this).children(".imgText").children("p").delay(150),$(this).children(".imgText").animate({height:"20%"},200,"linear"),$(this).children(".imgText").children("p").animate({opacity:"1"},100,"linear")},function(){$(this).children(".imgText").animate({height:"0"},200,"linear"),$(this).children(".imgText").children("p").animate({opacity:"0"},100,"linear")}),$(window).scroll(scrollAnimations),scrollAnimations();var r=!0;$(".showNav").click(function(){r?($(".lowerMNavList > a").fadeIn(300),$(".lowerMNavList").slideDown(400,"linear"),r=!1):($(".lowerMNavList").slideUp(400,"linear"),$(".lowerMNavList > a").fadeOut(300),r=!0)}),$(".bigButton").on("click",showWork);var d=4;$("#div4").css({opacity:"1","z-index":"3"}),$(".slideDir").on("click",function(){var o=$(this).attr("id");if("slideRight"==o){var n=d;d=parseInt(d)-1,0==d&&(d=5);{var i=$("#div"+n),e=$("#div"+d);$(".projects")}i.css({opacity:"0","z-index":"-1"}),i.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).removeClass("slideOutBottom")}).addClass("slideOutBottom"),setTimeout(function(){e.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).removeClass("slideInFromLeft")}).addClass("slideInFromLeft"),e.css({opacity:"1","z-index":"3"})},200)}else{var n=d;d=parseInt(d)+1,6==d&&(d=1);{var i=$("#div"+n),e=$("#div"+d);$(".projects")}i.css({opacity:"0","z-index":"-1"}),i.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).removeClass("slideOutLeft")}).addClass("slideOutLeft"),setTimeout(function(){e.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).removeClass("slideInFromBottom")}).addClass("slideInFromBottom"),e.css({opacity:"1","z-index":"3"})},200)}}),$("#projImages a").hover(function(){$(this).css({transform:"translateY(-20px)"});for(var o=$("#projImages a").not(this),n=0;n<o.length;n++){var i=o[n];parseInt($(i).css("z-index"))>parseInt($(this).css("z-index"))&&$(i).css({opacity:"0.1"})}},function(){$("#projImages a").css({transform:"translateY(0)",opacity:"1"})}),$("#projImages a").on("click",function(){var o=this.getAttribute("data-target");if(d!=o){var n=d;d=o,$lastUsed=$("#div"+n),$this=$("#div"+d),$lastUsed.css({opacity:"0","z-index":"-1"}),$lastUsed.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).removeClass("slideOutBottom")}).addClass("slideOutBottom"),setTimeout(function(){$this.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).removeClass("slideInFromLeft")}).addClass("slideInFromLeft"),$this.css({opacity:"1","z-index":"3"})},200)}});var l,c=function(){window.innerWidth>668&&668>=l&&whatBackground(),window.innerWidth<=925&&l>925?($("#navbar").fadeOut(600),$("#mobileNav").fadeIn(600)):window.innerWidth>925&&925>=l&&($("#mobileNav").fadeOut(600),$("#navbar").fadeIn(600)),l=window.innerWidth};c(),$(window).resize(c);var m=function(){$.browser.mozilla&&($(".eduPeriscope > div").removeClass("schoolImg"),$(".eduPeriscope").css({"background-image":'url("../images/zurich1.jpeg")',"background-position":"center center","background-attachment":"fixed","background-size":"cover"}))};m(),$(document).scroll(e)});var lastUsed,isShowing=!1,projImagesLoaded=!1,penAnimationDone=!1;