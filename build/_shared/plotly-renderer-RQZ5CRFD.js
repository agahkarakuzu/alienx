import{h as m,l as f}from"alienx/build/_shared/chunk-HYMQ7M2K.js";import"alienx/build/_shared/chunk-2NH4LW52.js";f();var y=function(h,t,i,n){function p(o){return o instanceof i?o:new i(function(r){r(o)})}return new(i||(i=Promise))(function(o,r){function d(a){try{l(n.next(a))}catch(c){r(c)}}function s(a){try{l(n.throw(a))}catch(c){r(c)}}function l(a){a.done?o(a.value):p(a.value).then(d,s)}l((n=n.apply(h,t||[])).next())})},g="jp-RenderedPlotly",w="jp-MaterialIcon jp-PlotlyIcon",u="application/vnd.plotly.v1+json",e=class extends m{constructor(t){super(),this.addClass(g),this._mimeType=t.mimeType,this._img_el=document.createElement("img"),this._img_el.className="plot-img",this.node.appendChild(this._img_el),this._img_el.addEventListener("mouseenter",i=>{this.createGraph(this._model)})}renderModel(t){if(this.hasGraphElement())return Promise.resolve();this._model=t;let i=t.data["image/png"];return i!=null?(this.updateImage(i),Promise.resolve()):this.createGraph(t)}hasGraphElement(){return this.node.querySelector(".plot-container")!==null}updateImage(t){this.hideGraph(),this._img_el.src="data:image/png;base64,"+t,this.showImage()}hideGraph(){let t=this.node.querySelector(".plot-container");t!=null&&(t.style.display="none")}showGraph(){let t=this.node.querySelector(".plot-container");t!=null&&(t.style.display="block")}hideImage(){let t=this.node.querySelector(".plot-img");t!=null&&(t.style.display="none")}showImage(){let t=this.node.querySelector(".plot-img");t!=null&&(t.style.display="block")}createGraph(t){let{data:i,layout:n,frames:p,config:o}=t.data[this._mimeType];return n.height||(n.height=360),(()=>y(this,void 0,void 0,function*(){return e.Plotly===null&&(e.Plotly=yield import("alienx/build/_shared/plotly-X3DPK2MN.js"),e.Plotly=e.Plotly.default,e._resolveLoadingPlotly()),e.loadingPlotly}))().then(()=>e.Plotly.react(this.node,i,n,o)).then(d=>{this.showGraph(),this.hideImage(),this.update(),p&&e.Plotly.addFrames(this.node,p),this.node.offsetWidth>0&&this.node.offsetHeight>0&&e.Plotly.toImage(d,{format:"png",width:this.node.offsetWidth,height:this.node.offsetHeight}).then(s=>{let l=s.split(",")[1];t.data["image/png"]!==l&&t.setData({data:Object.assign(Object.assign({},t.data),{"image/png":l})})}),this.node.on("plotly_webglcontextlost",()=>{let s=t.data["image/png"];if(s!=null)return this.updateImage(s),Promise.resolve()})})}onAfterShow(t){this.update()}onResize(t){this.update()}onUpdateRequest(t){e.Plotly&&this.isVisible&&this.hasGraphElement()&&e.Plotly.redraw(this.node).then(()=>{e.Plotly.Plots.resize(this.node)})}};e.Plotly=null;e.loadingPlotly=new Promise(h=>{e._resolveLoadingPlotly=h});var _={safe:!0,mimeTypes:[u],createRenderer:h=>new e(h)},S=[{id:"@jupyterlab/plotly-extension:factory",rendererFactory:_,rank:0,dataType:"json",fileTypes:[{name:"plotly",mimeTypes:[u],extensions:[".plotly",".plotly.json"],iconClass:w}],documentWidgetFactoryOptions:{name:"Plotly",primaryFileType:"plotly",fileTypes:["plotly","json"],defaultFor:["plotly"]}}],j=S;export{u as MIME_TYPE,e as RenderedPlotly,j as default,_ as rendererFactory};
