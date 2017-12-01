import React, {Component} from 'react'

class FilterObject extends Component {
    constructor(){
        super()

        this.state = {
            unFilteredArray: [],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(value) {
        this.setState({userInput: value})
    }
    
    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'></span>
                <input className='inputLine' onChange={event => this.handleChange(event.target.value)}/>
                <button className='confirmationButton' onClick={}>Filter</button>
                <span className='resultsBox filterObjectRB'></span>
            </div>
        )
    }
}


export default FilterObject