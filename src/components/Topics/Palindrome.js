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
        var forwards = userInput
        var reverse = userInput
        reverse = reverse.split('')
        reverse = reverse.reverse()
        reverse = reverse.join('')
        for (let i=0;i<forwards.length;i++){
            if (forwards===reverse) {
                this.setState({palindrome: true})
            }
            else {
                this.setState({palindrome: false})
            }
        }
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