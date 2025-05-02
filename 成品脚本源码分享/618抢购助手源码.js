"ui";
//通过adb命令自动开启无障碍
adb();
function adb() {
    importClass(android.content.Context);
    importClass(android.provider.Settings);
    try {
        var enabledServices = Settings.Secure.getString(context.getContentResolver(), Settings.Secure.ENABLED_ACCESSIBILITY_SERVICES);

        var Services = enabledServices + ":com.panic.buy17835357679/com.stardust.autojs.core.accessibility.AccessibilityService";
        Settings.Secure.putString(context.getContentResolver(), Settings.Secure.ENABLED_ACCESSIBILITY_SERVICES, Services);
        Settings.Secure.putString(context.getContentResolver(), Settings.Secure.ACCESSIBILITY_ENABLED, '1');
        toast("您已成功开启无障碍服务！");
    } catch (error) {
        toast("您未使用自动开无障碍功能！");
        //授权方法：开启USB调试并使用ABD工具连接手机，执行 adb shell pm grant org.autojs.autojspro android.permission.WRITE_SECURE_SETTING
        // toast("\n授权代码已复制，请使用adb工具连接手机执行(重启不失效)\n\n", error);
        // setClip("adb shell pm grant com.panic.buy17835357679  android.permission.WRITE_SECURE_SETTINGS");
    }
}
var ColoredButton = (function () {
    //继承ui.Widget
    util.extend(ColoredButton, ui.Widget);

    function ColoredButton() {
        //调用父类构造函数
        ui.Widget.call(this);
        //自定义属性color，定义按钮颜色
        this.defineAttr("color", (view, name, defaultGetter) => {
            return this._color;
        }, (view, name, value, defaultSetter) => {
            this._color = value;
            view.attr("backgroundTint", value);
        });

    }
    ColoredButton.prototype.render = function () {
        return (
            <button textSize="16sp" style="Widget.AppCompat.Button.Colored" w="*" h="auto" />
        );
    }

    ui.registerWidget("colored-button", ColoredButton);
    return ColoredButton;
})();

var color = "#009688";
ui.statusBarColor("#ff4040")
ui.layout(
    <drawer id="drawer" >
        <vertical>
            <appbar>
                <toolbar id="toolbar" paddingTop="5dp" title="抢购助手（打折日报出品）" bg="#ff4040" />
                <tabs id="tabs" bg="#ff4040" />
            </appbar>

            <viewpager id="viewpager">

                //设置界面
                <frame>
                    <vertical>
                        <button id="wza" text="1、点击开启无障碍服务" />
                        <button id="xfc" text="2、点击开启悬浮窗权限" />
                        <button id="tmhb" text="3、点击自动领取天猫618红包" />
                        <button id="jdhb" text="4、点击手动领取京东618红包" />
                        <button id="pddhb" text="5、点击手动领取拼多多618红包" />
                        <text text="手机开启无障碍和悬浮窗才能运行！！！" textSize="18sp" color="#ff4040" gravity="center" padding="10" />
                        <text text="按手机“音量+键”可以结束程序" textSize="18sp" gravity="center" padding="10" />
                    </vertical>
                </frame>

                //淘宝界面
                <frame> //start
                    <ScrollView>
                        <vertical>
                            <Switch id="autoService" text="无障碍服务" checked="{{auto.service != null}}" padding="8 8 8 8" textSize="15sp" />
                            <Switch id="overlayService" text="悬浮窗权限" checked="{{auto.service != null}}" padding="8 8 8 8" textSize="15sp" />
                            <text textSize="14sp" textColor="#111111" margin="0 5" text="如果无障碍和悬浮窗提示未开启，可以关闭后重新尝试开启！" />
                            <text textSize="14sp" id="networkTesttwo" textColor="#ff0000" margin="0 5" text="默认校准淘宝时间！" />
                            <horizontal w="*" h="1sp" margin="0 10 0 20" bg='#ff4040'></horizontal>
                            <horizontal>
                                <text id="taobao" text="使用前必须点我查看说明！坐标获取说明！软件不会记录你的支付密码，更没有能力破解你的账户，请放心使用！如不放心，可以取消自动支付！" textColor="#ff0000" w="auto" />
                            </horizontal>

                            <radiogroup orientation="horizontal">
                                <checkbox id="pay1" text="自动付款" />
                                <checkbox id="bt1" text="隐藏密码" checked="false" />
                                <checkbox id="jiance" text="检测结算价格" />
                            </radiogroup>

                            <horizontal>
                                <checkbox id="shuaxin" text="提前刷新勾选" />
                                <checkbox id="lianxutijiao" text="连续提交" />
                                <checkbox id="ceshi" text="测试" />
                            </horizontal>

                            <horizontal>
                                <text textSize="14sp" textColor="black" text="提前抢购时间" />
                                <input id="delaytime_two" textColor="gray" inputType="number" text="200" w="80" />
                                <text textSize="14sp" textColor="black" text="毫秒" />
                            </horizontal>

                            <horizontal>
                                <text textSize="14sp" textColor="black" text="提交订单频率" />
                                <input id="interval" textColor="gray" inputType="number" text="100" w="80" />
                                <text textSize="14sp" textColor="black" text="毫秒" />
                            </horizontal>

                            <horizontal>
                                <text textSize="14sp" textColor="black" text="抢购重复次数" />
                                <input id="count" textColor="gray" inputType="number" text="3" w="80" />
                                <text textSize="14sp" textColor="black" text="次" />
                            </horizontal>

                            <horizontal>
                                <text textSize="14sp" textColor="black" text="抢购持续时间" />
                                <input id="lastTime_two" textColor="gray" inputType="number" text="10" w="80" />
                                <text textSize="14sp" textColor="black" text="秒" />
                            </horizontal>


                            <horizontal>
                                <text textSize="14sp" textColor="black" text="商品价格不等于" />
                                <input id="password_7" textColor="gray" inputType="number|numberDecimal" text="10" w="80" />
                                <text textSize="14sp" textColor="black" text="元不结算" />
                            </horizontal>

                            <linear id="h" layout_gravity="center">
                                <horizontal>
                                    <text textSize="14sp" textColor="black" text="支付密码" />
                                    <input id="password_1" textColor="gray" text="*" w="45" />
                                    <input id="password_2" textColor="gray" text="*" w="45" />
                                    <input id="password_3" textColor="gray" text="*" w="45" />
                                    <input id="password_4" textColor="gray" text="*" w="45" />
                                    <input id="password_5" textColor="gray" text="*" w="45" />
                                    <input id="password_6" textColor="gray" text="*" w="45" />
                                </horizontal>
                            </linear>

                            <horizontal>
                                <text textSize="14sp" textColor="black" text="提交订单坐标" />
                                <input id="X1" textColor="gray" inputType="number" text="" hint="X轴" w="80" />
                                <input id="X2" textColor="gray" inputType="number" text="" hint="Y轴" w="80" />
                            </horizontal>

                            <text textSize="14sp" textColor="black" text="请输入抢购时间，格式为：2020/04/14 12:00:00" />
                            <input hint="请输入抢购时间，格式必须正确" textColor="gray" id="startTime_two" text="2020/04/14 12:00:00" />
                            //定义按钮的大小颜色和文本
                            <colored-button id="ok_two" layout_gravity="center" color="#ff5500" text="开始运行" />

                            <img id="tm618" h="250" src="https://ae01.alicdn.com/kf/H1522dd232f3340c5b3f54601e351f3d5A.jpg" />

                        </vertical>
                    </ScrollView>
                </frame> //end

                //京东界面
                <frame> //start
                    <ScrollView>
                        <vertical>
                            <text textSize="14sp" id="networkTest_tree" textColor="#ff0000" margin="0 5" text="默认校准京东时间！" />
                            <horizontal w="*" h="1sp" margin="0 10 0 20" bg='#ff4040'></horizontal>
                            <horizontal>
                                <text id="jingdong" text="BP链接模式不支持预约抢购商品，使用前必须点我查看说明！" textColor="#ff0000" w="auto" />
                            </horizontal>

                            <radiogroup orientation="horizontal">
                                <radio id="model_tree" text="页面模式" checked="true" />
                                <radio id="model_four" text="购物车模式" />
                                <radio id="model_five" text="BP链接模式" />
                            </radiogroup>

                            <horizontal>
                                <text textSize="14sp" textColor="black" text="提前抢购时间" />
                                <input id="delaytime_tree" textColor="gray" inputType="number" text="800" w="80" />
                                <text textSize="14sp" textColor="black" text="毫秒" />
                            </horizontal>

                            <horizontal>
                                <text textSize="14sp" textColor="black" text="提交订单频率" />
                                <input id="interval" textColor="gray" inputType="number" text="100" w="80" />
                                <text textSize="14sp" textColor="black" text="毫秒" />
                            </horizontal>


                            <horizontal>
                                <text textSize="14sp" textColor="black" text="抢购持续时间" />
                                <input id="lastTime_tree" textColor="gray" inputType="number" text="10" w="80" />
                                <text textSize="14sp" textColor="black" text="秒" />
                            </horizontal>

                            <text textSize="14sp" textColor="black" text="请输入抢购时间，格式为：2020/04/14 12:00:00" />
                            <input id="startTime_tree" hint="请输入抢购时间，格式必须正确" textColor="gray" text="2020/04/14 12:00:00" />
                            //定义按钮的大小颜色和文本
                            <colored-button id="ok_tree" layout_gravity="center" color="#ff5500" text="开始运行" />

                            <img id="jd618" h="250" src="https://ae01.alicdn.com/kf/He9bd142891dd49a0a38ca404f9d2762fk.jpg" />

                        </vertical>
                    </ScrollView>
                </frame> //end


                //苏宁界面
                <frame>  //start
                    <ScrollView>
                        <vertical>
                            <text textSize="14sp" id="networkTest" textColor="#ff0000" margin="0 5" text="默认校准苏宁时间！" />
                            <horizontal w="*" h="1sp" margin="0 10 0 20" bg='#ff4040'></horizontal>

                            <horizontal>
                                <text text="请先选择正确模式再开始运行！" textColor="#ff0000" w="auto" />
                            </horizontal>

                            <radiogroup orientation="horizontal">
                                <radio id="model_one" text="页面模式" checked="true" />
                                <radio id="model_two" text="购物车模式" />
                            </radiogroup>

                            <horizontal>
                                <text textSize="14sp" textColor="black" text="提前抢购时间" />
                                <input id="delaytime" textColor="gray" inputType="number" text="800" w="80" />
                                <text textSize="14sp" textColor="black" text="毫秒" />
                            </horizontal>

                            <horizontal>
                                <text textSize="14sp" textColor="black" text="提交订单频率" />
                                <input id="interval" textColor="gray" inputType="number" text="100" w="80" />
                                <text textSize="14sp" textColor="black" text="毫秒" />
                            </horizontal>

                            <horizontal>
                                <text textSize="14sp" textColor="black" text="抢购持续时间" />
                                <input id="lastTime" textColor="gray" inputType="number" text="10" w="80" />
                                <text textSize="14sp" textColor="black" text="秒" />
                            </horizontal>

                            <text textSize="14sp" textColor="black" text="请输入抢购时间，格式为：2020/04/14 12:00:00" />
                            <input hint="请输入抢购时间，格式必须正确" textColor="gray" id="startTime" text="2020/04/14 12:00:00" />
                            //定义按钮的大小颜色和文本
                            <colored-button id="ok" layout_gravity="center" color="#ff5500" text="开始运行" />
                        </vertical>
                    </ScrollView>
                </frame>
                //end


                <frame>
                    <vertical>
                        <text textSize="14sp" textColor="#ff0000" text="使用前请安装打折日报APP！由于资源有限，只开放打折日报会员免费使用各种任务脚本！" />
                        <horizontal w="*" h="1sp" margin="0 10 0 20" bg='#ff4040'></horizontal>
                        <text textSize="14sp" textColor="#111111" text="淘宝：聚划算百亿补贴" />
                        <colored-button id="ok_bp" layout_gravity="center" w="auto" h="auto" color="#ff5500" text="百亿补贴BP链接" />
                        <colored-button id="zuobiao" layout_gravity="center" w="170" h="auto" color="#ff5500" text="点击获取坐标" />
                        <horizontal>
                            <text text="获取完坐标后，记得取消获取坐标再去淘宝开始运行！否则会崩溃！" textColor="#111111" w="auto" />
                        </horizontal>
                        <horizontal w="*" h="1sp" margin="0 10 0 20" bg='#ff4040'></horizontal>
                        <text textSize="14sp" textColor="#111111" text="拼多多：目前只支持抢券哦！" />
                        <colored-button id="pinduoduo" layout_gravity="center" w="170" h="auto" color="#ff5500" text="拼多多" />
                        <horizontal w="*" h="1sp" margin="0 10 0 20" bg='#ff4040'></horizontal>
                        <img id="pdd618" h="250" src="https://ae01.alicdn.com/kf/H84b21a2c81e54ee9b54bf5d94e30be673.jpg" />
                    </vertical>
                </frame>
            </viewpager>
        </vertical>
        <vertical layout_gravity="left" bg="#FFFFFF" w="280">
            <img w="380" h="200" scaleType="fitXY" src="http://pic1.win4000.com/wallpaper/2020-03-12/5e69c8381c24b.jpg" />
            <list id="menu">
                <horizontal bg="?selectableItemBackground" w="*">
                    <img w="50" h="50" padding="16" src="{{this.icon}}" tint="{{color}}" />
                    <text textColor="black" textSize="15sp" text="{{this.title}}" layout_gravity="center" />
                </horizontal>
            </list>
        </vertical>
    </drawer>
);

