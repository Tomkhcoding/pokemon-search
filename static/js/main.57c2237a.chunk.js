(this["webpackJsonppokemon-search"]=this["webpackJsonppokemon-search"]||[]).push([[0],{10:function(e,t,o){e.exports={label:"content_label__1SG18",input:"content_input__B2x_E",button:"content_button__2CZbU",responseMessage:"content_responseMessage__1MhNY"}},27:function(e,t,o){},36:function(e,t,o){"use strict";o.r(t);var s=o(0),n=o(17),r=o.n(n),a=o(14),c=o.n(a),l=o(18),i=o(8),p=[{type:"normal",colour:"#A8A77AFF"},{type:"fire",colour:"#EE8130FF"},{type:"water",colour:"#6390F0FF"},{type:"electric",colour:"#F7D02CFF"},{type:"grass",colour:"#7AC74CFF"},{type:"ice",colour:"#96D9D6FF"},{type:"fighting",colour:"#C22E28FF"},{type:"poison",colour:"#A33EA1FF"},{type:"ground",colour:"#E2BF65FF"},{type:"flying",colour:"#A98FF3FF"},{type:"psychic",colour:"#F95587FF"},{type:"bug",colour:"#A6B91AFF"},{type:"rock",colour:"#B6A136FF"},{type:"ghost",colour:"#735797FF"},{type:"dragon",colour:"#6F35FCFF"},{type:"dark",colour:"#705746FF"},{type:"steel",colour:"#B7B7CEFF"},{type:"fairy",colour:"#D685ADFF"}],u=o(7),j=o.n(u),d=o(1);var b=function(e){return e.pokeInfo?Object(d.jsxs)("div",{className:j.a.pokeCard,style:1===e.cardColour.length?{backgroundColor:" ".concat(e.cardColour[0])}:2===e.cardColour.length?{background:"linear-gradient(135deg, ".concat(e.cardColour[0]," 20%, ").concat(e.cardColour[1]," 80%)")}:{backgroundColor:"silver"},children:[Object(d.jsx)("h2",{className:j.a.pokeCardTitle,children:e.pokeInfo.name}),Object(d.jsx)("h2",{className:j.a.dexEntry,children:e.pokeEntry}),Object(d.jsx)("div",{className:j.a.pokeSprites,children:""!==e.pokeInfo.name&&void 0!==e.pokeInfo.name&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{style:{gridArea:"sprite1"},src:e.pokeInfo.sprites.front_default,alt:""}),Object(d.jsx)("img",{style:{gridArea:"sprite2"},src:e.pokeInfo.sprites.back_default,alt:""}),Object(d.jsx)("img",{style:{gridArea:"sprite3"},src:e.pokeInfo.sprites.front_shiny,alt:""}),Object(d.jsx)("img",{style:{gridArea:"sprite4"},src:e.pokeInfo.sprites.back_shiny,alt:""})]})}),Object(d.jsx)("div",{className:j.a.pokeStats,children:""!==e.pokeInfo.name&&void 0!==e.pokeInfo.name&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:j.a.stat1,children:[Object(d.jsxs)("p",{children:["HP: ",e.pokeInfo.stats[0].base_stat]}),Object(d.jsxs)("p",{children:["Attack: ",e.pokeInfo.stats[1].base_stat]}),Object(d.jsxs)("p",{children:["Defense: ",e.pokeInfo.stats[2].base_stat]})]}),Object(d.jsxs)("div",{className:j.a.stat2,children:[Object(d.jsxs)("p",{children:["S. Attack: ",e.pokeInfo.stats[3].base_stat]}),Object(d.jsxs)("p",{children:["S. Defence: ",e.pokeInfo.stats[4].base_stat]}),Object(d.jsxs)("p",{children:["Speed: ",e.pokeInfo.stats[5].base_stat]})]})]})})]}):Object(d.jsx)("div",{style:{backgroundColor:"silver"}})},h=o(10),f=o.n(h);var k=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),o=t[0],n=t[1],r=Object(s.useState)({name:""}),a=Object(i.a)(r,2),u=a[0],j=a[1],h=Object(s.useState)([]),k=Object(i.a)(h,2),x=k[0],O=k[1],_=Object(s.useState)(),F=Object(i.a)(_,2),g=F[0],y=F[1],m=Object(s.useState)(!1),v=Object(i.a)(m,2),C=v[0],I=v[1],S=Object(s.useState)(),A=Object(i.a)(S,2),E=A[0],N=A[1],w=Object(s.useState)(["white","white"]),D=Object(i.a)(w,2),B=D[0],P=D[1],M=function(){var e=Object(l.a)(c.a.mark((function e(t){var s,n,r,a,l,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(!1),N(!0),j(),O([]),y(),s="https://pokeapi.co/api/v2/pokemon/".concat(o),n="https://pokeapi.co/api/v2/pokemon-species/".concat(o),e.prev=7,e.next=10,fetch(s);case 10:return r=e.sent,e.next=13,fetch(n);case 13:return a=e.sent,r.ok?I(!1):I(!0),e.next=17,r.json();case 17:return l=e.sent,e.next=20,a.json();case 20:i=e.sent,r.ok?N(!1):N(!0),j(l),O(l.types.map((function(e){return e.type.name}))),function(){for(var e=10;e<i.flavor_text_entries.length;e++){if("en"===i.flavor_text_entries[e].language.name)return void y(i.flavor_text_entries[e].flavor_text);y(i.flavor_text_entries[e].flavor_text)}}(),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(7),console.log(e.t0);case 31:case"end":return e.stop()}}),e,null,[[7,28]])})));return function(t){return e.apply(this,arguments)}}(),L=function(e){e.target.select()};return Object(s.useEffect)((function(){!function(){var e=[];if(1===x.length)for(var t=0;t<p.length;t++)x[0]===p[t].type&&e.push(p[t].colour);else if(2===x.length)for(var o=0;o<p.length;o++)x[0]===p[o].type&&e.push(p[o].colour);for(var s=0;s<p.length;s++)x[1]===p[s].type&&e.push(p[s].colour);P(e)}()}),[x]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{className:f.a.label,htmlFor:"query",children:"Pokemon: "}),Object(d.jsx)("input",{className:f.a.input,type:"text",name:"query",placeholder:"Enter Name or ID",ref:function(e){return e&&e.focus()},onFocus:L,onKeyPress:function(e){return function(e){"Enter"!==e.key&&13!==e.keyCode||(M(),L(e))}(e)},onChange:function(e){return"meowstic"===e.target.value.toLowerCase()||10025===e.target.value.toLowerCase()?n(678):n(e.target.value.toLowerCase())}}),Object(d.jsx)("button",{className:f.a.button,onClick:function(){return M()},children:"Search"})]}),Object(d.jsx)("div",{children:E&&!C?Object(d.jsx)("h1",{className:f.a.responseMessage,children:"Loading Pokemon"}):C?Object(d.jsx)("h1",{className:f.a.responseMessage,children:"Failed to load Pokemon"}):Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{style:{color:"Black"},className:f.a.responseMessage,children:"Your Pokemon is:"}),Object(d.jsx)(b,{cardColour:B,pokeInfo:u,pokeEntry:g})]})})]})},x=o(19),O=o(2);o(27);var _=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{children:Object(d.jsx)(x.a,{children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)(O.c,{children:Object(d.jsx)(O.a,{path:"/",component:k})})})})})})};r.a.render(Object(d.jsx)(_,{}),document.getElementById("root"))},7:function(e,t,o){e.exports={pokeCard:"output_pokeCard__1iiX2",dexEntry:"output_dexEntry__13rPW",pokeCardTitle:"output_pokeCardTitle__7V9Kp",pokeSprites:"output_pokeSprites__1hz7x",pokeStats:"output_pokeStats__8fCwy",stat1:"output_stat1__1OUZS",stat2:"output_stat2__3DPsD"}}},[[36,1,2]]]);
//# sourceMappingURL=main.57c2237a.chunk.js.map