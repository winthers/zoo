zoo.object = {
    copy  (obj) {
        return JSON.parse(JSON.stringify(obj));
    },
    print (obj) {
        console.log(JSON.stringify(obj, null, "\t"));
    }
}