(function($){  
  'use strict';
  class JQueryForm {
    static defaultOptions = {
      buttonName: 'commit'
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
        <form class="form-container">
          <lable>name:</lable>
          <input>
          <lable>age:</lable>
          <input>
          <lable>sex:</lable>
          <input>
          <button>${this.buttonName}</button>  
        </form>
        <div class="color-swatches"></div>
      `)
      this.$el.append($formDom)
      console.log("$formDom.find('.color-swatches') is", this.$el.find('.color-swatches'))
      this.$el.find('.color-swatches').on('click', function(){
        console.log('color swatch this is', this)
        self.changeColor(this)
      })
    }
    changeColor(){

    }
  }

  //允许调用方法
  var allowedMethods =['destroy'];
  $.fn.jQueryForm = function(options){
    let value,args = Array.prototype.slice.call(arguments, 1)

    this.each(function() {
      const $this = $(this)
      const classOption = Object.assign(typeof options === 'object' && options, JQueryForm.defaultOptions)
      let data =$this.data('jqeury.form')
      //没有对象就创建对象,将DOM元素和配置传入
      if(!data){
        $this.data('jqeury.form', (data = new JQueryForm(this, classOption)));
        console.log('this data is', data)
      }
      //如果是字符串，说明调用的方法
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

