"ui";
/*
 * @Author: 反八怪_
 * @QQ: 1694883651@qq.com
 * @Version: Auto.Js4.1.1
 * @Tips: 注意控件保存的时候顺序，需要按照顺序才能保存成功，有改进或合作请联系作者QQ
 * @首发QQ群：4607221
 * @LastEditors: 反八怪_
 * @LastEditTime: 2020-07-29 
 */

var 全局= './全局.js'
if (files.exists(全局)) {} else {files.write(全局, '{}')}
var pzr=files.read(全局);
var pz=JSON.parse(pzr);
var qj={}//对象
var bta= './bta.js'
if (files.exists(bta)) {} else {files.write(bta, '{}')}
var btar=files.read(bta);
var pzbta=JSON.parse(btar);
var btaj={}//对象
    
    var btb= './btb.js'
if (files.exists(btb)) {} else {files.write(btb, '{}')}
var btbr=files.read(btb);
var pzbtb=JSON.parse(btbr);
var btbj={}//对象
    
var btc= './btc.js'
if (files.exists(btc)) {} else {files.write(btc, '{}')}
var btcr=files.read(btc);
var pzbtc=JSON.parse(btcr);
var btcj={}//对象
    var btd= './btd.js'
if (files.exists(btd)) {} else {files.write(btd, '{}')}
var btdr=files.read(btd);
var pzbtd=JSON.parse(btdr);
var btdj={}//对象
var bte= './bte.js'
if (files.exists(bte)) {} else {files.write(bte, '{}')}
var bter=files.read(bte);
var pzbte=JSON.parse(bter);
var btej={}//对象
var btf= './btf.js'
if (files.exists(btf)) {} else {files.write(btf, '{}')}
var btfr=files.read(btf);
var pzbtf=JSON.parse(btfr);
var btfj={}//对象

var tea= './tea.js'
if (files.exists(tea)) {} else {files.write(tea, '{}')}
var tear=files.read(tea);
var pztea=JSON.parse(tear);
var teaj={}//对象



//toastLog(b.
var h=device.height;
const resources = context.getResources();
const  th= resources.getDimensionPixelSize(resources.getIdentifier("status_bar_height", "dimen", "android"));
//var btavi="visible"

ui.layout(
<scroll>
    <frame id="parent">
     <button id="ok"text="带颜色按钮" style="Widget.AppCompat.Button.Colored" w="80"h="30"/>
        <fab id="add" w="auto" h="auto" src="@drawable/ic_add_black_48dp"
            margin="16" layout_gravity="top|right" tint="#ffffff" />

    <button visibility="gone" w="auto"h="auto"id="bta" tag="一"text="我是按钮一啊"/>
        <button visibility="gone" w="auto"h="auto"id="btb" tag="二"text="我是按钮二啊"/>
    <button visibility="gone" w="auto"h="auto"id="btc" tag="三"text="我是按钮三啊"/>
    <button visibility="gone" w="auto"h="auto"id="btd" tag="四"text="我是按钮四啊"/>
    <button visibility="gone" w="auto"h="auto"id="bte" tag="五"text="我是按钮五啊"/>
    <button visibility="gone" w="auto"h="auto"id="btf" tag="六"text="我是按钮六啊"/>
    <button visibility="gone" w="auto"h="auto"id="btg" tag="七"text="我是按钮七啊"/>
    <button visibility="gone" w="auto"h="auto"id="bth" tag="八"text="我是按钮八啊"/>
    <button visibility="gone" w="auto"h="auto"id="bti" tag="九"text="我是按钮九啊"/>
    <button visibility="gone" w="auto"h="auto"id="btj" tag="十"text="我是按钮十啊"/>
    <button visibility="gone" w="auto"h="auto"id="btk" tag="十一"text="我是按钮十一啊"/>
    <button visibility="gone" w="auto"h="auto"id="btl" tag="十二"text="我是按钮十二啊"/>
   
         <text visibility="visible" w="auto"h="auto"id="tea"textSize="25"tag="一"text="我是文字一啊"/>
         <text visibility="gone" w="auto"h="auto"id="teb" textSize="25"tag="二"text="我是文字二啊"/>
         <text visibility="gone" w="auto"h="auto"id="tec" textSize="25"tag="三"text="我是文字三啊"/>
         <text visibility="gone" w="auto"h="auto"id="ted"textSize="25" tag="四"text="我是文字四啊"/>
         <text visibility="gone" w="auto"h="auto"id="tee" textSize="25"tag="五"text="我是文字五啊"/>
         <text visibility="gone" w="auto"h="auto"id="tef" textSize="25"tag="六"text="我是文字六啊"/>
         <text visibility="gone" w="auto"h="auto"id="teg" tag="七"text="我是文字七啊"/>
         <text visibility="gone" w="auto"h="auto"id="teh" tag="八"text="我是文字八啊"/>
         <text visibility="gone" w="auto"h="auto"id="tei" tag="九"text="我是文字九啊"/>
         <text visibility="gone" w="auto"h="auto"id="tej" tag="十"text="我是文字十啊"/>
         <text visibility="gone" w="auto"h="auto"id="tek" tag="十一"text="我是文字十一啊"/>
         <text visibility="gone" w="auto"h="auto"id="tel" tag="十二"text="我是文字十二啊"/>

       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
        <text  visibility="visible" textSize="30"textColor="#ff00ff" text="UIpro-By_Mr_F-1694883651" id="title"/>
<text  text="" id="h"h="{{h-250}}px"/>
    </frame>
 </scroll>
    );
   //可用控件 6按钮，6字符，3图片，2时间，3选择，4输入 

    var btarr=["按钮一","按钮二","按钮三","按钮四","按钮五","按钮六"]
    var tearr=["文本一","文本二","文本三","文本四","文本五","文本六"]
    var imarr=["图片一","图片二","图片三"];
    var charr=["选择一","选择二","选择三"];
    var inarr=["输入一","输入二","输入三","输入四"];
    var suparr=["高级输入一","高级输入二"]
