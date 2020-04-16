zoo.random = {

    number (min=0, max=100) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    
    item (arr) {
        return arr[this.number(0, arr.length-1)];
    },

    items(arr, numItems) {
        var max = arr.length -1;
        var indexes = [];
    
        if (numItems > max) {
            throw Error("numItems can exeede array length");
        }
    
        for(var i = 0; i < numItems; i++) {
            var pick = this.number(0, max);
            while(indexes.includes(pick)) {
                pick = this.number(0, max);
            }
    
            indexes.push(pick);
        }
    
        return indexes.map(i => arr[i]);
    },

    sort (arr, shuffleTimes = 10) {
        var length = arr.length;
        for (var k = 0; k < 3; k++) {
            var order = [];
            for (var i = 0; i < length; i++) {
                var r = 0;
                for (var j = 0; j < shuffleTimes; j++) {
                    const c = Math.random();
                    if (c < 0.4) {
                        r = -1;
                    } else if (c > 0.4 && c < 0.6) {
                        r = 0;
                    } else {
                        r = 1;
                    }
                }
                order.push(r);
            }
            var h = 0;
            arr.sort((a, b, c) => { return order[h++]; })
            arr.reverse();
        }
    }
};