"ui";
/*
 * @Author: 叁玖
 * @Date: 2020-03-4 08:35:42
 * @LastEditors: 7513241.qq.com
 * @Explain: 通过给标签赋布尔值来实现单选，无视布局，可以把单选框的值本地存储，下次启动时自动设置到ui界面；
 */


ui.layout(
    <vertical padding="16">
        <horizontal gravity="center_vertical">
            {/**垂直排列的单选框 */}
            <vertical padding="16">
                <checkbox id="a1" text="单选框" />
                <checkbox id="a2" text="单选框" />
                <checkbox id="a3" text="单选框" />
            </vertical>
            <View w="2" h="80" margin="5" bg="#d8d8d8" />
             {/**水平排列单选框*/}
            <horizontal gravity="center_vertical">
                <checkbox id="a4" text="单选框" />
                <checkbox id="a5" text="单选框" />
                <checkbox id="a6" text="单选框" />
            </horizontal>
        </horizontal>
    </vertical>
);

/**垂直 单选示例*/
ui.a1.on("check", (checked) => {
    if (checked) {
        ui.run(() => {
            ui.a2.setChecked(false)
            ui.a3.setChecked(false)
        });
    }
});
ui.a2.on("check", (checked) => {
    if (checked) {
        ui.run(() => {
            ui.a1.setChecked(false)
            ui.a3.setChecked(false)
        });
    }
});

ui.a3.on("check", (checked) => {
    if (checked) {
        ui.run(() => {
            ui.a1.setChecked(false)
            ui.a2.setChecked(false)
        });
    }
});


/**水平单选示例 */

ui.a4.on("check", (checked) => {
    if (checked) {
        ui.run(() => {
            ui.a5.setChecked(false)
            ui.a6.setChecked(false)
        });
    }
});
ui.a5.on("check", (checked) => {
    if (checked) {
        ui.run(() => {
            ui.a4.setChecked(false)
            ui.a6.setChecked(false)
        });
    }
});

ui.a6.on("check", (checked) => {
    if (checked) {
        ui.run(() => {
            ui.a4.setChecked(false)
            ui.a5.setChecked(false)
        });
    }
});