try{
  ui.title.visibility=pz.tivi 
    }catch(e){}
   try{//按钮一的配置ui.bta.setBackgroundColor(colors.parseColor(pzbta.btabg));//常规操作
       ui.bta.visibility=pzbta.btavi;ui.bta.setText(pzbta.btate);ui.bta.x=pzbta.btax;ui.bta.y=pzbta.btay-th;ui.bta.setTextSize(Number(pzbta.btasi))  
       ui.bta.setTextColor(colors.parseColor(pzbta.btacol));ui.bta.attr("bg",pzbta.btabg);ui.bta.attr("w",Number(pzbta.btawh.split(",")[0]));ui.bta.attr("h",Number(pzbta.btawh.split(",")[1]))             
        }catch(e) {}
   try{//按钮一的配置ui.bta.setBackgroundColor(colors.parseColor(pzbta.btabg));//常规操作
       ui.btb.visibility=pzbtb.btbvi;ui.btb.setText(pzbtb.btbte);ui.btb.x=pzbtb.btbx;ui.btb.y=pzbtb.btby-th;ui.btb.setTextSize(Number(pzbtb.btbsi))  
       ui.btb.setTextColor(colors.parseColor(pzbtb.btbcol));ui.btb.attr("bg",pzbtb.btbbg);ui.btb.attr("w",Number(pzbtb.btbwh.split(",")[0]));ui.btb.attr("h",Number(pzbtb.btbwh.split(",")[1]))             
        }catch(e) {} 
   try{//按钮一的配置ui.bta.setBackgroundColor(colors.parseColor(pzbta.btabg));//常规操作
       ui.btc.visibility=pzbtc.btcvi;ui.btc.setText(pzbtc.btcte);ui.btc.x=pzbtc.btcx;ui.btc.y=pzbtc.btcy-th;ui.btc.setTextSize(Number(pzbtc.btcsi))  
       ui.btc.setTextColor(colors.parseColor(pzbtc.btccol));ui.btc.attr("bg",pzbtc.btcbg);ui.btc.attr("w",Number(pzbtc.btcwh.split(",")[0]));ui.btc.attr("h",Number(pzbtc.btcwh.split(",")[1]))             
        }catch(e) {} 
     try{//按钮一的配置ui.bta.setBackgroundColor(colors.parseColor(pzbta.btabg));//常规操作
       ui.btd.visibility=pzbtd.btdvi;ui.btd.setText(pzbtd.btdte);ui.btd.x=pzbtd.btdx;ui.btd.y=pzbtd.btdy-th;ui.btd.setTextSize(Number(pzbtd.btdsi))  
       ui.btd.setTextColor(colors.parseColor(pzbtd.btdcol));ui.btd.attr("bg",pzbtd.btdbg);ui.btd.attr("w",Number(pzbtd.btdwh.split(",")[0]));ui.btd.attr("h",Number(pzbtd.btdwh.split(",")[1]))             
        }catch(e) {}   
       try{//按钮一的配置ui.bta.setBackgroundColor(colors.parseColor(pzbta.btabg));//常规操作
       ui.bte.visibility=pzbte.btevi;ui.bte.setText(pzbte.btete);ui.bte.x=pzbte.btex;ui.bte.y=pzbte.btey-th;ui.bte.setTextSize(Number(pzbte.btesi))  
       ui.bte.setTextColor(colors.parseColor(pzbte.btecol));ui.bte.attr("bg",pzbte.btebg);ui.bte.attr("w",Number(pzbte.btewh.split(",")[0]));ui.bte.attr("h",Number(pzbte.btewh.split(",")[1]))             
        }catch(e) {} 
       try{//按钮一的配置ui.bta.setBackgroundColor(colors.parseColor(pzbta.btabg));//常规操作
       ui.btf.visibility=pzbtf.btfvi;ui.btf.setText(pzbtf.btfte);ui.btf.x=pzbtf.btfx;ui.btf.y=pzbtf.btfy-th;ui.btf.setTextSize(Number(pzbtf.btfsi))  
       ui.btf.setTextColor(colors.parseColor(pzbtf.btfcol));ui.btf.attr("bg",pzbtf.btfbg);ui.btf.attr("w",Number(pzbtf.btfwh.split(",")[0]));ui.btf.attr("h",Number(pzbtf.btfwh.split(",")[1]))             
        }catch(e) {} 
      
      try{//文本一的配置ui.bta.setBackgroundColor(colors.parseColor(pzbta.btabg));//常规操作
       ui.tea.visibility=pztea.teavi;ui.tea.setText(pztea.teate);ui.tea.x=pztea.teax;ui.tea.y=pztea.teay-th;ui.tea.setTextSize(Number(pztea.teasi))  
       ui.tea.setTextColor(colors.parseColor(pztea.teacol));ui.tea.attr("bg",pztea.teabg);           
        }catch(e) {}
   ui.ok.click(()=>{
   toastLog(si_); 
    })     
        
    ui.add.click(()=>{  
dialogs.select("请选择一个控件/操作", ["全局设置","Button", "Text", "Image", "CheckBox","Input","SuperInput","使用方法"])
    .then(i => {
        if(i==0){                 
 }
      if(i==1){
    dialogs.select("请选择按钮序号",btarr)
    .then(i => {
      if(i==0){ui.bta.visibility=0 }
        if(i==1){ui.btb.visibility=0  }
   if(i==2){ui.btc.visibility=0 }
        if(i==3){ui.btd.visibility=0  }
   if(i==4){ui.bte.visibility=0;}
        if(i==5){ui.btf.visibility=0  }
   if(i==6){ui.btg.visibility=0}
        if(i==7){ui.bth.visibility=0 }
   if(i==8){ui.bti.visibility=0}
        if(i==9){ui.btj.visibility=0 }
   if(i==10){ui.btk.visibility=0}
        if(i==11){ui.btl.visibility=0 }
        
   });  
       
         }//控件判断
     if(i==2){
          dialogs.select("请选择文本序号",tearr)
    .then(i => {
      if(i==0){ui.tea.visibility=0}
  if(i==1){ui.teb.visibility=0  }
    if(i==2){ui.tec.visibility=0}
  if(i==3){ui.ted.visibility=0   }
    if(i==4){ui.tee.visibility=0;}
  if(i==5){ui.tef.visibility=0 }
    if(i==6){ui.teg.visibility=0}
  if(i==7){ui.teh.visibility=0  }
    if(i==8){ui.tei.visibility=0}
  if(i==9){ui.tej.visibility=0 }
    if(i==10){ui.tek.visibility=0}
  if(i==11){ui.tel.visibility=0}
  });    
           
    } //控件判断
    if(i==3){}
    if(i==4){}
    if(i==5){}
    if(i==6){} 
        
    if(i==7){alert("按钮：每个按钮设置后都需要单独手动保存才能查看效果，如果哪个配置没反应，按照这个顺序 字体颜色_背景色_宽高 设置一遍\n文本：实时显示效果，但也需要手动保存，如果哪个配置没反应，按照这个顺序 字体颜色_背景色_")}
    });
    })  
  ui.title.on("long_click",()=>{ui.title.visibility=8;qj.tivi=8;files.write(全局,JSON.stringify(qj))})



    ui.tea.setOnTouchListener(function(view, event){
 view=ui.tea
    switch(event.getAction()){
        case event.ACTION_DOWN:
          x = event.getRawX(); y = event.getRawY();    
           var rect=new android.graphics.Rect
   view.getBoundsOnScreen(rect,true)
  bx=rect.left; by=rect.top   
            downTime = new Date().getTime();   
            return true;
        case event.ACTION_MOVE:
        view.x=bx + (event.getRawX() - x)
        view.y=by + (event.getRawY() - y)-th;               
            return true;
        case event.ACTION_UP:         
    if(new Date().getTime() - downTime > 500){
       dialogs.select("请为文本一选择一个操作", ["Code","按钮文字","文字大小","文字颜色","背景色","保存","删除"])
    .then(i => {
 if(i==0){code=    rawInput("请输入文本Code",pztea.teaco)  }//如果输出会是underfind
 if(i==1){rawInput("请输入文本文字").then(name => {
 ui.tea.setText(name)
 })        } 
  if(i==2){ rawInput("请输入文本文字大小").then(name => { ui.tea.setTextSize(Number(name));si_=name }) }
  if(i==3){ rawInput("请输入文本文字颜色-字符串").then(name=>{ ui.tea.setTextColor(colors.parseColor(name));col_=name   })}
    if(i==4){ rawInput("请输入文本背景颜色-字符串").then(name=>{ ui.tea.setBackgroundColor(colors.parseColor(name));bg_=name   })}

  if(i==5){//toastLog(typeof si_)
    var code_=typeof code  
  if(String(code_)=="undefined"){teaj.teaco=pztea.teaco}else{teaj.teaco=code._result};
  var size_=typeof si_
  if(String(size_)=="undefined"){teaj.teasi=pztea.teasi}else{teaj.teasi=si_};
  var color_=typeof col_
  if(String(color_)=="undefined"){teaj.teacol=pztea.teacol}else{teaj.teacol=col_};
  var backg=typeof bg_
  if(String(backg)=="undefined"){teaj.teabg=pztea.teabg}else{teaj.teabg=bg_};
   teaj.teavi=ui.tea.visibility;teaj.teate=ui.tea.text();
          //  teaj.teasi=size_;teaj.teacol=col_;
  // btaj.btavi=ui.bta.visibility; btaj.btate=ui.bta.text()
     files.write(tea,JSON.stringify(teaj))
toastLog("保存成功\nBy_Mr_F-1694883651");
ui.finish();engines.execScriptFile("./main.js")
}
if(i==6){files.remove(tea);ui.finish();engines.execScriptFile("./main.js")}
            })
            }//长按判断
             if(Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5&&new Date().getTime() - downTime < 800){   
    try{
         engines.execScript("code",eval(pztea.teaco) ) 
 }catch(e){toastLog("好像哪儿有问题哦~")}
     //ui.bta.attr("w",Number(wh._result.split(",")[0]))
           }
         var rect=new android.graphics.Rect
   view.getBoundsOnScreen(rect,true)
 teaj.teax=rect.left//写入控件x，yjson
  teaj.teay=rect.top
           return true;
    }  
    return true;
});//文本一



    ui.bta.setOnTouchListener(function(view, event){
 view=ui.bta
    switch(event.getAction()){
        case event.ACTION_DOWN:
          x = event.getRawX(); y = event.getRawY();    
           var rect=new android.graphics.Rect
   view.getBoundsOnScreen(rect,true)
  bx=rect.left; by=rect.top   
            downTime = new Date().getTime();   
            return true;
        case event.ACTION_MOVE:
        view.x=bx + (event.getRawX() - x)
        view.y=by + (event.getRawY() - y)-th;               
            return true;
        case event.ACTION_UP:         
    if(new Date().getTime() - downTime > 500){
       dialogs.select("请为按钮一选择一个操作", ["Code","按钮文字","文字大小","文字颜色", "宽高", "背景色","保存","删除"])
    .then(i => {
 if(i==0){code=    rawInput("请输入按钮Code",pzbta.btaco)  }//如果输出会是underfind
 if(i==1){rawInput("请输入按钮文字").then(name => {
 ui.bta.setText(name)
 })        } 
  if(i==2){ size=rawInput("请输入按钮文字大小"); }
  if(i==3){ col=rawInput("请输入按钮文字颜色-字符串") }
  if(i==4){ wh=rawInput("请输入按钮宽高") }
  if(i==5){  bg=rawInput("请输入按钮背景色-字符串")}
  if(i==6){var code_=typeof code  
  if(String(code_)=="undefined"){btaj.btaco=pzbta.btaco}else{btaj.btaco=code._result};
  var size_=typeof size  
  if(String(size_)=="undefined"){btaj.btasi=pzbta.btasi}else{btaj.btasi=size._result};
  var col_=typeof col  
  if(String(col_)=="undefined"){btaj.btacol=pzbta.btacol}else{btaj.btacol=col._result};
  var wh_=typeof wh 
  if(String(wh_)=="undefined"){btaj.btawh=pzbta.btawh}else{btaj.btawh=wh._result};
  var bg_=typeof bg 
  if(String(bg_)=="undefined"){btaj.btabg=pzbta.btabg}else{btaj.btabg=bg._result};
   btaj.btavi=ui.bta.visibility; btaj.btate=ui.bta.text()
       files.write(bta,JSON.stringify(btaj))
toastLog("保存成功\nBy_Mr_F-1694883651");
ui.finish();engines.execScriptFile("./main.js")
}
if(i==7){files.remove(bta);ui.finish();engines.execScriptFile("./main.js")}
            })
            }
             if(Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5&&new Date().getTime() - downTime < 800){   
    try{pzcode=pzbta.btaco
         engines.execScript("code",eval("var p=threads.start(function(){ "+pzcode+"})"  ) ) 
   }catch(e){toastLog("好像哪儿有问题哦~")}
     //ui.bta.attr("w",Number(wh._result.split(",")[0]))
           }
         var rect=new android.graphics.Rect
   view.getBoundsOnScreen(rect,true)
 btaj.btax=rect.left//写入控件x，yjson
  btaj.btay=rect.top
           return true;
    }  
    return true;
});//按钮一

