/**
 * Created by Administrator on 2017/3/12.
 */

//封装一个动画函数
function anmite(item,target){
    clearInterval(item.setId);
    item.setId=setInterval(function () {
        var step=10;
        var current=item.offsetLeft;
        step=current<target?step:-step;
        current+=step;
        if(Math.abs(target-current)<Math.abs(step)){
            item.style.left=target+"px";
            clearInterval(item.setId)
        }else{
            item.style.left=current+"px";
        }
        
    },10)
}
//获取相框的宽度
var containerWidth=my$("container").offsetWidth;
//获取滚动图片所在的ul
var pageObj=my$("pageImg");
var pic=0;
//获取滚动图片
var listArr=my$("pageImg").children
//克隆第一个图片
my$("pageImg").appendChild(my$("pageImg").children[0].cloneNode(true))

//获取所有的小图标,为其注册鼠标经过和鼠标离开的事件
var squireObjs=my$("squire").children[0].children;
for(var i=0;i<squireObjs.length;i++){
    var squireObj=squireObjs[i];
    squireObj.setAttribute("index",i);
    squireObj.onmouseover=mouseHandle;
}
//默认情况下第一个样式是选中的
my$("squire").children[0].children[0].className="squireStyle"
function mouseHandle() {
   for(var i=0;i<squireObjs.length;i++){

       squireObjs[i].removeAttribute("class");
   }
    this.style.cursor="pointer"
    this.className="squireStyle";
    //获取索引
    var pic=this.getAttribute("index");
    anmite(pageObj,-pic*containerWidth);

}

my$("container").onmouseover=function() {
    my$("mask").style.display = "block"
}

my$("container").onmouseout=function(){
    my$("mask").style.display="none"
}
my$("left").onclick=function () {

    if(pic==0){
        pic=listArr.length-1
        pageObj.style.left=-pic*containerWidth+"px";
    }
    pic--;
    anmite(pageObj,-pic*containerWidth)
}