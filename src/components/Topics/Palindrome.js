import React, {Component} from 'react'

class Palindrome extends Component {
    constructor(){
        super()

        this.state= {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange(value){
        this.setState({userInput:value})
    }

    palindromeCheck(userInput){

    }
    

    render() {
        return (
           <div className='puzzleBox palindromePB'>
               <h4>Palindrome</h4>
               <input className='inputLine' onChange={event => this.handleChange(event.target.value)}/>
               <button className='confirmationButton' onClick={() => this.palindromeCheck(this.state.userInput)}>Check</button>
               <span className='resultsBox'>Palindrome: {JSON.stringify(this.state.palindrome)}</span>
           </div> 
        )
    }
}


export default Palindrome