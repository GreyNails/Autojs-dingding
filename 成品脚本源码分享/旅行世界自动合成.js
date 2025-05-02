/**
 * @AuThor 叁玖
 * @Principle 旅行世界遛狗合成；
 * @return true==root；fales!=root
 * @time 2020-3-24
 */

var vclass = "android.widget.TextView";
var image = "android.widget.ImageView";
var view = "android.view.View";
var yout = "android.widget.FrameLayout";

function 购买动物() {
    let 等级按钮父_兄 = id("add_view").className(view).findOne(50)
    if (等级按钮父_兄) {
        //press(等级按钮父_兄.bounds().centerX(), 等级按钮父_兄.bounds().centerY(), 50)
        等级按钮父_兄.parent().click()
    }
}


threads.start(function () {
    while (1) {
        let 升级成功 = className(vclass).text("升级成功").findOne()
        if (升级成功) {
            let 子控件集合 = 升级成功.parent().find(className(vclass))
            if (子控件集合) {
                升级数组 = []
                for (let indx = 0; indx < 子控件集合.length; indx++) {
                    let txt = 子控件集合[indx].text()
                    if (txt) {
                        console.log(txt);
                        升级数组.push(txt)
                    }
                    sleep(100)
                    toastLog("已升级，等级：" + 升级数组[0] + ",品种:" + 升级数组[1])
                    className(vclass).text("确定").findOne().click()
                    sleep(1000)
                }
            }
        }
    }
})


threads.start(function () {
    while (1) {
        let 升级红包 = className(vclass).text("升级红包(最高5元)").findOne()
        if (升级红包) {
            className(vclass).text("恭喜您开红包获得").findOne()
            let 元 = className(vclass).text("元").findOne()
            let 集合 = 元.parent().find(className(vclass))
            if (集合) {
                for (let indx = 0; indx < 集合.length; indx++) {
                    let txt = 集合[indx].text()
                    if (isNumber(txt) == true) {
                        toastLog("获得红包" + txt + "元");
                        id("iv_close").className("android.widget.ImageView").findOne().click()
                    }
                }
            }
        }
    }
})

while (1) {
    动物合成函数()
    for (let i = 0; i < 100; i++) {
        let 最新统计 = 统计动物数量()
       // log("统计的数量：" + 最新统计)
        if (最新统计 != 12) {
            购买动物()
            let 广告 = className(vclass).text("金币不足").findOnce()
            if (广告) {
                观看广告(), sleep(500)
            }
        } else {
            break;
        }
    }

}


function 观看广告() {
    let txt = className(vclass).textContains("广告次数").findOne().text()
    let sp = txt.split("剩余")[1].replace(/[^0-9]/ig, "")
    if (sp != "0") {
        let ck = className(vclass).textContains("立即获得").findOne().bounds()
        press(ck.centerX(), ck.centerY(), 200)
        let 关闭 = id("tt_video_ad_close").className("android.widget.ImageView").findOne().bounds()
        press(关闭.centerX(), 关闭.centerY(), 200)
        className(vclass).textContains("恭喜获得").findOne()
        className(vclass).text("确定").findOne().click(), sleep(500)
        //if (className(vclass).text("图鉴").findOne()) {
        toastLog("广告已观看完毕")
        //}
    }
}


// let 统计 = 统计动物数量()
//let 余额 = 获取余额金币()
// let 单价 = 获取单价金币()

function 统计动物数量() {
    let 等级按钮父_兄 = id("add_view").className(view).findOne(100)
    let 动物数量 = []
    if (等级按钮父_兄) {
        let shu = className("android.widget.TextView").find()
        if (shu) {
            let kj = id("tv_price").className("android.widget.TextView").findOne()
            let fu = kj.parent().parent()
            let zi = fu.find(className("android.widget.FrameLayout"))[1].findOne(className("android.widget.TextView")).bounds().top
            for (let indx = 0; indx < shu.length; indx++) {
                let txt = shu[indx].text()
                if (txt) {
                    if (判断是否时数字(txt)) {
                        if (txt < 38) {
                            let t = shu[indx].bounds().top
                            if (t < zi) {
                                动物数量.push(txt)
                            }
                        }
                    }
                }
            }
        }
    }
    return 动物数量.length;
}




function 动物合成函数() {
    for (let i = 0; i < 30; i++) {
        //log("i的值：" + i)
        let fu = id("lyt_merge").className("android.widget.FrameLayout").findOne()
        let zi = fu.find(className(vclass))
        let key = 0;
        let 数组名单 = []
        if (zi) {
            for (let m = 0; m < zi.length; m++) {
                let txt = zi[m].text()
                if (txt) {
                    if (txt.indexOf("+") < 0) {
                        数组名单.push(txt)
                    }
                }
            }
            if (重复判断(数组名单) == true) {
                for (let indx = 0; indx < zi.length; indx++) {
                    let txt = zi[indx].text()
                    if (txt) {
                        let spw1 = zi[indx].bounds()
                        if (txt.indexOf("+") < 0) {
                            for (let ter = 0; ter < zi.length; ter++) {
                                let dsc = zi[ter].text()
                                if (ter > indx) {
                                    if (txt == dsc) {
                                        let spw2 = zi[ter].bounds()
                                        if (ter % 2 == 0) {
                                            swipe(spw1.centerX(), spw1.centerY(), spw2.centerX(), spw2.centerY(), 200)
                                        } else {
                                            swipe(spw2.centerX(), spw2.centerY(), spw1.centerX(), spw1.centerY(), 200)
                                        }
                                        key = 1
                                        break;
                                    }
                                }
                            }

                        }
                    }
                    if (key == 1) {
                        key = 0;
                        break
                    }
                }

            } else {
                toastLog("本页已无可合成动物")
                return false;
            }
        }
    }
}

function 索检动物数量() {

}

function 重复判断(ary) {
    var nary = ary.sort();
    for (var i = 0; i < nary.length - 1; i++) {
        if (nary[i] == nary[i + 1]) {
            return true;
        }
    }
    return false
}

function isNumber(val) {
    var regPos = /^\d+(\.\d+)?$/; //非负浮点数
    var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
    if (regPos.test(val) || regNeg.test(val)) {
        return true;
    } else {
        return false;
    }
}

function 获取余额金币() {
    let fu = id("tv_gold_icon").className(vclass).findOne()
    let txt = fu.text()
    return txt;
}

function 获取单价金币() {
    let fu = id("tv_price").className("android.widget.TextView").findOne()
    let txt = fu.text()
    // toastLog(txt)
    return txt;
}

function 判断是否时数字(input) {
    var re = /^[0-9]+.?[0-9]*/;
    if (re.test(input)) {
        return true;
    }
    return false;
}