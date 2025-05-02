

var x = id("com.tencent.mm:id/g6k").findOne().bounds().centerX();
var y =id("com.tencent.mm:id/g6k").findOne().bounds().centerY();

click(x,y)

sleep(1500)

//寻找所有的文本
var 文本集合 = className("android.widget.LinearLayout").depth("12").find();

var 索引 = 文本集合.size() - 3;

log(索引)

// className = android.widget.LinearLayout
//寻找最后一个对话
var 对话 = className("android.widget.LinearLayout").depth("12").findOnce(索引);

var x = 对话.bounds().centerX();
var y = 对话.bounds().centerY();

click(x,y)
sleep(100)
click(x,y)
sleep(1000)
// log(text("你好").findOne());
// com.tencent.mm:id/c6s
var 文本 = id("com.tencent.mm:id/c6s").findOne().text();
log(文本);

back();

sleep(1000)

if(文本 == "1") {
    input("你好")
}else if (文本 == "2") {
    input("在吗？")
}else {
    input("请输入正确的格式！")
}
sleep(1500)

click("发送")

sleep(1000)

toast(文本)