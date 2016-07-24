function getTempCallback (location, callback) {
    callback(undefined, 36);
    callback('City not found');
}
//example of using a promise

function getTempPromise (location) {
    return new Promise(function(resolve, reject){
        //fake a delay
        setTimeout(function () { 
            resolve(36);
            reject('City not found');
         }, 1000);
    });
}

getTempPromise('Sydney')
    .then(function (temp) {
        console.log('promise success ', temp);
      }, function (err) {
        console.log('promise error ', err   );
});



//little test
function addPromise(a, b) { 
    return new Promise(function (resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject("a and b need to be numbers");
        }
    })
}

addPromise(2,3).then(function(sum) {
    console.log('success', sum);
}, function(err) {
    console.log('error', err);
});
