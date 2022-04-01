"use strict";

const t = 174;
const k = 3;
const ls = [51, 56, 58, 59, 61];
let distances = [];


const chooseOptimalDistance = (t, k, ls) => {
    if (k <= ls.length) {
      ls.reduce((acc, num, ind, arr) =>{
            acc = arr.filter(value => value !== num)
            result([num], acc, k-1)
             },[]);
        return distances.filter(filtrNbr => filtrNbr[0] <= t).sort().at(-1)[0];
      } 
   return null         
  }

  function result(prevNumber,arr, k) {    
    if (k === 1) {
        arr.reduce((acc, num, ind, arr) =>{
          acc = prevNumber.reduce((acc, num) => acc += num, 0) + num;
            distances.push([acc, ...prevNumber,num])
        },[])
      } else {
        arr.reduce((acc, num, ind, arr) =>{
            acc = arr.filter(value => value !== num)
            result([num,...prevNumber], acc, k-1)
        },[])
      }
  }
  console.log(chooseOptimalDistance(t, k, ls));








    