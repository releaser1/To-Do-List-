import React, { Component } from 'react'

class BindCallApply extends Component {
    render() {
        function hello() {
            console.log('hello', this)
        }

        const person = {
            name: 'Ciprian',
            surname: 'Gumaniuc',
            age: 27,
            aflamInfo: function(job, hobby) {
                console.log(`numele meu este ${this.name}`)
                console.log(`varsta meu este ${this.age}`)
                console.log(`jobul meu este ${job}`)
                console.log(`hobby meu este ${hobby}`)


            }
        }

        // person.aflamInfo(1, 2)
        
        const cristina = {
            name: 'Cristina',
            prenume: 'Wells',
            age: 22
        }
        

        const gari = {
            name: 'harry',
            prenume: 'poter',
            age: 22
        }
        
        person.aflamInfo.bind(cristina)()

        const functionPush = person.aflamInfo.bind(cristina, 'developer', 'traveler')
        functionPush()

        person.aflamInfo.call(gari, 'fly', 'suck')


        
        return (
            <div>
                
            </div>
        )
    }
}

export default BindCallApply;