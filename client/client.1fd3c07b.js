function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a;function c(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function l(t,n,s,r){return t[1]&&r?e(s.ctx.slice(),t[1](r(n))):s.ctx}function u(t,e,n,s,r,o,i){const a=function(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}(e,s,r,o);if(a){const r=l(e,n,s,i);t.p(r,a)}}function f(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function d(t){return null==t?"":t}let h,p,m=!1;function g(t,e,n,s){for(;t<e;){const r=t+(e-t>>1);n(r)<=s?t=r+1:e=r}return t}function b(t,e){if(m){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const s=e[n];void 0!==s.claim_order&&t.push(s)}e=t}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let r=0;for(let t=0;t<e.length;t++){const o=e[t].claim_order,i=(r>0&&e[n[r]].claim_order<=o?r+1:g(1,r,(t=>e[n[t]].claim_order),o))-1;s[t]=n[i]+1;const a=i+1;n[a]=t,r=Math.max(a,r)}const o=[],i=[];let a=e.length-1;for(let t=n[r]+1;0!=t;t=s[t-1]){for(o.push(e[t-1]);a>=t;a--)i.push(e[a]);a--}for(;a>=0;a--)i.push(e[a]);o.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<o.length&&i[e].claim_order>=o[n].claim_order;)n++;const s=n<o.length?o[n]:null;t.insertBefore(i[e],s)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode!==t&&t.appendChild(e)}function v(t,e,n){t.insertBefore(e,n||null)}function _(t,e,n){m&&!n?b(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function w(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function E(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function x(){return S(" ")}function T(){return S("")}function A(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function L(t){return function(e){return e.preventDefault(),t.call(this,e)}}function N(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function P(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)null==e[s]?t.removeAttribute(s):"style"===s?t.style.cssText=e[s]:"__value"===s?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:N(t,s,e[s])}function I(t){return Array.from(t.childNodes)}function C(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function R(t,e,n,s,r=!1){C(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const e=n(o);return void 0===e?t.splice(s,1):t[s]=e,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const e=n(o);return void 0===e?t.splice(s,1):t[s]=e,r?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return s()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function U(t,e,n,s){return R(t,(t=>t.nodeName===e),(t=>{const e=[];for(let s=0;s<t.attributes.length;s++){const r=t.attributes[s];n[r.name]||e.push(r.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>s?E(e):y(e)))}function k(t,e){return R(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>S(e)),!0)}function O(t){return k(t," ")}function H(t,e,n){for(let s=n;s<t.length;s+=1){const n=t[s];if(8===n.nodeType&&n.textContent.trim()===e)return s}return t.length}function M(t){const e=H(t,"HTML_TAG_START",0),n=H(t,"HTML_TAG_END",e);if(e===n)return new z;C(t);const s=t.splice(e,n+1);$(s[0]),$(s[s.length-1]);const r=s.slice(1,s.length-1);for(const e of r)e.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new z(r)}function j(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function B(t,e){t.value=null==e?"":e}function D(){if(void 0===h){h=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){h=!0}}return h}function G(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=y("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=D();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=A(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{r=A(n.contentWindow,"resize",e)}),function(t,e){t.appendChild(e)}(t,n),()=>{(s||r&&n.contentWindow)&&r(),$(n)}}function q(t,e=document.body){return Array.from(e.querySelectorAll(t))}class z extends class{constructor(){this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.e=y(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)v(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach($)}}{constructor(t){super(),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let e=0;e<this.n.length;e+=1)_(this.t,this.n[e],t)}}function K(t){p=t}function J(){if(!p)throw new Error("Function called outside component initialization");return p}function V(t){J().$$.on_mount.push(t)}function W(t){J().$$.after_update.push(t)}function F(t){J().$$.on_destroy.push(t)}const Y=[],X=[],Q=[],Z=[],tt=Promise.resolve();let et=!1;function nt(t){Q.push(t)}let st=!1;const rt=new Set;function ot(){if(!st){st=!0;do{for(let t=0;t<Y.length;t+=1){const e=Y[t];K(e),it(e.$$)}for(K(null),Y.length=0;X.length;)X.pop()();for(let t=0;t<Q.length;t+=1){const e=Q[t];rt.has(e)||(rt.add(e),e())}Q.length=0}while(Y.length);for(;Z.length;)Z.pop()();et=!1,st=!1,rt.clear()}}function it(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(nt)}}const at=new Set;let ct;function lt(){ct={r:0,c:[],p:ct}}function ut(){ct.r||r(ct.c),ct=ct.p}function ft(t,e){t&&t.i&&(at.delete(t),t.i(e))}function dt(t,e,n,s){if(t&&t.o){if(at.has(t))return;at.add(t),ct.c.push((()=>{at.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function ht(t,e){const n={},s={},r={$$scope:1};let o=t.length;for(;o--;){const i=t[o],a=e[o];if(a){for(const t in i)t in a||(s[t]=1);for(const t in a)r[t]||(n[t]=a[t],r[t]=1);t[o]=a}else for(const t in i)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function pt(t){return"object"==typeof t&&null!==t?t:{}}function mt(t){t&&t.c()}function gt(t,e){t&&t.l(e)}function bt(t,e,s,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=t.$$;a&&a.m(e,s),i||nt((()=>{const e=c.map(n).filter(o);l?l.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(nt)}function vt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function _t(t,e){-1===t.$$.dirty[0]&&(Y.push(t),et||(et=!0,tt.then(ot)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function $t(e,n,o,i,a,c,l,u=[-1]){const f=p;K(e);const d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:n.context||[]),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};l&&l(d.root);let h=!1;if(d.ctx=o?o(e,n.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),h&&_t(e,t)),n})):[],d.update(),h=!0,r(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){m=!0;const t=I(n.target);d.fragment&&d.fragment.l(t),t.forEach($)}else d.fragment&&d.fragment.c();n.intro&&ft(e.$$.fragment),bt(e,n.target,n.anchor,n.customElement),m=!1,ot()}K(f)}class wt{$destroy(){vt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const yt=[];function Et(e,n=t){let s;const r=new Set;function o(t){if(i(e,t)&&(e=t,s)){const t=!yt.length;for(const t of r)t[1](),yt.push(t,e);if(t){for(let t=0;t<yt.length;t+=2)yt[t][0](yt[t+1]);yt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(i,a=t){const c=[i,a];return r.add(c),1===r.size&&(s=n(o)||t),i(e),()=>{r.delete(c),0===r.size&&(s(),s=null)}}}}const St={};var xt={owner:"richardtape",repo:"ubcupptime",sites:[{name:"CMS",url:"https://cms.ubc.ca"},{name:"Blogs",url:"https://blogs.ubc.ca"},{name:"CTLT Events",url:"https://events.ctlt.ubc.ca"},{name:"CourseSpaces",url:"https://coursespaces.ubc.ca/"}],"status-website":{baseUrl:"/ubcupptime",logoUrl:"https://brand3.sites.olt.ubc.ca/files/2018/09/2Crest_ex_768.png",name:"UBC Uptime",introTitle:"CTLT WordPress Instance Public Uptime Monitoring",introMessage:"Real-time Monitoring of UBC CMS, UBC Blogs, UBC CTLT Events, and UBC CourseSpaces environments.",navbar:[{title:"Status",href:"/ubcupptime"},{title:"CMS",href:"https://cms.ubc.ca"},{title:"Blogs",href:"https://blogs.ubc.ca"},{title:"CTLT Events",href:"https://events.ctlt.ubc.ca"},{title:"CourseSpaces",href:"https://coursespaces.ubc.ca"}]},path:"https://richardtape.github.io/ubcupptime",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function Tt(t,e,n){const s=t.slice();return s[1]=e[n],s}function At(e){let n,s,r,o=xt["status-website"]&&!xt["status-website"].hideNavLogo&&function(e){let n,s;return{c(){n=y("img"),this.h()},l(t){n=U(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){N(n,"alt",""),c(n.src,s=xt["status-website"].logoUrl)||N(n,"src",s),N(n,"class","svelte-a08hsz")},m(t,e){_(t,n,e)},p:t,d(t){t&&$(n)}}}(),i=xt["status-website"]&&!xt["status-website"].hideNavTitle&&function(e){let n,s,r=xt["status-website"].name+"";return{c(){n=y("div"),s=S(r)},l(t){n=U(t,"DIV",{});var e=I(n);s=k(e,r),e.forEach($)},m(t,e){_(t,n,e),b(n,s)},p:t,d(t){t&&$(n)}}}();return{c(){n=y("div"),s=y("a"),o&&o.c(),r=x(),i&&i.c(),this.h()},l(t){n=U(t,"DIV",{});var e=I(n);s=U(e,"A",{href:!0,class:!0});var a=I(s);o&&o.l(a),r=O(a),i&&i.l(a),a.forEach($),e.forEach($),this.h()},h(){N(s,"href",xt["status-website"].logoHref||xt.path),N(s,"class","logo svelte-a08hsz")},m(t,e){_(t,n,e),b(n,s),o&&o.m(s,null),b(s,r),i&&i.m(s,null)},p(t,e){xt["status-website"]&&!xt["status-website"].hideNavLogo&&o.p(t,e),xt["status-website"]&&!xt["status-website"].hideNavTitle&&i.p(t,e)},d(t){t&&$(n),o&&o.d(),i&&i.d()}}}function Lt(t){let e,n,s,r,o,i,a=t[1].title+"";return{c(){e=y("li"),n=y("a"),s=S(a),i=x(),this.h()},l(t){e=U(t,"LI",{});var r=I(e);n=U(r,"A",{"aria-current":!0,href:!0,class:!0});var o=I(n);s=k(o,a),o.forEach($),i=O(r),r.forEach($),this.h()},h(){N(n,"aria-current",r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),N(n,"href",o=t[1].href.replace("$OWNER",xt.owner).replace("$REPO",xt.repo)),N(n,"class","svelte-a08hsz")},m(t,r){_(t,e,r),b(e,n),b(n,s),b(e,i)},p(t,e){1&e&&r!==(r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&N(n,"aria-current",r)},d(t){t&&$(e)}}}function Nt(e){let n,s,r,o,i,a=xt["status-website"]&&xt["status-website"].logoUrl&&At(),c=xt["status-website"]&&xt["status-website"].navbar&&function(t){let e,n=xt["status-website"].navbar,s=[];for(let e=0;e<n.length;e+=1)s[e]=Lt(Tt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=T()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=T()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);_(t,e,n)},p(t,r){if(1&r){let o;for(n=xt["status-website"].navbar,o=0;o<n.length;o+=1){const i=Tt(t,n,o);s[o]?s[o].p(i,r):(s[o]=Lt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){w(s,t),t&&$(e)}}}(e),l=xt["status-website"]&&xt["status-website"].navbarGitHub&&!xt["status-website"].navbar&&function(e){let n,s,r,o=xt.i18n.navGitHub+"";return{c(){n=y("li"),s=y("a"),r=S(o),this.h()},l(t){n=U(t,"LI",{});var e=I(n);s=U(e,"A",{href:!0,class:!0});var i=I(s);r=k(i,o),i.forEach($),e.forEach($),this.h()},h(){N(s,"href",`https://github.com/${xt.owner}/${xt.repo}`),N(s,"class","svelte-a08hsz")},m(t,e){_(t,n,e),b(n,s),b(s,r)},p:t,d(t){t&&$(n)}}}();return{c(){n=y("nav"),s=y("div"),a&&a.c(),r=x(),o=y("ul"),c&&c.c(),i=x(),l&&l.c(),this.h()},l(t){n=U(t,"NAV",{class:!0});var e=I(n);s=U(e,"DIV",{class:!0});var u=I(s);a&&a.l(u),r=O(u),o=U(u,"UL",{class:!0});var f=I(o);c&&c.l(f),i=O(f),l&&l.l(f),f.forEach($),u.forEach($),e.forEach($),this.h()},h(){N(o,"class","svelte-a08hsz"),N(s,"class","container svelte-a08hsz"),N(n,"class","svelte-a08hsz")},m(t,e){_(t,n,e),b(n,s),a&&a.m(s,null),b(s,r),b(s,o),c&&c.m(o,null),b(o,i),l&&l.m(o,null)},p(t,[e]){xt["status-website"]&&xt["status-website"].logoUrl&&a.p(t,e),xt["status-website"]&&xt["status-website"].navbar&&c.p(t,e),xt["status-website"]&&xt["status-website"].navbarGitHub&&!xt["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&$(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function Pt(t,e,n){let{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment)},[s]}class It extends wt{constructor(t){super(),$t(this,t,Pt,Nt,i,{segment:0})}}var Ct={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Rt(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function Ut(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function kt(t,e){var n,s,r,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},f=0;function d(t){var e=Ct[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function h(){for(var t="";c.length;)t+=d(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=a.exec(t);)s=t.substring(f,r.index),f=a.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((i=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+Rt(Ut(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=r[6])?(i.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=kt(Rt(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):r[8]?n='<img src="'+Ut(r[8])+'" alt="'+Ut(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+Ut(r[11]||u[s.toLowerCase()])+'">'),n=h()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(i="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+kt(r[12]||r[15],u)+"</"+i+">":r[16]?n="<code>"+Ut(r[16])+"</code>":(r[17]||r[1])&&(n=d(r[17]||"--"))),l+=s,l+=n;return(l+t.substring(f)+h()).replace(/^\n+|\n+$/g,"")}function Ot(t,e,n){const s=t.slice();return s[3]=e[n],s}function Ht(t,e,n){const s=t.slice();return s[3]=e[n],s}function Mt(t,e,n){const s=t.slice();return s[8]=e[n],s}function jt(e){let n;return{c(){n=y("link"),this.h()},l(t){n=U(t,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",`${xt.path}/themes/${(xt["status-website"]||{}).theme||"light"}.css`)},m(t,e){_(t,n,e)},p:t,d(t){t&&$(n)}}}function Bt(e){let n;return{c(){n=y("link"),this.h()},l(t){n=U(t,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",(xt["status-website"]||{}).themeUrl)},m(t,e){_(t,n,e)},p:t,d(t){t&&$(n)}}}function Dt(e){let n,s;return{c(){n=y("script"),this.h()},l(t){n=U(t,"SCRIPT",{src:!0}),I(n).forEach($),this.h()},h(){c(n.src,s=e[8].src)||N(n,"src",s),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){_(t,n,e)},p:t,d(t){t&&$(n)}}}function Gt(e){let n;return{c(){n=y("link"),this.h()},l(t){n=U(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){N(n,"rel",e[3].rel),N(n,"href",e[3].href),N(n,"media",e[3].media)},m(t,e){_(t,n,e)},p:t,d(t){t&&$(n)}}}function qt(e){let n;return{c(){n=y("meta"),this.h()},l(t){n=U(t,"META",{name:!0,content:!0}),this.h()},h(){N(n,"name",e[3].name),N(n,"content",e[3].content)},m(t,e){_(t,n,e)},p:t,d(t){t&&$(n)}}}function zt(e){let n,s,r,o,i,a,c,f,d,h,p,m,g,v,E,S,A,L,P=kt(xt.i18n.footer.replace(/\$REPO/,`https://github.com/${xt.owner}/${xt.repo}`))+"",C=(xt["status-website"]||{}).customHeadHtml&&function(e){let n,s,r=(xt["status-website"]||{}).customHeadHtml+"";return{c(){n=new z,s=T(),this.h()},l(t){n=M(t),s=T(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),_(t,s,e)},p:t,d(t){t&&$(s),t&&n.d()}}}();let R=((xt["status-website"]||{}).themeUrl?Bt:jt)(e),k=(xt["status-website"]||{}).scripts&&function(t){let e,n=(xt["status-website"]||{}).scripts,s=[];for(let e=0;e<n.length;e+=1)s[e]=Dt(Mt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=T()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=T()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);_(t,e,n)},p(t,r){if(0&r){let o;for(n=(xt["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=Mt(t,n,o);s[o]?s[o].p(i,r):(s[o]=Dt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){w(s,t),t&&$(e)}}}(e),H=(xt["status-website"]||{}).links&&function(t){let e,n=(xt["status-website"]||{}).links,s=[];for(let e=0;e<n.length;e+=1)s[e]=Gt(Ht(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=T()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=T()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);_(t,e,n)},p(t,r){if(0&r){let o;for(n=(xt["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=Ht(t,n,o);s[o]?s[o].p(i,r):(s[o]=Gt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){w(s,t),t&&$(e)}}}(e),j=(xt["status-website"]||{}).metaTags&&function(t){let e,n=(xt["status-website"]||{}).metaTags,s=[];for(let e=0;e<n.length;e+=1)s[e]=qt(Ot(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=T()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=T()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);_(t,e,n)},p(t,r){if(0&r){let o;for(n=(xt["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=Ot(t,n,o);s[o]?s[o].p(i,r):(s[o]=qt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){w(s,t),t&&$(e)}}}(e),B=xt["status-website"].css&&function(e){let n,s,r=`<style>${xt["status-website"].css}</style>`;return{c(){n=new z,s=T(),this.h()},l(t){n=M(t),s=T(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),_(t,s,e)},p:t,d(t){t&&$(s),t&&n.d()}}}(),D=xt["status-website"].js&&function(e){let n,s,r=`<script>${xt["status-website"].js}<\/script>`;return{c(){n=new z,s=T(),this.h()},l(t){n=M(t),s=T(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),_(t,s,e)},p:t,d(t){t&&$(s),t&&n.d()}}}(),G=(xt["status-website"]||{}).customBodyHtml&&function(e){let n,s,r=(xt["status-website"]||{}).customBodyHtml+"";return{c(){n=new z,s=T(),this.h()},l(t){n=M(t),s=T(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),_(t,s,e)},p:t,d(t){t&&$(s),t&&n.d()}}}();m=new It({props:{segment:e[0]}});const K=e[2].default,J=function(t,e,n,s){if(t){const r=l(t,e,n,s);return t[0](r)}}(K,e,e[1],null);return{c(){C&&C.c(),n=T(),R.c(),s=y("link"),r=y("link"),o=y("link"),k&&k.c(),i=T(),H&&H.c(),a=T(),j&&j.c(),c=T(),B&&B.c(),f=T(),D&&D.c(),d=T(),h=x(),G&&G.c(),p=x(),mt(m.$$.fragment),g=x(),v=y("main"),J&&J.c(),E=x(),S=y("footer"),A=y("p"),this.h()},l(t){const e=q('[data-svelte="svelte-ri9y7q"]',document.head);C&&C.l(e),n=T(),R.l(e),s=U(e,"LINK",{rel:!0,href:!0}),r=U(e,"LINK",{rel:!0,type:!0,href:!0}),o=U(e,"LINK",{rel:!0,type:!0,href:!0}),k&&k.l(e),i=T(),H&&H.l(e),a=T(),j&&j.l(e),c=T(),B&&B.l(e),f=T(),D&&D.l(e),d=T(),e.forEach($),h=O(t),G&&G.l(t),p=O(t),gt(m.$$.fragment,t),g=O(t),v=U(t,"MAIN",{class:!0});var l=I(v);J&&J.l(l),l.forEach($),E=O(t),S=U(t,"FOOTER",{class:!0});var u=I(S);A=U(u,"P",{}),I(A).forEach($),u.forEach($),this.h()},h(){N(s,"rel","stylesheet"),N(s,"href",`${xt.path}/global.css`),N(r,"rel","icon"),N(r,"type","image/svg"),N(r,"href",(xt["status-website"]||{}).faviconSvg||(xt["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),N(o,"rel","icon"),N(o,"type","image/png"),N(o,"href",(xt["status-website"]||{}).favicon||"/logo-192.png"),N(v,"class","container"),N(S,"class","svelte-jbr799")},m(t,e){C&&C.m(document.head,null),b(document.head,n),R.m(document.head,null),b(document.head,s),b(document.head,r),b(document.head,o),k&&k.m(document.head,null),b(document.head,i),H&&H.m(document.head,null),b(document.head,a),j&&j.m(document.head,null),b(document.head,c),B&&B.m(document.head,null),b(document.head,f),D&&D.m(document.head,null),b(document.head,d),_(t,h,e),G&&G.m(t,e),_(t,p,e),bt(m,t,e),_(t,g,e),_(t,v,e),J&&J.m(v,null),_(t,E,e),_(t,S,e),b(S,A),A.innerHTML=P,L=!0},p(t,[e]){(xt["status-website"]||{}).customHeadHtml&&C.p(t,e),R.p(t,e),(xt["status-website"]||{}).scripts&&k.p(t,e),(xt["status-website"]||{}).links&&H.p(t,e),(xt["status-website"]||{}).metaTags&&j.p(t,e),xt["status-website"].css&&B.p(t,e),xt["status-website"].js&&D.p(t,e),(xt["status-website"]||{}).customBodyHtml&&G.p(t,e);const n={};1&e&&(n.segment=t[0]),m.$set(n),J&&J.p&&(!L||2&e)&&u(J,K,t,t[1],L?e:-1,null,null)},i(t){L||(ft(m.$$.fragment,t),ft(J,t),L=!0)},o(t){dt(m.$$.fragment,t),dt(J,t),L=!1},d(t){C&&C.d(t),$(n),R.d(t),$(s),$(r),$(o),k&&k.d(t),$(i),H&&H.d(t),$(a),j&&j.d(t),$(c),B&&B.d(t),$(f),D&&D.d(t),$(d),t&&$(h),G&&G.d(t),t&&$(p),vt(m,t),t&&$(g),t&&$(v),J&&J.d(t),t&&$(E),t&&$(S)}}}function Kt(t,e,n){let{$$slots:s={},$$scope:r}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,r=t.$$scope)},[o,r,s]}class Jt extends wt{constructor(t){super(),$t(this,t,Kt,zt,i,{segment:0})}}function Vt(t){let e,n,s=t[1].stack+"";return{c(){e=y("pre"),n=S(s)},l(t){e=U(t,"PRE",{});var r=I(e);n=k(r,s),r.forEach($)},m(t,s){_(t,e,s),b(e,n)},p(t,e){2&e&&s!==(s=t[1].stack+"")&&j(n,s)},d(t){t&&$(e)}}}function Wt(e){let n,s,r,o,i,a,c,l,u,f=e[1].message+"";document.title=n=e[0];let d=e[2]&&e[1].stack&&Vt(e);return{c(){s=x(),r=y("h1"),o=S(e[0]),i=x(),a=y("p"),c=S(f),l=x(),d&&d.c(),u=T(),this.h()},l(t){q('[data-svelte="svelte-1moakz"]',document.head).forEach($),s=O(t),r=U(t,"H1",{class:!0});var n=I(r);o=k(n,e[0]),n.forEach($),i=O(t),a=U(t,"P",{class:!0});var h=I(a);c=k(h,f),h.forEach($),l=O(t),d&&d.l(t),u=T(),this.h()},h(){N(r,"class","svelte-17w3omn"),N(a,"class","svelte-17w3omn")},m(t,e){_(t,s,e),_(t,r,e),b(r,o),_(t,i,e),_(t,a,e),b(a,c),_(t,l,e),d&&d.m(t,e),_(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&j(o,t[0]),2&e&&f!==(f=t[1].message+"")&&j(c,f),t[2]&&t[1].stack?d?d.p(t,e):(d=Vt(t),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:t,o:t,d(t){t&&$(s),t&&$(r),t&&$(i),t&&$(a),t&&$(l),d&&d.d(t),t&&$(u)}}}function Ft(t,e,n){let{status:s}=e,{error:r}=e;return t.$$set=t=>{"status"in t&&n(0,s=t.status),"error"in t&&n(1,r=t.error)},[s,r,false]}class Yt extends wt{constructor(t){super(),$t(this,t,Ft,Wt,i,{status:0,error:1})}}function Xt(t){let n,s,r;const o=[t[4].props];var i=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return i&&(n=new i(a())),{c(){n&&mt(n.$$.fragment),s=T()},l(t){n&&gt(n.$$.fragment,t),s=T()},m(t,e){n&&bt(n,t,e),_(t,s,e),r=!0},p(t,e){const r=16&e?ht(o,[pt(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){lt();const t=n;dt(t.$$.fragment,1,0,(()=>{vt(t,1)})),ut()}i?(n=new i(a()),mt(n.$$.fragment),ft(n.$$.fragment,1),bt(n,s.parentNode,s)):n=null}else i&&n.$set(r)},i(t){r||(n&&ft(n.$$.fragment,t),r=!0)},o(t){n&&dt(n.$$.fragment,t),r=!1},d(t){t&&$(s),n&&vt(n,t)}}}function Qt(t){let e,n;return e=new Yt({props:{error:t[0],status:t[1]}}),{c(){mt(e.$$.fragment)},l(t){gt(e.$$.fragment,t)},m(t,s){bt(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.error=t[0]),2&n&&(s.status=t[1]),e.$set(s)},i(t){n||(ft(e.$$.fragment,t),n=!0)},o(t){dt(e.$$.fragment,t),n=!1},d(t){vt(e,t)}}}function Zt(t){let e,n,s,r;const o=[Qt,Xt],i=[];function a(t,e){return t[0]?0:1}return e=a(t),n=i[e]=o[e](t),{c(){n.c(),s=T()},l(t){n.l(t),s=T()},m(t,n){i[e].m(t,n),_(t,s,n),r=!0},p(t,r){let c=e;e=a(t),e===c?i[e].p(t,r):(lt(),dt(i[c],1,1,(()=>{i[c]=null})),ut(),n=i[e],n?n.p(t,r):(n=i[e]=o[e](t),n.c()),ft(n,1),n.m(s.parentNode,s))},i(t){r||(ft(n),r=!0)},o(t){dt(n),r=!1},d(t){i[e].d(t),t&&$(s)}}}function te(t){let n,s;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[Zt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);return n=new Jt({props:o}),{c(){mt(n.$$.fragment)},l(t){gt(n.$$.fragment,t)},m(t,e){bt(n,t,e),s=!0},p(t,[e]){const s=12&e?ht(r,[4&e&&{segment:t[2][0]},8&e&&pt(t[3].props)]):{};147&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(ft(n.$$.fragment,t),s=!0)},o(t){dt(n.$$.fragment,t),s=!1},d(t){vt(n,t)}}}function ee(t,e,n){let{stores:s}=e,{error:r}=e,{status:o}=e,{segments:i}=e,{level0:a}=e,{level1:c=null}=e,{notify:l}=e;var u,f;return W(l),u=St,f=s,J().$$.context.set(u,f),t.$$set=t=>{"stores"in t&&n(5,s=t.stores),"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[r,o,i,a,c,s,l]}class ne extends wt{constructor(t){super(),$t(this,t,ee,te,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const se=[],re=[{js:()=>Promise.all([import("./index.e33f590a.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.361f4634.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].a1d33f58.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].9df7271d.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-bc1bb552.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.5c96880c.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],oe=(ie=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:ie(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:ie(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var ie;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function ae(t,e,n,s){return new(n||(n=Promise))((function(r,o){function i(t){try{c(s.next(t))}catch(t){o(t)}}function a(t){try{c(s.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}c((s=s.apply(t,e||[])).next())}))}function ce(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let le,ue=1;const fe="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},de={};let he,pe;function me(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function ge(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(he))return null;let e=t.pathname.slice(he.length);if(""===e&&(e="/"),!se.some((t=>t.test(e))))for(let n=0;n<oe.length;n+=1){const s=oe[n],r=s.pattern.exec(e);if(r){const n=me(t.search),o=s.parts[s.parts.length-1],i=o.params?o.params(r):{},a={host:location.host,path:e,query:n,params:i};return{href:t.href,route:s,match:r,page:a}}}}function be(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=ce(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,s=String(n?e.href.baseVal:e.href);if(s===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=ge(r);if(o){$e(o,null,e.hasAttribute("sapper:noscroll"),r.hash),t.preventDefault(),fe.pushState({id:le},"",r.href)}}function ve(){return{x:pageXOffset,y:pageYOffset}}function _e(t){if(de[le]=ve(),t.state){const e=ge(new URL(location.href));e?$e(e,t.state.id):location.href=location.href}else!function(t){ue=t}(ue+1),function(t){le=t}(ue),fe.replaceState({id:le},"",location.href)}function $e(t,e,n,s){return ae(this,void 0,void 0,(function*(){const r=!!e;if(r)le=e;else{const t=ve();de[le]=t,le=e=++ue,de[le]=n?t:{x:0,y:0}}if(yield pe(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=de[e];s&&(t=document.getElementById(s.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),de[le]=n,n&&(r||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function we(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let ye,Ee=null;function Se(t){const e=ce(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=ge(new URL(t,we(document)));if(e)Ee&&t===Ee.href||(Ee={href:t,promise:De(e)}),Ee.promise}(e.href)}function xe(t){clearTimeout(ye),ye=setTimeout((()=>{Se(t)}),20)}function Te(t,e={noscroll:!1,replaceState:!1}){const n=ge(new URL(t,we(document)));if(n){const s=$e(n,null,e.noscroll);return fe[e.replaceState?"replaceState":"pushState"]({id:le},"",t),s}return location.href=t,new Promise((()=>{}))}const Ae="undefined"!=typeof __SAPPER__&&__SAPPER__;let Le,Ne,Pe,Ie=!1,Ce=[],Re="{}";const Ue={page:function(t){const e=Et(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let s;return e.subscribe((e=>{(void 0===s||n&&e!==s)&&t(s=e)}))}}}({}),preloading:Et(null),session:Et(Ae&&Ae.session)};let ke,Oe,He;function Me(t,e){const{error:n}=t;return Object.assign({error:n},e)}function je(t){return ae(this,void 0,void 0,(function*(){Le&&Ue.preloading.set(!0);const e=function(t){return Ee&&Ee.href===t.href?Ee.promise:De(t)}(t),n=Ne={},s=yield e,{redirect:r}=s;if(n===Ne)if(r)yield Te(r.location,{replaceState:!0});else{const{props:e,branch:n}=s;yield Be(n,e,Me(e,t.page))}}))}function Be(t,e,n){return ae(this,void 0,void 0,(function*(){Ue.page.set(n),Ue.preloading.set(!1),Le?Le.$set(e):(e.stores={page:{subscribe:Ue.page.subscribe},preloading:{subscribe:Ue.preloading.subscribe},session:Ue.session},e.level0={props:yield Pe},e.notify=Ue.page.notify,Le=new ne({target:He,props:e,hydrate:!0})),Ce=t,Re=JSON.stringify(n.query),Ie=!0,Oe=!1}))}function De(t){return ae(this,void 0,void 0,(function*(){const{route:e,page:n}=t,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(r&&(r.statusCode!==t||r.location!==e))throw new Error("Conflicting redirects");r={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Pe){const t=()=>({});Pe=Ae.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},ke)}let a,c=1;try{const r=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map(((e,a)=>ae(this,void 0,void 0,(function*(){const f=s[a];if(function(t,e,n,s){if(s!==Re)return!0;const r=Ce[t];return!!r&&(e!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,f,l,r)&&(u=!0),o.segments[c]=s[a+1],!e)return{segment:f};const d=c++;let h;if(Oe||u||!Ce[a]||Ce[a].part!==e.i){u=!1;const{default:s,preload:r}=yield re[e.i].js();let o;o=Ie||!Ae.preloaded[a+1]?r?yield r.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},ke):{}:Ae.preloaded[a+1],h={component:s,props:o,segment:f,match:l,part:e.i}}else h=Ce[a];return o[`level${d}`]=h})))))}catch(t){o.error=t,o.status=500,a=[]}return{redirect:r,props:o,branch:a}}))}var Ge,qe,ze;Ue.session.subscribe((t=>ae(void 0,void 0,void 0,(function*(){if(ke=t,!Ie)return;Oe=!0;const e=ge(new URL(location.href)),n=Ne={},{redirect:s,props:r,branch:o}=yield De(e);n===Ne&&(s?yield Te(s.location,{replaceState:!0}):yield Be(o,r,Me(r,e.page)))})))),Ge={target:document.querySelector("#sapper")},qe=Ge.target,He=qe,ze=Ae.baseUrl,he=ze,pe=je,"scrollRestoration"in fe&&(fe.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{fe.scrollRestoration="auto"})),addEventListener("load",(()=>{fe.scrollRestoration="manual"})),addEventListener("click",be),addEventListener("popstate",_e),addEventListener("touchstart",Se),addEventListener("mousemove",xe),Ae.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:s,preloaded:r,status:o,error:i}=Ae;Pe||(Pe=r&&r[0]);const a={error:i,status:o,session:s,level0:{props:Pe},level1:{props:{status:o,error:i},component:Yt},segments:r},c=me(n);Be([],a,{host:t,path:e,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;fe.replaceState({id:ue},"",e);const n=ge(new URL(location.href));if(n)return $e(n,ue,!0,t)}));export{vt as A,A as B,r as C,X as D,M as E,c as F,d as G,z as H,q as I,kt as J,E as K,Te as L,B as M,L as N,e as O,P,ht as Q,W as R,wt as S,F as T,f as U,pt as V,nt as W,G as X,I as a,k as b,U as c,$ as d,y as e,N as f,_ as g,b as h,$t as i,x as j,O as k,lt as l,dt as m,t as n,ut as o,ft as p,V as q,xt as r,i as s,S as t,j as u,T as v,w,mt as x,gt as y,bt as z};

import __inject_styles from './inject_styles.803b7e80.js';