ui.btb.setOnTouchListener(function(view, event){
 view=ui.btb
    switch(event.getAction()){
        case event.ACTION_DOWN:
          x = event.getRawX(); y = event.getRawY();    
           var rect=new android.graphics.Rect
   view.getBoundsOnScreen(rect,true)
  bx=rect.left; by=rect.top   //按钮原，x，y坐标
            downTime = new Date().getTime();   
            return true;
        case event.ACTION_MOVE:
        view.x=bx + (event.getRawX() - x)
        view.y=by + (event.getRawY() - y)-th;               
            return true;
        case event.ACTION_UP:         
    if(new Date().getTime() - downTime > 500){
       dialogs.select("请为按钮二选择一个操作", ["Code","按钮文字","文字大小","文字颜色", "宽高", "背景色","保存","删除"])
    .then(i => {
 if(i==0){code=    rawInput("请输入按钮Code",pzbtb.btbco)  }//如果输出会是underfind
 if(i==1){rawInput("请输入按钮文字").then(name => {
 ui.btb.setText(name)
 })        } 
  if(i==2){ size=rawInput("请输入按钮文字大小"); }
  if(i==3){ col=rawInput("请输入按钮文字颜色-字符串") }
  if(i==4){ wh=rawInput("请输入按钮宽高") }
  if(i==5){  bg=rawInput("请输入按钮背景色-字符串")}
  if(i==6){var code_=typeof code  
  if(String(code_)=="undefined"){btbj.btbco=pzbtb.btbco}else{btbj.btbco=code._result};
  var size_=typeof size  
  if(String(size_)=="undefined"){btbj.btbsi=pzbtb.btbsi}else{btbj.btbsi=size._result};
  var col_=typeof col  
  if(String(col_)=="undefined"){btbj.btbcol=pzbtb.btbcol}else{btbj.btbcol=col._result};
  var wh_=typeof wh 
  if(String(wh_)=="undefined"){btbj.btbwh=pzbtb.btbwh}else{btbj.btbwh=wh._result};
  var bg_=typeof bg 
  if(String(bg_)=="undefined"){btbj.btbbg=pzbtb.btbbg}else{btbj.btbbg=bg._result};
   btbj.btbvi=ui.btb.visibility; btbj.btbte=ui.btb.text()
       files.write(btb,JSON.stringify(btbj))
toastLog("保存成功\nBy_Mr_F-1694883651");
ui.finish();engines.execScriptFile("./main.js")
}
if(i==7){files.remove(btb);ui.finish();engines.execScriptFile("./main.js")}

            })
            }
             if(Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5&&new Date().getTime() - downTime < 800){   
     try{
         engines.execScript("code",eval(pzbtb.btbco) ) 
   }catch(e){toastLog("好像哪儿有问题哦~")}
     //ui.bta.attr("w",Number(wh._result.split(",")[0]))
           }
         var rect=new android.graphics.Rect
   view.getBoundsOnScreen(rect,true)
 btbj.btbx=rect.left//写入控件x，yjson
  btbj.btby=rect.top
           return true;
    }  
    return true;
});//按钮二

