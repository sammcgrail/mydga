!function(e){e.fn.dataTableExt.oApi.fnGetColumnData=function(e,n,a,t,r){if("undefined"==typeof n)return new Array;"undefined"==typeof a&&(a=!0),"undefined"==typeof t&&(t=!0),"undefined"==typeof r&&(r=!0);var i;i=1==t?e.aiDisplay:e.aiDisplayMaster;for(var f=new Array,u=0,o=i.length;o>u;u++){iRow=i[u];var y=this.fnGetData(iRow,n);(1!=r||0!=y.length)&&(1==a&&jQuery.inArray(y,f)>-1||f.push(y))}return f}}(jQuery);