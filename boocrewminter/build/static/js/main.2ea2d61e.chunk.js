(this.webpackJsonpfrontend_base_dapp=this.webpackJsonpfrontend_base_dapp||[]).push([[0],{218:function(t){t.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_user","type":"address[]"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setMaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"},{"internalType":"uint256","name":"_newWalletLimit","type":"uint256"}],"name":"setMaxMintAmountAndWalletLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newWalletLimit","type":"uint256"}],"name":"setWalletLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"walletLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"whiteListMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_user","type":"address[]"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]')},244:function(t,e){},267:function(t,e){},269:function(t,e){},346:function(t,e){},348:function(t,e){},381:function(t,e){},386:function(t,e){},388:function(t,e){},395:function(t,e){},408:function(t,e){},431:function(t,e){},440:function(t,e){},442:function(t,e){},512:function(t,e,n){},513:function(t,e,n){},514:function(t,e,n){"use strict";n.r(e);var a,i,r,o,s,p,u,l,c,d,y,b,m,f=n(1),h=n(84),x=n.n(h),g=n(55),j=n(118),w=n(16),T=n(57),O=n(18),v=n.n(O),C=n(68),M=n(67),S=n.n(M),k=n(217),A=n.n(k),_=n(218),E=n(69),F=n(219),I=n(15),N={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(I.a)(Object(I.a)({},N),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(I.a)(Object(I.a)({},t),{},{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3});case"CONNECTION_FAILED":return Object(I.a)(Object(I.a)({},N),{},{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(I.a)(Object(I.a)({},t),{},{account:e.payload.account});default:return t}},z={loading:!1,name:"",totalSupply:0,cost:0,error:!1,errorMsg:""},D=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(I.a)(Object(I.a)({},t),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(I.a)(Object(I.a)({},t),{},{loading:!1,name:e.payload.name,totalSupply:e.payload.totalSupply,cost:e.payload.cost,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(I.a)(Object(I.a)({},z),{},{loading:!1,error:!0,errorMsg:e.payload});default:return t}},U=Object(E.b)({blockchain:B,data:D}),R=[F.a],L=Object(E.c)(E.a.apply(void 0,R)),W=Object(E.d)(U,L),H=function(t){return{type:"CHECK_DATA_FAILED",payload:t}},K=function(t){return function(){var t=Object(C.a)(v.a.mark((function t(e){var n,a,i;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),t.prev=1,t.next=4,W.getState().blockchain.smartContract.methods.name().call();case 4:return n=t.sent,t.next=7,W.getState().blockchain.smartContract.methods.totalSupply().call();case 7:return a=t.sent,t.next=10,W.getState().blockchain.smartContract.methods.cost().call();case 10:i=t.sent,e({type:"CHECK_DATA_SUCCESS",payload:{name:n,totalSupply:a,cost:i}}),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(1),console.log(t.t0),e(H("Could not load data from contract."));case 18:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e){return t.apply(this,arguments)}}()},P=function(t){return{type:"CONNECTION_FAILED",payload:t}},Q=function(t){return function(){var e=Object(C.a)(v.a.mark((function e(n){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:t}}),n(K());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},q=n(17),J=q.a.div(a||(a=Object(w.a)(["\n  background-color: var(--dark-grey);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(t){var e=t.image;return e?"url(".concat(e,")"):"none"})),Y=(q.a.div(i||(i=Object(w.a)(["\n  height: 8px;\n  width: 8px;\n"]))),q.a.div(r||(r=Object(w.a)(["\n  height: 16px;\n  width: 16px;\n"])))),G=q.a.div(o||(o=Object(w.a)(["\n  height: 24px;\n  width: 24px;\n"]))),V=q.a.div(s||(s=Object(w.a)(["\n  height: 32px;\n  width: 32px;\n"]))),X=q.a.div(p||(p=Object(w.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(t){var e=t.flex;return e||0}),(function(t){var e=t.fd;return e||"column"}),(function(t){var e=t.jc;return e||"flex-start"}),(function(t){var e=t.ai;return e||"flex-start"}),(function(t){return t.test?"pink":"none"}),(function(t){var e=t.image;return e?"url(".concat(e,")"):"none"})),Z=q.a.p(u||(u=Object(w.a)(["\n  color: var(--white);\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),$=(q.a.p(l||(l=Object(w.a)(["\n  color: var(--white);\n  font-size: 14px;\n  line-height: 1.6;\n"]))),q.a.p(c||(c=Object(w.a)(["\n  color: var(--white);\n  font-size: 12px;\n  line-height: 1.6;\n"])))),tt=(q.a.div(d||(d=Object(w.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n.p+"static/media/hidden.c34f19c6.gif"),et=n.p+"static/media/logo.dabf7636.png",nt=n(7),at=q.a.button(y||(y=Object(w.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: #ffffff;\n  padding: 10px;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-weight: bold;\n  font-size: 40px;\n  color: #000000;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),it=q.a.div(b||(b=Object(w.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),rt=q.a.img(m||(m=Object(w.a)(["\n  width: 200px;\n  height: 200px;\n  @media (min-width: 767px) {\n    width: 350px;\n    height: 350px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"])));var ot=function(){var t,e=Object(T.b)(),n=Object(T.c)((function(t){return t.blockchain})),a=Object(T.c)((function(t){return t.data})),i=Object(f.useState)(""),r=Object(j.a)(i,2),o=r[0],s=r[1],p=Object(f.useState)(!1),u=Object(j.a)(p,2),l=u[0],c=u[1],d=function(){""!==n.account&&null!==n.smartContract&&e(K(n.account))};return Object(f.useEffect)((function(){d()}),[n.account]),Object(nt.jsx)(J,{style:{backgroundColor:"var(--black)",fontSize:40},children:Object(nt.jsxs)(X,{flex:1,ai:"center",style:{padding:24,backgroundColor:"#FFA537"},children:[Object(nt.jsx)(Z,{style:(t={display:"flex",flexDirection:"row",textAlign:"left",fontSize:12,fontWeight:"bold",paddingRight:10,margin:0,borderStyle:"solid",borderColor:"black",borderWidth:0,borderRadius:50},Object(g.a)(t,"textAlign","center"),Object(g.a)(t,"justifySelf","center"),Object(g.a)(t,"justifyContent","center"),t),children:Object(nt.jsx)("a",{href:"https://boocrew.io",children:Object(nt.jsx)(rt,{alt:"BooCrew Logo",src:et,style:{width:70,height:70,textAlign:"center"}})})}),Object(nt.jsx)(G,{}),Object(nt.jsx)(it,{flex:1,style:{padding:24,paddingTop:0},children:Object(nt.jsxs)(X,{flex:1,jc:"center",ai:"center",style:{paddingTop:0,flexDirection:"column"},children:[Object(nt.jsx)(Z,{style:{textAlign:"center",fontSize:40,fontWeight:"bold",borderStyle:"solid",borderColor:"black"},children:"0.035 ETH + Gas"}),Object(nt.jsx)(rt,{alt:"BooCrew Hidden",src:tt,style:{paddingTop:0,borderStyle:"solid",borderColor:"black",borderWidth:5,borderRadius:0}}),Object(nt.jsxs)(Z,{style:{textAlign:"center",fontSize:80,fontWeight:"bold",borderStyle:"solid",borderColor:"black",borderWidth:0,paddingLeft:100,paddingRight:100,borderRadius:0,marginTop:0,marginBottom:0},children:[null==n.account?"????":a.totalSupply,"/5555"]}),Object(nt.jsx)(X,{flex:1,jc:"center",ai:"center",style:{backgroundColor:"#FFA537",padding:24,paddingTop:0,borderStyle:"solid",borderColor:"black",borderWidth:0,borderRadius:30,fontSize:40},children:5555==Number(a.totalSupply)?Object(nt.jsxs)(nt.Fragment,{children:[Object(nt.jsx)(Z,{style:{textAlign:"center",fontSize:60},children:"The sale has ended."}),Object(nt.jsx)(Y,{}),Object(nt.jsxs)($,{style:{textAlign:"center",fontSize:60},children:["Dont worry, you're not missing out! You can still get Boo Crew NFTs on"," ",Object(nt.jsx)("a",{style:{color:"white",textDecoration:"none"},href:"https://testnets.opensea.io/collection/rinkeby-doodlenauts",children:"Opensea.io"})]})]}):Object(nt.jsxs)(nt.Fragment,{children:[Object(nt.jsx)($,{style:{textAlign:"center",fontSize:40},children:o}),""===n.account||null===n.smartContract?Object(nt.jsxs)(X,{ai:"center",jc:"center",children:[Object(nt.jsx)($,{style:{textAlign:"center",fontSize:80,marginBottom:0},children:"Connect to the Boo Crew NFT Minter!"}),Object(nt.jsx)(Y,{}),Object(nt.jsx)(at,{style:{fontFamily:"coder"},onClick:function(t){t.preventDefault(),e(function(){var t=Object(C.a)(v.a.mark((function t(e){var n,a,i,r,o;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e({type:"CONNECTION_REQUEST"}),n=window,!(a=n.ethereum)||!a.isMetaMask){t.next=21;break}return S.a.setProvider(a),i=new A.a(a),t.prev=6,t.next=9,a.request({method:"eth_requestAccounts"});case 9:return r=t.sent,t.next=12,a.request({method:"net_version"});case 12:4==t.sent?(o=new S.a(_,"0x8815e06FC5b57Bd4d5590977a697582f19d2330e"),e({type:"CONNECTION_SUCCESS",payload:{account:r[0],smartContract:o,web3:i}}),a.on("accountsChanged",(function(t){e(Q(t[0]))})),a.on("chainChanged",(function(){window.location.reload()}))):e(P("Change network to Ethereum.")),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(6),e(P("Something went wrong."));case 19:t.next=22;break;case 21:e(P("Please install Metamask."));case 22:case"end":return t.stop()}}),t,null,[[6,16]])})));return function(e){return t.apply(this,arguments)}}()),d()},children:"CONNECT"}),Object(nt.jsx)(V,{}),""!==n.errorMsg?Object(nt.jsxs)(nt.Fragment,{children:[Object(nt.jsx)(Y,{}),Object(nt.jsx)($,{style:{textAlign:"center",fontSize:50},children:n.errorMsg})]}):null]}):Object(nt.jsxs)(X,{ai:"center",jc:"center",fd:"row",style:{marginTop:0,paddingTop:0},children:[Object(nt.jsxs)("form",{children:["I want ",Object(nt.jsx)("input",{id:"inputBox",placeholder:"#",type:"number",min:"1",max:"100",style:{fontSize:60,textAlign:"center",backgroundColor:"#FFA537",borderWidth:4,borderColor:"black",borderStyle:"solid",borderRadius:40,paddingRight:10,width:80,fontFamily:"coder"}})," Ghosts"]}),Object(nt.jsx)(Y,{}),Object(nt.jsx)(at,{style:{fontFamily:"coder"},disabled:l?1:0,onClick:function(t){var a;t.preventDefault(),a=1,(a=document.getElementById("inputBox").value)<=0||(s("Minting your Official BooCrew NFT..."),c(!0),n.smartContract.methods.mint(n.account,a).send({gasLimit:285e3*a,to:"0x8815e06FC5b57Bd4d5590977a697582f19d2330e",from:n.account,value:n.web3.utils.toWei((.035*a).toString(),"ether")}).once("error",(function(t){console.log(t),s("Sorry, something went wrong. Check your transaction on Etherscan to find out what happened!"),c(!1)})).then((function(t){s("Your BooCrew NFT has been successfully minted!"),c(!1),e(K(n.account))}))),d()},children:l?"BUSY":"MINT"})]})]})})]})}),Object(nt.jsx)(Y,{}),Object(nt.jsxs)(X,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(nt.jsx)($,{style:{textAlign:"center",fontSize:40},children:Object(nt.jsx)("a",{href:"https://rinkeby.etherscan.io/address/0x8815e06FC5b57Bd4d5590977a697582f19d2330e",style:{textDecoration:"none",color:"#AE3995",fontSize:30},children:"Boo Crew NFT Smart Contract"})}),Object(nt.jsx)(Y,{})]})]})})},st=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,518)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),i(t),r(t),o(t)}))};n(512),n(513);x.a.render(Object(nt.jsx)(T.a,{store:W,children:Object(nt.jsx)(ot,{})}),document.getElementById("root")),st()}},[[514,1,2]]]);
//# sourceMappingURL=main.2ea2d61e.chunk.js.map