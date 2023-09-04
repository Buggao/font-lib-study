(function($){  
  'use strict';
  class JQueryForm {
    static defaultOptions = {
      buttonName: 'commit'
    }
    constructor(){

    }
    init(){
      const formDom = $(`
        <form>
          <lable>name:</lable>
          <input>
        </form>
      `)
    }
  }
  $.fn.jQueryForm = function(options){
    let value,args = Array.prototype.slice.call(arguments, 1)
    console.log('array arugments is', value, args)
    console.log('this is', this)
    this.each(function() {
      console.log('each this is', this)
      const $this = $(this)
      const data =$this.data('jqeury.form')
      console.log("typeof options === 'object' && options",typeof options === 'object' && options)
      const classOption =  Object.assign( $this.data(), typeof options === 'object' && options, JQueryForm.defaultOptions)
      console.log('classOptions is', classOption)
    })
  }
})(jQuery)