ui.btc.setOnTouchListener(function(view, event){
 view=ui.btc
    switch(event.getAction()){
        case event.ACTION_DOWN:
          x = event.getRawX(); y = event.getRawY();    
           var rect=new android.graphics.Rect
   view.getBoundsOnScreen(rect,true)
  bx=rect.left; by=rect.top   //按钮原，x，y坐标
            downTime = new Date().getTime();   
            return true;
        case event.ACTION_MOVE:
        view.x=bx + (event.getRawX() - x)
        view.y=by + (event.getRawY() - y)-th;               
            return true;
        case event.ACTION_UP:         
    if(new Date().getTime() - downTime > 500){
       dialogs.select("请为按钮三选择一个操作", ["Code","按钮文字","文字大小","文字颜色", "宽高", "背景色","保存","删除"])
    .then(i => {
 if(i==0){code=    rawInput("请输入按钮Code",pzbtc.btcco)  }//如果输出会是underfind
 if(i==1){rawInput("请输入按钮文字").then(name => {
 ui.btc.setText(name)
 })        } 
  if(i==2){ size=rawInput("请输入按钮文字大小"); }
  if(i==3){ col=rawInput("请输入按钮文字颜色-字符串") }
  if(i==4){ wh=rawInput("请输入按钮宽高") }
  if(i==5){  bg=rawInput("请输入按钮背景色-字符串")}
  if(i==6){var code_=typeof code  
  if(String(code_)=="undefined"){btcj.btcco=pzbtc.btcco}else{btcj.btcco=code._result};
  var size_=typeof size  
  if(String(size_)=="undefined"){btcj.btcsi=pzbtc.btcsi}else{btcj.btcsi=size._result};
  var col_=typeof col  
  if(String(col_)=="undefined"){btcj.btccol=pzbtc.btccol}else{btcj.btccol=col._result};
  var wh_=typeof wh 
  if(String(wh_)=="undefined"){btcj.btcwh=pzbtc.btcwh}else{btcj.btcwh=wh._result};
  var bg_=typeof bg 
  if(String(bg_)=="undefined"){btcj.btcbg=pzbtc.btcbg}else{btcj.btcbg=bg._result};
   btcj.btcvi=ui.btc.visibility; btcj.btcte=ui.btc.text()
       files.write(btc,JSON.stringify(btcj))
toastLog("保存成功\nBy_Mr_F-1694883651");
ui.finish();engines.execScriptFile("./main.js")
}
if(i==7){files.remove(btc);ui.finish();engines.execScriptFile("./main.js")}

            })
            }
             if(Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5&&new Date().getTime() - downTime < 800){   
     try{
         engines.execScript("code",eval(pzbtc.btcco) ) 
   }catch(e){toastLog("好像哪儿有问题哦~")}
     //ui.bta.attr("w",Number(wh._result.split(",")[0]))
           }
         var rect=new android.graphics.Rect
   view.getBoundsOnScreen(rect,true)
 btcj.btcx=rect.left//写入控件x，yjson
  btcj.btcy=rect.top
           return true;
    }  
    return true;
});//按钮三

