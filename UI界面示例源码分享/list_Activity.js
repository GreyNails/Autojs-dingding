/*
 * @Author: 大柒
 * @QQ: 531310591@qq.com
 * @Date: 2019-12-08 12:47:20
 * @Version: Auto.Js Pro
 * @Description: 
 * @LastEditors: 大柒
 * @LastEditTime: 2019-12-08 14:52:34
 */
"ui";

//设置全面屏 状态栏悬浮内容之上
activity.window.addFlags(android.view.View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION)

//获取状态栏高度
var StatusBarHeight = context.getResources().getDimensionPixelSize(context.getResources().getIdentifier("status_bar_height", "dimen", "android"))

ui.layout(
    <vertical bg="#f4f4f4">
        <appbar h="auto" bg="#00c853" >
            <frame h="100" marginTop="{{StatusBarHeight}}px">
                <text w="auto" h="auto" text="列表控件" textColor="#ffffff" textStyle="bold" layout_gravity="center" />
            </frame>
        </appbar>
        <list id="list">
            <horizontal marginBottom="2px" w="*" bg="#ffffff" padding="20 10" >
                {/** app图标 */}
                <img w="56" h="56" src="{{this.src}}" />
                {/** app内容*/}
                <vertical h="*" marginLeft="20">
                    <text id="title_view" w="auto" text="{{this.title}}" textColor="#000000" textSize="14sp" layout_weight="1" gravity="top" />
                    <text id="apk_info_view" w="auto" text="{{this.apk_info}}" textColor="#999999" textSize="12sp" layout_weight="1" gravity="bottom" />
                    <text id="market_info_view" w="auto" text="{{this.market_info}}" textColor="#999999" textSize="12sp" layout_weight="1" gravity="bottom" />
                </vertical>
                {/** 下载按钮 */}
                <frame w="*" h="*" >
                    {/** cardBackgroundColor = 按钮颜色 */}
                    <card id="action_button" w="auto" h="auto" layout_gravity="center|right"
                        cardBackgroundColor="#00c853" cardElevation="0px">
                        <text id="action_button_text" padding="15 5" text="下载" textSize="12sp" textColor="#ffffff" gravity="center" />
                    </card>
                </frame>
            </horizontal>
        </list>
    </vertical>
);

var itmes = [
    { src: "#80999999", title: "列表1", apk_info: "4.7分 36.7M", market_info: "1.0万关注 3952评论 117万下载" },
    { src: "#80999999", title: "列表2", apk_info: "4.7分 36.7M", market_info: "1.0万关注 3952评论 117万下载" },
    { src: "#80999999", title: "列表3", apk_info: "4.7分 36.7M", market_info: "1.0万关注 3952评论 117万下载" },
    { src: "#80999999", title: "列表4", apk_info: "4.7分 36.7M", market_info: "1.0万关注 3952评论 117万下载" },
    { src: "#80999999", title: "列表5", apk_info: "4.7分 36.7M", market_info: "1.0万关注 3952评论 117万下载" },
    { src: "#80999999", title: "列表6", apk_info: "4.7分 36.7M", market_info: "1.0万关注 3952评论 117万下载" },
    { src: "#80999999", title: "列表7", apk_info: "4.7分 36.7M", market_info: "1.0万关注 3952评论 117万下载" },
];

ui.list.setDataSource(itmes);
//删除滑动到底的阴影效果
ui.list.overScrollMode = android.view.View.OVER_SCROLL_NEVER;

//列表点击事件
ui.list.on("item_click", (item, i, itemView, listView) => {
    toastLog("点击了 " + item.title);
})

ui.list.on("item_bind", (itemView, itemHolder) => {
    //下载按钮点击事件
    itemView.action_button.on("click", () => {
        let item = itemHolder.item;
        toastLog("点击了 " + item.title + " 的下载按钮")
    })
})
