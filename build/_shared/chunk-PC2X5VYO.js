import{c as k}from"/alienx/build/_shared/chunk-2NH4LW52.js";var z=k((Z,A)=>{A.exports=d;d.displayName="graphql";d.aliases=[];function d(u){u.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:u.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},u.hooks.add("after-tokenize",function(y){if(y.language!=="graphql")return;var i=y.tokens.filter(function(t){return typeof t!="string"&&t.type!=="comment"&&t.type!=="scalar"}),a=0;function o(t){return i[a+t]}function m(t,n){n=n||0;for(var e=0;e<t.length;e++){var r=o(e+n);if(!r||r.type!==t[e])return!1}return!0}function v(t,n){for(var e=1,r=a;r<i.length;r++){var q=i[r],g=q.content;if(q.type==="punctuation"&&typeof g=="string"){if(t.test(g))e++;else if(n.test(g)&&(e--,e===0))return r}}return-1}function s(t,n){var e=t.alias;e?Array.isArray(e)||(t.alias=e=[e]):t.alias=e=[],e.push(n)}for(;a<i.length;){var h=i[a++];if(h.type==="keyword"&&h.content==="mutation"){var l=[];if(m(["definition-mutation","punctuation"])&&o(1).content==="("){a+=2;var p=v(/^\($/,/^\)$/);if(p===-1)continue;for(;a<p;a++){var f=o(0);f.type==="variable"&&(s(f,"variable-input"),l.push(f.content))}a=p+1}if(m(["punctuation","property-query"])&&o(0).content==="{"&&(a++,s(o(0),"property-mutation"),l.length>0)){var w=v(/^\{$/,/^\}$/);if(w===-1)continue;for(var c=a;c<w;c++){var b=i[c];b.type==="variable"&&l.indexOf(b.content)>=0&&s(b,"variable-input")}}}}})}});export{z as a};
