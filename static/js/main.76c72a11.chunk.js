(this.webpackJsonplumweb=this.webpackJsonplumweb||[]).push([[0],{37:function(e,t,a){e.exports=a(71)},42:function(e,t,a){},43:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},45:function(e,t,a){},63:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){e.exports=a.p+"static/media/lumprofile.9bdcb40d.jpg"},71:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(32),i=a.n(r),o=(a(42),a(43),a(44),a(45),a(14)),c=a(8),s=a(11),m=a(12),u=a(15),d=a(13),p=a(16),h=a(33),E=a.n(h),g=a(73),f=(a(63),a(21)),v=(a(65),a(34)),b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={height:window.innerHeight},a.ro=new v.a((function(e){var t=!0,n=!1,l=void 0;try{for(var r,i=e[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var o=r.value.contentRect;console.log(o),a.setState({height:o.height})}}catch(c){n=!0,l=c}finally{try{t||null==i.return||i.return()}finally{if(n)throw l}}})),a.onScroll=function(){f.b.to(a.viewport,1,{y:-window.pageYOffset,ease:f.a.easeOut})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.onScroll),this.ro.observe(this.viewport)}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"viewport",ref:function(t){return e.viewport=t}},this.props.children),l.a.createElement("div",{ref:function(t){return e.fake=t},style:{height:this.state.height}}))}}]),t}(l.a.Component),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={imageURL:"",results:[],images:["https://source.unsplash.com/random"]},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("https://api.dribbble.com/v2/user/shots?access_token=092a4917148e05c20e99e7dd867e154162718c00eb699ba9edc1efbb2e3309e8").then((function(t){var a=t.data;e.setState({imageURL:t.html_url,results:a}),console.log("huh",t.data)})).catch((function(e){console.log(e)})),this.dragInstance=g.a.create(this.dragTarget,{type:"rotation",onPress:function(){console.log("draggable clicked!!!")},onDragStart:function(){console.log("Dragging!!!")}})}},{key:"render",value:function(){var e=this.state,t=(e.imageURL,e.results);return l.a.createElement("div",null,l.a.createElement(b,null,l.a.createElement("div",{className:"layer"},l.a.createElement("div",{className:"site-desc"},l.a.createElement("p",null,"After being obsessed with customize my own blogger theme in the past (about 12 years ago). I officially an creative coder, UI & UX designer. As I graduated from media art, it helps me a lot on this sector. I like visuals, I loved to create with different media, medium."))),l.a.createElement("div",{className:"layer"},l.a.createElement("div",{className:"profilepic"},l.a.createElement("div",{className:"ppbg"}),l.a.createElement("img",{src:a(66),alt:""}))),l.a.createElement("div",{className:"layer"},l.a.createElement("div",{className:"specializein"},l.a.createElement("p",null,"Web design | App design | Front end development | Digital Materials"))),l.a.createElement("div",{className:"layer"},l.a.createElement("div",{className:"skillset"},l.a.createElement("ul",null,l.a.createElement("p",null," Web Development & App Development"),l.a.createElement("li",null,"HTML"),l.a.createElement("li",null,"SCSS"),l.a.createElement("li",null,"CSS"),l.a.createElement("li",null,"Jquery"),l.a.createElement("li",null,"React"),l.a.createElement("li",null,"Vue"),l.a.createElement("li",null,"PHP"),l.a.createElement("li",null,"Bootstrap"),l.a.createElement("li",null,"Foundation"),l.a.createElement("li",null,"Material Design"),l.a.createElement("li",null,"React Native"),l.a.createElement("li",null,"Lottie")),l.a.createElement("div",{className:"right-align"},l.a.createElement("ul",null,l.a.createElement("p",null,"Graphic Design (For digital) & UI UX"),l.a.createElement("li",null,"Adobe Illustrator"),l.a.createElement("li",null,"Adobe Photoshop"),l.a.createElement("li",null,"Sketch"),l.a.createElement("li",null,"XD"),l.a.createElement("li",null,"Figma"),l.a.createElement("li",null,"Adobe Lightroom"),l.a.createElement("li",null,"Adobe After Effect"))))),l.a.createElement("div",{className:"layer"},l.a.createElement("div",{className:"experience"},l.a.createElement("p",{className:"maintitle"},"Experiences"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("div",null,l.a.createElement("h5",null,"Cloud Coder"),l.a.createElement("p",null," Mar 2016 \u2013 Jun 2016"),l.a.createElement("p",null,"Worked as Web and graphic design intern for 3 and half months. From design logo, favicon, Facebook banner and Shopify app banner, edit photos, execute client's design into code to maintenance websites from CMS or start from scratch."))),l.a.createElement("li",null,l.a.createElement("div",null,l.a.createElement("h5",null,"Melon Media"),l.a.createElement("p",null," Jun 2017 \u2013 Dec 2018"),l.a.createElement("p",null,"Worked as Web and graphic design intern for 3 months. From social media posts to website materials such as banner, product items, description photos, logo, gif. Major on html, css, php, wordpress front end coding also design website, and continue as full time Web designer for about 1 and half years."))),l.a.createElement("li",null,l.a.createElement("h5",null,"Sureplify"),l.a.createElement("p",null," January 2019 to current"),l.a.createElement("p",null,"Worked as UI UX for both web and app development. At the same time do some front end development, from Sketch design mock up till execution on front end coding. Use lottie on animation for website and app development"))))),l.a.createElement("div",{className:"layer"},l.a.createElement("div",{className:"right-align gallery-shot"},l.a.createElement("p",{className:"maintitle"},"Here my shot! from dribbble"),l.a.createElement("div",{className:"random-shot"},t.slice(0,7).map((function(e){return l.a.createElement("li",null,l.a.createElement("img",{src:e.images.normal}))}))))),l.a.createElement("div",{className:"copyright"},l.a.createElement("p",null,"Copyrighted \xa9 Wai Lum All Right Reserved."))))}}]),t}(n.Component);var y=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"site-name"},l.a.createElement("h3",null,"Wai lum")),l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(o.a,{basename:window.location.pathname||""},l.a.createElement(c.a,{exact:!0,path:"/",component:w})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.76c72a11.chunk.js.map