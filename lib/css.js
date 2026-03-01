'use strict';

function getCSS() {
  return `
<style data-hexo-design-cards>
.dc-flow{display:flex;align-items:center;justify-content:center;gap:12px;margin:20px 0;flex-wrap:wrap}
.dc-flow-step{color:#fff;padding:12px 20px;border-radius:8px;text-align:center}
.dc-flow-step b{display:block}
.dc-flow-step span{font-size:12px}
.dc-flow-step.dc-highlight{border-width:3px;border-style:solid}
.dc-flow-arrow{font-size:24px}
.dc-flow-caption{text-align:center;font-size:13px;margin:0 0 10px}

.dc-cards{display:grid;gap:20px;margin:25px 0}
.dc-card{border-width:2px;border-style:solid;border-radius:12px;overflow:hidden}
.dc-card-header{padding:12px 15px}
.dc-card-header h4{margin:0;color:#fff;font-size:18px}
.dc-card-body{padding:15px}
.dc-card-body p{font-size:15px;color:#555;margin:0 0 10px}
.dc-card-body code{background:var(--dc-c5);padding:2px 6px;border-radius:4px;font-size:13px}

.dc-accents{display:grid;gap:15px;margin:25px 0}
.dc-accent{padding:15px;border-radius:8px;border-left:5px solid}
.dc-accent b{display:block;margin-bottom:4px}
.dc-accent p{font-size:15px;margin:5px 0 0;color:#555}

.dc-compare{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin:20px 0}
.dc-compare-option{padding:20px;border-radius:12px;border-width:3px;border-style:solid}
.dc-compare-option.dc-recommended{border-width:2px}
.dc-compare-option h4{margin:0 0 10px;text-align:center}
.dc-compare-option .dc-emoji{text-align:center;font-size:40px}
.dc-compare-body{text-align:center}
.dc-compare-body p{font-size:15px;color:#555;line-height:1.6}
.dc-compare-body p strong{font-size:24px;display:block;margin:10px 0}

.dc-quotes{border-width:3px;border-style:solid;border-radius:12px;padding:20px;margin:25px 0}
.dc-quotes h4{margin:0 0 15px}
.dc-quote{border-left:3px solid;padding-left:15px;margin-bottom:15px}
.dc-quote p{margin:0;font-size:14px;font-style:italic}
.dc-quote cite{display:block;margin:5px 0 0;font-size:12px;font-style:normal}

.dc-alert{border-width:2px;border-style:solid;border-radius:12px;padding:20px;margin:25px 0}
.dc-alert h4{margin:0 0 10px}
.dc-alert p,.dc-alert div{margin:0;line-height:1.8}

.dc-minicards{display:grid;grid-template-columns:repeat(3,1fr);gap:15px;margin:20px 0}
.dc-mini{border-width:3px;border-style:solid;border-radius:8px;padding:15px}
.dc-mini h5{margin:0 0 8px}
.dc-mini p{font-size:13px;color:#555;margin:0}
.dc-mini code{background:rgba(0,0,0,0.06);padding:1px 5px;border-radius:3px;font-size:0.85em}

.dc-banner{color:#fff;padding:15px 20px;border-radius:8px;margin:60px 0 20px}
.dc-banner h2{margin:0;font-size:20px;font-weight:bold}

@media(max-width:768px){
  .dc-cards,.dc-accents{grid-template-columns:1fr!important}
  .dc-compare{grid-template-columns:1fr}
  .dc-minicards{grid-template-columns:1fr}
  .dc-flow{flex-direction:column}
  .dc-flow-arrow{transform:rotate(90deg)}
}
</style>`;
}

module.exports = { getCSS };
