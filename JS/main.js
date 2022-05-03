// setInterval(()=>{
//     document.querySelector('#cur_time').innerHTML = new Date().toLocaleString();
// }, 300);

window.onload = displayClock();
function displayClock(){
    var display = new Date().toLocaleTimeString();
    document.querySelector('#cur_time').innerHTML = display;
    setTimeout(displayClock, 1000); 
}

var visit_cnt = document.querySelector("#user_cnt")

var visitCount = localStorage.getItem("page_view");
if (visitCount) {
    visitCount = Number(visitCount) + 1;
    localStorage.setItem("page_view", visitCount);
}else{
    visitCount = 1;
    localStorage.setItem("page_view", 1);
}
visit_cnt.innerHTML = visitCount;

var img_stats=1;

document.querySelector('.prev').addEventListener(
    'click', (event)=>{
        if(img_stats>0){
            img_stats-=1;
        }
        if(img_stats==0){
            document.querySelector('#img2').style.display='none';
            document.querySelector('#img1').style.display='block';
        }else if(img_stats==1){
            document.querySelector('#img3').style.display='none';
            document.querySelector('#img2').style.display='block';
        }
    }
)

document.querySelector('.next').addEventListener(
    'click', (event)=>{
        if(img_stats<2){
            img_stats+=1;
        }
        if(img_stats==1){
            document.querySelector('#img1').style.display='none';
            document.querySelector('#img2').style.display='block';
        }else if(img_stats==2){
            document.querySelector('#img2').style.display='none';
            document.querySelector('#img3').style.display='block';
        }
    }
)