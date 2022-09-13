// var number = function(busStops){
//   let passengers = 0;
//     for (let stop of busStops) { 
//     passengers += stop[0] - stop[1]
//     console.log(stop);
//   }
// console.log(passengers);


// }


const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);


number([[10,0],[3,5],[5,8]]) //5