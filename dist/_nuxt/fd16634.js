(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{315:function(t,e,o){"use strict";o.r(e);var n=o(316),r=o.n(n);for(var l in n)["default"].indexOf(l)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(l);e.default=r.a},316:function(t,e){},321:function(t,e,o){t.exports=o.p+"img/logo.1eaed40.png"},342:function(t,e,o){"use strict";o.r(e);var n=o(344),r=o(315);for(var l in r)["default"].indexOf(l)<0&&function(t){o.d(e,t,(function(){return r[t]}))}(l);var c=o(80),d=o(111),m=o.n(d),f=o(407),x=o(490),h=o(606),v=o(411),_=o(491),w=o(467),component=Object(c.a)(r.default,n.a,n.b,!1,null,null,null);e.default=component.exports,m()(component,{VBtn:f.a,VCol:x.a,VContainer:h.a,VFooter:v.a,VRow:_.a,VTextField:w.a})},344:function(t,e,o){"use strict";o.d(e,"a",(function(){return n})),o.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-footer",{attrs:{color:"grey_info_1 "}},[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"5"}},[o("div",{staticClass:"text-h6 mt-6 font-weight-medium mb-2"},[t._v("About Us")]),t._v(" "),o("p",{staticClass:"font_web2 grey--text font-weight-light"},[t._v("\n          INFORMATA is a crowdworking platform that allows researchers to\n          launch academic/marketing researches and surveys to a dedicated\n          participant pool in minutes. INFORMATA helps researchers gathering\n          and measuring feedbacks which can enhance decisions and impacts of\n          companies and organisations.\n        ")]),t._v(" "),o("v-btn",{staticClass:"mr-3 px-15",attrs:{outlined:"",color:"#939393"}},[t._v("\n          Contact Us\n        ")])],1),t._v(" "),o("v-col",{attrs:{cols:"2"}},[o("div",{staticClass:"text-h6 mt-6 font-weight-medium mb-2"},[t._v("Direct Contact")]),t._v(" "),o("p",{staticClass:"font_web2 grey--text font-weight-light"},[t._v("+66 999 9999")]),t._v(" "),o("div",{staticClass:"text-h6 mt-6 font-weight-medium mb-2"},[t._v("Address")]),t._v(" "),o("p",{staticClass:"font_web2 grey--text font-weight-light"},[t._v("\n          Suzy Queue 4455 Landing Lange, APT 4 Louisville, KY 40018-1234\n        ")])]),t._v(" "),o("v-col",{attrs:{cols:"5"}},[o("div",{staticClass:"text-h6 mt-6 font-weight-medium mb-2"},[t._v("\n          Get the latest news on INFORMATA events, research, and product\n          launches\n        ")]),t._v(" "),o("v-row",{staticClass:"mt-6"},[o("v-col",{staticClass:"pa-0",attrs:{cols:"10"}},[o("v-text-field",{attrs:{dense:"",label:"Your bussiness Email",outlined:""}})],1),t._v(" "),o("v-col",{staticClass:"pa-0 pl-2",attrs:{cols:"2"}},[o("v-btn",{staticClass:"white--text",attrs:{block:"",depressed:"",color:"primary_info"}},[t._v("SEND")])],1)],1)],1)],1),t._v(" "),o("v-row",{staticClass:"d-flex justify-space-between align-end mt-15 mb-15"},[o("div",{staticClass:" "},[o("p",{staticClass:"ma-0 mb-2 body-2 font-weight-medium"},[t._v("© Informata 2020")]),t._v(" "),o("p",{staticClass:"ma-0 caption"},[t._v("\n          Contains Royal Mail data © Royal Mail copyright and database right\n          (2018).\n        ")]),t._v(" "),o("span",{staticClass:"ma-0 caption grey--text"},[t._v("Informatar is Online Surveys Suite account with the appropriate\n          permission is required.")])]),t._v(" "),o("div",{staticClass:"text-h5 d-flex "},[o("div",{staticClass:"ml-5"},[o("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),o("div",{staticClass:"ml-5"},[o("i",{staticClass:"fab fa-instagram"})]),t._v(" "),o("div",{staticClass:"ml-5"},[o("i",{staticClass:"fab fa-twitter"})]),t._v(" "),o("div",{staticClass:"ml-5"},[o("i",{staticClass:"fab fa-youtube"})])])])],1)],1)},r=[]},356:function(t,e,o){"use strict";o.r(e);o(31),o(9);var n={data:function(){return{links:[{menu_name:"HOW WE WORK",url:"#"},{menu_name:"PRICNG",url:"/pricing"},{menu_name:"ABOUT US",url:"#"},{menu_name:"BLOG",url:"/blog"},{menu_name:"STAT101",url:"#"},{menu_name:"FAQ",url:"#"}]}},computed:{text:function(){return this.$t("page_1")},header:function(){return this.$t("header")},availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))},path_local:function(){var t=this,e=this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}));console.log(e)}}},r=o(80),l=o(111),c=o.n(l),d=o(407),m=o(340),f=o(408),x=o(352),h=o(320),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{staticClass:"pa-10",attrs:{elevation:"0",dense:"",fixed:""}},[n("v-toolbar-title",[n("NuxtLink",{attrs:{to:"/"}},[n("v-img",{staticClass:"mx-2",attrs:{contain:"","lazy-src":o(321),src:o(321),"max-height":"70","max-width":"70"}})],1)],1),t._v(" "),n("v-toolbar-items",[n("div",{staticClass:"ml-5 d-flex"},t._l(t.links,(function(link){return n("div",{key:link.menu_name},[n("v-btn",{attrs:{to:""+link.url,color:"primary_info",text:""}},[t._v("\n          "+t._s(link.menu_name)+"\n        ")])],1)})),0)]),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-items",[n("div",[n("v-btn",{staticClass:"mr-3",attrs:{to:"/login",outlined:"",color:"#939393"}},[t._v("\n        LOG IN   \n      ")]),t._v(" "),n("v-btn",{staticClass:"white--text",attrs:{to:"register",depressed:"",color:"primary_info"}},[t._v("SIGN UP")])],1)])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VImg:m.a,VSpacer:f.a,VToolbar:x.a,VToolbarItems:h.a,VToolbarTitle:h.b})},444:function(t,e,o){var content=o(479);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(93).default)("11aa2c8e",content,!0,{sourceMap:!1})},474:function(t,e,o){t.exports=o.p+"img/blog-ob-1.cdca3ec.png"},475:function(t,e,o){t.exports=o.p+"img/blog-ob-2.97828de.png"},476:function(t,e,o){t.exports=o.p+"img/blog-ob-3.2c4bc95.png"},477:function(t,e,o){t.exports=o.p+"img/blog-ob-4.297863b.png"},478:function(t,e,o){"use strict";o(444)},479:function(t,e,o){var n=o(92)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;1,400&family=Mulish:wght@200;500;800&display=swap);"]),n.push([t.i,'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}.font_web1,.font_web2{font-family:"Kanit",sans-serif}.font_web2{font-size:15px;line-height:20px}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}.left-container{z-index:30;position:fixed;height:100vh;width:118px;background-color:#115ba5}.l-componemt .content{padding:1em;display:flex;flex-direction:column;margin-top:39px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;align-items:center}.h-logo img{width:100%}.l-componemt .content .text{-ms-writing-mode:tb-rl;writing-mode:vertical-rl;text-orientation:mixed;color:#ebf1ff;font-size:14px;margin-top:7em;text-transform:uppercase;display:flex;align-items:center;font-family:"Mulish",sans-serif}.l-componemt .content .line{width:1px;background:#ebf1ff;height:73px;margin:24px 0}.l-componemt .content .social{display:flex;flex-direction:column;align-items:center}.l-componemt .content .social i{color:#ebf1ff;font-size:30px;margin-bottom:24px}.hadeer-container{z-index:29;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;position:absolute;display:flex;width:100%;padding-top:5em;justify-content:space-between}.hadeer-container .menu-con{padding-left:11em;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.hadeer-container .menu-con a{text-decoration:none;text-transform:uppercase;color:#115ba5;margin-left:30px;font-family:"Mulish",sans-serif;font-weight:600}.hadeer-container .button{display:flex;padding-right:3em;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.hadeer-container .button a{text-decoration:none;font-family:"Mulish",sans-serif}.hadeer-container .button .btn{border-radius:30px;background-color:#0ff;padding:12px 32px}.hadeer-container .button .login{background-color:#0f6ff5;color:#ebf1ff}.hadeer-container .button .language{background:hsla(0,0%,100%,.3);margin-left:1em;color:#fff}.hade-sec{width:100%;position:relative;background-blend-mode:overlay;background-size:cover;background-position:50%;background-repeat:no-repeat}.hade-sec .obj.a{position:absolute;right:0;top:0}.hade-sec .obj.b{position:absolute;left:52em;top:17px}.hade-sec .obj.c{position:absolute;left:30em;top:57px}.hade-sec .content{display:flex;padding-left:12em;position:relative}.hade-sec .content .text-box{width:50%;padding:15em 0 35em}.hade-sec .content .text-box h2{color:#115ba5;text-decoration:none;font-weight:800;margin-bottom:.5em;font-size:64px;font-family:"Mulish",sans-serif}.hade-sec .content .text-box p{color:#115ba5;line-height:30px;font-family:"Mulish",sans-serif;font-size:24px}.hade-sec .animate-box{position:relative}.hade-sec .animate-box .item{position:absolute}.animate-box .item.bg{bottom:-36px;right:-36em;width:684px}.sec-1{width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;background-color:#48b775}.sec-1 .container{padding-bottom:4em;padding-top:4em;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding-left:12em;position:relative}.sec-1 .container h2{font-family:"Mulish",sans-serif;color:#115ba5;font-size:80px;font-weight:900}.sec-1 .content{padding-right:3em;display:flex;margin-top:4em;font-family:"Mulish",sans-serif;color:#cbffe1}.sec-1 .content .box{width:50%}.sec-1 .content h3{font-size:48px;font-weight:800;margin-bottom:.5em}.sec-1 .content p{position:relative;line-height:30px;z-index:20;font-size:24px}.sec-2{box-sizing:unset;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.sec-2 .container{padding-top:20em;padding-left:12em;background-color:#115ba5;padding-bottom:7em}.sec-2 .container .content{width:100%;display:flex;flex-direction:column;align-items:center}.sec-2 .container .content h2{font-weight:800;color:#ebf1ff;font-size:80px;font-family:"Mulish",sans-serif}.sec-2 .container .content p{line-height:30px;font-size:24px;color:#ebf1ff;font-family:"Mulish",sans-serif;text-align:center;margin-top:2em;margin-bottom:2em}.sec-2 .container .box.con{display:flex;width:70%;padding-left:20%}.sec-2 .container .box.con .box{width:50%}.sec-2 .container .box.con .spac{margin-bottom:5em}.sec-2 .container .box.con h3{color:#c2dbfe;font-size:64px;font-family:"Mulish",sans-serif;text-decoration:underline;margin-bottom:1em}.sec-2 .container .box.con .box .item{display:flex;align-items:center}.sec-2 .container .box.con .box p{color:#c2dbfe;font-family:"Mulish",sans-serif;font-size:24px;margin-left:1.5em}.iTemDotBox{position:relative}.iTemDot,.iTemDotBox{width:100px;height:100px}.iTemDot{position:absolute;border-radius:50%;display:inline-block}.iTemDot.one{background-color:#48b775}.iTemDot.two{right:-13px;background-color:#22a85b}.iTemDotBox .line{top:111px;position:absolute;width:7px;background:#c2dbfe;height:60px;left:55px}.sec-2 .container .box.con .box .box-text{padding:19px 0;width:73%;color:#22a85b;background-color:#fff;font-size:24px;font-family:"Mulish",sans-serif;font-weight:700;text-align:center;margin-top:2em}.sec-2 .container .box.con.two{margin-top:5em}.sec-2 .container .box.con.two .box h3{color:#fbd68f;text-decoration:none;font-weight:800;margin-bottom:.5em}.sec-2 .container .box.con.two .box p{margin-left:0;color:#fff2d9;line-height:30px}.sec-2 .container .box.con.two a{text-decoration:none}.sec-2 .container .box.con.two .box-text-two{width:50%;background:rgba(255,242,217,.2);border-radius:8px;color:#fff2d9;padding:20px 0;text-align:center;margin-top:2em;font-family:"Mulish",sans-serif;font-size:23px}.sec-2 .container .box.con.two .box.r .item{display:flex;flex-direction:column;align-items:flex-start;margin-bottom:3em;padding-left:6em}.sec-2 .container .box.con.two .box.r .item p{color:#fff;margin-bottom:.4em}.sec-2 .container .box.con.two .box.r .item span{font-size:20px;color:hsla(0,0%,100%,.5098);font-family:"Mulish",sans-serif;line-height:24px}.sec-2 .container .box.con.two .box.r .bg{width:100%}.sec-2 .container .box.con.footer .box p{margin-left:0;font-size:14px;color:#fff;margin-bottom:.4em}.sec-2 .container .box.con.footer .box span{font-size:12px;color:hsla(0,0%,100%,.5098);font-family:"Mulish",sans-serif}.sec-2 .box.con.two{position:relative}.sec-2 .box.con.two .box.l{z-index:28}.sec-2 .box.con.two.bg .box.r{position:absolute;right:0}.sec-2 .box.con.two.end{margin-top:12em}.sec-2 .box.con.two.end .box{position:relative}.sec-2 .box.con.two.end .box .obj{position:absolute;right:0}.sec-2 .box.con.two.end .box .sky{position:absolute;right:91px;top:62px}.sec-3{position:relative}.sec-3 .sky{position:absolute;right:0;top:71px}.sec-3 .sky img{height:193px}.obj-con{position:inherit;top:-109px}.obj-box{display:flex;flex-direction:column;align-items:center;position:relative}.sc-1-obj{background-color:#115ba5;height:58px;border-radius:15px}.sec-1 .content .box .bg{position:relative;height:100%;background:hsla(0,0%,100%,.4)}.sec-1 .content .box.b{position:relative;padding:0 54px}.sec-1 .content .box.b .bg{z-index:20}.sec-1 .content .box.b .sc-1-obj{position:absolute;z-index:0}.sc-1-obj.a{width:87%;left:-102px;bottom:21px}.sc-1-obj.b{top:102px;width:250px;right:92px}.sc-1-obj.c{width:72%;left:302px;bottom:-34px}.sc-1-obj.d{top:274px;width:250px;right:449px}.sc-1-obj.e{width:72%;left:-102px;bottom:-34px}.sc-0{width:100%;background-color:#115ba5}.sc-0 .content .text-box{width:50%;padding:8em 0 35em}.sc-0 .content{padding-left:12em;position:relative}.sc-0 .content .bg{position:absolute;bottom:-7px}.sc-0 .content .bg .img{width:122%}.sc-0 .content .text-box h3{color:#fbd68f;text-decoration:none;font-weight:800;margin-bottom:.5em;font-size:64px;font-family:"Mulish",sans-serif}.sc-0 .content .text-box p{color:#fff2d9;line-height:30px;font-family:"Mulish",sans-serif;font-size:24px}.animate-box .am-ob-1{position:absolute;z-index:28;bottom:0;width:300px;left:-160px}.animate-box .am-ob-1 .img img{width:100%}.animate-box .am-ob-1 .ob-sli{position:absolute;width:90%;display:flex;justify-content:space-between;top:89px;left:6px;z-index:30}.animate-box .am-ob-1 .ob-play{position:absolute;right:57px;top:-181px}.animate-box .am-ob-2{position:absolute;bottom:180px;left:84px;z-index:28}.animate-box .am-ob-2 .box{position:relative}.animate-box .am-ob-2 .box .ob{position:absolute;left:71px;bottom:98px}.animate-box .am-ob-2 .box .ob2{position:absolute;left:193px;bottom:388px}#ambutton{opacity:0;-webkit-animation:linear infinite;-webkit-animation-name:run;-webkit-animation-duration:2.5s}@-webkit-keyframes run{0%,to{left:-30px;opacity:1}50%{left:30px;opacity:1}}.infor.tab_cu{position:relative}.infor.tab_cu .ima_cu{top:0;position:absolute;left:0;z-index:30}.infor.tab_cu .ima_cu2{top:0;position:absolute;right:0;z-index:30}.infor .ima_cu_3{position:absolute;left:0;bottom:-7px;z-index:30}.infor.tab_cu .ima_cu .img1{height:112px}.infor.tab_cu .ima_cu2 .img2{height:100px}.infor.tab_cu .ima_cu_3 img{height:119.5px}',""]),t.exports=n},588:function(t,e,o){"use strict";o.r(e);var n={name:"BlogsPage"},r=(o(478),o(80)),l=o(111),c=o.n(l),d=o(407),m=o(332),f=o(318),x=o(490),h=o(340),v=o(371),_=o(379),w=o(491),C=o(467),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-main",[n("Mainmenu"),t._v(" "),n("div",{staticClass:"px-10 mb-15"},[n("v-row",{staticClass:"d-flex justify-end mt-15"},[n("v-col",{attrs:{cols:"3"}},[n("v-text-field",{attrs:{dense:"",outlined:"",label:"Start find something...","prepend-inner-icon":"mdi-magnify"}})],1)],1),t._v(" "),n("v-card",{staticClass:"pa-0 infor tab_cu rounded-xl d-flex align-center",attrs:{width:"auto",height:"100px",color:"#48B775",elevation:"0"}},[n("div",{staticClass:"ima_cu 1"},[n("img",{staticClass:"img1",attrs:{src:o(474),alt:"",width:""}})]),t._v(" "),n("div",{staticClass:"ima_cu2"},[n("img",{staticClass:"img2",attrs:{src:o(475),alt:"",width:""}})]),t._v(" "),n("v-card-text",{staticClass:"text-center text-uppercase white--text text-h5"},[t._v("\n        Read the latest NEWS from Informata\n      ")])],1),t._v(" "),n("div",{staticClass:"d-flex justify-space-between mt-8 mb-3"},[n("div",[n("v-card",{staticClass:"font-italic white--text pa-1 px-6",attrs:{elevation:"0",color:"yello_info_2"}},[t._v("NEW")])],1),t._v(" "),n("div",[n("v-btn",{staticClass:"text-capitalize primary_info--text",attrs:{text:""}},[t._v("\n          See more>")])],1)]),t._v(" "),n("v-row",{staticClass:"mb-5"},[n("v-col",{attrs:{cols:"3"}},[n("v-card",{staticClass:"ma-0",attrs:{elevation:"0"}},[n("template",{slot:"progress"},[n("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),t._v(" "),n("v-img",{attrs:{height:"270",src:"https://via.placeholder.com/270x200.png"}}),t._v(" "),n("v-card-text",{staticClass:"pa-0 mt-8"},[n("div",{staticClass:"text_cutton_1--text font_web2"},[t._v("\n              Small plates, salads & sandwiches - an intimate setting with 12\n              indoor seats plus patio seating.\n              "),n("v-btn",{staticClass:"text-capitalize primary_info--text pa-0",attrs:{to:"/blog/slug-url-blog",text:""}},[t._v("\n                See more>")])],1)])],2)],1),t._v(" "),n("v-col",{attrs:{cols:"3"}},[n("v-card",{staticClass:"ma-0",attrs:{elevation:"0"}},[n("template",{slot:"progress"},[n("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),t._v(" "),n("v-img",{attrs:{height:"270",src:"https://via.placeholder.com/270x200.png"}}),t._v(" "),n("v-card-text",{staticClass:"pa-0 mt-8"},[n("div",{staticClass:"text_cutton_1--text font_web2"},[t._v("\n              Small plates, salads & sandwiches - an intimate setting with 12\n              indoor seats plus patio seating.\n              "),n("v-btn",{staticClass:"text-capitalize primary_info--text pa-0",attrs:{to:"/blog/slug-url-blog",text:""}},[t._v("\n                See more>")])],1)])],2)],1),t._v(" "),n("v-col",{attrs:{cols:"3"}},[n("v-card",{staticClass:"ma-0",attrs:{elevation:"0"}},[n("template",{slot:"progress"},[n("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),t._v(" "),n("v-img",{attrs:{height:"270",src:"https://via.placeholder.com/270x200.png"}}),t._v(" "),n("v-card-text",{staticClass:"pa-0 mt-8"},[n("div",{staticClass:"text_cutton_1--text font_web2"},[t._v("\n              Small plates, salads & sandwiches - an intimate setting with 12\n              indoor seats plus patio seating.\n              "),n("v-btn",{staticClass:"text-capitalize primary_info--text pa-0",attrs:{to:"/blog/slug-url-blog",text:""}},[t._v("\n                See more>")])],1)])],2)],1),t._v(" "),n("v-col",{attrs:{cols:"3"}},[n("v-card",{staticClass:"ma-0",attrs:{elevation:"0"}},[n("template",{slot:"progress"},[n("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),t._v(" "),n("v-img",{attrs:{height:"270",src:"https://via.placeholder.com/270x200.png"}}),t._v(" "),n("v-card-text",{staticClass:"pa-0 mt-8"},[n("div",{staticClass:"text_cutton_1--text font_web2"},[t._v("\n              Small plates, salads & sandwiches - an intimate setting with 12\n              indoor seats plus patio seating.\n              "),n("v-btn",{staticClass:"text-capitalize primary_info--text pa-0",attrs:{to:"/blog/slug-url-blog",text:""}},[t._v("\n                See more>")])],1)])],2)],1)],1),t._v(" "),n("v-card",{staticClass:"pa-0 infor tab_cu rounded-xl d-flex align-center mt-15",attrs:{width:"auto",height:"100px",color:"#115BA5",elevation:"0"}},[n("div",{staticClass:"ima_cu_3 1"},[n("img",{staticClass:"img1",attrs:{src:o(476),alt:"",width:""}})]),t._v(" "),n("div",{staticClass:"ima_cu2"},[n("img",{staticClass:"img2",attrs:{src:o(477),alt:"",width:""}})]),t._v(" "),n("v-card-text",{staticClass:"text-center text-uppercase white--text text-h5"},[t._v("\n        Read the latest Knowledge from Informata\n      ")])],1),t._v(" "),n("div",{staticClass:"d-flex justify-space-between mt-8 mb-3"},[n("div",[n("v-card",{staticClass:"font-italic white--text pa-1 px-6",attrs:{elevation:"0",color:"green_info_1"}},[t._v("KNOWLEDGE")])],1),t._v(" "),n("div",[n("v-btn",{staticClass:"text-capitalize primary_info--text",attrs:{text:""}},[t._v("\n          See more>")])],1)]),t._v(" "),n("v-row",{staticClass:"mb-5"},[n("v-col",{attrs:{cols:"3"}},[n("v-card",{staticClass:"ma-0",attrs:{elevation:"0"}},[n("template",{slot:"progress"},[n("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),t._v(" "),n("v-img",{attrs:{height:"270",src:"https://via.placeholder.com/270x200.png"}}),t._v(" "),n("v-card-text",{staticClass:"pa-0 mt-8"},[n("div",{staticClass:"text_cutton_1--text font_web2"},[t._v("\n              Small plates, salads & sandwiches - an intimate setting with 12\n              indoor seats plus patio seating.\n              "),n("v-btn",{staticClass:"text-capitalize primary_info--text pa-0",attrs:{to:"/blog/slug-url-blog",text:""}},[t._v("\n                See more>")])],1)])],2)],1),t._v(" "),n("v-col",{attrs:{cols:"3"}},[n("v-card",{staticClass:"ma-0",attrs:{elevation:"0"}},[n("template",{slot:"progress"},[n("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),t._v(" "),n("v-img",{attrs:{height:"270",src:"https://via.placeholder.com/270x200.png"}}),t._v(" "),n("v-card-text",{staticClass:"pa-0 mt-8"},[n("div",{staticClass:"text_cutton_1--text font_web2"},[t._v("\n              Small plates, salads & sandwiches - an intimate setting with 12\n              indoor seats plus patio seating.\n              "),n("v-btn",{staticClass:"text-capitalize primary_info--text pa-0",attrs:{to:"/blog/slug-url-blog",text:""}},[t._v("\n                See more>")])],1)])],2)],1),t._v(" "),n("v-col",{attrs:{cols:"3"}},[n("v-card",{staticClass:"ma-0",attrs:{elevation:"0"}},[n("template",{slot:"progress"},[n("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),t._v(" "),n("v-img",{attrs:{height:"270",src:"https://via.placeholder.com/270x200.png"}}),t._v(" "),n("v-card-text",{staticClass:"pa-0 mt-8"},[n("div",{staticClass:"text_cutton_1--text font_web2"},[t._v("\n              Small plates, salads & sandwiches - an intimate setting with 12\n              indoor seats plus patio seating.\n              "),n("v-btn",{staticClass:"text-capitalize primary_info--text pa-0",attrs:{to:"/blog/slug-url-blog",text:""}},[t._v("\n                See more>")])],1)])],2)],1),t._v(" "),n("v-col",{attrs:{cols:"3"}},[n("v-card",{staticClass:"ma-0",attrs:{elevation:"0"}},[n("template",{slot:"progress"},[n("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),t._v(" "),n("v-img",{attrs:{height:"270",src:"https://via.placeholder.com/270x200.png"}}),t._v(" "),n("v-card-text",{staticClass:"pa-0 mt-8"},[n("div",{staticClass:"text_cutton_1--text font_web2"},[t._v("\n              Small plates, salads & sandwiches - an intimate setting with 12\n              indoor seats plus patio seating.\n              "),n("v-btn",{staticClass:"text-capitalize primary_info--text pa-0",attrs:{to:"/blog/slug-url-blog",text:""}},[t._v("\n                See more>")])],1)])],2)],1)],1)],1),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{Mainmenu:o(356).default,Footer:o(342).default}),c()(component,{VBtn:d.a,VCard:m.a,VCardText:f.a,VCol:x.a,VImg:h.a,VMain:v.a,VProgressLinear:_.a,VRow:w.a,VTextField:C.a})}}]);