/**
 * Created by Epurashu on 11.04.2016.
 */
var HelloWorld = (function () {
    function HelloWorld() {
    }
    HelloWorld.prototype.printHelloWorld = function () {
        return "HelloWorldClass";
    };
    return HelloWorld;
})();
exports.HelloWorld = HelloWorld;
exports.helloWorldFunction = new HelloWorld().printHelloWorld;
//# sourceMappingURL=test.js.map