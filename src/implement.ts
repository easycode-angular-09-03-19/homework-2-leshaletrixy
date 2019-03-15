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

class Senior implements Junior, Middle {
    createApp(): void {}
    doTasks(): void {}
    createArchitecture(): void {
        console.log('hi from createArchitecture');
    }

}

applayMixins(Senior, [Junior, Middle]);

function applayMixins(targetClass: any, baseClasses: any[]) {
    baseClasses.forEach((baseClass) => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach((propName) => {
            targetClass.prototype[propName] = baseClass.prototype[propName];
        })
    });
}