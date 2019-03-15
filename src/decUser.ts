function dateAndType(data: string, type: string) {
    return function(targetClass) {
        return class {
            public type = type;
            public data = data;
        }
    }
}

@dateAndType('data', 'user')
class User {

}

const user = new User();

console.log(user);