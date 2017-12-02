import React, {Component} from 'react'

class Sum extends Component {
    constructor(){
        super()

        this.state ={
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    updateNumber1(value){
        this.setState({number1: +value})
    }

    updateNumber2(value){
        this.setState({number2: +value})
    }

    add(input1,input2){
        this.setState({sum: input1+input2})
    }

    
    render() {
        return (
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine' onChange={event => this.updateNumber1(event.target.value)}/>
                <input className='inputLine'onChange={event => this.updateNumber2(event.target.value)}/>
                <button className='confirmationBox' onClick={() => this.add(this.state.number1,this.state.number2)}>Add</button>
                <span className='resultsBox'>Sum: {JSON.stringify(this.state.sum)}</span>
            </div>
        )
    }
}


export default Sum