//=================================================================================
var 连续提交 = "无"
ui.lianxutijiao.on("check", (checked) => {
    if (checked) {
        连续提交 = "有"
        toast("已开启连续提交功能，此功能必须填写坐标！");
    }
    else {
        连续提交 = "无"
    }
});
ui.zuobiao.click(function () {
    if (ui.zuobiao.getText() == "点击获取坐标") {
        ui.zuobiao.setText("取消获取坐标");
        threads.start(获取坐标);
        device.keepScreenOn()//保持屏幕常亮
    } else {
        ui.zuobiao.setText("点击获取坐标");
        console.clear();
        console.hide();
        threads.shutDownAll();
        device.cancelKeepingAwake();
    }
})

ui.taobao.on("click", function () {
    app.openUrl("https://docs.qq.com/doc/DYW1CWXFEVEFnc01O?pub=1&dver=2.1.0")
})
ui.jingdong.on("click", function () {
    app.openUrl("https://docs.qq.com/doc/DYW1CWXFEVEFnc01O?pub=1&dver=2.1.0")
})
var 开启刷新 = "无"
var 提前刷新 = "无"
ui.shuaxin.on("check", (checked) => {
    if (checked) {
        开启刷新 = "有"
        提前刷新 = "有"
        toast("已开启购物车自动刷新功能！");
    }
    else {
        开启刷新 = "无"
        提前刷新 = "无"
    }
});
var 自动付款 = "无"
ui.pay1.on("check", (checked) => {
    if (checked) {
        自动付款 = "有"
        toast("已开启自动付款");
    }
    else {
        自动付款 = "无"
    }
});

var 自动勾选 = "无"
var 手动勾选 = "有"
ui.jiance.on("check", (checked) => {
    if (checked) {
        自动勾选 = "有"
        toast("已开启自动勾选商品，并检测价格进行结算！");
        手动勾选 = "无"
    }
    else {
        自动勾选 = "无"
    }
});
//淘宝密码隐藏
ui.bt1.on("check", (checked) => {
    if (ui.bt1.getText() == "隐藏密码") {
        ui.bt1.setText("显示密码");
        ui.h.visibility = 8;
        toast("密码已隐藏!");
    } else {
        ui.bt1.setText("隐藏密码");
        ui.h.visibility = 0;
        toast("密码已显示!");
    }
});


var 平台类别2 = "苏宁页面"
ui.model_one.on("check", (checked) => {
    if (checked) {
        平台类别2 = "苏宁页面"
        toast("已切换到苏宁页面抢购模式")
    }
});
ui.model_two.on("check", (checked) => {
    if (checked) {
        平台类别2 = "苏宁购物车"
        toast("已切换到苏宁购物车抢购模式")
    }
});

var 平台类别 = "京东页面"
ui.model_tree.on("check", (checked) => {
    if (checked) {
        平台类别 = "京东页面"
        toast("已切换到京东页面抢购模式")
    }
});
ui.model_four.on("check", (checked) => {
    if (checked) {
        平台类别 = "京东购物车"
        toast("已切换到京东购物车抢购模式")
    }
});
ui.model_five.on("check", (checked) => {
    if (checked) {
        平台类别 = "京东BP链接"
        toast("已切换到京东BP链接抢购模式")
    }
});

var 测试 = "无"
ui.ceshi.on("check", (checked) => {
    if (checked) {
        测试 = "有"
    }
    else {
        测试 = "无"
    }
});
//创建选项菜单(右上角)
ui.emitter.on("create_options_menu", menu => {
    menu.add("日志");
    menu.add("设置");
    menu.add("关于");
});
//监听选项菜单点击
ui.emitter.on("options_item_selected", (e, item) => {
    switch (item.getTitle()) {
        case "设置":
            toast("还没有设置");
            break;
        case "关于":
            alert("关于", "当前版本号:" + "V2.0");
            break;
        case "日志":
            app.startActivity("console");
            break;
    }
    e.consumed = true;
});
activity.setSupportActionBar(ui.toolbar);

//设置滑动页面的标题
ui.viewpager.setTitles(["设置", "淘宝", "京东", "苏宁", "其他"]);
//让滑动页面和标签栏联动
ui.tabs.setupWithViewPager(ui.viewpager);
//让工具栏左上角可以打开侧拉菜单
ui.toolbar.setupWithDrawer(ui.drawer);

ui.menu.setDataSource([
    {
        title: "使用前安装打折日报APP",
        icon: "@drawable/ic_android_black_48dp"
    },
    {
        title: "加QQ群组团互助",
        icon: "@drawable/ic_favorite_black_48dp"
    },
    {
        title: "加微信群组团互助",
        icon: "@drawable/ic_favorite_black_48dp"
    },

    {
        title: "使用说明",
        icon: "@drawable/ic_description_black_48dp"
    },


    {
        title: "退出",
        icon: "@drawable/ic_exit_to_app_black_48dp"
    },
]);

ui.menu.on("item_click", item => {
    switch (item.title) {
        case "使用前安装打折日报APP":
            app.openUrl('https://a.app.qq.com/o/simple.jsp?pkgname=com.dazheribao.app');
            break;
    }
});
ui.menu.on("item_click", item => {
    switch (item.title) {
        case "加QQ群组团互助":
            app.startActivity({
                action: "android.intent.action.VIEW",
                data: "mqqapi://card/show_pslcard?card_type=group&uin=861615337",
                packageName: "com.tencent.mobileqq",
            });
            break;
    }
});

ui.menu.on("item_click", item => {
    switch (item.title) {
        case "加微信群组团互助":
            alert("添加微信", "微信：dzrbkf，添加好友，入群组团互助");
            break;
    }
});

ui.menu.on("item_click", item => {
    switch (item.title) {
        case "使用说明":
            app.openUrl("https://docs.qq.com/doc/DYW1CWXFEVEFnc01O?pub=1&dver=2.1.0");
    }
});


ui.menu.on("item_click", item => {
    switch (item.title) {
        case "退出":
            ui.finish();
            break;
    }
});


//这里是无障碍触发方式
ui.autoService.on("check", function (checked) {
    // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启 
    if (checked && auto.service == null) {
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    }
    if (!checked && auto.service != null) {
        auto.service.disableSelf();
    }
});
// 当用户回到本界面时，resume事件会被触发
ui.emitter.on("resume", function () {
    // 此时根据无障碍服务的开启情况，同步开关的状态 
    ui.autoService.checked = auto.service != null;
});
//开启悬浮窗权限
ui.overlayService.on("check", function (checked) {
    // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
    if (checked) {
        int = app.startActivity({
            packageName: "com.android.settings",
            className: "com.android.settings.Settings$AppDrawOverlaySettingsActivity",
            data: "package:" + auto.service.getPackageName().toString()
        });
        toast("请打开悬浮窗开关");
    }

    if (!checked && auto.service != null) {
        auto.service.disableSelf();
        toast("已关闭悬浮窗权限");
    }
});


