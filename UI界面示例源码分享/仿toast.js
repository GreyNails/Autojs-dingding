"ui";
//自定义控件 处理中toast ，
//出处：大柒 UI支付示例
var remindLayout = function () {
    util.extend(remindLayout, ui.Widget);
    function remindLayout() {
        ui.Widget.call(this);
        this.defineAttr("onClick", (view, name, defaultGetter) => {
            return this._onClick;
        }, (view, name, value, defaultSetter) => {
            remind = view
            this._onClick = value;
        });
    }
    remindLayout.prototype.render = function () {
        return (
            <frame id="气泡布局ID" w="*" h="*" >
                <card id="气泡卡片" h="150" w="150" cardBackgroundColor="#95000000" margin="0 100 0 0" layout_gravity="center"
                    cardElevation="0" cardCornerRadius="10dp" alpha="0">
                    <frame >
                        <frame alpha="0.6">
                            <img id="创建失败图标" w="70" h="70" src="@drawable/ic_sentiment_dissatisfied_black_48dp" layout_gravity="center" marginBottom="10" tint="#ffffff" alpha="0" />
                        </frame>
                        <frame id="倒计时布局">
                            <text id="倒计时时间" text="10" w="auto" h="auto" layout_gravity="center" marginBottom="10" textStyle="bold" textColor="#90ffffff" textSize="30" />
                            <progressbar w="80" h="80" layout_gravity="center" marginBottom="10" alpha="1" />
                        </frame>
                        <text id="状态" text="正在获取验证码" w="auto" h="auto" marginBottom="10" layout_gravity="bottom|center" textStyle="bold" textColor="#90ffffff" textSize="16" />
                    </frame>
                </card>
            </frame>
        )
    }
    ui.registerWidget("remind-layout", remindLayout);
    return remindLayout;
}();





//ui界面 
ui.layout(
    <vertical h="*" >
        <frame h="*" >
            <remind-layout w="*" h="*" onClick="" />
        </frame>
    </vertical>
);



自定义气泡(0, 3, false)



function 自定义气泡(int_0, 倒计时间, 保持气泡显示) {
    ui.run(function () {
        remind.创建失败图标.attr("alpha", "0")
        remind.状态.setText("正在获取验证码")
        remind.倒计时布局.attr("alpha", "1")
        remind.倒计时时间.setText(倒计时间 + "")
    })

    let toast = (function () {
        // remind.气泡布局ID.attr("clickable", true);
        保持气泡显示 = true
        remind.气泡卡片.attr("alpha", "1");
        int_0 = setInterval(function () {
            if (!保持气泡显示) { 关闭气泡(); clearInterval(int_0); }

            if (倒计时间 == 0) {
                ui.run(function () {
                    remind.创建失败图标.attr("alpha", "0.5") //倒计时等于0时显示图标
                    remind.倒计时布局.attr("alpha", "0") ///倒计时为0时隐藏该布局
                    remind.状态.setText("获取验证码失败")
                    clearInterval(int_0);
                })

                setTimeout(function () {
                    关闭气泡(int_0)
                }, 3000);
                return
            }

            倒计时间--
            remind.倒计时时间.setText("" + 倒计时间)
        }, 1000);
    }())


}
function 关闭气泡() {
    ui.run(function () {
        remind.气泡卡片.attr("alpha", "0")
        保持气泡显示 = false
        remind.气泡布局ID.attr("clickable", false);
    })
}


