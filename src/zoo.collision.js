
zoo.collision = {

    /**
     * AABB or Axis-Aligned Bounding Box
     * @param {x:number, y:number, width:number, height:number} rect1 
     * @param {x:number, y:number, width:number, height:number} rect2 
     * @return boolean
     */
    aabb: function (rect1, rect2) {
        return (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y);
    },

    /**
     * Circle Collision
     * @param {*} a 
     * @param {*} b 
     */
    circle (a,b) {
        var dx = a.x - b.x;
        var dy = a.y - b.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        return (dist < a.radius + b.radius)
    }
}
