home();
sleep(1500);
click('微信');
//只点一次
var arr=["Glitch"];
var 昵称控件= id('com.tencent.mm:id/fzg').find().get(2);
if(对比昵称(昵称控件.text())){
log(昵称控件.parent().parent().findOne(id('com.tencent.mm:id/kn')).click());
//text('赞').waitFor();
sleep(1000);
var zan= id('com.tencent.mm:id/ka').find().get(0);
log(zan.click());
//log(text('赞').findOne().parent().click());
sleep(1000);
//arr.push(昵称控件.text());
arr=[昵称控件.text()];
}else{
    log("这个已经点过")
}


// //log(text('赞').findOne().parent());

// function 对比昵称(name){
//     var res = true;
// arr.forEach(child => {if(child==name){res = false;}})
// return res;
// }
// for (i=2;i<=10;i+=2)
// {
// var 昵称控件= id('com.tencent.mm:id/fzg').find().get(2);

// log(昵称控件.parent().parent().findOne(id('com.tencent.mm:id/kn')).click());
// //text('赞').waitFor();
// sleep(1000);
// var zan= id('com.tencent.mm:id/ka').find().get(0);
// log(zan.click());
// //log(text('赞').findOne().parent().click());
// sleep(1000);
// log(昵称控件.parent().parent().findOne(id('com.tencent.mm:id/kn')).click());

// }

toast('pengyouquan');