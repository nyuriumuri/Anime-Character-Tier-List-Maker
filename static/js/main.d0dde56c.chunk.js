(this["webpackJsonplearning-anilist-api"]=this["webpackJsonplearning-anilist-api"]||[]).push([[0],{159:function(e,t,n){},160:function(e,t,n){},166:function(e,t,n){},277:function(e,t,n){},281:function(e,t,n){},284:function(e,t,n){"use strict";n.r(t);var a,c,r,i=n(1),s=n.n(i),o=n(64),l=n.n(o),j=n(303),u=n(138),b=(n(159),n.p,n(160),n(19)),d=n(14),O=n(49),x=n(105),g=n(152),h=n(135),m=n(151),f=n(293),p=n(294),v=n(137),C=n(299),y=n(139),k=n(298),I=n(101),S=n(10),N=n.n(S),D=n(136),E=n(79),F=n(301),P=n(305),B=n(52),A=(n(166),n(304)),R=n(300),q=n(296),M=n(297),T=n(150),w=n(141),$=n(2);function L(e){var t=s.a.useState("Madoka Magica"),n=Object(d.a)(t,2),a=n[0],c=n[1],r=s.a.useState("Anime"),i=Object(d.a)(r,2),o=i[0],l=i[1];return Object($.jsxs)(f.a,{className:"QueryContainer",children:[Object($.jsx)(p.a,{children:Object($.jsx)(v.a,{children:Object($.jsx)(z,{queryType:o,submitFunction:c,setQueryType:l})})}),Object($.jsx)(p.a,{children:Object($.jsx)(v.a,{children:Object($.jsx)(Q,{queryType:o,searchString:a,handleImageClick:e.handleImageClick})})})]})}function Q(e){var t=Object(i.useState)(1),n=Object(d.a)(t,2),s=n[0],o=n[1];Object(i.useEffect)((function(){o(1)}),[e]);var l=function(e,t,n){console.log(t);var i={search:e,perPage:25,page:n},s=Object(B.gql)(a||(a=Object(E.a)([""])));return s="Anime"==t?Object(B.gql)(c||(c=Object(E.a)(["\n\t  query AnimeCharacters($search: String $page: Int){\n   Media(search:$search, type: ANIME){\n     characters(sort: ROLE, page: $page, perPage: 25) {\n\t   pageInfo{\n\t\t   total\n\t\t   lastPage\n\t   },\n       nodes {\n         id,\n         name {\n             full\n         },\n         image {\n           large\n         },\n       }\n     }\n   }\n }\n\t  "]))):Object(B.gql)(r||(r=Object(E.a)(["\n  \t  query Characters($search: String, $perPage: Int, $page: Int){\n  \t  Page(page: $page, perPage: $perPage){\n  \t    pageInfo{\n  \t      total\n  \t      currentPage\n\t\t  lastPage\n  \t    }\n  \t    characters(search:$search){\n  \t\t  id\n  \t      name {\n  \t        last\n  \t        first\n  \t\t\tfull\n  \t      }\n  \t      image {\n  \t        large\n  \t      }\n  \t    }\n  \t  }\n  \t}\n  \t  "]))),Object(P.a)(["characters",i,t],Object(D.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.request)("https://graphql.anilist.co",s,i);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))))}(e.searchString,e.queryType,s),j=l.status,u=l.data,x=l.error,g=(l.isFetching,l.isSuccess,[]),h=1;return u&&("Anime"==e.queryType?u.Media&&(g=Object(b.a)(u.Media.characters.nodes),h=u.Media.characters.pageInfo.lastPage,console.log("Pages: "+h)):u.Page&&(g=Object(b.a)(u.Page.characters),h=u.Page.pageInfo.lastPage,console.log("Pages: "+h))),Object($.jsxs)(f.a,{children:[Object($.jsx)(p.a,{xs:"auto",xl:"auto",className:"CharacterBar",children:Object($.jsx)(v.a,{fluid:!0,children:"loading"===j?"Loading...":"error"===j?Object($.jsxs)("span",{children:["Error: ",x.message]}):Object($.jsx)($.Fragment,{children:Object($.jsx)(p.a,{className:"CharacterBarRow",children:g.map((function(e,t){return Object($.jsx)(v.a,{xl:"auto",xs:"auto",children:Object($.jsxs)(A.a,{bg:"black",className:"CharCard",children:[Object($.jsx)(W,{url:e.image.large,name:e.name.full,id:e.id,index:t}),Object($.jsx)("span",{className:"CharName",children:e.name.full})]})},e.id)}))})})})}),Object($.jsxs)(p.a,{children:[Object($.jsx)(v.a,{children:Object($.jsx)(y.a,{variant:"outline-secondary mt-2",onClick:function(){return s>1?o(s-1):null},children:Object($.jsx)(O.a,{})})}),Object($.jsx)(v.a,{children:Object($.jsx)(y.a,{variant:"outline-secondary mt-2",onClick:function(){return s<h?o(s+1):null},children:Object($.jsx)(O.b,{})})})]})]})}function W(e){var t=e.url,n=e.name,a=e.index,c=e.id,r=Object(F.a)((function(){return{type:"image",item:{id:c,name:n,url:t},collect:function(e){return{isDragging:e.isDragging()}}}})),i=Object(d.a)(r,2),s=(i[0].isDragging,i[1]);return Object($.jsx)("div",{ref:s,children:Object($.jsx)("img",{className:"CharImg",src:t,alt:n,index:a},c)})}function z(e){var t=s.a.useState("Madoka Magica"),n=Object(d.a)(t,2),a=n[0],c=n[1];return Object($.jsx)(f.a,{className:"searchBarContainer pt-2",children:Object($.jsx)(R.a,{onSubmit:function(t){t.preventDefault(),e.submitFunction(a)},children:Object($.jsxs)(q.a,{className:"mb-3",children:[Object($.jsxs)(M.a,{title:e.queryType,variant:"outline-secondary",id:"input-group-dropdown-1",onSelect:function(t){return e.setQueryType(t)},children:[Object($.jsx)(T.a.Item,{eventKey:"Anime",children:"Anime"}),Object($.jsx)(T.a.Item,{eventKey:"Character",children:"Character"})]}),Object($.jsx)(w.a,{value:a,onChange:function(e){c(e.target.value)}})]})})})}var J=n(302),K=n(149);n(277),n(278);function G(e){var t=Object(i.useState)([]),n=Object(d.a)(t,2),a=n[0],c=n[1],r=Object(i.useState)(!1),s=Object(d.a)(r,2);s[0],s[1];function o(t,n,r){if(t.barIndex==e.barIndex){var i=o.index;console.log("from: "+i+" to: "+n);var s=Object(b.a)(a),o=s[i];s.splice(i,1),s.splice(n,0,o),c((function(e){return[s]}))}}var l=Object(i.useCallback)((function(e){console.log("Removing Image at Index "+e+" "+a[e].name),c((function(t){return[].concat(Object(b.a)(t.slice(0,e)),Object(b.a)(t.slice(e+1)))}))}),[a]),j=Object(J.a)((function(){return{accept:"image",drop:function(e,t){return function(e,t,n,a){if(e&&t&&n){var r={id:n,name:t,url:e};console.log("url: "+e+" id: "+n+" name: "+t),c((function(e){return[].concat(Object(b.a)(e),[r])}))}}(e.url,e.name,e.id,e.barIndex)},collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop()}}}})),u=Object(d.a)(j,2),O=u[0],x=O.canDrop,g=O.isOver,h=u[1],m="black";return x&&g?m="#3fe74b":x&&(m="#3f92e7"),Object($.jsx)("div",{ref:h,style:{backgroundColor:m},children:Object($.jsxs)("div",{className:"RankingBar",children:[Object($.jsx)("div",{className:"RankBoxCol",children:Object($.jsx)(X,{color:e.color,index:e.index,handleChange:e.handleBoxChange,text:e.text})}),Object($.jsx)("div",{className:"RankingImagesWrapper",children:a.map((function(e,t){return Object($.jsx)("div",{className:"RankingImgWrapper",children:Object($.jsx)(H,{url:e.url,name:e.name,barIndex:t,index:t,dropItem:o,handleRemove:l,id:e.id})},t)}))})]})})}function X(e){var t=Object(i.useState)(e.color),n=Object(d.a)(t,2),a=n[0],c=n[1],r=Object(i.useState)(e.text),s=Object(d.a)(r,2),o=s[0],l=s[1],j=Object(i.useState)(30),u=Object(d.a)(j,2),b=u[0],O=u[1];var x=Object(i.useState)(!1),g=Object(d.a)(x,2),h=g[0],m=g[1];return h?Object($.jsxs)("div",{children:[Object($.jsx)("div",{className:"RankBox",style:{backgroundColor:a,fontSize:b+"px"},onClick:function(){return m(!1)},children:o}),Object($.jsxs)("div",{children:[Object($.jsxs)(q.a,{children:[Object($.jsx)(w.a,{value:o,className:"boxTextInput",onChange:function(e){l(e.target.value)}}),Object($.jsx)(w.a,{value:b,type:"number",className:"boxFontInput",onChange:function(e){O(e.target.value)}}),Object($.jsx)(q.a.Text,{id:"inputGroup-sizing-sm",children:"px"})]}),Object($.jsx)(K.a,{color:a,onChange:function(e,t){c(e.hex)},presetColors:["#ED254E","#FE9000","#FFDD4A","#59CD90","#4C5760"]})]})]}):Object($.jsx)("div",{className:"RankBox",style:{backgroundColor:a,fontSize:b+"px"},onClick:function(){return m(!0)},children:o})}function H(e){var t=e.url,n=e.name,a=e.index,c=e.id,r=e.barIndex,s=Object(i.useState)({display:"none"}),o=Object(d.a)(s,2),l=o[0],j=o[1],u=Object(F.a)((function(){return{type:"image",item:{id:c,name:n,url:t,index:a,barIndex:r},end:function(t,n){e.handleRemove(a)},collect:function(e){return{isDragging:e.isDragging()}}}}),[e]),b=Object(d.a)(u,2),O=(b[0].isDragging,b[1]);return Object($.jsxs)("div",{ref:O,onMouseEnter:function(e){j({display:"block"})},onMouseLeave:function(e){j({display:"none"})},className:"RankingImgWrapper",children:[Object($.jsx)("img",{src:t,className:"RankingImg",alt:n,index:a},c),Object($.jsx)("button",{style:l,className:"DltButton",onClick:function(){return e.handleRemove(a)},children:"X"})]})}n(280),n(281);var U=function(){var e=Object(i.useState)([{color:"#ED254E",text:"S"},{color:"#FE9000",text:"A"},{color:"#FFDD4A",text:"B"},{color:"#59CD90",text:"C"},{color:"#4C5760",text:"D"}]),t=Object(d.a)(e,2),n=t[0],a=t[1];function c(e,t,c){var r=Object(b.a)(n);r[e]={color:t,text:c},a((function(e){return Object(b.a)(r)}))}return Object($.jsx)(k.a,{backend:"ontouchstart"in window?g.a:I.a,children:Object($.jsx)(f.a,{fluid:!0,children:Object($.jsxs)(p.a,{children:[Object($.jsx)(v.a,{md:"auto",className:"QueryColumn",children:Object($.jsx)(L,{})}),Object($.jsxs)(v.a,{className:"ChartContainer",children:[Object($.jsx)("div",{className:"ChartContainerBarsWrapper",children:Object($.jsx)("div",{id:"ScreenshotElement",children:n.map((function(e,t){return Object($.jsx)(p.a,{children:Object($.jsx)(v.a,{children:Object($.jsx)(G,{color:e.color,text:e.text,index:t,handleBoxChange:c})})},t)}))})}),Object($.jsx)(p.a,{className:"justify-content-md-end",children:Object($.jsx)(v.a,{md:"auto",children:Object($.jsxs)(C.a,{className:"mr-4 pt-4",children:[Object($.jsx)(y.a,{variant:"outline-secondary",onClick:function(){return function(){var e;switch(n.length){case 0:e={color:"#ED254E",text:"S"};break;case 1:e={color:"#FE9000",text:"A"};break;case 2:e={color:"#FFDD4A",text:"B"};break;case 3:e={color:"#59CD90",text:"C"};break;case 4:e={color:"#4C5760",text:"D"};break;default:e={color:"#4C5760",text:n.length<26?String.fromCharCode(64+n.length):"?"}}a((function(t){return[].concat(Object(b.a)(t),[e])}))}()},children:Object($.jsx)(x.b,{})}),Object($.jsx)(y.a,{variant:"outline-secondary",onClick:function(){return function(){var e=Object(b.a)(n);e.pop(),a((function(t){return Object(b.a)(e)}))}()},children:Object($.jsx)(O.c,{})}),Object($.jsx)(y.a,{onClick:function(){return Object(m.a)(document.getElementById("ScreenshotElement")).then((function(e){Object(h.saveAs)(e,"chart.png")}))},variant:"outline-secondary",children:Object($.jsx)(x.a,{})})]})})})]})]})})})};var V=function(){return Object($.jsx)("div",{className:"App",children:Object($.jsx)(U,{})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,306)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},Z=(n(282),new j.a);l.a.render(Object($.jsx)(s.a.StrictMode,{children:Object($.jsx)(u.a,{client:Z,children:Object($.jsx)(V,{})})}),document.getElementById("root")),Y()}},[[284,1,2]]]);
//# sourceMappingURL=main.d0dde56c.chunk.js.map