ui.ok_bp.on("click", () => {
    // engines.execScriptFile("tb_bp.js");
    "ui";

    var color = "#009688";
    ui.statusBarColor("#ff4040")
    ui.layout(
        <drawer id="drawer" >
            <vertical>
                <appbar>
                    <toolbar id="toolbar" paddingTop="5dp" title="聚划算百亿补贴模式" bg="#ff4040" />
                </appbar>

                <viewpager id="viewpager">
                    //这是聚划算百亿补贴界面
                    <frame> //start
                        <ScrollView>
                            <vertical>
                                <Switch id="autoService" text="无障碍服务" checked="{{auto.service != null}}" padding="8 8 8 8" textSize="13sp" />
                                {/* <Switch id="overlayService" text="悬浮窗权限" checked="{{auto.service != null}}" padding="8 8 8 8"textSize="13sp" />  */}
                                <text textSize="13sp" id="networkTesttwo" textColor="#ff0000" margin="0 5" text="默认校准淘宝时间！" />

                                <radiogroup orientation="horizontal">
                                    <checkbox id="pay1" text="自动付款" />
                                    <checkbox id="bt1" text="隐藏密码" checked="false" />
                                    <checkbox id="tijiao" text="检测提交价格" />
                                </radiogroup>

                                <horizontal>
                                    <text id="lianjie" text="请输入商品BP链接！支持聚划算百亿补贴！如何获取请点击我！" textColor="#ff0000" w="auto" />
                                </horizontal>


                                <text textSize="14sp" textColor="black" text="商品BP链接:" />
                                <input id="id1" textColor="gray" text="h5.m.taobao.com/cart/order.html?buyParam=610051376150_1_0" w="*" />


                                <horizontal>
                                    <text textSize="13sp" textColor="black" text="提前抢购时间" />
                                    <input id="delaytime_two" textColor="gray" inputType="number" text="700" w="80" />
                                    <text textSize="13sp" textColor="black" text="毫秒" />
                                </horizontal>

                                <horizontal>
                                    <text textSize="13sp" textColor="black" text="提交订单频率" />
                                    <input id="interval" textColor="gray" inputType="number" text="100" w="80" />
                                    <text textSize="13sp" textColor="black" text="毫秒" />
                                </horizontal>

                                <horizontal>
                                    <text textSize="13sp" textColor="black" text="抢购持续时间" />
                                    <input id="lastTime_two" textColor="gray" inputType="number" text="10" w="80" />
                                    <text textSize="13sp" textColor="black" text="秒" />
                                </horizontal>

                                <horizontal>
                                    <text textSize="14sp" textColor="black" text="商品价格不等于" />
                                    <input id="password_7" textColor="gray" inputType="number|numberDecimal" text="10" w="80" />
                                    <text textSize="14sp" textColor="black" text="元不提交" />
                                </horizontal>

                                <linear id="h" layout_gravity="center">
                                    <horizontal>
                                        <text textSize="13sp" textColor="black" text="支付密码：" />
                                        <input id="password_1" textColor="gray" text="*" w="45" />
                                        <input id="password_2" textColor="gray" text="*" w="45" />
                                        <input id="password_3" textColor="gray" text="*" w="45" />
                                        <input id="password_4" textColor="gray" text="*" w="45" />
                                        <input id="password_5" textColor="gray" text="*" w="45" />
                                        <input id="password_6" textColor="gray" text="*" w="45" />
                                    </horizontal>
                                </linear>

                                <text textSize="13sp" textColor="black" text="请输入抢购时间，格式为：2020/04/14 12:00:00" />
                                <input hint="请输入抢购时间，格式必须正确" textColor="gray" id="startTime_two" />
                                //定义按钮的大小颜色和文本
                                <colored-button id="ok_two" layout_gravity="center" color="#ff5500" text="开始运行" />
                                <colored-button id="fastTbUrlOpen" layout_gravity="center" color="#ff5500" text="点击跳转" />
                            </vertical>
                        </ScrollView>
                    </frame> //end

                </viewpager>
            </vertical>
        </drawer>
    );

    ui.lianjie.on("click", function () {
        app.openUrl("https://docs.qq.com/doc/DYW1CWXFEVEFnc01O?pub=1&dver=2.1.0")
    })
    //BP跳转
    ui.fastTbUrlOpen.on("click", () => {
        if (ui.id1.text() == "") {
            toast("请输入商品的BP链接！")
        }
        else {
            var url = ui.id1.text();
            app.startActivity({
                action: "android.intent.action.VIEW",
                data: "taobao://" + url,
                packageName: "com.taobao.taobao",
            });
        }
    });
    var 不提交订单 = "无"
    var 提交订单 = "有"
    ui.tijiao.on("check", (checked) => {
        if (checked) {
            不提交订单 = "有"
            提交订单 = "无"
            toast("检测商品提交价格，大于预定价格不提交！");
        }
        else {
            不提交订单 = "无"
            提交订单 = "有"
        }
    });
    //密码隐藏
    ui.bt1.on("check", (checked) => {
        if (ui.bt1.getText() == "隐藏密码") {
            ui.bt1.setText("显示密码");
            ui.h.visibility = 8;
            toast("密码已隐藏!");
        } else {
            ui.bt1.setText("隐藏密码");
            ui.h.visibility = 0;
            toast("密码已显示!");
        }
    });
    //自动付款
    var 自动付款 = "无"
    ui.pay1.on("check", (checked) => {
        if (checked) {
            自动付款 = "有"
            toast("已开启自动付款");
        }
        else {
            自动付款 = "无"
        }
    });


    //这里是无障碍触发方式
    ui.autoService.on("check", function (checked) {
        // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启 
        if (checked && auto.service == null) {
            app.startActivity({
                action: "android.settings.ACCESSIBILITY_SETTINGS"
            });
        }
        if (!checked && auto.service != null) {
            auto.service.disableSelf();
        }
    });
    // 当用户回到本界面时，resume事件会被触发
    ui.emitter.on("resume", function () {
        // 此时根据无障碍服务的开启情况，同步开关的状态 
        ui.autoService.checked = auto.service != null;
    });
    //    //开启悬浮窗权限
    //     ui.overlayService.on("check", function (checked) {
    //     // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
    //     if (checked) {
    //         int = app.startActivity({
    //             packageName: "com.android.settings",
    //             className: "com.android.settings.Settings$AppDrawOverlaySettingsActivity",
    //             data: "package:" + auto.service.getPackageName().toString()
    //         });
    //         toast("请打开悬浮窗开关");
    //     }

    //      if (!checked && auto.service != null) {
    //          auto.service.disableSelf();
    //          toast("已关闭悬浮窗权限");
    //          }
    //     });


    // 获取时分秒用于记录日志
    function logWithTime(msg) {
        console.info(formatDate(getNow()) + " " + msg);
    }

    // 检测淘宝网络延迟和时间偏差
    var NTP = {
        requiredResponses: 3,
        serverTimes: [],//服务器时间
        serverDelay: [],//服务器延迟
        serverUrl: "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
        resyncTime: 0, // minutes
        sync: function () {
            var offset = storage.get("NTPClockOffset");//获取时钟偏移
            if (offset) {
                try {
                    var t = offset.split("|")[1];
                    var d = NTP.fixTime() - parseInt(t, 10);
                    if (d < (1000 * 60 * NTP.resyncTime)) {
                        return false;
                    }
                } catch (e) {
                }
            }
            NTP.getServerTime();
        },
        getNow: function () {
            var date = new Date();
            return date.getTime();
        },
        //分析服务器响应
        parseServerResponse: function (data) {
            var NtpStartTime = storage.get("NtpStartTime");
            var NtpStopTime = NTP.getNow();
            var origtime = parseInt(data.data.t);//起始时间
            var delay = ((NtpStopTime - NtpStartTime) / 2);//延迟
            var offset = NtpStopTime - origtime - delay;//抵消
            NTP.serverTimes.push(offset);
            NTP.serverDelay.push(delay);

            // 因为网络问题，需要多次获取偏移值，获取平均值
            if (NTP.serverTimes.length >= NTP.requiredResponses) {
                var sumOffset = 0;
                var sumDelay = 0;
                var i = 0;
                for (i = 0; i < NTP.serverTimes.length; i++) {
                    sumOffset += NTP.serverTimes[i];
                    sumDelay += NTP.serverDelay[i];
                }
                var averageOffset = Math.round(sumOffset / i);
                var averageDelay = Math.round(sumDelay / i);
                storage.put("NTPClockOffset", averageOffset + '|' + NTP.fixTime()); // 保存获得offset时的时间戳
                storage.put("NTPClockDelay", averageDelay); // 保存获得offset时的时间戳
            } else {
                NTP.getServerTime();
            }
        },
        //获取服务器时间并判断是否获取成功
        getServerTime: function () {
            var NtpStartTime = NTP.getNow();
            storage.put("NtpStartTime", NtpStartTime);
            var res = http.get(NTP.serverUrl);
            if (res.statusCode !== 200) {
                toast("获取网络时间失败: " + res.statusCode + " " + res.statusMessage);
                return false;
            } else {
                NTP.parseServerResponse(res.body.json());
            }
        },
        //固定时间
        fixTime: function (timeStamp) {
            if (!timeStamp) {
                timeStamp = NTP.getNow();
            }
            var offset = storage.get("NTPClockOffset");
            try {
                if (!offset) {
                    offset = 0;
                } else {
                    offset = offset.split("|")[0];
                }
                if (isNaN(parseInt(offset, 10))) {
                    return timeStamp;
                }
                return timeStamp + parseInt(offset, 10);
            } catch (e) {
                return timeStamp;
            }
        }
    };




    // 获取默认开始时间
    function getTime() {
        var fmt = "YYYY-MM-dd hh:mm:ss";
        var d = new Date();
        var hh = d.getHours();
        var mm = d.getMinutes();
        var ss = d.getSeconds();
        if (mm < 30) {
            mm = 30
            ss = 00
        }
        else {
            hh += 1
            mm = 00
            ss = 00
        }

        var o = {
            "Y+": d.getYear() + 1900,
            "M+": d.getMonth() + 1,
            "d+": d.getDate(),
            "h+": hh,
            // "m+": d.getMinutes(),
            // "s+": d.getSeconds()
            "m+": mm,
            "s+": ss
        };
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 4) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        fmt = fmt.replace(/-/g, '/');
        return fmt;
    };

    //定义初始化界面数据
    var storage = storages.create("tmalltaobaohelper.byfly");
    threads.start(NTP.sync);

    //初始化淘宝界面
    setTimeout(initConfig_two, 500);
    function initConfig_two() {
        NTPClockOffset = storage.get("NTPClockOffset", "0");
        NTPClockDelay = storage.get("NTPClockDelay", "0");
        if (!NTPClockOffset) {
            NTPClockOffset = 0;
        } else {
            NTPClockOffset = parseInt(NTPClockOffset.split("|")[0]);
        }
        if (NTPClockOffset < 0) {
            var offset_str = "慢了" + -NTPClockOffset + 'ms，'
        } else {
            offset_str = "快了" + NTPClockOffset + 'ms，'
        }
        if (NTPClockDelay < 50) {
            var good_str = "网速评估:" + "您的网络延迟低于50ms，非常优秀！"
        }
        else if (NTPClockDelay < 100) {
            var good_str = "网速评估:" + "您的网络延迟低于100ms，优秀！"
        }
        else if (NTPClockDelay > 100 && NTPClockDelay < 200) {
            var good_str = "网速评估:" + "您的网络延迟高于100ms，抢购可能会有影响！"
        }
        else {
            good_str = "网速评估:" + "您的网络质量不佳，建议切换网络！"
        }

        ui.networkTesttwo.on("click", function () {
            ui.networkTesttwo.setText("时间校准:" + "本地时间比淘宝" + offset_str + "已经为您校准了淘宝时间！" + '\n' + "网络延迟：" + NTPClockDelay + '\n' + good_str);
        });

        ui.startTime_two.setText(getTime());
        ui.interval.setText(storage.get("interval", "100").toString());
        ui.lastTime_two.setText(storage.get("lastTime_two", "10").toString());
        ui.delaytime_two.setText(storage.get("delaytime_two", "700").toString());
    }

    // 时间戳转时间字符串
    function add0(m) {
        return m < 10 ? '0' + m : m
    }
    function getNow() {
        var now = new Date().getTime();
        return now - NTPClockOffset;
    }

    function formatDate(needTime) {
        //needTime是整数，否则要parseInt转换
        var time = new Date(parseInt(needTime));
        var h = time.getHours();
        var mm = time.getMinutes();
        var s = time.getSeconds();
        var S = time.getMilliseconds();
        return add0(h) + ':' + add0(mm) + ':' + add0(s) + ":" + add0(S);
    }


    // 检测时间字符串是否有效
    function strDateTime(str) {
        var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
        var r = str.match(reg);
        if (r == null) return false;
        var d = new Date(r[1], r[3] - 1, r[4], r[5], r[6], r[7]);
        return (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4] && d.getHours() == r[5] && d.getMinutes() == r[6] && d.getSeconds() == r[7]);
    }

    var storage3 = storages.create("这个是一个文件名2");
    for (i = 0; i < 7; i++) {
        var content2 = storage3.get("password_" + (i + 1));

        if (content2) {
            ui["password_" + (i + 1)].setText(content2);
        }
    }

    var storage4 = storages.create("这个是一个文件");
    for (i = 0; i < 1; i++) {
        var content4 = storage4.get("id" + (i + 1));

        if (content4) {
            ui["id" + (i + 1)].setText(content4);
        }
    }

    // 淘宝程序主要逻辑
    ui.ok_two.click(function () {
        // 检查无障碍服务
        if (auto.service == null) {
            toast("请先开启无障碍服务！");
            return;
        }
        arr = new Array();
        for (i = 0; i < 7; i++) {
            var content2 = ui["password_" + (i + 1)].getText() + "";
            storage3.put("password_" + (i + 1), content2);
            arr.push(content2);
        };


        arr2 = new Array();
        for (i = 0; i < 1; i++) {
            var content4 = ui["id" + (i + 1)].getText() + "";
            storage4.put("id" + (i + 1), content4);
            arr2.push(content4);
        };


        //接收界面数据
        startTime_two = ui.startTime_two.getText().toString();
        interval = parseInt(ui.interval.getText());
        lastTime_two = parseInt(ui.lastTime_two.getText());
        delaytime_two = parseInt(ui.delaytime_two.getText());
        if (!strDateTime(startTime_two)) {
            ui.startTime_two.setError("日期错误，请重新输入！");
            return;
        }
        //传递界面数据      
        storage.put("interval", interval);
        storage.put("lastTime_two", lastTime_two);
        storage.put("delaytime_two", delaytime_two);

        //按下开始运行
        if (ui.ok_two.getText() == "开始运行") {
            ui.ok_two.setText("停止运行");
            threads.start(main_two);
            device.keepScreenOn()//保持屏幕常亮
        } else {
            ui.ok_two.setText("开始运行");
            console.clear();
            console.hide();
            threads.shutDownAll();
            device.cancelKeepingAwake();
        }

    });
    //这是淘宝主程序 
    function main_two() {
        var middle = device.width / 2 - 400;
        console.setPosition(middle, 0);
        console.setGlobalLogConfig({ "file": "/sdcard/日志.txt" });
        console.show();
        var DetailPage = 0;
        var notDetailPage = 0;
        var notInDetailPage = 0

        logWithTime("欢迎使用淘宝BP链接模式！");
        sleep(800);
        logWithTime("请勿用于非法用途");
        sleep(800);
        logWithTime("请打开手机淘宝，并重新切换到点击跳转页面！");
        sleep(800);
        var startTime2 = new Date(Date.parse(startTime_two)).getTime();
        var endTime = new Date(startTime2.valueOf() + lastTime_two * 1000).getTime();
        var Panningingtime = startTime2 - delaytime_two;

        reviewtime();
        //判断实际时间是否大于抢购时间
        function reviewtime() {
            var tt = getNow();
            if (tt > Panningingtime) {
                console.warn("您的时间已经错过了哦，请重新输入时间！");
                sleep(2000);
                console.clear();
                console.hide();
                threads.shutDownAll();
            }
            if (tt < Panningingtime) {
                logWithTime("您的抢购时间为：" + formatDate(Panningingtime));
                logWithTime("距离抢购时间还剩" + (startTime2 - tt) / 1000 + "秒" + "请耐心等待");
            }
        }
        // 检测是否在商品详情页
        x = setInterval(function () {
            var t = getNow();
            if (t < Panningingtime) {
                if (className("android.widget.Button").text("点击跳转").exists()) {
                    if (DetailPage === 0) {
                        logWithTime("已找到跳转按钮，请等待......");
                        DetailPage++;
                        notDetailPage = 0
                    }

                } else {
                    if (notInDetailPage === 0) {
                        logWithTime("未找到跳转按钮，否则无法进行跳转！");
                        DetailPage = 0;
                        notInDetailPage++
                    }
                }
            } else {
                not_in_Detail_Page = 0;  // 商品详情页状态复位
                clearInterval(x)
            }
        }, 500);

        z = setInterval(function () {
            var t = getNow();
            if (t >= Panningingtime && t < endTime) {
                logWithTime("开始抢购")
                BP链接();
                clearInterval(z);
            }
        }, 10)
    };
    function BP链接() {
        var 价格值 = ui.password_7.text()
        var 跳转 = "有"
        var Crowding = 0;
        var cishu = 0;
        var endTime = lastTime_two * 1000;
        var password_1 = ui.password_1.text() * 1;
        var password_2 = ui.password_2.text() * 1;
        var password_3 = ui.password_3.text() * 1;
        var password_4 = ui.password_4.text() * 1;
        var password_5 = ui.password_5.text() * 1;
        var password_6 = ui.password_6.text() * 1;
        //如果在购物车
        threads.start(function () {
            setInterval(function () {
                if (跳转 == "有") {
                    if (className("android.widget.Button").text("点击跳转").exists()) {
                        logWithTime("准备跳转");
                        className("android.widget.Button").text("点击跳转").findOne().click()
                        logWithTime("已跳转");
                        跳转 = "无"
                    }
                }
            }, 100)
        })
        threads.start(function () {
            setInterval(function () {
                if (className("android.widget.TextView").text("加入购物车").exists()) {
                    var 领卷购买 = id("com.taobao.taobao:id/detail_main_sys_button").findOne()
                    press(领卷购买.bounds().centerX() + 344, 领卷购买.bounds().centerY(), 1)
                    id("confirm").findOne().click()
                }
            }, 100);
        });

        threads.start(function () {
            setInterval(function () {
                if (id("confirm").exists()) {
                    id("confirm").findOne().click()
                }
            }, 100);
        });

        if (不提交订单 == "有") {
            var 校验价格 = "真"
            if (校验价格 == "真") {
                threads.start(function () {
                    setInterval(function () {
                        if (className("android.widget.TextView").text("￥" + 价格值).depth(12).exists() && className("android.widget.TextView").text("提交订单").exists()) {
                            logWithTime("已找到符合预定价格的商品，开始提交订单！");
                            className("android.widget.TextView").text("提交订单").findOne().click();
                            找到了 = "真"
                        }
                        else if (className("android.widget.TextView").text("提交订单").exists()) {
                            logWithTime("没有找到符合预定价格的商品，不提交订单！");
                            Panic_buying_end()
                        }
                    }, 200)
                })
            }
        }


        if (提交订单 == "有") {
            threads.start(function () {
                setInterval(function () {
                    if (className("android.widget.TextView").text("提交订单").exists()) {
                        logWithTime("正在尝试提交订单");
                        className("android.widget.TextView").text("提交订单").findOne().click();
                        logWithTime("订单已提交");
                    }
                }, 10)
            })
        }
        threads.start(function () {
            setInterval(function () {
                if (className("android.widget.TextView").textContains("加载中").exists()) {
                    if (Crowding === 0) {
                        Crowding = 1
                        logWithTime("页面加载中");
                    }
                }
            }, 10)
        })
        threads.start(function () {
            setInterval(function () {
                if (className("android.widget.TextView").text("我知道了").exists()) {
                    className("android.widget.TextView").text("我知道了").findOne().click();
                    found = true;
                    cishu++;
                    logWithTime("第" + cishu + "次拥挤了，再试一次吧！");
                }
            }, 10)
        })
        threads.start(function () {
            setInterval(function () {
                if (className("android.widget.TextView").text("立即付款").exists()) {
                    if (自动付款 == "无") {
                        logWithTime("抢购成功！请支付！");
                        device.cancelKeepingAwake();
                        Panic_buying_end()
                    }
                }
                if (自动付款 == "有") {
                    click("立即付款")
                }
            }, 200)
        })
        var 密码1 = "真"
        var 密码2 = "假"
        var 密码3 = "假"
        var 密码4 = "假"
        var 密码5 = "假"
        var 密码6 = "假"
        threads.start(function () {
            setInterval(function () {
                if (className("android.widget.TextView").text("请输入支付密码").exists()) {
                    if (密码1 == "真" && className("android.widget.TextView").text(password_1).exists()) { click(password_1); 密码2 = "真"; sleep(10) }
                    if (密码2 == "真" && className("android.widget.TextView").text(password_2).exists()) { click(password_2); 密码3 = "真"; sleep(10) }
                    if (密码3 == "真" && className("android.widget.TextView").text(password_3).exists()) { click(password_3); 密码4 = "真"; sleep(10) }
                    if (密码4 == "真" && className("android.widget.TextView").text(password_4).exists()) { click(password_4); 密码5 = "真"; sleep(10) }
                    if (密码5 == "真" && className("android.widget.TextView").text(password_5).exists()) { click(password_5); 密码6 = "真"; sleep(10) }
                    if (密码6 == "真" && className("android.widget.TextView").text(password_6).exists()) { click(password_6); Panic_buying_end() }
                }
            }, 300)
        })
        threads.start(function () {
            setInterval(function () {
                if (className("android.view.View").desc("查看订单").findOne().parent().exists()) {
                    logWithTime("支付成功！");
                    Panic_buying_end()
                }
            }, 10)
        })
        threads.start(function () {
            setInterval(function () {
                sleep(endTime)
                logWithTime("超出预定抢购时长，抢购结束");
                device.cancelKeepingAwake();
                Panic_buying_end();

            }, 10)
        })
    }



    function Panic_buying_end() {
        device.cancelKeepingAwake()//关闭屏幕常亮
        logWithTime("本次抢购结束");
        threads.shutDownAll()
    }

});
// 获取时分秒用于记录日志
function logWithTime(msg) {
    console.info(formatDate(getNow()) + " " + msg);
}

