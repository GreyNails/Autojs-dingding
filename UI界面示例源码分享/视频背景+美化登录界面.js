"ui";
importClass("android.widget.VideoView")
importClass("android.media.MediaPlayer")
show();


function show() {
    ui.layout(
        <frame>
            <vertical elevation="999" padding="20sp">
                <vertical >
                    <vertical padding="16">
                        <text textSize="30sp" textColor="#ff0000" gravity="center">登录系统</text>
                    </vertical>
                    <vertical h="auto" align="center" margin="0 50">
                        <linear>
                            <card w="*" h="250" margin="0" cardCornerRadius="15dp" cardElevation="15dp" gravity="bottom" alpha="0.5">
                                <vertical gravity="center_vertical">
                                    <text id="t1" size="10" color="#dd000000" marginTop="30" paddingLeft="20"/>
                                    <input id="dlzh" w="*" marginRight="30" marginLeft="30" singleLine="true" hint="账号" textColorHint="#dd000000"/>
                                    <text id="t2" size="10" color="#dd000000" marginTop="10" paddingLeft="35"/>
                                    <input id="dlmm" w="*" marginRight="30" marginLeft="30" singleLine="true" hint="密码" textColorHint="#dd000000" password="true"/>
                                    <horizontal>
                                        <button id="login" style="Widget.AppCompat.Button.Colored" layout_weight="1" gravity="center">登陆</button>
                                        <button id="zc" style="Widget.AppCompat.Button.Colored"  layout_weight="1" gravity="center">注册</button>
                                        <button id="jrql" style="Widget.AppCompat.Button.Colored"  layout_weight="1" gravity="center">加群</button>
                                        <button id="buy" style="Widget.AppCompat.Button.Colored" layout_weight="1" gravity="center" >买卡密</button>
                                        <button id="cz" style="Widget.AppCompat.Button.Colored" layout_weight="1"gravity="center">充值</button>
                                    </horizontal>
                                </vertical>
                            </card>
                        </linear>
                    </vertical>
                </vertical>
            </vertical>
            <android.widget.VideoView gravity="center" h="*" id="vd"/>
        </frame>
    );
    
    ////视频地址 可以是网页链接 也可以是本地文件地址
    ui.vd.setVideoPath("/storage/emulated/0/DCIM/Camera/1591774507636.mp4")
    ui.vd.start()
 
    threads.start(function() {
        sleep(10000)
        while (true)
            if (!ui.vd.isPlaying()) {
                ui.vd.start()
                sleep(10000);
            }
    })
}