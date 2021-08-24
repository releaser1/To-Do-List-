import React, { Component } from 'react'

class Prototypes extends Component {
    render() {

        let arr = [1, 2, 3, 4, 5]
        let arr1 = [10, 20, 3, 40, 5]


        Array.prototype.multiplyBy = function(n) {
            return this.map(function(i) {
                return i * n
            })
        }

        Array.prototype.minim = function() {
            let arrMin = [1];
            for (let num of arr) {
                if(num > arrMin) {
                    arrMin = num
                }
            }
           return console.log(arrMin)
        }

        console.log(arr.minim())
        console.log(arr1.minim())


        console.log(arr.multiplyBy(10))
        console.log(arr1.multiplyBy(10))




        return (
            <div>
                
            </div>
        )
    }
}


export default Prototypes;