// 检测淘宝网络延迟和时间偏差
var NTP = {
    requiredResponses: 3,
    serverTimes: [],//服务器时间
    serverDelay: [],//服务器延迟
    serverUrl: "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
    resyncTime: 0, // minutes
    sync: function () {
        var offset = storage.get("NTPClockOffset");//获取时钟偏移
        if (offset) {
            try {
                var t = offset.split("|")[1];
                var d = NTP.fixTime() - parseInt(t, 10);
                if (d < (1000 * 60 * NTP.resyncTime)) {
                    return false;
                }
            } catch (e) {
            }
        }
        NTP.getServerTime();
    },
    getNow: function () {
        var date = new Date();
        return date.getTime();
    },
    //分析服务器响应
    parseServerResponse: function (data) {
        var NtpStartTime = storage.get("NtpStartTime");
        var NtpStopTime = NTP.getNow();
        var origtime = parseInt(data.data.t);//起始时间
        var delay = ((NtpStopTime - NtpStartTime) / 2);//延迟
        var offset = NtpStopTime - origtime - delay;//抵消
        NTP.serverTimes.push(offset);
        NTP.serverDelay.push(delay);

        // 因为网络问题，需要多次获取偏移值，获取平均值
        if (NTP.serverTimes.length >= NTP.requiredResponses) {
            var sumOffset = 0;
            var sumDelay = 0;
            var i = 0;
            for (i = 0; i < NTP.serverTimes.length; i++) {
                sumOffset += NTP.serverTimes[i];
                sumDelay += NTP.serverDelay[i];
            }
            var averageOffset = Math.round(sumOffset / i);
            var averageDelay = Math.round(sumDelay / i);
            storage.put("NTPClockOffset", averageOffset + '|' + NTP.fixTime()); // 保存获得offset时的时间戳
            storage.put("NTPClockDelay", averageDelay); // 保存获得offset时的时间戳
        } else {
            NTP.getServerTime();
        }
    },
    //获取服务器时间并判断是否获取成功
    getServerTime: function () {
        var NtpStartTime = NTP.getNow();
        storage.put("NtpStartTime", NtpStartTime);
        var res = http.get(NTP.serverUrl);
        if (res.statusCode !== 200) {
            toast("获取网络时间失败: " + res.statusCode + " " + res.statusMessage);
            return false;
        } else {
            NTP.parseServerResponse(res.body.json());
        }
    },
    //固定时间
    fixTime: function (timeStamp) {
        if (!timeStamp) {
            timeStamp = NTP.getNow();
        }
        var offset = storage.get("NTPClockOffset");
        try {
            if (!offset) {
                offset = 0;
            } else {
                offset = offset.split("|")[0];
            }
            if (isNaN(parseInt(offset, 10))) {
                return timeStamp;
            }
            return timeStamp + parseInt(offset, 10);
        } catch (e) {
            return timeStamp;
        }
    }
};




// 获取默认开始时间
function getTime() {
    var fmt = "YYYY-MM-dd hh:mm:ss";
    var d = new Date();
    var hh = d.getHours();
    var mm = d.getMinutes();
    var ss = d.getSeconds();
    if (mm < 30) {
        mm = 30
        ss = 00
    }
    else {
        hh += 1
        mm = 00
        ss = 00
    }

    var o = {
        "Y+": d.getYear() + 1900,
        "M+": d.getMonth() + 1,
        "d+": d.getDate(),
        "h+": hh,
        // "m+": d.getMinutes(),
        // "s+": d.getSeconds()
        "m+": mm,
        "s+": ss
    };
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 4) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    fmt = fmt.replace(/-/g, '/');
    return fmt;
};

//定义初始化界面数据
var storage = storages.create("tmalltaobaohelper.byfly");
threads.start(NTP.sync);

//初始化苏宁界面数据
setTimeout(initConfig, 500);

function initConfig() {

    ui.startTime.setText(getTime());
    ui.interval.setText(storage.get("interval", "100").toString());
    ui.lastTime.setText(storage.get("lastTime", "10").toString());
    ui.delaytime.setText(storage.get("delaytime", "800").toString());
}
//初始化淘宝界面
setTimeout(initConfig_two, 500);
function initConfig_two() {
    NTPClockOffset = storage.get("NTPClockOffset", "0");
    NTPClockDelay = storage.get("NTPClockDelay", "0");
    if (!NTPClockOffset) {
        NTPClockOffset = 0;
    } else {
        NTPClockOffset = parseInt(NTPClockOffset.split("|")[0]);
    }
    if (NTPClockOffset < 0) {
        var offset_str = "慢了" + -NTPClockOffset + 'ms，'
    } else {
        offset_str = "快了" + NTPClockOffset + 'ms，'
    }
    if (NTPClockDelay < 50) {
        var good_str = "网速评估:" + "您的网络延迟低于50ms，非常优秀！"
    }
    else if (NTPClockDelay < 100) {
        var good_str = "网速评估:" + "您的网络延迟低于100ms，优秀！"
    }
    else if (NTPClockDelay > 100 && NTPClockDelay < 200) {
        var good_str = "网速评估:" + "您的网络延迟高于100ms，抢购可能会有影响！"
    }
    else {
        good_str = "网速评估:" + "您的网络质量不佳，建议切换网络！"
    }

    ui.networkTesttwo.on("click", function () {
        ui.networkTesttwo.setText("时间校准:" + "本地时间比淘宝" + offset_str + "已经为您校准了淘宝时间！" + '\n' + "网络延迟：" + NTPClockDelay + '\n' + good_str);
    });

    ui.startTime_two.setText(getTime());
    ui.interval.setText(storage.get("interval", "100").toString());
    ui.lastTime_two.setText(storage.get("lastTime_two", "10").toString());
    ui.delaytime_two.setText(storage.get("delaytime_two", "200").toString());
    ui.count.setText(storage.get("count", "3").toString());

}

//初始化京东界面数据
setTimeout(initConfig_tree, 500);
function initConfig_tree() {

    ui.startTime_tree.setText(getTime());
    ui.interval.setText(storage.get("interval", "100").toString());
    ui.lastTime_tree.setText(storage.get("lastTime_tree", "10").toString());
    ui.delaytime_tree.setText(storage.get("delaytime_tree", "800").toString());

}
//获取京东时间
var thread = threads.start(function () {  //页面网络延时提示  
    timestamp1 = new Date().getTime();
    r = http.get("https://a.jd.com//ajax/queryServerData.html");
    timestamp2 = new Date().getTime()
    JDnetwork_delay = timestamp2 - timestamp1  //网络延时
    var objj = r.body.json();
    JDtime_difference = timestamp1 - objj.serverTime//网络时间差 
    if (JDtime_difference < 0) {
        var JDoffset_str = "慢了" + -JDtime_difference + 'ms，'
    } else {
        JDoffset_str = "快了" + JDtime_difference + 'ms，'
    }
    if (JDnetwork_delay < 50) {
        var JDgood_str = "网速评估:" + "您的网络延迟低于50ms，非常优秀！"
    }
    else if (JDnetwork_delay < 100) {
        var JDgood_str = "网速评估:" + "您的网络延迟低于100ms，优秀！"
    }
    else if (JDnetwork_delay > 100 && JDnetwork_delay < 200) {
        var JDgood_str = "网速评估:" + "您的网络延迟高于100ms，抢购可能会有影响！"
    }
    else {
        JDgood_str = "网速评估:" + "您的网络质量不佳，建议切换网络！"
    }
    ui.networkTest_tree.on("click", function () {
        ui.networkTest_tree.setText("时间校准:" + "本地时间比京东" + JDoffset_str + "已经为您校准了京东时间！" + '\n' + "网络延时：" + JDnetwork_delay + '\n' + JDgood_str);
    });

});
//获取苏宁时间
var thread2 = threads.start(function () {
    timestamp1 = new Date().getTime();
    recode_suning = http.get("http://quan.suning.com/getSysTime.do");
    timestamp2 = new Date().getTime();
    SNnetwork_delay = timestamp2 - timestamp1
    var suningTime = recode_suning.body.json();
    var nowdate = suningTime.sysTime2;
    var nowdate2 = nowdate.replace(/-/g, '/');
    var nowtime = new Date(nowdate2).getTime();
    SNtime_difference = timestamp1 - nowtime;
    if (SNtime_difference < 0) {
        var SNoffset_str = "慢了" + -SNtime_difference + 'ms，'
    } else {
        SNoffset_str = "快了" + SNtime_difference + 'ms，'
    }
    if (SNnetwork_delay < 50) {
        var SNgood_str = "网速评估:" + "您的网络延迟低于50ms，非常优秀！"
    }
    else if (SNnetwork_delay < 100) {
        var SNgood_str = "网速评估:" + "您的网络延迟低于100ms，优秀！"
    }
    else if (SNnetwork_delay > 100 && SNnetwork_delay < 200) {
        var SNgood_str = "网速评估:" + "您的网络延迟高于100ms，抢购可能会有影响！"
    }
    else {
        SNgood_str = "网速评估:" + "您的网络质量不佳，建议切换网络！"
    }
    ui.networkTest.on("click", function () {
        ui.networkTest.setText("时间校准:" + "本地时间比苏宁" + SNoffset_str + "已经为您校准了苏宁时间！" + '\n' + "网络延时：" + SNnetwork_delay + '\n' + SNgood_str);
    });
});

// 时间戳转时间字符串
function add0(m) {
    return m < 10 ? '0' + m : m
}
function getNow() {
    var now = new Date().getTime();
    return now - NTPClockOffset;
}

function formatDate(needTime) {
    //needTime是整数，否则要parseInt转换
    var time = new Date(parseInt(needTime));
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    var S = time.getMilliseconds();
    return add0(h) + ':' + add0(mm) + ':' + add0(s) + ":" + add0(S);
}


// 检测时间字符串是否有效
function strDateTime(str) {
    var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
    var r = str.match(reg);
    if (r == null) return false;
    var d = new Date(r[1], r[3] - 1, r[4], r[5], r[6], r[7]);
    return (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4] && d.getHours() == r[5] && d.getMinutes() == r[6] && d.getSeconds() == r[7]);
}

