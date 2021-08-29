(this["webpackJsonplearning-anilist-api"]=this["webpackJsonplearning-anilist-api"]||[]).push([[0],{158:function(e,t,n){},159:function(e,t,n){},165:function(e,t,n){},276:function(e,t,n){},280:function(e,t,n){},283:function(e,t,n){"use strict";n.r(t);var a,c,r,i=n(1),s=n.n(i),o=n(63),l=n.n(o),j=n(302),u=n(139),b=(n(158),n.p,n(159),n(18)),d=n(15),x=n(48),O=n(105),g=n(135),h=n(136),m=n.n(h),f=n(292),p=n(293),v=n(138),C=n(298),y=n(140),k=n(297),I=n(100),N=n(101),S=n.n(N),D=n(137),B=n(78),E=n(300),F=n(304),P=n(51),R=(n(165),n(303)),A=n(299),q=n(295),M=n(296),T=n(151),$=n(142),w=n(2);function L(e){var t=s.a.useState("Madoka Magica"),n=Object(d.a)(t,2),a=n[0],c=n[1],r=s.a.useState("Anime"),i=Object(d.a)(r,2),o=i[0],l=i[1];return Object(w.jsxs)(f.a,{className:"QueryContainer",fluid:!0,children:[Object(w.jsx)(p.a,{children:Object(w.jsx)(v.a,{children:Object(w.jsx)(z,{queryType:o,submitFunction:c,setQueryType:l})})}),Object(w.jsx)(p.a,{children:Object(w.jsx)(v.a,{children:Object(w.jsx)(Q,{queryType:o,searchString:a,handleImageClick:e.handleImageClick})})})]})}function Q(e){var t=Object(i.useState)(1),n=Object(d.a)(t,2),s=n[0],o=n[1];Object(i.useEffect)((function(){o(1)}),[e]);var l=function(e,t,n){console.log(t);var i={search:e,perPage:25,page:n},s=Object(P.gql)(a||(a=Object(B.a)([""])));return s="Anime"==t?Object(P.gql)(c||(c=Object(B.a)(["\n\t  query AnimeCharacters($search: String $page: Int){\n   Media(search:$search, type: ANIME){\n     characters(sort: ROLE, page: $page, perPage: 25) {\n\t   pageInfo{\n\t\t   total\n\t\t   lastPage\n\t   },\n       nodes {\n         id,\n         name {\n             full\n         },\n         image {\n           large\n         },\n       }\n     }\n   }\n }\n\t  "]))):Object(P.gql)(r||(r=Object(B.a)(["\n  \t  query Characters($search: String, $perPage: Int, $page: Int){\n  \t  Page(page: $page, perPage: $perPage){\n  \t    pageInfo{\n  \t      total\n  \t      currentPage\n\t\t  lastPage\n  \t    }\n  \t    characters(search:$search){\n  \t\t  id\n  \t      name {\n  \t        last\n  \t        first\n  \t\t\tfull\n  \t      }\n  \t      image {\n  \t        large\n  \t      }\n  \t    }\n  \t  }\n  \t}\n  \t  "]))),Object(F.a)(["characters",i,t],Object(D.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.request)("https://graphql.anilist.co",s,i);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))))}(e.searchString,e.queryType,s),j=l.status,u=l.data,O=l.error,g=(l.isFetching,l.isSuccess,[]),h=1;return u&&("Anime"==e.queryType?u.Media&&(g=Object(b.a)(u.Media.characters.nodes),h=u.Media.characters.pageInfo.lastPage,console.log("Pages: "+h)):u.Page&&(g=Object(b.a)(u.Page.characters),h=u.Page.pageInfo.lastPage,console.log("Pages: "+h))),Object(w.jsxs)(f.a,{className:"CharacterBar",children:[Object(w.jsx)(p.a,{xs:"auto",xl:"auto",className:"CharacterBarRow",children:Object(w.jsx)(v.a,{fluid:!0,children:"loading"===j?"Loading...":"error"===j?Object(w.jsxs)("span",{children:["Error: ",O.message]}):Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(p.a,{className:"CharacterBarRow",children:g.map((function(e,t){return Object(w.jsx)(v.a,{xl:"auto",xs:"auto",children:Object(w.jsxs)(R.a,{bg:"black",className:"CharCard",children:[Object(w.jsx)(W,{url:e.image.large,name:e.name.full,id:e.id,index:t}),Object(w.jsx)("span",{className:"CharName",children:e.name.full})]})},e.id)}))})})})}),Object(w.jsxs)(p.a,{children:[Object(w.jsx)(v.a,{children:Object(w.jsx)(y.a,{variant:"outline-secondary",onClick:function(){return s>1?o(s-1):null},children:Object(w.jsx)(x.a,{})})}),Object(w.jsx)(v.a,{children:Object(w.jsx)(y.a,{variant:"outline-secondary",onClick:function(){return s<h?o(s+1):null},children:Object(w.jsx)(x.b,{})})})]})]})}function W(e){var t=e.url,n=e.name,a=e.index,c=e.id,r=Object(E.a)((function(){return{type:"image",item:{id:c,name:n,url:t},collect:function(e){return{isDragging:e.isDragging()}}}})),i=Object(d.a)(r,2),s=(i[0].isDragging,i[1]);return Object(w.jsx)("div",{ref:s,children:Object(w.jsx)("img",{className:"CharImg",src:t,alt:n,index:a,fluid:!0},c)})}function z(e){var t=s.a.useState("Madoka Magica"),n=Object(d.a)(t,2),a=n[0],c=n[1];return Object(w.jsx)(f.a,{className:"searchBarContainer",children:Object(w.jsx)(A.a,{onSubmit:function(t){t.preventDefault(),e.submitFunction(a)},children:Object(w.jsxs)(q.a,{className:"mb-3",children:[Object(w.jsxs)(M.a,{title:e.queryType,variant:"outline-secondary",id:"input-group-dropdown-1",onSelect:function(t){return e.setQueryType(t)},children:[Object(w.jsx)(T.a.Item,{eventKey:"Anime",children:"Anime"}),Object(w.jsx)(T.a.Item,{eventKey:"Character",children:"Character"})]}),Object(w.jsx)($.a,{value:a,onChange:function(e){c(e.target.value)}})]})})})}var J=n(301),K=n(150);n(276),n(277);function G(e){var t=Object(i.useState)([]),n=Object(d.a)(t,2),a=n[0],c=n[1],r=Object(i.useState)(!1),s=Object(d.a)(r,2);s[0],s[1];function o(t,n,r){if(t.barIndex==e.barIndex){var i=o.index;console.log("from: "+i+" to: "+n);var s=Object(b.a)(a),o=s[i];s.splice(i,1),s.splice(n,0,o),c((function(e){return[s]}))}}var l=Object(i.useCallback)((function(e){console.log("Removing Image at Index "+e+" "+a[e].name),c((function(t){return[].concat(Object(b.a)(t.slice(0,e)),Object(b.a)(t.slice(e+1)))}))}),[a]),j=Object(J.a)((function(){return{accept:"image",drop:function(e,t){return function(e,t,n,a){if(e&&t&&n){var r={id:n,name:t,url:e};console.log("url: "+e+" id: "+n+" name: "+t),c((function(e){return[].concat(Object(b.a)(e),[r])}))}}(e.url,e.name,e.id,e.barIndex)},collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop()}}}})),u=Object(d.a)(j,2),x=u[0],O=x.canDrop,g=x.isOver,h=u[1],m="black";return O&&g?m="#3fe74b":O&&(m="#3f92e7"),Object(w.jsx)("div",{ref:h,style:{backgroundColor:m},children:Object(w.jsxs)("div",{className:"RankingBar",children:[Object(w.jsx)("div",{className:"RankBoxCol",children:Object(w.jsx)(X,{color:e.color,index:e.index,handleChange:e.handleBoxChange,text:e.text})}),Object(w.jsx)("div",{className:"RankingImagesWrapper",children:a.map((function(e,t){return Object(w.jsx)("div",{className:"RankingImgWrapper",children:Object(w.jsx)(H,{url:e.url,name:e.name,barIndex:t,index:t,dropItem:o,handleRemove:l,id:e.id})},t)}))})]})})}function X(e){var t=Object(i.useState)(e.color),n=Object(d.a)(t,2),a=n[0],c=n[1],r=Object(i.useState)(e.text),s=Object(d.a)(r,2),o=s[0],l=s[1],j=Object(i.useState)(30),u=Object(d.a)(j,2),b=u[0],x=u[1];var O=Object(i.useState)(!1),g=Object(d.a)(O,2),h=g[0],m=g[1];return h?Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{className:"RankBox",style:{backgroundColor:a,fontSize:b+"px"},onClick:function(){return m(!1)},children:o}),Object(w.jsxs)("div",{children:[Object(w.jsxs)(q.a,{children:[Object(w.jsx)($.a,{value:o,className:"boxTextInput",onChange:function(e){l(e.target.value)}}),Object(w.jsx)($.a,{value:b,type:"number",className:"boxFontInput",onChange:function(e){x(e.target.value)}}),Object(w.jsx)(q.a.Text,{id:"inputGroup-sizing-sm",children:"px"})]}),Object(w.jsx)(K.a,{color:a,onChange:function(e,t){c(e.hex)},presetColors:["#ED254E","#FE9000","#FFDD4A","#59CD90","#4C5760"]})]})]}):Object(w.jsx)("div",{className:"RankBox",style:{backgroundColor:a,fontSize:b+"px"},onClick:function(){return m(!0)},children:o})}function H(e){var t=e.url,n=e.name,a=e.index,c=e.id,r=e.barIndex,s=Object(i.useState)({display:"none"}),o=Object(d.a)(s,2),l=o[0],j=o[1],u=Object(E.a)((function(){return{type:"image",item:{id:c,name:n,url:t,index:a,barIndex:r},end:function(t,n){e.handleRemove(a)},collect:function(e){return{isDragging:e.isDragging()}}}}),[e]),b=Object(d.a)(u,2),x=(b[0].isDragging,b[1]);return Object(w.jsxs)("div",{ref:x,onMouseEnter:function(e){j({display:"block"})},onMouseLeave:function(e){j({display:"none"})},className:"RankingImgWrapper",children:[Object(w.jsx)("img",{src:t,className:"RankingImg",alt:n,index:a},c),Object(w.jsx)("button",{style:l,className:"DltButton",onClick:function(){return e.handleRemove(a)},children:"X"})]})}n(279),n(280);var U=function(){var e=Object(i.useState)([{color:"#ED254E",text:"S"},{color:"#FE9000",text:"A"},{color:"#FFDD4A",text:"B"},{color:"#59CD90",text:"C"},{color:"#4C5760",text:"D"}]),t=Object(d.a)(e,2),n=t[0],a=t[1];function c(e,t,c){var r=Object(b.a)(n);r[e]={color:t,text:c},a((function(e){return Object(b.a)(r)}))}return Object(w.jsx)(k.a,{backend:I.a,children:Object(w.jsx)(f.a,{fluid:!0,children:Object(w.jsxs)(p.a,{children:[Object(w.jsx)(v.a,{md:"auto",className:"QueryColumn",children:Object(w.jsx)(L,{})}),Object(w.jsxs)(v.a,{className:"ChartContainer",children:[Object(w.jsx)("div",{className:"ChartContainerBarsWrapper",children:Object(w.jsx)("div",{id:"ScreenshotElement",children:n.map((function(e,t){return Object(w.jsx)(p.a,{children:Object(w.jsx)(v.a,{children:Object(w.jsx)(G,{color:e.color,text:e.text,index:t,handleBoxChange:c})})},t)}))})}),Object(w.jsx)(p.a,{className:"justify-content-md-end",children:Object(w.jsx)(v.a,{md:"auto",children:Object(w.jsxs)(C.a,{className:"mr-4 pt-4",children:[Object(w.jsx)(y.a,{variant:"outline-secondary",onClick:function(){return function(){var e;switch(n.length){case 0:e={color:"#ED254E",text:"S"};break;case 1:e={color:"#FE9000",text:"A"};break;case 2:e={color:"#FFDD4A",text:"B"};break;case 3:e={color:"#59CD90",text:"C"};break;case 4:e={color:"#4C5760",text:"D"};break;default:e={color:"#4C5760",text:n.length<26?String.fromCharCode(64+n.length):"?"}}a((function(t){return[].concat(Object(b.a)(t),[e])}))}()},children:Object(w.jsx)(O.b,{})}),Object(w.jsx)(y.a,{variant:"outline-secondary",onClick:function(){return function(){var e=Object(b.a)(n);e.pop(),a((function(t){return Object(b.a)(e)}))}()},children:Object(w.jsx)(x.c,{})}),Object(w.jsx)(y.a,{onClick:function(){return m.a.toBlob(document.getElementById("ScreenshotElement")).then((function(e){Object(g.saveAs)(e,"chart.png")}))},variant:"outline-secondary",children:Object(w.jsx)(O.a,{})})]})})})]})]})})})};var V=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(U,{})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,305)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},Z=(n(281),new j.a);l.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(u.a,{client:Z,children:Object(w.jsx)(V,{})})}),document.getElementById("root")),Y()}},[[283,1,2]]]);
//# sourceMappingURL=main.727e4b6b.chunk.js.map