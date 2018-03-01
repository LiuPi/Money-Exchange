// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let obj = {};
    let h = 50;
    let q = 25;
    let d = 10;
    let n = 5;
    let p = 1;

    if (currency <= 0) {
        return {};
    } else if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else {
        if (Math.floor(currency / h)>0) {
            obj.H = Math.floor(currency / h);
        }
        let val = currency % h;
        if (val > 0) {
            if(Math.floor(val / q) > 0){
                obj.Q = Math.floor(val / q);
            }
            val = val % q;
        }
        if (val > 0) {
            if(Math.floor(val / d) > 0) {
                obj.D = Math.floor(val / d);
            }
            val = val % d;
        }
        if (val > 0){
            if(Math.floor(val / n)>0) {
                obj.N = Math.floor(val / n);
            }
            val = val % n;
        }
        if (val > 0){
            obj.P = val;
        }
    }
 return obj;
};
