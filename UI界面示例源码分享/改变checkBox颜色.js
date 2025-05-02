"ui";
/**
 * 作者: 家
 * QQ: 203118908
 * 感谢: Xero 
 * 功能: 改变 checkBox 颜色
 */
importClass(android.content.res.ColorStateList)
importClass(android.provider.SyncStateContract)
importClass(android.graphics.Color)

var checkBoxLists = ui.inflate(
  <vertical id='checkBoxList'></vertical>
);
ui.setContentView(checkBoxLists)

var checkBoxList;
for (var i = 0; i < 20; i++) {
  checkBoxList = new CheckBoxList(i)
  checkBoxLists.addView(checkBoxList)
}
var getViewId = function () {
  var num = 0;
  return function (column) {
    if (num > 19) { num = 0 }
    var viewId = 'cb' + (num++) + column
    return viewId;
  }
}()
ui.post(
  function () {
    for (var i = 0; i < 9; i++) {
      var colorList = [rndColor(), rndColor(), rndColor(), rndColor()]
      for (var j = 0; j < 20; j++) {
        var viewId = 'cb' + j + i
        log('viewId')
        log(viewId)
        var view = ui.findView(viewId)
        setColor(view, colorList)
      }
    }

  }
)


for (var i = 0; i < 9; i++) {
  flow(i)
}
for (var i = 0; i < 9; i++) {
  flow(i)
}
function flow (column) {
  var lastView = false;
  setInterval(
    function () {
      if (lastView) {
        lastView.checked = true;
      }
      var viewId = getViewId(column)
      var view = ui.findView(viewId)
      view.checked = false
      lastView = view
    }, 300
  )
}


function CheckBoxList (lineNum) {
  var layout = ui.inflate(
    '<horizontal weightSum="9">' +
    '  <checkbox id="cb' + lineNum + '0" checked="true" layout_width="0dp" layout_weight="1" />' +
    '  <checkbox id="cb' + lineNum + '1" checked="true" layout_width="0dp" layout_weight="1" />' +
    '  <checkbox id="cb' + lineNum + '2" checked="true" layout_width="0dp" layout_weight="1" />' +
    '  <checkbox id="cb' + lineNum + '3" checked="true" layout_width="0dp" layout_weight="1" />' +
    '  <checkbox id="cb' + lineNum + '4" checked="true" layout_width="0dp" layout_weight="1" />' +
    '  <checkbox id="cb' + lineNum + '5" checked="true" layout_width="0dp" layout_weight="1" />' +
    '  <checkbox id="cb' + lineNum + '6" checked="true" layout_width="0dp" layout_weight="1" />' +
    '  <checkbox id="cb' + lineNum + '7" checked="true" layout_width="0dp" layout_weight="1" />' +
    '  <checkbox id="cb' + lineNum + '8" checked="true" layout_width="0dp" layout_weight="1" />' +
    '</horizontal>'
    , ui.checkBoxList
  )
  return layout
}

function setColor (view, colorList) {
  var colorStateList = createColorStateList(colorList[0], colorList[1], colorList[2], colorList[3])
  view.setButtonTintList(colorStateList)
}


function createColorStateList (normal, pressed, focused, unable) {
  var colors = [pressed, focused, normal, focused, unable, normal];
  var states = new Array()
  states[0] = [android.R.attr.state_pressed, android.R.attr.state_enabled]
  states[1] = [android.R.attr.state_enabled, android.R.attr.state_focused]
  states[2] = [android.R.attr.state_enabled]
  states[3] = [android.R.attr.state_focused]
  states[4] = [android.R.attr.state_window_focused]
  states[5] = []
  var colorList = new ColorStateList(states, colors);
  return colorList;
}

function rndColor () {
  return colors.rgb(random(0, 255), random(0, 255), random(0, 255))
}



