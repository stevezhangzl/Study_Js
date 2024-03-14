

console.log('hello world')



const promise = new Promise(function(resolve,reject){
	resolve(100)
})

promise.then(function(value){
	console.log('reslove',value)
},function(error){
	console.log('rejected',value)
})