
describe("zoo", () => {


 it("will have all its methods defined", () => {
    [
        zoo,
        zoo.array,
        zoo.array.move,
        zoo.array.uniq,
        zoo.collision,
        zoo.collision.aabb,
        zoo.collision.circle,
        zoo.device,
        zoo.device.platform,
        zoo.device.isMobile,
        zoo.device.isAndroid,
        zoo.device.isIphone,
        zoo.device.isMobile2,
        zoo.object,
        zoo.object.copy,
        zoo.object.print,
        zoo.random,
        zoo.random.number,
        zoo.random.item,
        zoo.random.items,
        zoo.random.sort
    ].forEach(o => expect(o).toBeDefined());
 })

 describe("random", ()=> {
     it("will generate a number", ()=> {
         expect(typeof zoo.random.number()).toEqual(typeof 0)
     })
     it("will pick a random item from an array", ()=> {
        expect(typeof zoo.random.item([0,1,2,3])).toEqual(typeof 0);
     })
     it("will pick a number of random items from an array", ()=> {
        expect(zoo.random.items([0,1,2,3], 2).length).toEqual(2);
     })
     it("it will sort an array randomly", ()=> {
        // don't know how to test this, but atleast it tests that there are no errors in the code lol.
        const arr = [0,1,2,3,4];
        zoo.random.sort(arr)
        expect(arr.length).toEqual(5);
     })
 })

})