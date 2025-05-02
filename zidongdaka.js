
auto();
device.wakeUpIfNeeded();
sleep(2000)
swipe(500,1800,500,800,1000);
//swipe(1800,500,500,500,2000);
toast("输入密码");
sleep(2000);
click(725,1750);//5
sleep(600);
click(725,1750);//5
sleep(600);
click(725,1750);//5
sleep(600);
click(1100,1750);//6
sleep(600);
click(1100,1750);//6
sleep(600);
click(1100,1750);//6
sleep(600);

toast("解锁屏幕");
home();
toast("开始自动打卡");

sleep(4000);
click('微信');
sleep(6000);

swipe(500,800,500,1800,1000);
sleep(3000);
//click("行程卡");
text("行程卡").findOne().parent().click()
//clickKey(行程卡);
sleep(8000);
//click("同意并授权运营商查询本人在疫情期间7天内到访地信息");
//text('同意并授权运营商查询本人在疫情期间7天内到访地信息').findOne().click()
click(500,2090)
 sleep(2000);

//text("查询").findOne().click()
click(800,2297);
//截图

sleep(2000)
swipe(946,100,1000,1800,2000);
sleep(2000);
swipe(500,800,500,1800,1000);
//text("截屏").findOne().click()
sleep(2000)
click(888,1401)
sleep(4000)


 home();
 toast("开始自动打卡");
 sleep(1500);
 click('钉钉');
sleep(8000)
//text("安徽大学").parent().findOne().click()
click(723,3070)
sleep(4000)
text("智能填表").findOne().parent().click()
sleep(4000)
text("填写").findOne().parent().click()
sleep(2000)
text("已完成").findOne().parent().click()
sleep(2000)
text("高校每日健康打卡").findOne().parent().click()
sleep(2000)
text("今天").findOne().parent().click()
sleep(2000)
id("drawer_layout").findOne().click()
swipe(711,2865,711,304,2000)
sleep(1000)
click(180,1510)
sleep(2000)
click(560,440)
sleep(1000)
text("发送(1)").findOne().click()
sleep(1000)
text("绿卡").findOne().click()
sleep(1000)
text("确定").findOne().click()
sleep(1000)
text("提交").findOne().click()