/*
* @Author: Dell
* @Date:   2018-09-13 16:36:57
* @Last Modified by:   Dell
* @Last Modified time: 2018-09-14 00:46:54
*/
//页面加载
window.onload=function(){
	// 购物车
	$(".shop").mouseenter(function(){
		$(".that").clearQueue().slideDown("2000");
	});
	$(".shop").mouseleave(function(){
		$(".that").clearQueue().slideUp();
	})
// 侧导航
  let lis=$(".text ul li");
  let aside=$(".text .shade");

  // console.log(lis,aside);
  // 隐式循环
  lis.mouseenter(function(){
  	$(".shade").css("display","none");
  	$(this).children(".shade").css("display","block");
  })
  lis.mouseleave(function(){
  	$(this).children(".shade").css("display","none");

  })
  // 小米闪购平移
  let buttom1=$(".xiaomishangou .jt .zuo");
    let milist1=$(".neirong .lists");
    // console.log(buttom1,milist1);
    let w1=milist1.width()/2;
    // console.log(w1);
    let times1=0;
    buttom1[0].onclick=function(){
        times1++;
        if (times1==2) {
            times1=1;
        }
        milist1.css("transform",`translate(${(-w1*times1)}px)`);
    }
    buttom1[1].onclick=function(){
        times1--;
        if (times1==-1) {
            times1=0;
        }
        milist1.css("transform",`translate(${(-w1*times1)}px)`);
    }
  
  // 商品选项卡
  let parent=$(".box-pj .top .lis1 a");
  let son=$(".box-pj .list");
    let hx=$(".box-pj .top .lis1 a .active2");
      // console.log(parent,son);
    parent.last().css("color","#ff6700");
    hx.last().css("background","#ff6700");
    son.last().css("display","block");
    parent.mouseenter(function(){
        let i=$(this).index();
        son.css("display","none").eq(i).css("display","block");
        parent.css("color","#676769").eq(i).css("color","#ff6700");
        hx.css("background","#F5F5F5").eq(i).css("background","#ff6700");

    });
 

  // 轮播图
  let imgs=$(".imgs img");
  let dots=$(".dot li");
   let leftbtn=$(".leftbtn");
    let rightbtn=$(".rightbtn");
     let banner=$(".banner");
    // console.log(imgs,dots,banner,leftbtn,rightbtn);
    let now=0;
    imgs.first().css({"z-index":"10"});
    dots.first().addClass('active');
    let t=setInterval(move, 2000);
    function move(){
        now++;
        if (now==imgs.length) {
            now=0;
        }
        imgs.css("z-index","5").eq(now).css("z-index","10");
        dots.removeClass('active').eq(now).addClass('active');
    }
    function moveL(){
        now--;
        if (now==-1) {
            now=imgs.length-1;
        }
        imgs.css("z-index","5").eq(now).css("z-index","10");
        dots.removeClass('active').eq(now).addClass('active');
    }
    rightbtn.click(function() {
        move();
    });

    leftbtn.click(function() {
        moveL();
    });
    banner.mouseenter(function () {
         clearInterval(t);
     })
    banner.mouseleave(function () {
         t=setInterval(move,2000);
    })
    dots.click(function(){
        let i=$(this).index();
        dots.removeClass('active').eq(i).addClass('active');
        imgs.css("z-index","5").eq(i).css("z-index","10");
    })
    // 为你推荐
    let button=$(".box-tj .top .jt .zuo ");
    let milist=$(".box-tj .list");
    let w=milist.width()/2;
    let times=0;
    button[0].onclick=function(){
             times++;
            if (times==2) {
                times=1;
            }
            milist.css("transform",`translate(${(-w*times)}px)`);
        }
    button[1].onclick=function(){
        times--;
        if (times==-1) {
            times=0;
        }
        milist.css("transform",`translate(${(-w*times)}px)`);
        }



}