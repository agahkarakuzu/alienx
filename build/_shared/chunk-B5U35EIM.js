import{a as g}from"alienx/build/_shared/chunk-DZADZCIM.js";import{c as t}from"alienx/build/_shared/chunk-2NH4LW52.js";var l=t((s,r)=>{var n=g();r.exports=a;a.displayName="racket";a.aliases=["rkt"];function a(e){e.register(n),e.languages.racket=e.languages.extend("scheme",{"lambda-parameter":{pattern:/([(\[]lambda\s+[(\[])[^()\[\]'\s]+/,lookbehind:!0}}),e.languages.insertBefore("racket","string",{lang:{pattern:/^#lang.+/m,greedy:!0,alias:"keyword"}}),e.languages.rkt=e.languages.racket}});export{l as a};