// 苏宁程序主要逻辑
ui.ok.click(function () {
    // 检查无障碍服务
    if (auto.service == null) {
        toast("请先开启无障碍服务！");
        return;
    }
    //接收界面数据
    startTime = ui.startTime.getText().toString();

    interval = parseInt(ui.interval.getText());
    lastTime = parseInt(ui.lastTime.getText());
    delaytime = parseInt(ui.delaytime.getText());
    if (!strDateTime(startTime)) {
        ui.startTime.setError("日期错误，请重新输入！");
        return;
    }
    //传递界面数据      
    storage.put("interval", interval);
    storage.put("lastTime", lastTime);
    storage.put("delaytime", delaytime);

    if (ui.ok.getText() == "开始运行") {
        ui.ok.setText("停止运行");
        model_change();
        device.keepScreenOn()//保持屏幕常亮
    } else {
        ui.ok.setText("开始运行");
        console.clear();
        console.hide();
        threads.shutDownAll();
        device.cancelKeepingAwake();
    }
});
function model_change() {
    if (平台类别2 == "苏宁页面") {
        device.keepScreenOn();
        threads.start(main);
    }
    if (平台类别2 == "苏宁购物车") {
        device.keepScreenOn();
        threads.start(sn购物车);
    }
}

var storage3 = storages.create("这个是一个文件名2");
for (i = 0; i < 7; i++) {
    var content2 = storage3.get("password_" + (i + 1));

    if (content2) {
        ui["password_" + (i + 1)].setText(content2);
    }
}

var storage6 = storages.create("这个是一个文件名6");
for (i = 0; i < 2; i++) {
    var content6 = storage6.get("X" + (i + 1));

    if (content6) {
        ui["X" + (i + 1)].setText(content6);
    }
}

// 淘宝程序主要逻辑
ui.ok_two.click(function () {
    // 检查无障碍服务
    if (auto.service == null) {
        toast("请先开启无障碍服务！");
        return;
    }
    arr = new Array();
    for (i = 0; i < 7; i++) {
        var content2 = ui["password_" + (i + 1)].getText() + "";
        storage3.put("password_" + (i + 1), content2);
        arr.push(content2);
    };

    arr6 = new Array();
    for (i = 0; i < 2; i++) {
        var content6 = ui["X" + (i + 1)].getText() + "";
        storage6.put("X" + (i + 1), content6);
        arr6.push(content6);
    };
    //接收界面数据
    startTime_two = ui.startTime_two.getText().toString();
    interval = parseInt(ui.interval.getText());
    count = parseInt(ui.count.getText());
    lastTime_two = parseInt(ui.lastTime_two.getText());
    delaytime_two = parseInt(ui.delaytime_two.getText());
    if (!strDateTime(startTime_two)) {
        ui.startTime_two.setError("日期错误，请重新输入！");
        return;
    }
    //传递界面数据      
    storage.put("interval", interval);
    storage.put("count", count);
    storage.put("lastTime_two", lastTime_two);
    storage.put("delaytime_two", delaytime_two);

    //按下开始运行

    if (ui.ok_two.getText() == "开始运行") {
        var X轴判断 = ui.X1.text();
        var Y轴判断 = ui.X2.text();
        if (X轴判断.length == 0 && 连续提交 == "有") {
            toast("您选择了连续提交模式，但未输入X轴坐标！")
            ui.X1.setError("您选择了连续提交模式，但未输入X轴坐标！")
            return;
        }
        if (Y轴判断.length == 0 && 连续提交 == "有") {
            toast("您选择了连续提交模式，但未输入Y轴坐标！")
            ui.X2.setError("您选择了连续提交模式，但未输入Y轴坐标！")
            return;
        }
        if (X轴判断.length >= 5 && 连续提交 == "有") {
            ui.X1.setError("您的坐标有误，请重新输入！");
            return;
        }
        if (Y轴判断.length >= 5 && 连续提交 == "有") {
            ui.X2.setError("您的坐标有误，请重新输入！");
            return;
        }
        if (连续提交 == "无" || 连续提交 == "有") {
            ui.ok_two.setText("停止运行");
            threads.start(main_two);
            device.keepScreenOn()//保持屏幕常亮
        }
    } else {
        ui.ok_two.setText("开始运行");
        console.clear();
        console.hide();
        threads.shutDownAll();
        device.cancelKeepingAwake();
    }
});


// 京东程序主要逻辑
ui.ok_tree.click(function () {
    // 检查无障碍服务
    if (auto.service == null) {
        toast("请先开启无障碍服务！");
        return;
    }

    //接收界面数据
    startTime_tree = ui.startTime_tree.getText().toString();
    interval = parseInt(ui.interval.getText());
    lastTime_tree = parseInt(ui.lastTime_tree.getText());
    delaytime_tree = parseInt(ui.delaytime_tree.getText());
    if (!strDateTime(startTime_tree)) {
        ui.startTime.setError("日期错误，请重新输入！");
        return;
    }
    //传递界面数据      
    storage.put("interval", interval);
    storage.put("lastTime_tree", lastTime_tree);
    storage.put("delaytime_tree", delaytime_tree);

    //按下开始运行
    if (ui.ok_tree.getText().toString() === '开始运行') {
        // 一直保持屏幕常亮
        device.keepScreenOn();
        model_change2();
        ui.ok_tree.setText('停止运行');
    } else {
        console.clear();
        console.hide();
        threads.shutDownAll();
        device.cancelKeepingAwake();
        ui.ok_tree.setText('开始运行');
    }

});

function model_change2() {
    if (平台类别 == "京东页面") {
        device.keepScreenOn();
        threads.start(main_tree);
    }
    if (平台类别 == "京东购物车") {
        device.keepScreenOn();
        threads.start(京东购物车);
    }
    if (平台类别 == "京东BP链接") {
        device.keepScreenOn();
        threads.start(京东BP链接);
    }
}

