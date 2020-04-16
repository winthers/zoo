zoo.array = {

    // swap items around
    move (arr, old_index, new_index) {
        if (new_index >= arr.length) {
            var k = new_index - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    },

    // gets rid of duplicates
    uniq (arr) {
        return arr.reduce( (a, c) => { 
            if(!a.includes(c)) a.push(c);
            return a;
        }, [])
    }
}