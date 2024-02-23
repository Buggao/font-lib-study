// function render () {
//   console.log('模拟视图渲染')
// }
// let data = {
//   name: '万里行船',
//   location: { x: 3200, y: -1100 }
// }

// observe(data)

// function observe (obj) { // 我们来用它使对象变成可观察的
//   // 判断类型
//   if (!obj || typeof obj !== 'object') {
//     return
//   }
//   // [name, location]
//   Object.keys(obj).forEach(key => {
//     defineReactive(obj, key, obj[key])
//   })

//   function defineReactive (obj, key, value) {
//     // 递归子属性
//     observe(value)
//     Object.defineProperty(obj, key, {
//       enumerable: true, //可枚举（可以遍历）
//       configurable: true, //可配置（比如可以删除）
//       get: function reactiveGetter () {
//         console.log('get', value) // 监听
//         return value
//       },
//       set: function reactiveSetter (newVal) {
//         observe(newVal) //如果赋值是一个对象，也要递归子属性
//         if (newVal !== value) {
//           console.log('set', newVal) // 监听
//           render()
//           value = newVal
//         }
//       }
//     })
//   }
// }
// data.location = {
//   x: 1000,
//   y: 1000
// } //set {x: 1000,y: 1000} 模拟视图渲染
// data.name // get 浪里行舟
 
// 通过 Reflect 和 Proxy 实现属性拦截和修改
const obj = {
  name: 'John',
  age: 30,
};

const handler = {
  get(target, property) {
    console.log(`获取属性：${property}`);
    return Reflect.get(target, property);
  },
  set(target, property, value) {
    console.log(`设置属性：${property} 值：${value}`);
    return Reflect.set(target, property, value);
  },
};

const proxyObj = new Proxy(obj, handler);

console.log(proxyObj.name); // 获取属性：name，输出：John

proxyObj.age = 25; // 设置属性：age 值：25

// 动态创建对象和方法
const dynamicObj = {
  [`${Date.now()}`]: '动态属性',
  [`${Date.now() + 1}`]() {
    console.log('动态方法');
  },
};

Object.assign(obj, dynamicObj)
console.log(obj)
console.log(obj[Object.keys(dynamicObj)[0]])
obj[Object.keys(dynamicObj)[0]] = '动态属性2'
// console.log(dynamicObj[Object.keys(dynamicObj)[0]]); // 动态属性

// dynamicObj[Object.keys(dynamicObj)[1]](); // 动态方法
