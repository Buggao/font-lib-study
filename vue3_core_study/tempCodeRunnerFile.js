const obj = {a:10};

const p = new Proxy(obj, {
  get: function(target, prop) {
    return 130;
  }
})

console.log('obj a is', p.a)