import React, { Component } from 'react'

class ForEach extends Component {
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

    // const fil = companies.filter(bum => bum.category == 'Auto')
    // console.log(fil)
    // const mmp = companies.map(bum => bum.category == 'Retail' ? 'ciunga' : 3)
    // console.log(mmp)
    // let da = 2
    // let ar = [];
    // const ffo = companies.forEach(function (bum)  {
    //     if (bum.category == 'Finance') {
    //       ar.push(`${bum.category}  ${da}`)
    //       console.log(ar)
    //     }
        
    // })
    // console.log(ar)

    
    const originalWork = companies.forEach(function(pi, index, compArr) {
        // console.log(pi)      // fiecare obiect din array in parte
        // console.log(index)
        // console.log(compArr) // intreg obiectul companies in sine
    }
      
    )

    // const firstWork = companies.forEach(pi => console.log(pi.name, 2) )  




    const liber = []; 
    companies.forEach(function(company, index) {
         console.log((company.end + 1)+ ' comes at ' + (index + 1 + ' clock'))
     })

     companies.forEach(function(company, index) {
         // console.log((company.end + 1)+ ' comes at ' + (company.category))
         // console.log(company.end > 2010 ?  (company.end + 1) + (company.start + 1) : ('lol') )
         if(company.end > 2010) {
             liber.push(company.end)  // am pus in array aparte anul care e mai mare ca 2010 
         } else {
             console.log('ou')
         }
     })
     console.log(liber)

    return (
      <div>
         
      </div>    
    )
  }
}

export default ForEach;