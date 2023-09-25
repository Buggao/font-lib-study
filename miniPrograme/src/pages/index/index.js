Page({
    data: {
        inputPitayaNumber: '',
        confirmPitayaNumber:'--1',
        inputSesameNumberVal:0,
        sesameNumber:0
    },
    pitayaNumber(e){
        this.setData({inputPitayaNumber: e.detail.value})
    },    
    //开始计数函数
    startCount(){
        this.setData({confirmPitayaNumber: this.data.inputPitayaNumber})
    },
    inputSesameNumber(e){
        this.setData({inputSesameNumberVal: e.detail.value})
    },
    confirmSesameNumber(){  
        this.setData({sesameNumber: this.data.inputSesameNumberVal})
    },
    addSesameNumber(){
        this.setData({sesameNumber: this.data.sesameNumber+1})
    },
    discountSesameNumber(){
        this.setData({sesameNumber: this.data.sesameNumber-1})
    }

  })
  