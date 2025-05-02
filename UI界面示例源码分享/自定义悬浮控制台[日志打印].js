
/**
 * 群人数突破700人，免费分享出来。
 * 自定义悬浮控制台
 * 默认打印太贴左，定义了一个putLog函数，
 * qq交流群：4607221;
 * QQ联系人：7513241；
 * 
 * 有极少情况启动后确定按钮不消除也不打印的情况，重启即可；
 * 测试手机：小米6X，小米8，小米4，华为p30;
 * 安卓版本：6.0.1、7.1,、8.0.1、9、10；
 */


var w;
var runTime = function () {
    var startTime = new Date().getTime()
    return function () {
        var endTime = new Date().getTime()
        var spendTime = Math.floor((endTime - startTime) / 1000)
        let mok = util.format('%d', spendTime)
        return parseInt(mok / 60 / 60) + "时 " + parseInt(mok / 60) % 60 + "分 " + mok % 60 + "秒 "
    }
}()




/***以下是测试调用部分 */
cumtomUI()
var 测试变量1 = 0;
var 测试变量2 = ['l', 'e', 'v', 'i']
setInterval(function () {
    测试变量1 += 1;
    let mok = runTime();
    if (mok) {
        try {
            if (mok) ui.run(() => w.时间.text(mok));
        } catch (error) { }
    }
    putLog("打印测试", 测试变量2[测试变量1 - 1])
    if (测试变量1 > 5) 测试变量1 = 0;
}, 1000);
/**以上是测试调用部分 */




function cumtomUI() {
    let resource = context.getResources();
    w = floaty.rawWindow(
        <relative >
            <frame bg="#44ffcc00" w="*" h="{{device.height / 4+200}}">
                <vertical w="*">
                    <card id="indx2" w="*" margin="0 0 0 1" h="30" background="#000000" cardCornerRadius="3"
                        cardElevation="2dp" gravity="center_vertical"  >
                        <horizontal gravity="center_vertical" w="*" >
                            <text w="auto" h="auto" textSize="14" margin="8 0 0 0" textColor="#ffffff" >已运行时：</text>
                            <text w="auto" h="auto" textSize="14" margin="8 0 20 0" id="时间" textColor="#00ffd8" text="0时 0分 0秒" />
                        </horizontal>
                    </card>
                    <View w="*" h="2px" bg="#c0c0c0" />
                    <com.stardust.autojs.core.console.ConsoleView
                        id="console"
                        background="#7f000000"
                        h="*" />
                </vertical>
            </frame>
        </relative>
    );
    w.setTouchable(false);
    w.setPosition(0, (device.height - device.height / 4 - 290)); //设置悬浮窗位置
    w.setSize(device.width, device.height / 4 + 285) //设置悬浮窗大小
    w.console.setConsole(runtime.console);
    let c = new android.util.SparseArray();
    let Log = android.util.Log;
    c.put(Log.VERBOSE, new java.lang.Integer(colors.parseColor("#dfc0c0c0")));
    c.put(Log.DEBUG, new java.lang.Integer(colors.parseColor("#ffffffff")));
    c.put(Log.INFO, new java.lang.Integer(colors.parseColor("#ff64dd17")));
    c.put(Log.WARN, new java.lang.Integer(colors.parseColor("#ff2962ff")));
    c.put(Log.ERROR, new java.lang.Integer(colors.parseColor("#ffd50000")));
    c.put(Log.ASSERT, new java.lang.Integer(colors.parseColor("#ffff534e")));
    w.console.setColors(c);
    try {
        ui.run(function () {
            input_container = w.console.findViewById(getResourceID("input_container", "id"))
            input_container.attr("visibility", "gone");
        })
    } catch (error) { }
    function getResourceID(name, defType) {
        return resource.getIdentifier(name, defType, context.getPackageName());
    };
    setInterval(() => { }, 1000);
}


/**
 * 自定义打印函数
 * @param {文本} txt  需要打印的文本内容 
 * @param {颜色} paatern 需要打印的颜色 l==黑色，v=黑色，i=绿色，e=红色
 */
function putLog(txt, paatern, bul) {
    let type = paatern || "v";//未传入打印类型时，默认打印灰色
    let tybe = bul || false;
    let colBox = { 'l': "log", 'v': 'verbose', 'i': 'info', 'e': 'error' }
    console[colBox[type]]("  " + txt)
}