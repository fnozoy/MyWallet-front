import React from 'react'
import Card from '../component/card'
import { withRouter } from 'react-router-dom'
import SelectMenu from '../component/selectMenu'
import EntriesTable from '../component/entriesTable'
import { toastrErrorMsg, toastrSuccessMsg } from '../component/toastr'


class SearchEntries extends React.Component{


    state = {
        year: '',
        month: '',
        entryCode: ''
    }

    search = () => {

    }


    navigateSearch = () => {
        this.props.history.push('/search')
    }

    render(){
            
        
        const entries = [
            { id: 1, description: 'salary', value: 10000, entryCode: 'INCOME', month: 6, year: 2021, entryStatus: 'APPROVED' }
        ]

        const months = [
            { label: 'Choose the month to search...', value: ''},
            { label: 'January', value: 1},
            { label: 'February', value: 2},
            { label: 'March', value: 3},
            { label: 'April', value: 4},
            { label: 'May', value: 5},
            { label: 'June', value: 6},
            { label: 'July', value: 7},
            { label: 'August', value: 8},
            { label: 'September', value: 9},
            { label: 'October', value: 10},
            { label: 'November', value: 11},
            { label: 'December', value: 12}
        ]

        const entryTypes = [
            { label: 'Choose the entry type to search...', value: ''},
            { label: 'Income', value: 'INCOME'},
            { label: 'Outcome', value: 'OUTCOME'}
        ]

        return (         
        <Card title="Entries">
            <div className="row">
                <div className="col-md-6">
                    <div className="bs-component">
                        <div className="form-group">
                            <label htmlFor="year" className="form-label mt-4">  Year  </label>
                            <input type="year" value={this.state.year} onChange={(e) => this.setYear({ name: e.target.value })} className="form-control" id="year" aria-describedby="yearHelp" placeholder="Enter the year to search"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="month" className="form-label mt-4">  Month  </label>
                            <SelectMenu className="form-control" list={months} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="month" className="form-label mt-4">  Entry type  </label>
                            <SelectMenu className="form-control" list={entryTypes} />
                        </div>
                        <button onClick={ this.search } type="button" className="btn btn-info">Search</button>
                        <button onClick={ this.navigateSearch } type="button" className="btn btn-warning">Create new</button>
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-12">
                    <div className="bs-component">
                        <EntriesTable entries={entries} />
                    </div>
                </div>
            </div>
        </Card>
        )
    }

}
export default withRouter(SearchEntries);

