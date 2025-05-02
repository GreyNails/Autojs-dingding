/** 
*
*每循环完一轮会卡一下
*循环三到四次会停止循环
*可以复制多条实现无缝循环
*示例复制了3次。
*/


"ui";
ui.layout(
    <vertical>
        <TextView
        id="tv_text"
        singleLine="true"
        ellipsize="marquee"
        focusable="true"
        text="周易六十四卦，乾卦☰：天行健，君子当自强不息；大哉乾元，万物姿始，乃统天。品物流行，大明始终，六位时成，时乘六龙以御天    周易六十四卦，乾卦☰：天行健，君子当自强不息；大哉乾元，万物姿始，乃统天。品物流行，大明始终，六位时成，时乘六龙以御天     周易六十四卦，乾卦☰：天行健，君子当自强不息；大哉乾元，万物姿始，乃统天。品物流行，大明始终，六位时成，时乘六龙以御天"
        textColor="#ff010100"/>
    </vertical>
);
ui.tv_text.setSelected(true);