//这是苏宁主程序 
function main() {
    var middle = device.width / 2 - 400;
    console.setPosition(middle, 0);
    console.setGlobalLogConfig({ "file": "/sdcard/日志.txt" });
    console.show();
    var DetailPage = 0;
    var notDetailPage = 0;
    var notInDetailPage = 0

    logWithTime("欢迎使用苏宁秒杀助手");
    sleep(800);
    logWithTime("请勿用于非法用途");
    sleep(800);
    logWithTime("请进入所要抢购商品的详情页");
    sleep(800);

    var startTime2 = new Date(Date.parse(startTime)).getTime();
    var endTime = new Date(startTime2.valueOf() + lastTime * 1000).getTime();
    var Panningingtime = startTime2 - delaytime;


    reviewtime();
    //判断实际时间是否大于抢购时间
    function reviewtime() {
        var shijian = getNow();
        if (shijian > Panningingtime) {
            console.warn("您的时间已经错过了哦，请重新输入时间！");
            sleep(2000);
            console.clear();
            console.hide();
            threads.shutDownAll();
        }
        if (shijian < Panningingtime) {
            logWithTime("您的抢购时间为：" + formatDate(Panningingtime));
            logWithTime("距离抢购时间还剩" + (startTime2 - shijian) / 1000 + "秒" + "请耐心等待");
        }
    }
    // 检测是否在商品详情页
    x = setInterval(function () {
        var t = getNow();
        if (t < Panningingtime) {
            if (className("android.widget.TextView").text("已选").exists()) {
                if (DetailPage === 0) {
                    logWithTime("已进入商品详情页，请等待");
                    DetailPage++;
                    notDetailPage = 0
                }

            } else {
                if (notInDetailPage === 0) {
                    logWithTime("未进入商品详情页，请前往，否则无法进行购买！");
                    DetailPage = 0;
                    notInDetailPage++
                }
            }
        } else {
            not_in_Detail_Page = 0;  // 商品详情页状态复位
            clearInterval(x)
        }

    }, 500);


    z = setInterval(function () {
        var t = getNow();
        if (t >= Panningingtime && t < endTime) {
            logWithTime("开始抢购")
            苏宁页面();
            clearInterval(z);
        }
    }, 10)
};
function 苏宁页面() {
    var Crowding = 0;
    var endTime = lastTime * 1000;
    // 如果在抢购商品详情页面
    threads.start(function () {
        setInterval(function () {
            if (className("android.widget.Button").text("立即抢购").exists()) {
                logWithTime("准备点击抢购中");
                click("立即抢购");
                click("确定");
                click("提交订单");
                logWithTime("准备点击确定");
            }
        }, 10);
    });

    threads.start(function () {
        setInterval(function () {
            if (className("android.widget.TextView").text("立即抢购").exists()) {
                logWithTime("准备点击抢购中");
                click("立即抢购");
                click("提交订单");
                logWithTime("准备提交订单");
            }
        }, 10);
    });

    threads.start(function () {
        setInterval(function () {
            if (className("android.widget.TextView").textContains("立即购买").exists()) {
                logWithTime("准备点击购买中");
                click("立即购买");
                click("确定");
                click("提交订单");
                logWithTime("准备点击确定");
            }
        }, 10);
    });
    threads.start(function () {
        setInterval(function () {
            if (className("android.widget.TextView").textContains("马上抢").exists()) {
                logWithTime("准备点击马上抢");
                click("马上抢")
                logWithTime("马上抢已点击");
            }
        }, 10);
    });
    // 如果在确定界面
    threads.start(function () {
        setInterval(function () {
            if (className("android.widget.TextView").text("确定").exists()) {
                click("确定");
                logWithTime("确定已点击");
            }
        }, 10);
    });
    // 如果在提交订单界面
    threads.start(function () {
        setInterval(function () {
            if (className("android.widget.TextView").text("提交订单").exists()) {
                logWithTime("正在尝试提交订单");
                click("提交订单");
                logWithTime("订单已提交");
            }
        }, 10);
    });
    threads.start(function () {
        setInterval(function () {
            if (className("android.widget.TextView").text("知道了").exists()) {
                className("android.widget.TextView").text("知道了").findOne().click();
                Crowding++;
                logWithTime("第" + Crowding + "次拥挤了，再试一次吧！");
            }
        }, 10);
    });
    // 抢购成功
    threads.start(function () {
        setInterval(function () {
            if (className("android.widget.TextView").text("苏宁收银台").exists()) {
                logWithTime("抢购成功！请支付！");
                device.cancelKeepingAwake();
                Panic_buying_end();
            }
        }, 10);
    });
    threads.start(function () {
        setInterval(function () {
            sleep(endTime)
            logWithTime("超出预定抢购时长，抢购结束");
            device.cancelKeepingAwake();
            Panic_buying_end();
        }, 10);
    });
}
//这是淘宝主程序 
function main_two() {
    var middle = device.width / 2 - 400;
    console.setPosition(middle, 0);
    console.setGlobalLogConfig({ "file": "/sdcard/日志.txt" });
    console.show();
    var DetailPage = 0;
    var notDetailPage = 0;
    var notInDetailPage = 0
    var notChecked = 0;

    logWithTime("欢迎使用淘宝秒杀助手");
    sleep(800);
    logWithTime("请勿用于非法用途");
    sleep(800);
    logWithTime("本模式属于淘宝购物车抢购模式");
    sleep(800);
    logWithTime("请您进入购物车，否则无法进行购买！");
    sleep(800);

    var startTime2 = new Date(Date.parse(startTime_two)).getTime();
    var endTime = new Date(startTime2.valueOf() + lastTime_two * 1000).getTime();
    var Panningingtime = startTime2 - delaytime_two;

    reviewtime();
    //判断实际时间是否大于抢购时间
    function reviewtime() {
        var tt = getNow();
        if (tt > Panningingtime) {
            console.warn("您的时间已经错过了哦，请重新输入时间！");
            sleep(2000);
            console.clear();
            console.hide();
            threads.shutDownAll();
        }
        if (tt < Panningingtime) {
            logWithTime("您的抢购时间为：" + formatDate(Panningingtime));
            logWithTime("距离抢购时间还剩" + (startTime2 - tt) / 1000 + "秒" + "请耐心等待");
        }
    }
    // 检测是否在商品详情页
    x = setInterval(function () {
        var t = getNow();
        if (t < Panningingtime) {
            if (id("button_cart_charge").exists() || className("android.widget.TextView").text("全选").exists()) {
                if (DetailPage === 0) {
                    logWithTime("已进入购物车，请耐心等待...");
                    DetailPage++;
                    notDetailPage = 0
                }

            } else {
                if (notInDetailPage === 0) {
                    logWithTime("未进入购物车，请前往，否则无法进行购买！");
                    DetailPage = 0;
                    notInDetailPage++
                }
            }
        } else {
            not_in_Detail_Page = 0;  // 商品详情页状态复位
            clearInterval(x)
        }
        //判断是否勾选商品
        if (提前刷新 == "有") {
            if (notChecked === 0) {
                notChecked = 1
                logWithTime("请您勿勾选商品！");
                sleep(1000)
                logWithTime("需要提前刷新，将自动隐藏控制台！");
                console.hide()
            }
        }
        if (手动勾选 == "有") {
            if (className("android.widget.TextView").text("结算").exists()) {
                found = true;
                if (notChecked === 0) {
                    notChecked = 1
                    desc("全选").findOne().click()
                    logWithTime("检测到您未勾选商品，以为您自动勾选！");
                }
            }
        }
        else {
            if (notChecked === 0) {
                notChecked = 1
                logWithTime("请您勿勾选商品！");
            }
        }
    }, 500);
    z = setInterval(function () {
        var t = getNow();
        if (t >= Panningingtime && t < endTime) {
            logWithTime("开始抢购")
            淘宝购物车();
            clearInterval(z);
        }
    }, 10)
};
function 淘宝购物车() {
    var i = 1;
    var Crowding = 0;
    var Success = 0;
    var found = false;
    var endTime = lastTime_two * 1000
    var password_1 = ui.password_1.text() * 1;
    var password_2 = ui.password_2.text() * 1;
    var password_3 = ui.password_3.text() * 1;
    var password_4 = ui.password_4.text() * 1;
    var password_5 = ui.password_5.text() * 1;
    var password_6 = ui.password_6.text() * 1;
    var 提交订单X轴 = ui.X1.text() * 1;
    var 提交订单Y轴 = ui.X2.text() * 1;
    var 价格值 = ui.password_7.text()
    var count = ui.count.text() * 1
    if (提前刷新 == "有") {
        threads.start(function () {
            setInterval(function () {
                if (开启刷新 == "有") {
                    if (className("android.widget.TextView").text("结算")) {
                        logWithTime("开始刷新");
                        gesture(400, [500, 500], [500, 900])
                        logWithTime("已刷新");
                        开启刷新 = "无"
                    }
                }
            }, 10)
        })

        threads.start(function () {
            setInterval(function () {
                if (className("android.widget.TextView").text("加载完成").exists()) {
                    logWithTime("准备勾选");
                    className("android.view.View").desc("勾选按钮，商品未选中，双击选中商品").findOne().click()
                    logWithTime("已勾选");
                }
            }, 10)
        })
    }

    if (自动勾选 == "有") {
        var 全选 = "有"
        threads.start(function () {
            setInterval(function () {
                if (全选 == "有") {
                    if (className("android.widget.CheckBox").desc("全选").exists() && className("android.widget.TextView").textContains("结算").exists()) {
                        desc("全选").findOne().click()
                        全选 = "无"
                    }
                }
            }, 100)
        })

        var 校验价格 = "真"
        if (校验价格 == "真") {
            threads.start(function () {
                setInterval(function () {
                    if (className("android.widget.TextView").text("￥" + 价格值).depth(15).exists() && className("android.widget.TextView").textContains("结算(").exists()) {
                        logWithTime("已找到符合预定价格的商品，开始结算！");
                        className("android.widget.TextView").textContains("结算(1)").findOne().click();
                    }
                    else if (className("android.widget.TextView").textContains("结算(").exists()) {
                        全选 = "有"
                        logWithTime("未找到符合预定价格的商品，不结算，取消再次勾选！");
                        desc("取消全选").findOne().click()
                    }
                }, 200)
            })
        }
    } else {
        threads.start(function () {
            setInterval(function () {
                if (className("android.widget.TextView").textContains("结算(").exists()) {
                    logWithTime("准备点击结算");
                    className("android.widget.TextView").textContains("结算(").findOne().click();
                    found = true;
                    logWithTime("结算已点击");
                    if (测试 == "有") {
                        sleep(100)
                        logWithTime("测试模式不提交订单！");
                        Panic_buying_end();
                    }
                }
            }, 10)
        })
    }

    threads.start(function () {
        setInterval(function () {
            if (className("android.widget.TextView").text("失效宝贝").exists() && className("android.widget.TextView").text("商品不能购买").exists() && count > 0) {
                logWithTime("检测到商品已失效或无法购买，即将返回结算界面开始重试！");
                logWithTime("已返回结算界面，准备重试！");
                sleep(random(10, 30))
                back();
                count = count - 1;
                logWithTime("已重试" + i + "次");
                i++;
            }
        }, 100);
    });
    //不测试时才提交订单
    var 提交订单 = "真"
    if (测试 == "无" && 连续提交 == "有") {
        threads.start(function () {
            setInterval(function () {
                if (className("android.widget.TextView").text("提交订单").exists() && 提交订单 == "真") {
                    var x = 1
                    while (true) {
                        if (x < 50) {
                            press(提交订单X轴, 提交订单Y轴, 10)
                            x++;
                            logWithTime("正在尝试提交订单");
                        }
                        if (x == 50) {
                            break
                        }
                    }
                    提交订单 = "假"
                }
            }, 10)
        })
    }
    if (测试 == "无" && 连续提交 == "无") {
        threads.start(function () {
            setInterval(function () {
                if (className("android.widget.TextView").text("提交订单").exists() && className("android.widget.TextView").text("配送方式").exists()) {
                    logWithTime("正在尝试提交订单");
                    className("android.widget.TextView").text("提交订单").findOne().click();
                    logWithTime("订单已提交");
                }
            }, 10);
        });
    }
    threads.start(function () {
        setInterval(function () {
            if (className("android.widget.TextView").textContains("加载中").exists()) {
                if (Crowding === 0) {
                    Crowding = 1
                    logWithTime("页面加载中");
                }
                found = true;
            }
        }, 10);
    });


    threads.start(function () {
        setInterval(function () {
            if (className("android.widget.TextView").text("立即付款").exists()) {
                if (自动付款 == "无") {
                    logWithTime("抢购成功！请支付！");
                    found = true;
                    Success++;
                    device.cancelKeepingAwake();
                    Panic_buying_end();
                }
            }
            if (自动付款 == "有") {
                click("立即付款")
            }
        }, 200);
    });
    var 密码1 = "真"
    var 密码2 = "假"
    var 密码3 = "假"
    var 密码4 = "假"
    var 密码5 = "假"
    var 密码6 = "假"
    threads.start(function () {
        setInterval(function () {
            if (className("android.widget.TextView").text("请输入支付密码").exists()) {
                if (密码1 == "真" && className("android.widget.TextView").text(password_1).exists()) { click(password_1); 密码2 = "真"; sleep(10) }
                if (密码2 == "真" && className("android.widget.TextView").text(password_2).exists()) { click(password_2); 密码3 = "真"; sleep(10) }
                if (密码3 == "真" && className("android.widget.TextView").text(password_3).exists()) { click(password_3); 密码4 = "真"; sleep(10) }
                if (密码4 == "真" && className("android.widget.TextView").text(password_4).exists()) { click(password_4); 密码5 = "真"; sleep(10) }
                if (密码5 == "真" && className("android.widget.TextView").text(password_5).exists()) { click(password_5); 密码6 = "真"; sleep(10) }
                if (密码6 == "真" && className("android.widget.TextView").text(password_6).exists()) { click(password_6); Panic_buying_end() }
            }
        }, 300)
    })
    threads.start(function () {
        setInterval(function () {
            if (className("android.view.View").desc("查看订单").findOne().parent().exists()) {
                logWithTime("支付成功！");
                Panic_buying_end()
            }
        }, 10)
    })
    threads.start(function () {
        setInterval(function () {
            sleep(endTime)
            logWithTime("超出预定抢购时长，抢购结束");
            device.cancelKeepingAwake();
            Panic_buying_end();
        }, 10);
    });
}
//这是京东主程序 
function main_tree() {
    var middle = device.width / 2 - 400;
    console.setPosition(middle, 0);
    console.setGlobalLogConfig({ "file": "/sdcard/日志.txt" });
    console.show();
    var DetailPage = 0;
    var notDetailPage = 0;
    var notInDetailPage = 0

    logWithTime("欢迎使用京东秒杀助手");
    sleep(800);
    logWithTime("请勿用于非法用途");
    sleep(800);
    logWithTime("请您进入商品详情页，否则无法进行购买！");
    sleep(800);

    var startTime2 = new Date(Date.parse(startTime_tree)).getTime();
    var endTime = new Date(startTime2.valueOf() + lastTime_tree * 1000).getTime();
    var Panningingtime = startTime2 - delaytime_tree;


    reviewtime();
    //判断实际时间是否大于抢购时间
    function reviewtime() {
        var tt = getNow();
        if (tt > Panningingtime) {
            console.warn("您的时间已经错过了哦，请重新输入时间！");
            sleep(2000);
            console.clear();
            console.hide();
            threads.shutDownAll();
        }
        if (tt < Panningingtime) {
            logWithTime("您的抢购时间为：" + formatDate(Panningingtime));
            logWithTime("距离抢购时间还剩" + (startTime2 - tt) / 1000 + "秒" + "请耐心等待");
        }
    }
    // 检测是否在商品详情页
    x = setInterval(function () {
        var t = getNow();
        if (t < Panningingtime) {
            if (className("android.widget.LinearLayout").clickable(true).depth(9).exists()) {
                if (DetailPage === 0) {
                    logWithTime("已进入商品详情页，请耐心等待...");
                    DetailPage++;
                    notDetailPage = 0
                }

            } else {
                if (notInDetailPage === 0) {
                    logWithTime("未进入商品详情页，请前往，否则无法进行购买！");
                    DetailPage = 0;
                    notInDetailPage++
                }
            }
        } else {
            not_in_Detail_Page = 0;  // 商品详情页状态复位
            clearInterval(x)
        }
    }, 500);

    z = setInterval(function () {
        var t = getNow();
        if (t >= Panningingtime && t < endTime) {
            logWithTime("开始抢购")
            京东页面();
            clearInterval(z);
        }
    }, 10)
};
function 京东页面() {
    var endTime = lastTime_tree * 1000;
    var Crowding = 0;
    threads.start(function () {
        setInterval(function () {
            if (text("立即抢购").exists()) {
                logWithTime("准备点击抢购");
                click("立即抢购")
                logWithTime("立即抢购已点击");
            }
        }, 10)
    })
    threads.start(function () {
        setInterval(function () {
            if (text("立即购买").exists()) {
                logWithTime("准备点击购买");
                click("立即购买")
                logWithTime("立即购买已点击");
            }
        }, 10)
    })
    threads.start(function () {
        setInterval(function () {
            if (text("提交订单").exists()) {
                logWithTime("页面加载中");
                logWithTime("正在尝试提交订单");
                click("提交订单");
                logWithTime("订单已提交");
            }
        }, 10)
    })
    threads.start(function () {
        setInterval(function () {
            if (text("我知道了").exists()) {
                click("我知道了")
                Crowding++;
                logWithTime("第" + Crowding + "次拥挤了，再试一次吧！");
            }
        }, 10)
    })
    threads.start(function () {
        setInterval(function () {
            if (text("确定").exists()) {
                logWithTime("准备点击确定");
                click("确定")
                logWithTime("确定已点击");
            }
        }, 10)
    })
    threads.start(function () {
        setInterval(function () {
            if (className("android.widget.TextView").text("京东收银台").exists()) {
                logWithTime("抢购成功！请支付！");
                device.cancelKeepingAwake();
                Panic_buying_end();
            }
        }, 10)
    })
    threads.start(function () {
        setInterval(function () {
            sleep(endTime)
            logWithTime("超出预定抢购时长，抢购结束");
            device.cancelKeepingAwake();
            Panic_buying_end();
        }, 10)
    })
}
//这是苏宁购物车主程序 
function sn购物车() {
    var middle = device.width / 2 - 400;
    console.setPosition(middle, 0);
    console.setGlobalLogConfig({ "file": "/sdcard/日志.txt" });
    console.show();
    var DetailPage = 0;
    var notDetailPage = 0;
    var notInDetailPage = 0

    logWithTime("欢迎使用苏宁秒杀助手");
    sleep(800);
    logWithTime("请勿用于非法用途");
    sleep(800);
    logWithTime("请进入购物车");
    sleep(800);

    var startTime2 = new Date(Date.parse(startTime)).getTime();
    var endTime = new Date(startTime2.valueOf() + lastTime * 1000).getTime();
    var Panningingtime = startTime2 + delaytime;


    reviewtime();
    //判断实际时间是否大于抢购时间
    function reviewtime() {
        var shijian = getNow();
        if (shijian > Panningingtime) {
            console.warn("您的时间已经错过了哦，请重新输入时间！");
            sleep(2000);
            console.clear();
            console.hide();
            threads.shutDownAll();
        }
        if (shijian < Panningingtime) {
            logWithTime("您的抢购时间为：" + formatDate(Panningingtime));
            logWithTime("距离抢购时间还剩" + (startTime2 - shijian) / 1000 + "秒" + "请耐心等待");
        }
    }
    // 检测是否在商品详情页
    x = setInterval(function () {
        var t = getNow();
        if (t < Panningingtime) {
            if (className("android.widget.TextView").text("购物车").exists()) {
                if (DetailPage === 0) {
                    logWithTime("已进入购物车，请等待");
                    DetailPage++;
                    notDetailPage = 0
                }

            } else {
                if (notInDetailPage === 0) {
                    logWithTime("未进入购物车，请前往，否则无法进行购买！");
                    DetailPage = 0;
                    notInDetailPage++
                }
            }
        } else {
            not_in_Detail_Page = 0;  // 商品详情页状态复位
            clearInterval(x)
        }

    }, 500);

    z = setInterval(function () {
        var t = getNow();
        if (t >= Panningingtime && t < endTime) {
            logWithTime("开始抢购")
            SN购物车();
            clearInterval(z);
        }
    }, 100)

};
function SN购物车() {
    var Crowding = 0;
    var endTime = lastTime * 1000;
    // 如果在购物车
    var 勾选 = "有"
    threads.start(function () {
        setInterval(function () {
            if (勾选 == "有") {
                if (className("android.widget.CheckBox").enabled(true).exists()) {
                    className("android.widget.CheckBox").enabled(true).findOne().click()
                    勾选 = "无"
                    click("去结算")
                    click("提交订单")
                }
            }
        }, 10)
    })
    //    如果在提交订单界面
    threads.start(function () {
        setInterval(function () {
            if (className("android.widget.TextView").text("提交订单").exists()) {
                logWithTime("正在尝试提交订单");
                click("提交订单");
                logWithTime("订单已提交");
            }
        }, 10);
    });
    threads.start(function () {
        setInterval(function () {
            if (className("android.widget.TextView").text("去结算(1)").exists()) {
                logWithTime("正在尝试结算");
                click("去结算")
                sleep(random(10, 25))
                logWithTime("已结算");
            }
            if (className("android.widget.TextView").text("去结算(2)").exists()) {
                logWithTime("正在尝试结算");
                click("去结算")
                sleep(random(10, 25))
                logWithTime("已结算");
            }
            if (className("android.widget.TextView").text("去结算(3)").exists()) {
                logWithTime("正在尝试结算");
                click("去结算")
                sleep(random(10, 25))
                logWithTime("已结算");
            }
        }, 50);
    });
    //需要领卷购买
    threads.start(function () {
        setInterval(function () {
            if (className("android.widget.TextView").text("领券结算(1)").exists()) {
                logWithTime("正在尝试结算");
                click("领券结算(1)")
                sleep(random(10, 25))
                logWithTime("已结算");
            }
            if (className("android.widget.TextView").text("领券结算(2)").exists()) {
                logWithTime("正在尝试结算");
                click("领券结算(2)")
                sleep(random(10, 25))
                logWithTime("已结算");
            }
            if (className("android.widget.TextView").text("领券结算(3)").exists()) {
                logWithTime("正在尝试结算");
                click("领券结算(3)")
                sleep(random(10, 25))
                logWithTime("已结算");
            }
        }, 50);
    });
    threads.start(function () {
        setInterval(function () {
            if (className("android.widget.TextView").text("知道了").exists()) {
                className("android.widget.TextView").text("知道了").findOne().click();
                Crowding++;
                logWithTime("第" + Crowding + "次拥挤了，再试一次吧！");
            }
        }, 200);
    });
    // 抢购成功
    threads.start(function () {
        setInterval(function () {
            if (className("android.widget.TextView").text("苏宁收银台").exists()) {
                logWithTime("抢购成功！请支付！");
                device.cancelKeepingAwake();
                Panic_buying_end()
            }
        }, 200);
    });
    threads.start(function () {
        setInterval(function () {
            sleep(endTime)
            logWithTime("超出预定抢购时长，抢购结束");
            device.cancelKeepingAwake();
            Panic_buying_end();
        }, 200)
    });
}