ui.btd.setOnTouchListener(function(view, event){
 view=ui.btd
    switch(event.getAction()){
        case event.ACTION_DOWN:
          x = event.getRawX(); y = event.getRawY();    
           var rect=new android.graphics.Rect
   view.getBoundsOnScreen(rect,true)
  bx=rect.left; by=rect.top   
            downTime = new Date().getTime();   
            return true;
        case event.ACTION_MOVE:
        view.x=bx + (event.getRawX() - x)
        view.y=by + (event.getRawY() - y)-th;               
            return true;
        case event.ACTION_UP:         
    if(new Date().getTime() - downTime > 500){
       dialogs.select("请为按钮四选择一个操作", ["Code","按钮文字","文字大小","文字颜色", "宽高", "背景色","保存","删除"])
    .then(i => {
 if(i==0){code=    rawInput("请输入按钮Code",pzbtd.btdco)  }//如果输出会是underfind
 if(i==1){rawInput("请输入按钮文字").then(name => {
 ui.btd.setText(name)
 })        } 
  if(i==2){ size=rawInput("请输入按钮文字大小"); }
  if(i==3){ col=rawInput("请输入按钮文字颜色-字符串") }
  if(i==4){ wh=rawInput("请输入按钮宽高") }
  if(i==5){  bg=rawInput("请输入按钮背景色-字符串")}
  if(i==6){var code_=typeof code  
  if(String(code_)=="undefined"){btdj.btaco=pzbtd.btdco}else{btdj.btdco=code._result};
  var size_=typeof size  
  if(String(size_)=="undefined"){btdj.btdsi=pzbtd.btdsi}else{btdj.btdsi=size._result};
  var col_=typeof col  
  if(String(col_)=="undefined"){btdj.btdcol=pzbtd.btdcol}else{btdj.btdcol=col._result};
  var wh_=typeof wh 
  if(String(wh_)=="undefined"){btdj.btdwh=pzbtd.btdwh}else{btdj.btdwh=wh._result};
  var bg_=typeof bg 
  if(String(bg_)=="undefined"){btdj.btdbg=pzbtd.btdbg}else{btdj.btdbg=bg._result};
   btdj.btdvi=ui.btd.visibility; btdj.btdte=ui.btd.text()
       files.write(btd,JSON.stringify(btdj))
toastLog("保存成功\nBy_Mr_F-1694883651");
ui.finish();engines.execScriptFile("./main.js")
}
if(i==7){files.remove(btd);ui.finish();engines.execScriptFile("./main.js")}
            })
            }
             if(Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5&&new Date().getTime() - downTime < 800){   
     try{
         engines.execScript("code",eval(pzbtd.btdco) ) 
   }catch(e){toastLog("好像哪儿有问题哦~")}
     //ui.bta.attr("w",Number(wh._result.split(",")[0]))
           }
         var rect=new android.graphics.Rect
   view.getBoundsOnScreen(rect,true)
 btdj.btdx=rect.left//写入控件x，yjson
  btdj.btdy=rect.top
           return true;
    }  
    return true;
});//按钮四

