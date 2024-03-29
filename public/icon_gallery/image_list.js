let MAX = 29;

function setMax(num){
  MAX = num-0;
}

document.addEventListener("DOMContentLoaded", function () {
    imageList();
});

function imageList(){
    let userAgent = window.navigator.userAgent.toLowerCase();
    let imageSize = 120;
    let margin = 15;
    if(userAgent.indexOf('iphone') != -1 ||
    (userAgent.indexOf('android') != -1 && userAgent.indexOf('mobile') != -1)) {
        imageSize = 70;
        margin = 5;
    }
    let html = '';
    html += '  <div style=\"padding: 15px; margin-left:'+margin+'px; margin-right:'+margin+'px; text-align: center\">';
    for(let i=0; i<MAX; i++){
        html += '   <a href='+i+'\"image_viewer.html?\"><img src=\"images/'+i+'.png\" height=\"'+imageSize+'px\"></a>';
    }
    html += '  </div>'
    document.getElementById('image_list').insertAdjacentHTML('beforeend', html);
}
