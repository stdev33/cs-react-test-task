"use strict";(self.webpackChunkcs_react_test_task=self.webpackChunkcs_react_test_task||[]).push([[799],{799:function(e,t,i){i.r(t),i.d(t,{default:function(){return Y}});var n=i(791),r=i(439),a=i(420),s=i(531),c=function(e){return e.adverts.isLoading},o=function(e){return e.adverts.error},d=(0,i(553).P1)([function(e){return e.adverts.items},function(e){return e.filter}],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}));var l=i.p+"static/media/icons.477052ae9f74bd3ea1624e66d4efa7b7.svg",_="FavoriteToggle_favoritesButton__WIugV",u="FavoriteToggle_favoritesIcon__LnlJI",h=i(184),m=function(e){var t=e.isFavorite,i=e.onToggle,n=e.width,r=void 0===n?24:n,a=e.height,s=void 0===a?24:a;return(0,h.jsx)("button",{className:_,onClick:i,children:(0,h.jsx)("svg",{className:u,width:"".concat(r),height:"".concat(s),children:(0,h.jsx)("use",{xlinkHref:"".concat(l,"#").concat(t?"icon-heart-selected":"icon-heart")})})})},v="Rating_ratingWrapper__vrgV6",f="Rating_rating__-RhId",x=function(e){var t=e.value,i=e.reviewsCount;return(0,h.jsxs)("div",{className:v,children:[(0,h.jsx)("svg",{width:"20",height:"20",children:(0,h.jsx)("use",{xlinkHref:"".concat(l,"#icon-star")})}),(0,h.jsx)("p",{className:f,children:"".concat(t,"(").concat(i," Reviews)")})]})},g="Location_locationWrapper__tCyS2",j="Location_location__S1sRV",p=function(e){var t=e.value;return(0,h.jsxs)("div",{className:g,children:[(0,h.jsx)("svg",{width:"16",height:"16",children:(0,h.jsx)("use",{xlinkHref:"".concat(l,"#icon-map-pin")})}),(0,h.jsx)("p",{className:j,children:"".concat(t)})]})},w="EquipmentItem_equipmentItem__Hmz+A",N="EquipmentItem_equipmentName__EcLrh",A=function(e){var t=e.id,i=e.data;return(0,h.jsxs)("li",{className:w,children:[(0,h.jsx)("svg",{width:"20",height:"20",children:(0,h.jsx)("use",{xlinkHref:"".concat(l,"#").concat(i.icon)})}),(0,h.jsx)("p",{className:N,children:i.description})]},t)},C={adults:"icon-adults",transmission:"icon-automatic",engine:"icon-petrol",airConditioner:"icon-air-conditioner",bathroom:"icon-shower",kitchen:"icon-kitchen",beds:"icon-beds",TV:"icon-tv",CD:"icon-cd",radio:"icon-radio",shower:"icon-shower",toilet:"icon-toilet",freezer:"icon-freezer",hob:"icon-hob",microwave:"icon-microwave",gas:"icon-gas",water:"icon-water"},b={adults:"{} adults",transmission:"{}",engine:"{}",airConditioner:"{} Air conditioner",bathroom:"Bathroom",kitchen:"Kitchen",beds:"{} beds",TV:"TV",CD:"CD",radio:"Radio",shower:"Shower",toilet:"Toilet",freezer:"Freezer",hob:"{} hob",microwave:"Microwave",gas:"Gas",water:"Water"},I=function(e){return C[e]||""},L=function(e,t){return(b[e]||"").replace("{}",t)},k="EquipmentList_equipmentList__SqYLX",S=function(e){var t=function(e){for(var t=[],i=0,n=Object.entries(e);i<n.length;i++){var a=(0,r.Z)(n[i],2),s=a[0],c=a[1];C.hasOwnProperty(s)&&("number"===typeof c&&c>0||"string"===typeof c&&""!==c.trim())&&t.push({icon:I(s),description:L(s,c)})}if(e.details)for(var o=0,d=Object.entries(e.details);o<d.length;o++){var l=(0,r.Z)(d[o],2),_=l[0],u=l[1];C.hasOwnProperty(_)&&("number"===typeof u&&u>0||"string"===typeof u&&""!==u.trim())&&t.push({icon:I(_),description:L(_,u)})}return t}(e.data);return(0,h.jsx)("ul",{className:k,children:t.map((function(t,i){return(0,h.jsx)(A,{id:"".concat(e.data._id,"_").concat(i),data:t},"".concat(e.data._id,"_").concat(i))}))})},F="AdvertItem_advertItem__2kWli",R="AdvertItem_imageWrapper__n2vlC",T="AdvertItem_image__5SMnf",q="AdvertItem_details__lvqLx",y="AdvertItem_header__4iKk0",z="AdvertItem_titleAndPrice__jKZzw",H="AdvertItem_priceAndFavorites__gfmLC",M="AdvertItem_title__ARFvx",V="AdvertItem_price__VTmw2",W="AdvertItem_ratingAndLocation__lL1HI",E="AdvertItem_description__jjdG3",B="AdvertItem_showMoreButton__1GRN8",D=function(e){var t=e.data,i=e.onShowMore;return(0,h.jsxs)("li",{className:F,children:[(0,h.jsx)("div",{className:R,children:(0,h.jsx)("img",{src:t.gallery[0],alt:t.name,className:T})}),(0,h.jsxs)("div",{className:q,children:[(0,h.jsxs)("div",{className:y,children:[(0,h.jsxs)("div",{className:z,children:[(0,h.jsx)("h3",{className:M,children:t.name}),(0,h.jsxs)("div",{className:H,children:[(0,h.jsxs)("span",{className:V,children:["\u20ac",t.price.toFixed(2)]}),(0,h.jsx)(m,{isFavorite:!1})]})]}),(0,h.jsxs)("div",{className:W,children:[(0,h.jsx)(x,{value:t.rating,reviewsCount:t.reviews.length}),(0,h.jsx)(p,{value:t.location})]})]}),(0,h.jsx)("p",{className:E,children:t.description}),(0,h.jsx)(S,{data:t}),(0,h.jsx)("button",{className:B,onClick:function(){return i(t._id)},children:"Show more"})]})]})},G="AdvertsList_advertsListWrapper__30D8s",O="AdvertsList_advertsList__AuKQZ",P="AdvertsList_loadMoreButton__pFM6i",Z=function(){var e=(0,a.v9)(c),t=(0,a.v9)(o),i=(0,a.v9)(d),l=(0,a.I0)(),_=(0,n.useState)(1),u=(0,r.Z)(_,2),m=u[0],v=u[1];(0,n.useEffect)((function(){l((0,s.G)({page:m,limit:4}))}),[l,m]);return(0,h.jsxs)("div",{className:G,children:[(0,h.jsxs)("ul",{className:O,children:[e&&(0,h.jsx)("p",{children:"Loading..."}),t&&(0,h.jsxs)("p",{children:["Error: ",t]}),i.map((function(e){return(0,h.jsx)(D,{data:e,onShowMore:function(e){return console.log("Show more: ".concat(e))}},e._id)}))]}),(0,h.jsx)("button",{onClick:function(){v((function(e){return e+1}))},className:P,children:"Load more"})]})},K="Catalog_catalogPage__Dzg3R",J="Catalog_filtersColumn__3lm75",Q="Catalog_searchArea__koHvr",U="Catalog_searchButton__GaUTA",X="Catalog_advertsColumn__exNpO",Y=function(){return(0,h.jsxs)("div",{className:K,children:[(0,h.jsx)("aside",{className:J,children:(0,h.jsx)("div",{className:Q,children:(0,h.jsx)("button",{className:U,children:"Search"})})}),(0,h.jsx)("main",{className:X,children:(0,h.jsx)(Z,{})})]})}}}]);
//# sourceMappingURL=799.2b86f81b.chunk.js.map