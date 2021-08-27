import React from 'react'

// function Greet(){
//     return <h1>hello!</h1>
// }

const Greet = () => {
    const fruits = [
        {name: 'banana', emoji: '🍌'}, 
        {name: 'apple',  emoji: '🍎'}, 
        {name: 'grape',  emoji: '🍇'}
    ];
    
    return(
        
        <div className = 'Fruits'>
            {fruits.map(({name, emoji}) => (
                <div className = 'Fruit'>
                    I'm a {name} and my icon is {emoji}
                </div>
            ))}
        </div>
        
    );
}

export default Greet;