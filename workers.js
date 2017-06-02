/**
 * Created by Curso on 01/06/2017.
 */
this.addEventListener('message', function(e) {
    var data1 = e.data;
    console.log(data1);
   // postMessage(data1);

    var prime = [];
    var cap = data1;
    for (var i = 2; i < cap ; i++) {
        var num = isPrime(i);
        if (num) {
            prime.push(i);
        }
    }
    postMessage(prime);
});

function isPrime(num) {
    var prime = num != 1;
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            prime = false;
            break;
        }
    }
    return prime;
}