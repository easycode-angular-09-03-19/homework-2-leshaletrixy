class Junior {
    doTasks() {
        console.log('Actions!!!');
    }
}
class Middle {
    createApp() {
        console.log('Creating!!!');
    }
}
class Senior {
    createApp() { }
    doTasks() { }
    createArchitecture() {
        console.log('hi from createArchitecture');
    }
}
applayMixins(Senior, [Junior, Middle]);
function applayMixins(targetClass, baseClasses) {
    baseClasses.forEach((baseClass) => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach((propName) => {
            targetClass.prototype[propName] = baseClass.prototype[propName];
        });
    });
}