//京东购物车模式
function 京东购物车() {
    var middle = device.width / 2 - 400;
    console.setPosition(middle, 0);
    console.setGlobalLogConfig({ "file": "/sdcard/日志.txt" });
    console.show();
    var DetailPage = 0;
    var notDetailPage = 0;
    var notInDetailPage = 0
    var notChecked = 0

    logWithTime("欢迎使用京东秒杀助手");
    sleep(800);
    logWithTime("请勿用于非法用途");
    sleep(800);
    logWithTime("请您进入购物车，否则无法进行购买！");
    sleep(800);

    var startTime2 = new Date(Date.parse(startTime_tree)).getTime();
    var endTime = new Date(startTime2.valueOf() + lastTime_tree * 1000).getTime();
    var Panningingtime = startTime2 - delaytime_tree;


    reviewtime();
    //判断实际时间是否大于抢购时间
    function reviewtime() {
        var tt = getNow();
        if (tt > Panningingtime) {
            console.warn("您的时间已经错过了哦，请重新输入时间！");
            sleep(2000);
            console.clear();
            console.hide();
            threads.shutDownAll();
        }
        if (tt < Panningingtime) {
            logWithTime("您的抢购时间为：" + formatDate(Panningingtime));
            logWithTime("距离抢购时间还剩" + (startTime2 - tt) / 1000 + "秒" + "请耐心等待");
        }
    }
    // 检测是否在商品详情页
    x = setInterval(function () {
        var t = getNow();
        if (t < Panningingtime) {
            if (className("android.widget.TextView").text("购物车").depth(14).exists()) {
                if (DetailPage === 0) {
                    logWithTime("已进入购物车，请耐心等待...");
                    DetailPage++;
                    notDetailPage = 0
                }

            } else {
                if (notInDetailPage === 0) {
                    logWithTime("未进入购物车，请前往，否则无法进行购买！");
                    DetailPage = 0;
                    notInDetailPage++
                }
            }
        } else {
            not_in_Detail_Page = 0;  // 商品详情页状态复位
            clearInterval(x)
        }

        if (className("android.widget.TextView").text("去结算(0)").exists()) {
            if (notChecked === 0) {
                notChecked = 1
                logWithTime("检测到您未勾选商品，将自动为您勾选！");
                click("全选")
            }
        }
    }, 500);

    z = setInterval(function () {
        var t = getNow();
        if (t >= Panningingtime && t < endTime) {
            logWithTime("开始抢购")
            购物车();
            clearInterval(z);
        }
    }, 10)
};
function 购物车() {
    var endTime = lastTime_tree * 1000;
    var Crowding = 0

    threads.start(function () {
        setInterval(function () {
            if (className("android.widget.TextView").textContains("去结算(").exists()) {
                logWithTime("准备结算");
                className("android.widget.TextView").textContains("去结算(").findOne().click();
                logWithTime("已结算，准备进入提交订单页面！");
            }
        }, 10)
    })
    threads.start(function () {
        setInterval(function () {
            if (className("android.widget.TextView").textContains("填写订单").exists()) {
                if (Crowding === 0) {
                    Crowding = 1
                    logWithTime("页面加载中");
                }
            }
        }, 10);
    });
    threads.start(function () {
        setInterval(function () {
            if (className("android.widget.Button").text("提交订单").exists()) {
                logWithTime("正在尝试提交订单");
                className("android.widget.Button").text("提交订单").findOne().click();
                logWithTime("订单已提交！");
            }
        }, 10)
    })

    threads.start(function () {
        setInterval(function () {
            if (className("android.widget.TextView").text("京东收银台").exists()) {
                logWithTime("抢购成功！请支付！");
                device.cancelKeepingAwake();
                Panic_buying_end();
            }
        }, 10)
    })
    threads.start(function () {
        setInterval(function () {
            sleep(endTime)
            logWithTime("超出预定抢购时长，抢购结束");
            device.cancelKeepingAwake();
            Panic_buying_end();
        }, 10)
    })
}


//京东BP链接
function 京东BP链接() {
    var middle = device.width / 2 - 400;
    console.setPosition(middle, 0);
    console.setGlobalLogConfig({ "file": "/sdcard/日志.txt" });
    console.show();
    var DetailPage = 0;
    var notDetailPage = 0;
    var notInDetailPage = 0
    var notChecked = 0

    logWithTime("欢迎使用京东秒杀助手");
    sleep(800);
    logWithTime("请勿用于非法用途");
    sleep(800);
    logWithTime("请您确认已打开BP链接，否则无法进行购买！");
    sleep(800);

    var startTime2 = new Date(Date.parse(startTime_tree)).getTime();
    var endTime = new Date(startTime2.valueOf() + lastTime_tree * 1000).getTime();
    var Panningingtime = startTime2 - delaytime_tree;


    reviewtime();
    //判断实际时间是否大于抢购时间
    function reviewtime() {
        var tt = getNow();
        if (tt > Panningingtime) {
            console.warn("您的时间已经错过了哦，请重新输入时间！");
            sleep(2000);
            console.clear();
            console.hide();
            threads.shutDownAll();
        }
        if (tt < Panningingtime) {
            logWithTime("您的抢购时间为：" + formatDate(Panningingtime));
            logWithTime("距离抢购时间还剩" + (startTime2 - tt) / 1000 + "秒" + "请耐心等待");
        }
    }
    // 检测是否在商品详情页
    x = setInterval(function () {
        var t = getNow();
        if (t < Panningingtime) {
            if (className("android.widget.TextView").text("确认订单").depth(11).exists()) {
                if (DetailPage === 0) {
                    logWithTime("已进入BP链接，请耐心等待...");
                    DetailPage++;
                    notDetailPage = 0
                }

            } else {
                if (notInDetailPage === 0) {
                    logWithTime("未进入BP链接，请前往，否则无法进行购买！");
                    DetailPage = 0;
                    notInDetailPage++
                }
            }
        } else {
            not_in_Detail_Page = 0;  // 商品详情页状态复位
            clearInterval(x)
        }
    }, 500);

    z = setInterval(function () {
        var t = getNow();
        if (t >= Panningingtime && t < endTime) {
            logWithTime("开始抢购")
            bp支付()
            clearInterval(z);
        }
    }, 10)
};
function bp支付() {
    var endTime = lastTime_tree * 1000;

    threads.start(function () {
        setInterval(function () {
            if (className("android.view.View").text("微信支付").exists()) {
                logWithTime("准备点击微信支付");
                className("android.view.View").text("微信支付").findOne().click()
                logWithTime("已点击微信支付");
            }
        }, 10)
    })

    threads.start(function () {
        setInterval(function () {
            if (className("android.view.ViewGroup").depth(17).exists()) {
                logWithTime("抢购成功！请支付！");
                device.cancelKeepingAwake();
                Panic_buying_end();
            }
        }, 10)
    })
    threads.start(function () {
        setInterval(function () {
            sleep(endTime)
            logWithTime("超出预定抢购时长，抢购结束");
            device.cancelKeepingAwake();
            Panic_buying_end();
        }, 10)
    })
}

