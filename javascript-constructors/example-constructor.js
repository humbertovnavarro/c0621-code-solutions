function ExampleConstructor(){

}
console.log('Value of ExampleConstructor.prototye:', ExampleConstructor.prototype);
console.log('Value of type of ExampleConstructor.prototype:', typeof ExampleConstructor.prototype)
var example = new ExampleConstructor();
console.log('Value of example:', example);
var instance = example instanceof ExampleConstructor;
console.log('Value of instance:', instance);
