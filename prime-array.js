const isPrime = require('prime-sieve');

const primeArray = (ar) => {
    if(Object.prototype.toString.call(ar) !== '[object Array]'){
        throw TypeError(' expects an Array got '+ (typeof ar));
    }
    return ar.reduce((c,v) => {
        if(isPrime(v))return [...c,v];
        return c;
    },[]);
};

module.exports = primeArray;