function 获取坐标() {
    console.show()
    console.info("请前往提交订单页面，否则无法获取坐标！")
    sleep(1000)
    console.info("30秒内未进入提交订单页面，获取坐标就会自动停止！")
    var 找按钮 = "有"
    threads.start(function () {
        setInterval(function () {
            if (className("android.widget.TextView").text("提交订单").exists() && 找按钮 == "有") {
                var 提交订单 = className("android.widget.TextView").text("提交订单").findOne()
                console.info("您的X轴坐标是:" + 提交订单.bounds().centerX(), "\n您的Y轴坐标是:" + 提交订单.bounds().centerY())
                找按钮 = "无"
                console.info("获取坐标成功！")
                threads.shutDownAll();
            }
        }, 100);
    });

    threads.start(function () {
        setInterval(function () {
            sleep(30000)
            console.info("获取坐标超时，已停止！")
            console.clear();
            console.hide();
            threads.shutDownAll();
            device.cancelKeepingAwake();
        }, 100);
    });
}
//=====================================================================================拼多多
ui.pinduoduo.on("click", () => {
    "ui";
    var ColoredButton = (function () {
        //继承ui.Widget
        util.extend(ColoredButton, ui.Widget);

        function ColoredButton() {
            //调用父类构造函数
            ui.Widget.call(this);
            //自定义属性color，定义按钮颜色
            this.defineAttr("color", (view, name, defaultGetter) => {
                return this._color;
            }, (view, name, value, defaultSetter) => {
                this._color = value;
                view.attr("backgroundTint", value);
            });

        }
        ColoredButton.prototype.render = function () {
            return (
                <button textSize="16sp" style="Widget.AppCompat.Button.Colored" w="*" h="auto" />
            );
        }

        ui.registerWidget("colored-button", ColoredButton);
        return ColoredButton;
    })();
    var color = "#009688";
    ui.statusBarColor("#ff4040")
    ui.layout(
        <drawer id="drawer" >
            <vertical>
                <appbar>
                    <toolbar id="toolbar" paddingTop="5dp" title="拼多多" bg="#ff4040" />
                </appbar>

                <viewpager id="viewpager">
                    //拼多多界面
                    <frame> //start
                        <ScrollView>
                            <vertical>
                                <Switch id="autoService" text="无障碍服务" checked="{{auto.service != null}}" padding="8 8 8 8" textSize="13sp" />
                                <text textSize="13sp" id="networkTesttwo" textColor="#ff0000" margin="0 5" text="默认校准拼多多时间！" />

                                <radiogroup orientation="horizontal">
                                    <radio id="model_pdd" text="抢券模式" checked="true" />
                                </radiogroup>

                                <horizontal>
                                    <text textSize="13sp" textColor="black" text="提前抢购时间" />
                                    <input id="delaytime_pdd" textColor="gray" inputType="number" text="200" w="80" />
                                    <text textSize="13sp" textColor="black" text="毫秒" />
                                </horizontal>

                                <horizontal>
                                    <text textSize="13sp" textColor="black" text="页面抢券频率" />
                                    <input id="pinlv_pdd" textColor="gray" inputType="number" text="10" w="80" />
                                    <text textSize="13sp" textColor="black" text="毫秒" />
                                </horizontal>

                                <horizontal>
                                    <text textSize="13sp" textColor="black" text="抢购持续时间" />
                                    <input id="lastTime_pdd" textColor="gray" inputType="number" text="10" w="80" />
                                    <text textSize="13sp" textColor="black" text="秒" />
                                </horizontal>

                                <text textSize="13sp" textColor="black" text="请输入抢购时间，格式为：2020/04/14 12:00:00" />
                                <input hint="请输入抢购时间，格式必须正确" textColor="gray" id="startTime_pdd" />
                                //定义按钮的大小颜色和文本
                                <colored-button id="ok_pdd" layout_gravity="center" color="#ff5500" text="开始运行" />
                            </vertical>
                        </ScrollView>
                    </frame> //end

                </viewpager>
            </vertical>
        </drawer>
    );

    //这里是无障碍触发方式
    ui.autoService.on("check", function (checked) {
        // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启 
        if (checked && auto.service == null) {
            app.startActivity({
                action: "android.settings.ACCESSIBILITY_SETTINGS"
            });
        }
        if (!checked && auto.service != null) {
            auto.service.disableSelf();
        }
    });
    // 当用户回到本界面时，resume事件会被触发
    ui.emitter.on("resume", function () {
        // 此时根据无障碍服务的开启情况，同步开关的状态 
        ui.autoService.checked = auto.service != null;
    });

    // 获取时分秒用于记录日志
    function logWithTime(msg) {
        console.info(formatDate(getNow()) + " " + msg);
    }

    // 获取时分秒用于记录日志
    function logWithTime(msg) {
        console.info(formatDate(getNow()) + " " + msg);
    }

    // 检测淘宝网络延迟和时间偏差
    var NTP = {
        requiredResponses: 3,
        serverTimes: [],//服务器时间
        serverDelay: [],//服务器延迟
        serverUrl: "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
        resyncTime: 0, // minutes
        sync: function () {
            var offset = storage.get("NTPClockOffset");//获取时钟偏移
            if (offset) {
                try {
                    var t = offset.split("|")[1];
                    var d = NTP.fixTime() - parseInt(t, 10);
                    if (d < (1000 * 60 * NTP.resyncTime)) {
                        return false;
                    }
                } catch (e) {
                }
            }
            NTP.getServerTime();
        },
        getNow: function () {
            var date = new Date();
            return date.getTime();
        },
        //分析服务器响应
        parseServerResponse: function (data) {
            var NtpStartTime = storage.get("NtpStartTime");
            var NtpStopTime = NTP.getNow();
            var origtime = parseInt(data.data.t);//起始时间
            var delay = ((NtpStopTime - NtpStartTime) / 2);//延迟
            var offset = NtpStopTime - origtime - delay;//抵消
            NTP.serverTimes.push(offset);
            NTP.serverDelay.push(delay);

            // 因为网络问题，需要多次获取偏移值，获取平均值
            if (NTP.serverTimes.length >= NTP.requiredResponses) {
                var sumOffset = 0;
                var sumDelay = 0;
                var i = 0;
                for (i = 0; i < NTP.serverTimes.length; i++) {
                    sumOffset += NTP.serverTimes[i];
                    sumDelay += NTP.serverDelay[i];
                }
                var averageOffset = Math.round(sumOffset / i);
                var averageDelay = Math.round(sumDelay / i);
                storage.put("NTPClockOffset", averageOffset + '|' + NTP.fixTime()); // 保存获得offset时的时间戳
                storage.put("NTPClockDelay", averageDelay); // 保存获得offset时的时间戳
            } else {
                NTP.getServerTime();
            }
        },
        //获取服务器时间并判断是否获取成功
        getServerTime: function () {
            var NtpStartTime = NTP.getNow();
            storage.put("NtpStartTime", NtpStartTime);
            var res = http.get(NTP.serverUrl);
            if (res.statusCode !== 200) {
                toast("获取网络时间失败: " + res.statusCode + " " + res.statusMessage);
                return false;
            } else {
                NTP.parseServerResponse(res.body.json());
            }
        },
        //固定时间
        fixTime: function (timeStamp) {
            if (!timeStamp) {
                timeStamp = NTP.getNow();
            }
            var offset = storage.get("NTPClockOffset");
            try {
                if (!offset) {
                    offset = 0;
                } else {
                    offset = offset.split("|")[0];
                }
                if (isNaN(parseInt(offset, 10))) {
                    return timeStamp;
                }
                return timeStamp + parseInt(offset, 10);
            } catch (e) {
                return timeStamp;
            }
        }
    };




    // 获取默认开始时间
    function getTime() {
        var fmt = "YYYY-MM-dd hh:mm:ss";
        var d = new Date();
        var hh = d.getHours();
        var mm = d.getMinutes();
        var ss = d.getSeconds();
        if (mm < 30) {
            mm = 30
            ss = 00
        }
        else {
            hh += 1
            mm = 00
            ss = 00
        }

        var o = {
            "Y+": d.getYear() + 1900,
            "M+": d.getMonth() + 1,
            "d+": d.getDate(),
            "h+": hh,
            // "m+": d.getMinutes(),
            // "s+": d.getSeconds()
            "m+": mm,
            "s+": ss
        };
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 4) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        fmt = fmt.replace(/-/g, '/');
        return fmt;
    };

    //定义初始化界面数据
    var storage = storages.create("拼多多");
    threads.start(NTP.sync);

    //初始化淘宝界面
    setTimeout(initConfig_pdd, 500);
    function initConfig_pdd() {
        NTPClockOffset = storage.get("NTPClockOffset", "0");
        NTPClockDelay = storage.get("NTPClockDelay", "0");
        if (!NTPClockOffset) {
            NTPClockOffset = 0;
        } else {
            NTPClockOffset = parseInt(NTPClockOffset.split("|")[0]);
        }
        ui.startTime_pdd.setText(getTime());
        ui.pinlv_pdd.setText(storage.get("pinlv_pdd", "100").toString());
        ui.lastTime_pdd.setText(storage.get("lastTime_pdd", "10").toString());
        ui.delaytime_pdd.setText(storage.get("delaytime_pdd", "200").toString());
    }

    // 时间戳转时间字符串
    function add0(m) {
        return m < 10 ? '0' + m : m
    }
    function getNow() {
        var now = new Date().getTime();
        return now - NTPClockOffset;
    }

    function formatDate(needTime) {
        //needTime是整数，否则要parseInt转换
        var time = new Date(parseInt(needTime));
        var h = time.getHours();
        var mm = time.getMinutes();
        var s = time.getSeconds();
        var S = time.getMilliseconds();
        return add0(h) + ':' + add0(mm) + ':' + add0(s) + ":" + add0(S);
    }


    // 检测时间字符串是否有效
    function strDateTime(str) {
        var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
        var r = str.match(reg);
        if (r == null) return false;
        var d = new Date(r[1], r[3] - 1, r[4], r[5], r[6], r[7]);
        return (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4] && d.getHours() == r[5] && d.getMinutes() == r[6] && d.getSeconds() == r[7]);
    }

    // 淘宝程序主要逻辑
    ui.ok_pdd.click(function () {
        // 检查无障碍服务
        if (auto.service == null) {
            toast("请先开启无障碍服务！");
            return;
        }
        //接收界面数据
        startTime_pdd = ui.startTime_pdd.getText().toString();
        pinlv_pdd = parseInt(ui.pinlv_pdd.getText());
        lastTime_pdd = parseInt(ui.lastTime_pdd.getText());
        delaytime_pdd = parseInt(ui.delaytime_pdd.getText());
        if (!strDateTime(startTime_pdd)) {
            ui.startTime_pdd.setError("日期错误，请重新输入！");
            return;
        }
        //传递界面数据      
        storage.put("pinlv_pdd", pinlv_pdd);
        storage.put("lastTime_pdd", lastTime_pdd);
        storage.put("delaytime_pdd", delaytime_pdd);

        //按下开始运行
        if (ui.ok_pdd.getText() == "开始运行") {
            ui.ok_pdd.setText("停止运行");
            threads.start(拼多多);
            device.keepScreenOn()//保持屏幕常亮
        } else {
            ui.ok_pdd.setText("开始运行");
            console.clear();
            console.hide();
            threads.shutDownAll();
            device.cancelKeepingAwake();
        }
    });
    function 拼多多() {
        var middle = device.width / 2 - 400;
        console.setPosition(middle, 0);
        console.setGlobalLogConfig({ "file": "/sdcard/日志.txt" });
        console.show();
        var DetailPage = 0;
        var notDetailPage = 0;
        var notInDetailPage = 0

        logWithTime("欢迎使用拼多多抢券模式!");
        sleep(800);
        logWithTime("请勿用于非法用途");
        sleep(800);
        logWithTime("请打开拼多多，并进入需要抢购商品的详情页！");
        sleep(800);
        var startTime_pdd1 = new Date(Date.parse(startTime_pdd)).getTime();
        var endTime = new Date(startTime_pdd1.valueOf() + lastTime_pdd * 1000).getTime();
        var Panningingtime = startTime_pdd1 - delaytime_pdd;


        reviewtime();
        //判断实际时间是否大于抢购时间
        function reviewtime() {
            var tt = getNow();
            if (tt > Panningingtime) {
                console.warn("您的时间已经错过了哦，请重新输入时间！");
                sleep(2000);
                console.clear();
                console.hide();
                threads.shutDownAll();
            }
            if (tt < Panningingtime) {
                logWithTime("您的抢券时间为：" + formatDate(Panningingtime));
                logWithTime("距离抢券时间还剩" + (startTime_pdd1 - tt) / 1000 + "秒" + "请耐心等待");
            }
        }
        // 检测是否在商品详情页
        x = setInterval(function () {
            var t = getNow();
            if (t < Panningingtime) {
                if (className("android.widget.RelativeLayout").depth(6).drawingOrder(9).exists()) {
                    if (DetailPage === 0) {
                        logWithTime("已进入商品详情页，请等待......");
                        DetailPage++;
                        notDetailPage = 0
                    }

                } else {
                    if (notInDetailPage === 0) {
                        logWithTime("未进入商品详情页，请进入，否则进行抢券！");
                        DetailPage = 0;
                        notInDetailPage++
                    }
                }
            } else {
                not_in_Detail_Page = 0;  // 商品详情页状态复位
                clearInterval(x)
            }
        }, 500);

        z = setInterval(function () {
            var t = getNow();
            if (t >= Panningingtime && t < endTime) {
                logWithTime("开始抢券")
                开始抢券()
                clearInterval(z);
            }
        }, 10)
    }

    function 开始抢券() {
        var 频率 = ui.pinlv_pdd.text()
        var endTime = lastTime_pdd * 1000;


        threads.start(function () {
            setInterval(function () {
                if (className("android.widget.TextView").text("领取").depth(8).drawingOrder(3).exists()) {
                    className("android.widget.TextView").text("领取").depth(8).drawingOrder(3).click()
                }
            }, 频率);
        });

        threads.start(function () {
            setInterval(function () {
                sleep(endTime)
                logWithTime("超出预定抢购时长，抢购结束");
                device.cancelKeepingAwake();
                Panic_buying_end();
            }, 频率)
        })
    }
});

function Panic_buying_end() {
    device.cancelKeepingAwake()//关闭屏幕常亮
    logWithTime("本次抢购结束");
    threads.shutDownAll()
}



//红包
ui.tm618.click(function () {
    app.openUrl("https://s.click.taobao.com/cFad0hv")
})

ui.jd618.click(function () {
    app.openUrl("https://u.jd.com/wY9BNf")
})

ui.pdd618.click(function () {
    app.openUrl("https://p.pinduoduo.com/imI9nbJb")
})



//设置
ui.wza.click(function () {
    app.startActivity({
        action: "android.settings.ACCESSIBILITY_SETTINGS"
    });
})

ui.xfc.click(function () {
    threads.start(悬浮窗)
})

ui.tmhb.click(function () {
    threads.start(红包)
})

ui.jdhb.click(function () {
    app.openUrl("https://u.jd.com/wY9BNf")
})

ui.pddhb.click(function () {
    app.openUrl("https://p.pinduoduo.com/imI9nbJb")
})

function 悬浮窗() {
    console.show();
}


function 红包() {
    console.show();
    log("脚本启动中……");
    //打开主会场
    app.startActivity({
        data: "taobao://s.click.taobao.com/cFad0hv",
    });
    log("如果开启了应用分身，需要选择对应的APP");
    text("玩法规则").waitFor();
    rsleep(1);
    log("开始领取618红包");
    var a = 0
    while (text("玩法规则").exists()) {
        a++
        log("正在领取第" + a + "个红包");
        idContains("J_MM_RED_COVER_").findOne().click();
        rsleep(3);
        if (textContains("恭喜获得").exists()) {
            idContains("J_MM_RED_").findOne().click();
            rsleep(2);
        } else {
            rsleep(2);
            if (textContains("恭喜获得").exists()) {
                idContains("J_MM_RED_").findOne().click();
                rsleep(2);
            } else {
                rsleep(2);
                if (textContains("恭喜获得").exists()) {
                    idContains("J_MM_RED_").findOne().click();
                    rsleep(2);
                }

            }
        }
    }
    log("红包领取完毕");
    //完成对话框
    console.hide();
    dialogs.build({
        title: "淘宝618任务自动脚本",
        content: "报告！红包领取完毕。",
        positive: "确定"
    })
        .show();

    //随机延时
    function rsleep(s) {
        while (s--) {
            sleep(random(900, 1200));
        }
    }

}
