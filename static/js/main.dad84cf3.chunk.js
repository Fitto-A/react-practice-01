(this["webpackJsonpreact-projects-1"]=this["webpackJsonpreact-projects-1"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(18),r=n.n(a),i=(n(25),n(10)),o=n(2),l=(n(26),n(7)),j=(n(27),[{id:1,name:"Bertie Yates",age:29,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"},{id:2,name:"Hester Hogan",age:32,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg"},{id:3,name:"Larry Little",age:36,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"},{id:4,name:"Sean Walsh",age:34,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"},{id:5,name:"Lola Gardner",age:29,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"}]),b=n(0),u=function(e){var t=e.people;return Object(b.jsx)(b.Fragment,{children:t.map((function(e){var t=e.id,n=e.name,c=e.age,s=e.image;return Object(b.jsxs)("article",{className:"person",children:[Object(b.jsx)("img",{src:s,alt:n}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:n}),Object(b.jsxs)("p",{children:[c," years"]})]})]},t)}))})};var d=function(){var e=Object(c.useState)(j),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(!0),r=Object(l.a)(a,2),i=r[0],o=r[1];return Object(b.jsx)("main",{children:Object(b.jsxs)("section",{className:"container",children:[Object(b.jsx)("h2",{children:"0 Birthdays today"}),Object(b.jsx)(u,{people:n}),Object(b.jsx)("button",{onClick:function(){!0===i?(s([]),o(!1)):s(j)},children:"Clear All"})]})})},h=n(14),m=n.n(h),p=n(19),x=(n(30),function(){return Object(b.jsx)("div",{children:"Loading..."})}),O=n(17),f=function(e){var t=e.id,n=e.name,s=e.info,a=e.image,r=e.price,i=e.removeTour,o=Object(c.useState)(!1),j=Object(l.a)(o,2),u=j[0],d=j[1];return Object(b.jsxs)("article",{className:"single-tour",children:[Object(b.jsx)("img",{src:a,alt:n}),Object(b.jsxs)("footer",{children:[Object(b.jsxs)("div",{className:"tour-info",children:[Object(b.jsx)("h4",{children:n}),Object(b.jsxs)("h4",{className:"tour-price",children:["$",r]})]}),Object(b.jsxs)("p",{children:[u?s:"".concat(s.substring(0,200),"...\n                "),Object(b.jsx)("button",{onClick:function(){return d(!u)},children:u?"See less":"See more"})]}),Object(b.jsx)("button",{className:"delete-btn",onClick:function(){return i(t)},children:"Not interested"})]})]})},g=function(e){var t=e.tours,n=e.removeTour;return Object(b.jsxs)("section",{className:"section-tours",children:[Object(b.jsxs)("div",{className:"title",children:[Object(b.jsx)("h2",{children:"Our Tours"}),Object(b.jsx)("div",{className:"underline"})]}),Object(b.jsx)("div",{children:t.map((function(e){return Object(b.jsx)(f,Object(O.a)(Object(O.a)({},e),{},{removeTour:n}),t.id)}))})]})};var v=function(){var e=Object(c.useState)(!0),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)([]),r=Object(l.a)(a,2),i=r[0],o=r[1],j=function(){var e=Object(p.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.prev=1,e.next=4,fetch("https://course-api.com/react-tours-project");case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,s(!1),o(n),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),s(!1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){j()}),[]),n?Object(b.jsx)("main",{children:Object(b.jsx)(x,{})}):0===i.length?Object(b.jsx)("main",{children:Object(b.jsxs)("div",{className:"title",children:[Object(b.jsx)("h2",{children:"No tours left"}),Object(b.jsx)("button",{onClick:j,className:"btn",children:"Refresh"})]})}):Object(b.jsx)("main",{children:Object(b.jsx)(g,{tours:i,removeTour:function(e){var t=i.filter((function(t){return t.id!==e}));o(t)}})})},y=(n(31),[{id:1,name:"susan smith",job:"web developer",image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"},{id:2,name:"anna johnson",job:"web designer",image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",text:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."},{id:3,name:"peter jones",job:"intern",image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",text:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."},{id:4,name:"bill anderson",job:"the boss",image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",text:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. "}]),N=n(11),q=function(){var e=Object(c.useState)(3),t=Object(l.a)(e,2),n=t[0],s=t[1],a=y[n],r=a.name,i=a.job,o=a.text,j=a.image,u=function(e){return e>y.length-1?0:e<0?y.length-1:e};return Object(b.jsxs)("article",{className:"review",children:[Object(b.jsxs)("div",{className:"img-container",children:[Object(b.jsx)("img",{src:j,alt:r,className:"person-img"}),Object(b.jsx)("span",{className:"quote-icon",children:Object(b.jsx)(N.c,{})})]}),Object(b.jsx)("h4",{className:"autor",children:r}),Object(b.jsx)("p",{className:"job",children:i}),Object(b.jsx)("p",{className:"info",children:o}),Object(b.jsxs)("div",{className:"button-container",children:[Object(b.jsx)("span",{className:"prev-btn",onClick:function(){s((function(e){return u(e+1)}))},children:Object(b.jsx)(N.a,{})}),Object(b.jsx)("span",{className:"next-btn",onClick:function(){s((function(e){return u(e-1)}))},children:Object(b.jsx)(N.b,{})})]}),Object(b.jsx)("span",{className:"random-btn",onClick:function(){var e=Math.floor(Math.random()*y.length);e===n&&(e=n+1),s(u(e))},children:"Surprise Me"})]})};var k=function(){return Object(b.jsx)("main",{children:Object(b.jsxs)("section",{className:"container-review",children:[Object(b.jsxs)("div",{className:"title",children:[Object(b.jsx)("h2",{children:"Our reviews"}),Object(b.jsx)("div",{className:"underline"})]}),Object(b.jsx)(q,{})]})})};var w=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(i.a,{children:[Object(b.jsxs)("div",{className:"section-links",children:[Object(b.jsx)(i.b,{className:"links",to:"/",children:"Reviews"}),Object(b.jsx)(i.b,{className:"links",to:"/birthday",children:"Birthdays list"}),Object(b.jsx)(i.b,{className:"links",to:"/tours",children:"Tours"})]}),Object(b.jsx)(o.a,{exact:!0,path:"/",render:function(){return Object(b.jsx)(k,{})}}),Object(b.jsx)(o.a,{path:"/tours",render:function(){return Object(b.jsx)(v,{})}}),Object(b.jsx)(o.a,{path:"/birthday",render:function(){return Object(b.jsx)(d,{})}})]})})};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.dad84cf3.chunk.js.map