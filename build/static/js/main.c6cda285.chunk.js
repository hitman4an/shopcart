(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(t,e,a){t.exports=a(23)},,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(9),c=a.n(r),l=(a(18),a(7)),i=a(10),s=a(6),u=a(1),m=a(2),d=a(4),h=a(3),p=a(5),f=(a(19),function(t){function e(){var t,a;Object(u.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(o)))).state={label:"Smartphone",quantity:1,price:100,summary:100},a.onQuantityChange=function(t){a.setState({quantity:t.target.value,summary:t.target.value*a.state.quantity})},a.onLabelChange=function(t){a.setState({label:t.target.value,price:a.setPrice(t.target.value)})},a.setPrice=function(t){switch(t){case"Smartphone":return 100;case"Laptop":return 250;case"Tablet PC":return 200;default:return 100}},a.onAddItem=function(){a.props.onItemAdded(a.state.label,a.state.quantity,a.state.price,a.state.summary)},a.onUndo=function(){a.props.onUndoAction()},a.onRedo=function(){a.props.onRedoAction()},a}return Object(p.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"form form-row"},o.a.createElement("div",{className:"select form-group col-md-4"},o.a.createElement("select",{className:"form-control",onChange:this.onLabelChange,value:this.state.label},o.a.createElement("option",null,"Smartphone"),o.a.createElement("option",null,"Laptop"),o.a.createElement("option",null,"Tablet PC"))),o.a.createElement("div",{className:"form-group col-md-2 "},o.a.createElement("input",{type:"number",min:"1",max:"100",className:"form-control",onChange:this.onQuantityChange,value:this.state.quantity})),o.a.createElement("div",{className:"form-group col-md-2"},o.a.createElement("button",{className:"btn btn-outline-secondary",onClick:this.onAddItem},"Add product")),o.a.createElement("div",{className:"form-group col-md"},o.a.createElement("button",{className:"span btn btn-outline-primary float-right",onClick:this.onRedo},o.a.createElement("i",{className:"fa fa-mail-forward"})),o.a.createElement("button",{className:"btn btn-outline-primary float-right",onClick:this.onUndo},o.a.createElement("i",{className:"fa fa-mail-reply"}))))}}]),e}(n.Component)),y=a(11),E=(a(20),function(t){function e(){var t,a;Object(u.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(o)))).QuantityChange=function(t){a.props.onProductChange(t.target.value,a.countSum(a.props.price,t.target.value,a.props.discount),"quantity")},a.DiscountChange=function(t){a.props.onProductChange(t.target.value,a.countSum(a.props.price,a.props.quantity,t.target.value),"discount")},a}return Object(p.a)(e,t),Object(m.a)(e,[{key:"countSum",value:function(t,e,a){return e*t-e*t*a}},{key:"render",value:function(){var t=this.props,e=t.name,a=t.onDeleted,n=t.cartDiscount,r=t.price,c=t.quantity,l=t.summary,i=t.discount;return o.a.createElement(o.a.Fragment,null,o.a.createElement("td",null,e),o.a.createElement("td",null,o.a.createElement("input",{className:"form-control",type:"number",min:"1",max:"100",value:c,onChange:this.QuantityChange})),o.a.createElement("td",null,r),o.a.createElement("td",null,o.a.createElement("select",{className:"form-control form-control-select",onChange:this.DiscountChange,value:i,disabled:n},o.a.createElement("option",{value:"0"},"0%"),o.a.createElement("option",{value:"0.1"},"10%"),o.a.createElement("option",{value:"0.25"},"25%"))),o.a.createElement("td",{className:"summary"},l),o.a.createElement("td",{className:"noprint"},o.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:a},o.a.createElement("i",{className:"fa fa-trash-o"}))))}}]),e}(n.Component)),b=(a(21),function(t){var e=t.prods,a=t.cartDiscount,n=t.onDeleted,r=t.onProductChange,c=e.map(function(t){var e=t.id,c=Object(y.a)(t,["id"]);return o.a.createElement("tr",{key:e},o.a.createElement(E,Object.assign({},c,{onDeleted:function(){return n(e)},onProductChange:function(t,a,n){return r(e,n,t,a)},cartDiscount:a})))});return o.a.createElement(o.a.Fragment,null,c)}),g=(a(22),function(t){function e(){var t,a;Object(u.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(o)))).Id=1,a.state={productData:[a.createItem("Smartphone","1",100),a.createItem("Tablet PC","1",200),a.createItem("Laptop","1",250)],totalDiscount:0,cartDiscount:!1,historyIndex:0},a.stateHistory=[a.state],a.addItem=function(t,e,n){var o=a.createItem(t,e,n),r=a.state.historyIndex;r++,a.setState(function(t){var e=t.productData;return{productData:[].concat(Object(s.a)(e),[o]),historyIndex:r}},function(){a.addHistoryItem(r)})},a.onUndoAction=function(){if(0!==a.state.historyIndex){var t=a.state.historyIndex;t--,a.setState(function(){return{productData:a.stateHistory[t].productData,totalDiscount:a.stateHistory[t].totalDiscount,cartDiscount:a.stateHistory[t].cartDiscount,historyIndex:t}})}},a.onRedoAction=function(){if(a.state.historyIndex<a.stateHistory.length-1){var t=a.state.historyIndex;t++,a.setState(function(){return{productData:a.stateHistory[t].productData,totalDiscount:a.stateHistory[t].totalDiscount,cartDiscount:a.stateHistory[t].cartDiscount,historyIndex:t}})}},a.onProductChange=function(t,e,n,o){var r=a.state.historyIndex;r++,a.setState({productData:a.toggleProperty(a.state.productData,t,e,n,o),historyIndex:r},function(){a.addHistoryItem(r)})},a.TotalDiscountChange=function(t){a.setState({totalDiscount:t.target.value,cartDiscount:a.isCartDiscount(t.target.value)},function(){a.state.cartDiscount&&a.state.productData.forEach(function(t){a.onProductChange(t.id,"discount","0",t.price*t.quantity)})})},a.deleteItem=function(t){a.setState(function(e){var n=e.productData,o=n.findIndex(function(e){return e.id===t}),r=a.state.historyIndex;return r++,{productData:[].concat(Object(s.a)(n.slice(0,o)),Object(s.a)(n.slice(o+1))),historyIndex:r}},function(){a.addHistoryItem()})},a}return Object(p.a)(e,t),Object(m.a)(e,[{key:"addHistoryItem",value:function(t){void 0===this.stateHistory[t]?this.stateHistory.push(this.state):this.stateHistory[t]=this.state}},{key:"createItem",value:function(t,e,a){return{name:t,quantity:e,price:a,summary:a*e,discount:"0",id:this.Id++}}},{key:"toggleProperty",value:function(t,e,a,n,o){var r,c=t.findIndex(function(t){return t.id===e}),u=t[c],m=Object(i.a)({},u,(r={},Object(l.a)(r,a,n),Object(l.a)(r,"summary",o),r));return[].concat(Object(s.a)(t.slice(0,c)),[m],Object(s.a)(t.slice(c+1)))}},{key:"getTotal",value:function(t,e){var a=t.reduce(function(t,e){return t+e.summary},0);return 0!==e&&(a-=a*e),a}},{key:"isCartDiscount",value:function(t){return"0"!==t}},{key:"render",value:function(){var t=this.state,e=t.productData,a=t.cartDiscount,n=t.totalDiscount,r=t.historyIndex,c=this.getTotal(e,n);return console.log("index ",r),console.log("history:",this.stateHistory),console.log(e),o.a.createElement("div",{className:"shopcart-app"},o.a.createElement("h1",null,"Receipt"),o.a.createElement("div",{className:"noprint"},o.a.createElement(f,{onItemAdded:this.addItem,onUndoAction:this.onUndoAction,onRedoAction:this.onRedoAction})),o.a.createElement("table",{className:"table"},o.a.createElement("thead",{className:"thead-dark"},o.a.createElement("tr",null,o.a.createElement("th",{width:"25%"},"Product Name"),o.a.createElement("th",{width:"15%"},"Quantity"),o.a.createElement("th",{width:"10%"},"Price"),o.a.createElement("th",{width:"15%"},"Discount"),o.a.createElement("th",{width:"15%"},"Summary"),o.a.createElement("th",{width:"15%",className:"noprint"}))),o.a.createElement("tbody",null,o.a.createElement(b,{prods:e,onProductChange:this.onProductChange,onDeleted:this.deleteItem,cartDiscount:a}),o.a.createElement("tr",null,o.a.createElement("td",null),o.a.createElement("td",null),o.a.createElement("td",{className:"discount"}),o.a.createElement("td",{align:"center"},o.a.createElement("b",null,"Cart Discount:")),o.a.createElement("td",null,o.a.createElement("select",{className:"form-control form-control-select",onChange:this.TotalDiscountChange,value:n},o.a.createElement("option",{value:"0"},"0%"),o.a.createElement("option",{value:"0.1"},"10%"),o.a.createElement("option",{value:"0.25"},"25%"))),o.a.createElement("td",{className:"noprint"}),o.a.createElement("td",{className:"noprint"})),o.a.createElement("tr",null,o.a.createElement("td",null),o.a.createElement("td",null),o.a.createElement("td",null),o.a.createElement("td",{align:"right"},o.a.createElement("b",null,"Total:")),o.a.createElement("td",null,c),o.a.createElement("td",{className:"noprint"})))),o.a.createElement("div",{className:"noprint form-row"},o.a.createElement("div",{className:"col-md-8"}),o.a.createElement("div",{className:"col-md-4"},o.a.createElement("button",{className:"btn btn-outline-secondary btn-md btn-block",onClick:function(){return window.print()}},o.a.createElement("i",{className:"fa fa-print "}," Print")))))}}]),e}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.c6cda285.chunk.js.map