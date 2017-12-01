import React, {Component} from 'react'

class FilterString extends Component {
    constructor(){
        super()
        
        this.state = {
            unFilteredArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(value) {
        this.setState({userInput:value})
    }

    filterArray(userInput){
        var unFilteredArray = this.state.unFilteredArray
        var filteredArray = []
        for (let i=0;i<arr.length;i++){
            if (arr[i].includes(userInput)){
                filteredArray.push(arr[i])
            }
        }
        this.setState({filteredArray:filteredArray})
    }

    
    render() {
        return (
           <div className='puzzleBox filterStringPB'>
               <h4>Filter String</h4>
               <span className='puzzleText'>Names: {JSON.stringify(this.state.unFilteredArray)}</span>
               <input className='inputLine' onChange={event => this.handleChange(event.target.value)}/>
               <button className='confirmationButton' onClick={() => this.filterArray(this.state.userInput)}>Filter</button>
               <span className='resultsBox filterStringRB'>Filtered Names: {JSON.stringify(this.state.filteredArray)}</span>
           </div> 
        )
    }
}


export default FilterString