import React, { Component } from 'react'



class MapMethods extends Component {

    

  render() {

    const cipru = {
     Alex: {
        cip: [15, 27, 94, 42],
        calvi: [122, 144, 199, 300]
        },
    Victoria: {
        cip1: [1511, 2722, 924, 4232],
        calvi1: [1522, 1404, 1899, 3020]
        },  
    }


    let valorile = Object.values(cipru)
    console.log(valorile)



    ///// sortam elementele din array dupa valoare de la mic la mare
    let nn = [23, -1, 24]
    const mapp = nn.map((val) => 
    val + 2 
    )

    console.log(mapp)
    console.log(nn.sort((a, b) => {
        if(a > b) {
            return 1
        } else {
            return -1
        }
    }
    ))
    ////////

    const items = nn.map(n => '<li>' + n + '</li>')
    console.log(items)
    const html = '<ul>' + items.join(' ') + '</ul>';
    console.log(html)




    //// join
            // let c = 29;

            // console.log(nn.join(', ') + ' ' + c)
            // let unim  = nn.join(', ') + ', ' + c
            // console.log(unim)
    ///////








///// Filter method
    // let vvv = [22, [1, 2, 3, 4, 100], 44, 21]

    // const mapuim = vvv[1].filter((score) => {
    //     return score > 3
        
    // });

    // console.log(mapuim)
    
/////




    return (
      <div>
          <div >
            <div>{html}</div>
          </div>
      </div>
    )
  }
}


export default MapMethods;