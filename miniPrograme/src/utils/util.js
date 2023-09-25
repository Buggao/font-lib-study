const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

const debounce = (func, interval=1) => {
    const timer = null
    return function(){
        clearTimeout(timer)
        const self = this
        const funcArguments = arguments
        timer = setTimeout(()=>{
            func.call(self, funcArguments)
        }, interval*1000);
    }
}

// exports 将会导出对象的引用，而不是对象本身 (不懂会有什么bug，但是肯定会出现bug)
module.exports = {formatTime, debounce}