ui.bte.setOnTouchListener(function(view, event){
 view=ui.bte
    switch(event.getAction()){
        case event.ACTION_DOWN:
          x = event.getRawX(); y = event.getRawY();    
           var rect=new android.graphics.Rect
   view.getBoundsOnScreen(rect,true)
  bx=rect.left; by=rect.top   
            downTime = new Date().getTime();   
            return true;
        case event.ACTION_MOVE:
        view.x=bx + (event.getRawX() - x)
        view.y=by + (event.getRawY() - y)-th;               
            return true;
        case event.ACTION_UP:         
    if(new Date().getTime() - downTime > 500){
       dialogs.select("请为按钮五选择一个操作", ["Code","按钮文字","文字大小","文字颜色", "宽高", "背景色","保存","删除"])
    .then(i => {
 if(i==0){code=    rawInput("请输入按钮Code",pzbte.bteco)  }//如果输出会是underfind
 if(i==1){rawInput("请输入按钮文字").then(name => {
 ui.bte.setText(name)
 })        } 
  if(i==2){ size=rawInput("请输入按钮文字大小"); }
  if(i==3){ col=rawInput("请输入按钮文字颜色-字符串") }
  if(i==4){ wh=rawInput("请输入按钮宽高") }
  if(i==5){  bg=rawInput("请输入按钮背景色-字符串")}
  if(i==6){var code_=typeof code  
  if(String(code_)=="undefined"){btej.bteco=pzbte.bteco}else{btej.bteco=code._result};
  var size_=typeof size  
  if(String(size_)=="undefined"){btej.btesi=pzbte.btesi}else{btej.btesi=size._result};
  var col_=typeof col  
  if(String(col_)=="undefined"){btej.btecol=pzbte.btecol}else{btej.btecol=col._result};
  var wh_=typeof wh 
  if(String(wh_)=="undefined"){btej.btewh=pzbte.btewh}else{btej.btewh=wh._result};
  var bg_=typeof bg 
  if(String(bg_)=="undefined"){btej.btebg=pzbte.btebg}else{btej.btebg=bg._result};
   btej.btevi=ui.bte.visibility; btej.btete=ui.bte.text()
       files.write(bte,JSON.stringify(btej))
toastLog("保存成功\nBy_Mr_F-1694883651");
ui.finish();engines.execScriptFile("./main.js")
}
if(i==7){files.remove(bte);ui.finish();engines.execScriptFile("./main.js")}
            })
            }
             if(Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5&&new Date().getTime() - downTime < 800){   
     try{
         engines.execScript("code",eval(pzbte.bteco) ) 
   }catch(e){toastLog("好像哪儿有问题哦~")}
     //ui.bta.attr("w",Number(wh._result.split(",")[0]))
           }
         var rect=new android.graphics.Rect
   view.getBoundsOnScreen(rect,true)
 btej.btex=rect.left//写入控件x，yjson
  btej.btey=rect.top
           return true;
    }  
    return true;
});//按钮五

