const target = {
	id: 'target',foo:'123'
};
//程序处理对象
const handler = {
    get(trapTarget, property, receiver){
        console.log('trapTarget, property, receiver',trapTarget, property, receiver )
        console.log('arguments', ...arguments);
        let decoration = '';
        if (property === 'foo') {
            decoration = '!!!'
        }
        return Reflect.get(...arguments) + decoration
    }
};
const proxy = new Proxy(target, handler);

console.log(target.foo);
console.log(proxy.foo);
