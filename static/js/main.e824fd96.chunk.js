(this["webpackJsonplearning-anilist-api"]=this["webpackJsonplearning-anilist-api"]||[]).push([[0],{158:function(e,t,n){},159:function(e,t,n){},166:function(e,t,n){},277:function(e,t,n){},281:function(e,t,n){},284:function(e,t,n){"use strict";n.r(t);var a,c,r,i=n(1),s=n.n(i),o=n(63),l=n.n(o),u=n(303),j=n(137),d=(n(158),n.p,n(159),n(18)),b=n(14),O=n(48),x=n(105),g=n(151),h=(n(160),n(293)),m=n(294),f=n(136),p=n(299),v=n(138),C=n(298),y=n(100),k=n(101),I=n.n(k),N=n(135),S=n(78),D=n(301),E=n(305),P=n(51),B=(n(166),n(304)),F=n(300),R=n(296),w=n(297),A=n(150),q=n(140),M=n(2);function T(e){var t=s.a.useState("Madoka Magica"),n=Object(b.a)(t,2),a=n[0],c=n[1],r=s.a.useState("Anime"),i=Object(b.a)(r,2),o=i[0],l=i[1];return Object(M.jsxs)(h.a,{className:"QueryContainer",children:[Object(M.jsx)(m.a,{children:Object(M.jsx)(f.a,{children:Object(M.jsx)(z,{queryType:o,submitFunction:c,setQueryType:l})})}),Object(M.jsx)(m.a,{children:Object(M.jsx)(f.a,{children:Object(M.jsx)($,{queryType:o,searchString:a,handleImageClick:e.handleImageClick})})})]})}function $(e){var t=Object(i.useState)(1),n=Object(b.a)(t,2),s=n[0],o=n[1];Object(i.useEffect)((function(){o(1)}),[e]);var l=function(e,t,n){console.log(t);var i={search:e,perPage:25,page:n},s=Object(P.gql)(a||(a=Object(S.a)([""])));return s="Anime"==t?Object(P.gql)(c||(c=Object(S.a)(["\n\t  query AnimeCharacters($search: String $page: Int){\n   Media(search:$search, type: ANIME){\n     characters(sort: ROLE, page: $page, perPage: 25) {\n\t   pageInfo{\n\t\t   total\n\t\t   lastPage\n\t   },\n       nodes {\n         id,\n         name {\n             full\n         },\n         image {\n           large\n         },\n       }\n     }\n   }\n }\n\t  "]))):Object(P.gql)(r||(r=Object(S.a)(["\n  \t  query Characters($search: String, $perPage: Int, $page: Int){\n  \t  Page(page: $page, perPage: $perPage){\n  \t    pageInfo{\n  \t      total\n  \t      currentPage\n\t\t  lastPage\n  \t    }\n  \t    characters(search:$search){\n  \t\t  id\n  \t      name {\n  \t        last\n  \t        first\n  \t\t\tfull\n  \t      }\n  \t      image {\n  \t        large\n  \t      }\n  \t    }\n  \t  }\n  \t}\n  \t  "]))),Object(E.a)(["characters",i,t],Object(N.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.request)("https://graphql.anilist.co",s,i);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))))}(e.searchString,e.queryType,s),u=l.status,j=l.data,x=l.error,g=(l.isFetching,l.isSuccess,[]),p=1;return j&&("Anime"==e.queryType?j.Media&&(g=Object(d.a)(j.Media.characters.nodes),p=j.Media.characters.pageInfo.lastPage,console.log("Pages: "+p)):j.Page&&(g=Object(d.a)(j.Page.characters),p=j.Page.pageInfo.lastPage,console.log("Pages: "+p))),Object(M.jsxs)(h.a,{children:[Object(M.jsx)(m.a,{xs:"auto",xl:"auto",className:"CharacterBar",children:Object(M.jsx)(f.a,{fluid:!0,children:"loading"===u?"Loading...":"error"===u?Object(M.jsxs)("span",{children:["Error: ",x.message]}):Object(M.jsx)(M.Fragment,{children:Object(M.jsx)(m.a,{className:"CharacterBarRow",children:g.map((function(e,t){return Object(M.jsx)(f.a,{xl:"auto",xs:"auto",children:Object(M.jsxs)(B.a,{bg:"black",className:"CharCard",children:[Object(M.jsx)(L,{url:e.image.large,name:e.name.full,id:e.id,index:t}),Object(M.jsx)("span",{className:"CharName",children:e.name.full})]})},e.id)}))})})})}),Object(M.jsxs)(m.a,{children:[Object(M.jsx)(f.a,{children:Object(M.jsx)(v.a,{variant:"outline-secondary mt-2",onClick:function(){return s>1?o(s-1):null},children:Object(M.jsx)(O.a,{})})}),Object(M.jsx)(f.a,{children:Object(M.jsx)(v.a,{variant:"outline-secondary mt-2",onClick:function(){return s<p?o(s+1):null},children:Object(M.jsx)(O.b,{})})})]})]})}function L(e){var t=e.url,n=e.name,a=e.index,c=e.id,r=Object(D.a)((function(){return{type:"image",item:{id:c,name:n,url:t},collect:function(e){return{isDragging:e.isDragging()}}}})),i=Object(b.a)(r,2),s=(i[0].isDragging,i[1]);return Object(M.jsx)("div",{ref:s,children:Object(M.jsx)("img",{className:"CharImg",src:t,alt:n,index:a},c)})}function z(e){var t=s.a.useState("Madoka Magica"),n=Object(b.a)(t,2),a=n[0],c=n[1];return Object(M.jsx)(h.a,{className:"searchBarContainer pt-2",children:Object(M.jsx)(F.a,{onSubmit:function(t){t.preventDefault(),e.submitFunction(a)},children:Object(M.jsxs)(R.a,{className:"mb-3",children:[Object(M.jsxs)(w.a,{title:e.queryType,variant:"outline-secondary",id:"input-group-dropdown-1",onSelect:function(t){return e.setQueryType(t)},children:[Object(M.jsx)(A.a.Item,{eventKey:"Anime",children:"Anime"}),Object(M.jsx)(A.a.Item,{eventKey:"Character",children:"Character"})]}),Object(M.jsx)(q.a,{value:a,onChange:function(e){c(e.target.value)}})]})})})}var Q=n(302),W=n(149);n(277),n(278);function J(e){var t=Object(i.useState)([]),n=Object(b.a)(t,2),a=n[0],c=n[1],r=Object(i.useState)(!1),s=Object(b.a)(r,2);s[0],s[1];function o(t,n,r){if(t.barIndex==e.barIndex){var i=o.index;console.log("from: "+i+" to: "+n);var s=Object(d.a)(a),o=s[i];s.splice(i,1),s.splice(n,0,o),c((function(e){return[s]}))}}var l=Object(i.useCallback)((function(e){console.log("Removing Image at Index "+e+" "+a[e].name),c((function(t){return[].concat(Object(d.a)(t.slice(0,e)),Object(d.a)(t.slice(e+1)))}))}),[a]),u=Object(Q.a)((function(){return{accept:"image",drop:function(e,t){return function(e,t,n,a){if(e&&t&&n){var r={id:n,name:t,url:e};console.log("url: "+e+" id: "+n+" name: "+t),c((function(e){return[].concat(Object(d.a)(e),[r])}))}}(e.url,e.name,e.id,e.barIndex)},collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop()}}}})),j=Object(b.a)(u,2),O=j[0],x=O.canDrop,g=O.isOver,h=j[1],m="black";return x&&g?m="#3fe74b":x&&(m="#3f92e7"),Object(M.jsx)("div",{ref:h,style:{backgroundColor:m},children:Object(M.jsxs)("div",{className:"RankingBar",children:[Object(M.jsx)("div",{className:"RankBoxCol",children:Object(M.jsx)(K,{color:e.color,index:e.index,handleChange:e.handleBoxChange,text:e.text})}),Object(M.jsx)("div",{className:"RankingImagesWrapper",children:a.map((function(e,t){return Object(M.jsx)("div",{className:"RankingImgWrapper",children:Object(M.jsx)(G,{url:e.url,name:e.name,barIndex:t,index:t,dropItem:o,handleRemove:l,id:e.id})},t)}))})]})})}function K(e){var t=Object(i.useState)(e.color),n=Object(b.a)(t,2),a=n[0],c=n[1],r=Object(i.useState)(e.text),s=Object(b.a)(r,2),o=s[0],l=s[1],u=Object(i.useState)(30),j=Object(b.a)(u,2),d=j[0],O=j[1];var x=Object(i.useState)(!1),g=Object(b.a)(x,2),h=g[0],m=g[1],f=Object(i.useRef)(null);return function(e,t){Object(i.useEffect)((function(){function n(n){e.current&&!e.current.contains(n.target)&&t(!1)}return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[e])}(f,m),h?Object(M.jsxs)("div",{ref:f,className:"RankBox",style:{backgroundColor:a,fontSize:d+"px"},onClick:function(){return m(!1)},children:[o,Object(M.jsxs)("div",{className:"BoxCustomizer",onClick:function(e){return e.stopPropagation()},children:[Object(M.jsxs)(R.a,{children:[Object(M.jsx)(q.a,{value:o,className:"boxTextInput",onChange:function(e){l(e.target.value)}}),Object(M.jsx)(q.a,{value:d,type:"number",className:"boxFontInput",onChange:function(e){O(e.target.value)}}),Object(M.jsx)(R.a.Text,{id:"inputGroup-sizing-sm",children:"px"})]}),Object(M.jsx)(W.a,{color:a,onChange:function(e,t){c(e.hex)},presetColors:["#ED254E","#FE9000","#FFDD4A","#59CD90","#4C5760"]})]})]}):Object(M.jsx)("div",{className:"RankBox",style:{backgroundColor:a,fontSize:d+"px"},onClick:function(){return m(!0)},children:o})}function G(e){var t=e.url,n=e.name,a=e.index,c=e.id,r=e.barIndex,s=Object(i.useState)({display:"none"}),o=Object(b.a)(s,2),l=o[0],u=o[1],j=Object(D.a)((function(){return{type:"image",item:{id:c,name:n,url:t,index:a,barIndex:r},end:function(t,n){e.handleRemove(a)},collect:function(e){return{isDragging:e.isDragging()}}}}),[e]),d=Object(b.a)(j,2),O=(d[0].isDragging,d[1]);return Object(M.jsxs)("div",{ref:O,onMouseEnter:function(e){u({display:"block"})},onMouseLeave:function(e){u({display:"none"})},className:"RankingImgWrapper",children:[Object(M.jsx)("img",{src:t,className:"RankingImg",alt:n,index:a},c),Object(M.jsx)("button",{style:l,className:"DltButton",onClick:function(){return e.handleRemove(a)},children:"X"})]})}n(280);var X=n(148),H=n.n(X),U=(n(281),function(){var e=Object(i.useRef)(null),t=(Object(i.useRef)(null),Object(i.useState)(!1)),n=Object(b.a)(t,2),a=n[0],c=n[1],r=Object(i.useState)([{color:"#ED254E",text:"S"},{color:"#FE9000",text:"A"},{color:"#FFDD4A",text:"B"},{color:"#59CD90",text:"C"},{color:"#4C5760",text:"D"}]),s=Object(b.a)(r,2),o=s[0],l=s[1];function u(e,t,n){var a=Object(d.a)(o);a[e]={color:t,text:n},l((function(e){return Object(d.a)(a)}))}return Object(M.jsxs)(C.a,{backend:"ontouchstart"in window?g.a:y.a,children:[Object(M.jsx)("div",{className:"ScreenshotOverlay",id:"Overlay",style:{display:a?"flex":"none"},onClick:function(){return c(!1)}}),Object(M.jsx)(h.a,{fluid:!0,children:Object(M.jsxs)(m.a,{children:[Object(M.jsx)(f.a,{md:"auto",className:"QueryColumn",children:Object(M.jsx)(T,{})}),Object(M.jsxs)(f.a,{className:"ChartContainer",children:[Object(M.jsx)("div",{className:"ChartContainerBarsWrapper",children:Object(M.jsx)("div",{ref:e,id:"ScreenshotElement",children:o.map((function(e,t){return Object(M.jsx)(m.a,{children:Object(M.jsx)(f.a,{children:Object(M.jsx)(J,{color:e.color,text:e.text,index:t,handleBoxChange:u})})},t)}))})}),Object(M.jsx)(m.a,{className:"justify-content-md-end",children:Object(M.jsx)(f.a,{md:"auto",children:Object(M.jsxs)(p.a,{className:"mr-4 pt-4",children:[Object(M.jsx)(v.a,{variant:"outline-secondary",onClick:function(){return function(){var e;switch(o.length){case 0:e={color:"#ED254E",text:"S"};break;case 1:e={color:"#FE9000",text:"A"};break;case 2:e={color:"#FFDD4A",text:"B"};break;case 3:e={color:"#59CD90",text:"C"};break;case 4:e={color:"#4C5760",text:"D"};break;default:e={color:"#4C5760",text:o.length<26?String.fromCharCode(64+o.length):"?"}}l((function(t){return[].concat(Object(d.a)(t),[e])}))}()},children:Object(M.jsx)(x.b,{})}),Object(M.jsx)(v.a,{variant:"outline-secondary",onClick:function(){return function(){var e=Object(d.a)(o);e.pop(),l((function(t){return Object(d.a)(e)}))}()},children:Object(M.jsx)(O.c,{})}),Object(M.jsx)(v.a,{onClick:function(){H()(e.current,{allowTaint:!0}).then((function(e){var t;null===(t=document.getElementById("html2canvas"))||void 0===t||t.remove(),e.id="html2canvas",e.className="ScreenshotCanvas",document.getElementById("Overlay").appendChild(e),c(!0)}))},variant:"outline-secondary",children:Object(M.jsx)(x.a,{})})]})})})]})]})})]})});var V=function(){return Object(M.jsx)("div",{className:"App",children:Object(M.jsx)(U,{})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,306)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},Z=(n(282),new u.a);l.a.render(Object(M.jsx)(s.a.StrictMode,{children:Object(M.jsx)(j.a,{client:Z,children:Object(M.jsx)(V,{})})}),document.getElementById("root")),Y()}},[[284,1,2]]]);
//# sourceMappingURL=main.e824fd96.chunk.js.map