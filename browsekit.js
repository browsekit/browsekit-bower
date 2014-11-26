/*!browsekit 0.0.1 */
!function(a){function b(a){throw new Error(a)}function c(b){function c(a,b,c){return m(b)&&(c=b,b=void 0),new d(f,a,b,c)}if(!b&&a.location){var e=a.location.port;b=a.location.origin||a.location.protocol+"//"+(a.location.host||a.location.hostname)+(e?":"+e:"")}b&&b.replace&&(b=b.replace(/\/$/,""));var f={url:b};return c.create=function(a,c){var e,g,h,i,j=A.exec(a);if(!j)return new d(f,null);e=j[1],g=j[2],h=j[3],i=j[4],c=c||{},i&&g?(a="bucket#"+g+" item#"+i,c.$endpoint=v(b+H.bucketItem,{bucketName:g,itemName:i})):h&&g?(a="bucket#"+g+" item",c.$endpoint=v(b+H.bucketItems,{bucketName:g})):g?(a="bucket#"+g,c.$endpoint=v(b+H.bucket,{bucketName:g})):(a="bucket",c.$endpoint=v(b+H.buckets));var k=new d(f,a,{fetch:!1});return k[0]=c,k},c.authenticate=function(a,b){return i(f,a,b)},c.login=c.authenticate,c}function d(a,c,e,f){function i(){l.splice(0,1/0),t=s("GET",v(a.url+H.query,void 0,{selector:l.encodedQuery,limit:l.options.query.limit,skip:l.options.query.skip}),p),t.then(function(a){var b=a.data;return j(b,function(a,b){F.is(a)&&(a=F.create(a)),a.$endpoint=b,l.push(a)}),l},function(){}),t.then(function(){o.emit("data",l)},function(a){o.emit("error",a)}),m(f)&&t.then(function(){f.call(l,null,l)},function(a){f.call(l,a,void 0)})}function k(a){if(null===a||"object"!=typeof a)return a;var b=a.constructor();for(var c in a)a.hasOwnProperty(c)&&(b[c]=k(a[c]));return b}e=e||{};var l=[];l.options={},l.constructor=d,j(d.prototype,function(a,b){l[b]=a}),l.events=g();var o=h(l.events);l.on=function(a,b){o.on(a,b)},l.off=function(a,b){o.off(a,b)},l.options.query={limit:e.limit||10,skip:e.skip||0},n(c)?l.selector=c:(l[0]=c,l.selector=null);var p=m(f)?!f:f;if(l.options.surfboard=a,!c)return l.itemQuery=r,b("No selector to build item query from"),l;var q=encodeURIComponent(c);l.encodedQuery=q;var t;return!1!==e.fetch&&i(),l.$populate=function(){return i(),l},l.next=function(a,b){var c=k(l.options.surfboard),e=l.selector,f=k(l.options.query);return m(a)?b=a:f.limit=a,d(c,e,f,b)},l.delete=function(a){var b=[],c=[],d=[];l.forEach(function(a){s("DELETE",a.$endpoint,!0).then(function(a){return d.push(a),a},function(a){return c.push(a),a})});var e=C.all(b);e.then(function(){m(a)&&a(c,d,arguments)})},l.update=function(a){t.abort();var b=q+"&endpointsOnly=true";l.encodedQuery=b,s("GET",requestUrl+l.encodedQuery,l.sync).then(function(b){var c=b.data;c.forEach(function(b){s("PUT",b,l.sync,a).then(function(){},function(){})})}).catch(function(){})},l}function e(a){switch(a&&a.constructor){case Boolean:case Number:case String:return a.valueOf();default:return a}}function f(){return!this instanceof f?new f:void(this.events={})}function g(){var a=new f,b=B.push(a)-1;return b}function h(a){return B[a]}function i(a,b,c){function d(a){m(c)&&setTimeout(function(){c(a)}),j.emit("error",[a]),h.reject(a)}b=b||{};var e=b.username,g=b.passphrase,h=new C.defer,i=h.promise,j=new f;return i.on=function(a,b){j.on(a,b)},i.off=function(a,b){j.off(a,b)},e?(s("POST",a.url+H.authLogin,!1,{userName:e,password:g}).then(function(a){m(c)&&setTimeout(function(){c(null,a)}),j.emit("login",[a]),h.resolve(a)},function(a){d(a)}),i):d(new Error("authentication requires a username"))}function j(a,b,c){var d;if(a)if(m(a))for(d in a)"prototype"==d||"length"==d||"name"==d||a.hasOwnProperty&&!a.hasOwnProperty(d)||b.call(c,a[d],d);else if(a.forEach&&a.forEach!==j)a.forEach(b,c);else if(l(a))for(d=0;d<a.length;d++)b.call(c,a[d],d);else for(d in a)a.hasOwnProperty(d)&&b.call(c,a[d],d);return a}function k(a){return"[object Array]"===E.call(a)}function l(a){if(null===a||o(a))return!1;var b=a.length;return 1===a.nodeType&&b?!0:n(a)||k(a)||0===b||"number"==typeof b&&b>0&&b-1 in a}function m(a){return"function"==typeof a}function n(a){return"string"==typeof a}function o(a){return a&&a.document&&a.location&&a.alert&&a.setInterval}function p(a,b){function c(a){return a}function d(a){return h(a)}function e(a){var b=f(),c=0,d=k(a)?[]:{};return j(a,function(a,e){c++,g(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})}),0===c&&b.resolve(d),b.promise}var f=function(){var e,h,j=[];return h={resolve:function(b){if(j){var c=j;j=void 0,e=g(b),c.length&&a(function(){for(var a,b=0,d=c.length;d>b;b++)a=c[b],e.then(a[0],a[1],a[2])})}},reject:function(a){h.resolve(i(a))},notify:function(b){if(j){var c=j;j.length&&a(function(){for(var a,d=0,e=c.length;e>d;d++)a=c[d],a[2](b)})}},promise:{then:function(a,g,h){var i=f(),k=function(d){try{i.resolve((m(a)?a:c)(d))}catch(e){i.reject(e),b(e)}},l=function(a){try{i.resolve((m(g)?g:d)(a))}catch(c){i.reject(c),b(c)}},n=function(a){try{i.notify((m(h)?h:c)(a))}catch(d){b(d)}};return j?j.push([k,l,n]):e.then(k,l,n),i.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,b){var c=f();return b?c.resolve(a):c.reject(a),c.promise}function d(d,e){var f=null;try{f=(a||c)()}catch(g){return b(g,!1)}return f&&m(f.then)?f.then(function(){return b(d,e)},function(a){return b(a,!1)}):b(d,e)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},g=function(b){return b&&m(b.then)?b:{then:function(c){var d=f();return a(function(){d.resolve(c(b))}),d.promise}}},h=function(a){var b=f();return b.reject(a),b.promise},i=function(c){return{then:function(e,g){var h=f();return a(function(){try{h.resolve((m(g)?g:d)(c))}catch(a){h.reject(a),b(a)}}),h.promise}}},l=function(e,i,j,k){var l,n=f(),o=function(a){try{return(m(i)?i:c)(a)}catch(d){return b(d),h(d)}},p=function(a){try{return(m(j)?j:d)(a)}catch(c){return b(c),h(c)}},q=function(a){try{return(m(k)?k:c)(a)}catch(d){b(d)}};return a(function(){g(e).then(function(a){l||(l=!0,n.resolve(g(a).then(o,p,q)))},function(a){l||(l=!0,n.resolve(p(a)))},function(a){l||n.notify(q(a))})}),n.promise};return{defer:f,reject:h,when:l,all:e}}function q(a,b){if(m(a.map))return a.map(b);var c=[];return j(a,function(a,d,e){c.push(b.call(null,a,d,e))}),c}function r(){}function s(a,b,c,d){function e(){var e=t();e.hasOwnProperty("onload")?(e.onload=function(){e.status<300&&e.status>=200?h.resolve(u(e)):h.reject(u(e)||e.status)},e.error=function(){h.reject(u(e))}):e.onreadystatechange=function(){switch(e.readyState){case 0:break;case 1:break;case 2:break;case 3:break;case 4:e.status>=200&&e.status<300?h.resolve(u(e)):h.reject(u(e))}};try{e.open(a,b,!c),e.setRequestHeader("Content-Type","application/json"),e.send(d)}catch(f){h.reject(f)}}if(d=d||null,d&&d.hasOwnProperty("$endpoint")){var f={};j(d,function(a,b){"$endpoint"!==b&&(f[b]=a)}),d=f}null!==d&&"string"!=typeof d&&(d=y(d));var g,h=c?D.defer():C.defer();return c?e():g=setTimeout(e),h.promise.abort=function(){g&&(clearTimeout(g),g=null)},h.promise}function t(){if(a.XMLHttpRequest)return new a.XMLHttpRequest;if(a.ActiveXObject){try{return new a.ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(b){}try{return new a.ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(b){}try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}throw new Error("This browser does not support XMLHttpRequest.")}function u(a){var b=a.responseText;if(!b&&n(b))b=void 0;else try{b=x(b)}catch(c){}return{data:b,status:a.status,headers:function(b){return a.getResponseHeader(b)},config:a}}function v(a,b,c){var d=a;if(j(b,function(a,b){d=d.replace(RegExp(":"+b,"g"),a)}),c){var e=[];j(c,function(a,b){e.push(""+b+"="+a)}),d+="?"+e.join("&")}return d}function w(a,b){if(!I[b]){var c=H[b];if(!c&&n(b)&&(c=b),!c)return!1;I[b]=new RegExp(c.replace(J,"([a-zA-Z0-9]+)")+"(?:\\?.*)?$")}var d=I[b];return d&&d.exec(a)}function x(a){return a=a.replace(/^\)]}\',\n/,""),"object"==typeof JSON?JSON.parse(a):new Function("return "+a+";")()}function y(a,b){var c=!b;b=b||[];var d,e;switch(typeof a){case"undefined":case"null":b.push("null");break;case"number":b.push(a.toString(10));break;case"boolean":b.push(a?"true":"false");break;case"string":b.push('"'+a+'"');break;case"object":k(a)?(b.push("["),j(a,function(a){e=b.length,y(a,b),e!==b.length&&b.push(",")}),d=b.pop(),","!==d&&b.push(d),b.push("]")):(b.push("{"),j(a,function(a,c){"$dataUrl"!==c&&(b.push('"'+c+'":'),e=b.length,y(a,b),e===b.length?b.pop():b.push(","))}),d=b.pop(),","!==d&&b.push(d),b.push("}"));break;case"function":}return c?b.join(""):b}function z(){var a=[];return a.constructor=z,j(d.prototype,function(b,c){a[c]=b}),a}a.BrowseKit=c;var A=/^\s*(bucket)?(?:#([\w-]+))?\s*?(?:\s(item)?(?:#([\w-]+))?)?$/;d.prototype.remove=function(){return this["delete"].apply(this,arguments)},d.prototype.set=function(a){var b=this,c=m(a)?!a:a,d=[],e=[];b.forEach(function(a){var b,f=a.$endpoint;b=w(f,"bucketItems")||w(f,"buckets")?s("POST",f,c,a):s("PUT",f,c,a),b.then(function(b){var c=b&&b.headers&&b.headers("Location");return c&&(a.$endpoint=c),b},function(a){return e.push(a),a}),d.push(b)});var f=C.all(d);return f.then(function(){m(a)&&a(e.length?e:null,b)}),b},d.prototype.save=function(){return this.set.apply(this,arguments)},d.prototype.reload=function(){this.$populate()},d.prototype.first=function(){return new d(this.opts,this[0])},d.prototype.each=function(a){return j(this,a),this},d.prototype.vals=function(){return q(self,e)},f.prototype.on=function(a,c){return m(c)&&n(a)?((this.events[a]=this.events[a]||[]).push(c),this):(b("must supply event name and callback function"),this)},f.prototype.off=function(a,c){if(!m(c)||!n(a))return b("must supply event name and callback function"),this;var d=this.events[a];if(d)for(var e=0,f=d.length;f>e;e++)if(d[e]===c)return d.splice(e,1),!0;return this},f.prototype.emit=function(c,d){if(!n(c))return b("EventRegistration: Must supply an event name"),this;if(d&&!l(d))return b("EventRegistration: If supplying args, must be an Array"),this;var e=this.events[c];if(!e)return this;for(var f=0,g=e.length;g>f;f++)e[f].apply(a,d);return this},f.prototype.emitAndClear=function(a,b){return this.emit(a,b),this.events={},this};var B=[null],C=(Object.prototype.hasOwnProperty,p(function(a){setTimeout(a)},b)),D=p(function(a){a()},b),E=Object.prototype.toString,F={is:function(a){return"object"!=typeof a||null===a},create:function(a){var b=a.constructor;return"boolean"==typeof a&&(a=a?!0:null),new b(a)}},G="/surf/api/2/",H={query:G+"query",buckets:G+"content/buckets",bucket:G+"content/buckets/:bucketName",bucketItems:G+"content/buckets/:bucketName/items",bucketItem:G+"content/buckets/:bucketName/items/:itemName",bucketDefinitions:G+"content/buckets/:bucketName/definitions",definitions:G+"content/definitions",definition:G+"content/definitions/:definitionName",definitionBuckets:G+"content/definitions/:definitionName/buckets",definitionItems:G+"content/definitions/:definitionName/items",authLogin:G+"auth/login"},I={},J=/:[a-zA-Z]+/g;z.prototype.isMatch=function(){return!1}}(function(){return this}());
