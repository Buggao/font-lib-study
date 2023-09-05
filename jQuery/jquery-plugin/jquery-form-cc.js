(function($){  
  'use strict';
  //颜色转化函数
  function rgb2Hex(rgbColor) {
    const rgbArray = rgbColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",")
    let strHex = '#'
    rgbArray.forEach(item => {
      let _hexColor =  Number(item).toString(16)
      if(_hexColor === "0") _hexColor+=_hexColor
      strHex+=_hexColor
    })
    return strHex
  }
  class JQueryForm {
    static defaultOptions = {
      buttonName: 'commit',
      onComplete: function(){console.log('JQueryForm load complete')},
      changeTxtFunc: function(){console.log('changeTxtFunc running');},
      couldChange: false
    }
    constructor(element,classOption){
      this.$el = $(element)      
      for(const prop in classOption) {
        this[prop] = classOption[prop]
      }
      this.init()
    }
    init(){
      const self = this
      const $formDom = $(`
        <div class="color-swatches"></div>
        <form class="form-container">
          <lable>name:</lable>
          <input>
          <lable>age:</lable>
          <input>
          <lable>sex:</lable>
          <input>
          <button>${this.buttonName}</button>  
        </form>
      `)
      this.$el.append($formDom)
      this.onComplete(rgb2Hex(this.$el.find('.color-swatches').css('background-color')))
      //绑定事件
      this.$el.find('.color-swatches').on('click', function() {
        if(!self.couldChange) return
        self.changeTxtFunc(self.changeColor(this))
      })
    }
    changeColor(dom){
      let currentColor = ''
      const colors = ['#f9ed69', '#f08a5d', '#b83b5e', '#6a2c70']
      const currentColorIndex = colors.indexOf(rgb2Hex($(dom).css('background-color')))
      //非最后一个index+1 否则设置为index = 0
      if(currentColorIndex < colors.length-1)  currentColor = colors[currentColorIndex+1]
      else currentColor = colors[0]
      $(dom).css('background-color', currentColor)
      return currentColor
    }
    changeState(state){
      this.couldChange = state
    }
  }
  //允许调用方法
  const allowedMethods =['destroy','changeState'];
  $.fn.jQueryForm = function(options){
    let value,args = Array.prototype.slice.call(arguments, 1)

    this.each(function() {
      const $this = $(this)
      const classOption = Object.assign(JQueryForm.defaultOptions, typeof options === 'object' && options )
      let data =$this.data('jqeury.form')
      //没有对象就创建对象,将DOM元素和配置传入
      if(!data){
        $this.data('jqeury.form', (data = new JQueryForm(this, classOption)));
      }
      //options为字符串时表示再调用方法
      if(typeof options === 'string'){
        if(allowedMethods.includes(options)){
          //不存在对象 返回
          if(!data) return
          //通过apply改变指向，在已经实例化的data种调用data的方法，传入其他参数，并将返回值传给data
          value = data[options].apply(data, args);
        } else {
          throw new Error("不支持该方法: " + options);
        }
      } else {

      }
    })
    
    //返回对应的jquery对象
    return typeof value === "undefined" ? this : value 
  }
})(jQuery)

