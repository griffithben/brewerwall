(function(){"use strict";var root=this,Beercalc={};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=Beercalc),exports.Beercalc=Beercalc):root.Beercalc=Beercalc,Beercalc.abv=function(og,fg){return og>fg&&!isNaN(og)&&!isNaN(fg)?131*(og-fg):null},Beercalc.abw=function(og,fg){return og>fg&&!isNaN(og)&&!isNaN(fg)?.79*this.abv(og,fg)/fg:null},Beercalc.mcu=function(weight,lovibond,volume){return 0===volume||null===volume||null===weight||null===lovibond||isNaN(weight)||isNaN(lovibond)||isNaN(volume)?null:weight*lovibond/volume},Beercalc.srm=function(weight,lovibond,volume){return null===volume||null===weight||null===lovibond||isNaN(weight)||isNaN(lovibond)||isNaN(volume)?null:1.4922*Math.pow(this.mcu(weight,lovibond,volume),.6859)},Beercalc.aau=function(alpha,weight){return null===alpha||null===weight||isNaN(alpha)||isNaN(weight)?null:alpha*weight},Beercalc.ibu=function(alpha,weight,time,gravity,volume){return 0===volume||null===alpha||null===weight||null===time||null===gravity||null===volume||isNaN(alpha)||isNaN(weight)||isNaN(time)||isNaN(gravity)||isNaN(volume)?null:this.aau(alpha,weight)*this.utilization(time,gravity)*75/volume},Beercalc.utilization=function(time,gravity){return isNaN(time)||isNaN(gravity)||null===time||null===gravity?null:1.65*Math.pow(125e-6,gravity-1)*(1-Math.pow(Math.E,-.04*time))/4.15},Beercalc.plato=function(sGravity){return isNaN(sGravity)||null===sGravity?null:-463.37+668.72*sGravity-205.35*Math.pow(sGravity,2)},Beercalc.realExtract=function(og,fg){return og>fg&&!isNaN(og)&&!isNaN(fg)&&null!==og&&null!==fg?.1808*this.plato(og)+.8192*this.plato(fg):null},Beercalc.calories=function(og,fg){return og>fg&&!isNaN(og)&&!isNaN(fg)&&null!==og&&null!==fg?(6.9*this.abw(og,fg)+4*(this.realExtract(og,fg)-.1))*fg*3.55:null},Beercalc.attenuation=function(og,fg){return og>fg&&!isNaN(og)&&!isNaN(fg)&&null!==og&&null!==fg?(og-fg)/(og-1):null},Beercalc.gu=function(g){return isNaN(g)||null===g?null:Math.round(1e3*(g-1))},Beercalc.totalGravity=function(g,v){return isNaN(g)||isNaN(v)||null===g||null===v?null:this.gu(g)*v},Beercalc.finalGravity=function(g,vol_beg,vol_end){return isNaN(g)||isNaN(vol_beg)||isNaN(vol_end)||null===g||null===vol_beg||null===vol_end?null:this.totalGravity(g,vol_beg)/vol_end},Beercalc.extractAddition=function(target_gu,total_gu,extractType){var extract;return"LME"==extractType?extract=38:"DME"==extractType?extract=45:isNaN(extractType)||(extract=extractType),isNaN(target_gu)||isNaN(total_gu)||isNaN(extract)||null===target_gu||null===total_gu||null===extractType?null:(target_gu-total_gu)/extract},Beercalc.gravityCorrection=function(temp,g){return isNaN(temp)||isNaN(g)||null===temp||null===g?null:.001*(1.313454-.132674*temp+2.057793*Math.pow(10,-3)*Math.pow(temp,2)-2.627634*Math.pow(10,-6)*Math.pow(temp,3))+g}}).call(this);