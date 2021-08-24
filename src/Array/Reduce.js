import React, { Component } from 'react'

class Reduce extends Component {
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

    const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32, 16, 25];
    
    console.log(ages.sort())

    // cautarea in array dupa index
    const euIndex = companies.find(per => per.start === 1992 )
    console.log(euIndex)



    let removed = ages.splice(ages.length-2)

    console.log(removed)    
    

    // console.log(ages)
    // console.log(ages[ages.length - 1])

    
    // verificarea indexului dupa valoare --
    // let elementA = 16;

    // let globA = [];

    // let idx = ages.indexOf(elementA);

    // while(idx != -1) {
    //     globA.push(idx);
    //     idx = ages.indexOf(elementA, idx + 1)
    // }

    // console.log(globA)
    
    

    const calcul = ages.reduce((acc, val) => acc + val, 0 )

      console.log(calcul)
     

    const calcul4 = ages.reduce((acc, val) => {
        return  acc + val
     
    }, 0)

    console.log(calcul4)

    let aa = [5, 9, 9]

    const calcul5 = aa.reduce((acc, val) => {
        return  acc / val
     
    }, 2)

    console.log(calcul5)

    // console.log(ages.splice(length-2))

    // metoda de a arata calcul
    // const calcul1 = ages.reduce((acc, val) => {
    //  return   acc + val
    // }, 0)

    // console.log(calcul1)




    return (
      <div>
        
      </div>
    )
  }
}

export default  Reduce;