import React, { Component } from 'react'

class MapSecond extends Component {


    render() {

        const companies = [
            {name: "Company One", category: "Finance", start: 1981, end: 2004},
            {name: "Company Two", category: "Retail", start: 1992, end: 2008},
            {name: "Company Three", category: "Auto", start: 1999, end: 2007},
            {name: "Company Four", category: "Retail", start: 1989, end: 2010},
            {name: "Company Five", category: "Technology", start: 2009, end: 2014},
            {name: "Company Six", category: "Finance", start: 1987, end: 2010},
            {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
            {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
            {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
          ];
    
        const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
        



        //   console.log(ages.map(val => ages.length - 1 == 14 ? val + 1 : val + 3))

          const workProgress = ages.map(age => {
              if  (age >= 10) {
                  return age + 1000
              } else {
                  return age
              }
          })

          console.log(workProgress)


          const workSucced = companies.map(age => {
            if  (age.start >= 1987) {
                return age.start + 1000
            } else {
                return age.start
            }
        })

        console.log(workSucced)


        /// map returneaza un nou array, care la randul lui tot poate fi mapuit si prelucrat

        const workeach = ages.map((val) => val >= 33 ? val + 200 : val + 100000)

        console.log(workeach)




        //// for each  and filter


        const ups = companies.map(age => {
            return console.log(age.end + 1)
        
        })

        console.log(ups)

    //     const canDrink = ages.filter(val => val >= 21 )
    //     console.log(canDrink)


    //     const retailComapnies = companies.filter(val => val.category === 'Retail')
    //     console.log(retailComapnies)





        return (
            <div>
                
            </div>
        )
    }
}


export default MapSecond;