ui.btf.setOnTouchListener(function(view, event){
 view=ui.btf
    switch(event.getAction()){
        case event.ACTION_DOWN:
          x = event.getRawX(); y = event.getRawY();    
           var rect=new android.graphics.Rect
   view.getBoundsOnScreen(rect,true)
  bx=rect.left; by=rect.top   
            downTime = new Date().getTime();   
            return true;
        case event.ACTION_MOVE:
        view.x=bx + (event.getRawX() - x)
        view.y=by + (event.getRawY() - y)-th;               
            return true;
        case event.ACTION_UP:         
    if(new Date().getTime() - downTime > 500){
       dialogs.select("请为按钮六选择一个操作", ["Code","按钮文字","文字大小","文字颜色", "宽高", "背景色","保存","删除"])
    .then(i => {
 if(i==0){code=    rawInput("请输入按钮Code",pzbtf.btfco)  }//如果输出会是underfind
 if(i==1){rawInput("请输入按钮文字").then(name => {
 ui.btf.setText(name)
 })        } 
  if(i==2){ size=rawInput("请输入按钮文字大小"); }
  if(i==3){ col=rawInput("请输入按钮文字颜色-字符串") }
  if(i==4){ wh=rawInput("请输入按钮宽高") }
  if(i==5){  bg=rawInput("请输入按钮背景色-字符串")}
  if(i==6){var code_=typeof code  
  if(String(code_)=="undefined"){btfj.btfco=pzbtf.btfco}else{btfj.btfco=code._result};
  var size_=typeof size  
  if(String(size_)=="undefined"){btfj.btfsi=pzbtf.btfsi}else{btfj.btfsi=size._result};
  var col_=typeof col  
  if(String(col_)=="undefined"){btfj.btfcol=pzbtf.btfcol}else{btfj.btfcol=col._result};
  var wh_=typeof wh 
  if(String(wh_)=="undefined"){btfj.btfwh=pzbtf.btfwh}else{btfj.btfwh=wh._result};
  var bg_=typeof bg 
  if(String(bg_)=="undefined"){btfj.btfbg=pzbtf.btfbg}else{btfj.btfbg=bg._result};
   btfj.btfvi=ui.btf.visibility; btfj.btfte=ui.btf.text()
       files.write(btf,JSON.stringify(btfj))
toastLog("保存成功\nBy_Mr_F-1694883651");
ui.finish();engines.execScriptFile("./main.js")
}
if(i==7){files.remove(btf);ui.finish();engines.execScriptFile("./main.js")}
            })
            }
             if(Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5&&new Date().getTime() - downTime < 800){   
     try{
         engines.execScript("code",eval(pzbtf.btfco) ) 
   }catch(e){toastLog("好像哪儿有问题哦~")}
     //ui.bta.attr("w",Number(wh._result.split(",")[0]))
           }
         var rect=new android.graphics.Rect
   view.getBoundsOnScreen(rect,true)
 btfj.btfx=rect.left//写入控件x，yjson
  btfj.btfy=rect.top
           return true;
    }  
    return true;
});//按钮六



















  /*  ui.title.setOnTouchListener(function(view, event){
    switch(event.getAction()){
        case event.ACTION_DOWN:
          x = event.getRawX();
           y = event.getRawY();
           var view=ui.t
           var rect=new android.graphics.Rect
   view.getBoundsOnScreen(rect,true)
   bx=rect.left
   by=rect.top
       
            downTime = new Date().getTime();
           log("点击");
       
            return true;
        case event.ACTION_MOVE:
        
    
      
          ui.t.x=bx + (event.getRawX() - x)
           ui.t.y=by + (event.getRawY() - y)-th;
       
       
       
      
            return true;
        case event.ACTION_UP:
           
        log("弹起");
          
 
            return true;
    }
    return true;
});*/