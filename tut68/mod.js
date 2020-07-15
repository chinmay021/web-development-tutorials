console.log('this is module');

function average(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum / arr.length;
}
// module.exports = {
//     avg: average,
//     name: 'Chinmay',
//     repo: 'Github'
// };
//module.exports is a object so we can export a property or attribute 
module.exports.name = 'chinmay'