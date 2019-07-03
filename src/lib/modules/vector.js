/**
 * @typedef Vector
 * @type {object}
 * @property {number} x
 * @property {number} y
 */


export default class Vector {

    /**
     * Get angle 
     * @param {Vector} v1 
     */
    static getAngleAsDegree = (v1) => {
        var angle = Math.atan2(v1.y, v1.x);
        var degrees = 180 * angle / Math.PI;
        return (360 + Math.round(degrees)) % 360;
    }


    static convertRadianToDegree = (radian) => {
        return radian * (180 / Math.PI)
    }
    
    /**
     * Add vectors
     * @param {Vector} v1 
     * @param {Vector} v2 
     */
    static add = (v1, v2) => {
        return {
            x: v1.x + v2.x,
            y: v1.y + v2.y
        }
    }
    
    /**
     * Substract vectors
     * @param {Vector} v1 
     * @param {Vector} v2 
     */
    static substract = (v1, v2) => {
        return {
            x: v1.x - v2.x,
            y: v1.y - v2.y
        }
    }
    
    /**
     * Multiply vectors
     * @param {Vector} v1 
     * @param {Vector} v2 
     */
    static dot = (v1, v2) => {
        return v1.x * v2.x + v1.y * v2.y;
    }
    
    static multiply = (v1, multiply) => {
        if (typeof multiply === "number") {
            return {
                x: v1.x * multiply,
                y: v1.y * multiply
            }
        }
        return {
            x: v1.x * multiply,
            y: v1.y * multiply
        }
    }
    
    static divide = (v1, divide) => {
        if (typeof divide === "number") {
            return {
                x: v1.x / divide,
                y: v1.y / divide
            }
        }
        return {
            x: v1.x / divide,
            y: v1.y / divide
        }
    }
    
    /**
     * Get magnitude from a vector
     * @param {Vector} v1 
     */
    static magnitude = (v1) => {
        return Math.sqrt(v1.x * v1.x + v1.y * v1.y);
    }
    
    /**
     * Normalize a vector
     * @param {Vector} v1 
     * @returns {Vector}
     */
    static normalize = (v1) => {
        let magnitude = Math.sqrt(v1.x * v1.x + v1.y * v1.y)
    
        if (magnitude === 0) {
            return {
                x: 0,
                y: 0
            };
        } else {
            return {
                x: v1.x / magnitude,
                y: v1.y / magnitude
            };
        }
    }
    
    /**
     * Truncate a vector (set a max magnitude)
     * @param {Vector} v1 
     * @param {number} maxLength Maximum vector magnitude
     * @returns {Vector}
     */
    static truncate = (v1, maxLength) => {
        let magnitude = Math.sqrt(v1.x * v1.x + v1.y * v1.y)
    
        if (magnitude <= maxLength) {
            return {
                x: v1.x,
                y: v1.y
            }
        } else {
            return multiply(normalize(v1), maxLength)
        }
    }   
    

}