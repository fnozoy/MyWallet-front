import React from 'react' 
import Card from '../component/card'
import { withRouter } from 'react-router-dom'
import SelectMenu from '../component/selectMenu'
import { toastrErrorMsg, toastrSuccessMsg } from '../component/toastr'
import LocalStorageService from '../app/service/localStorageService'
import EntryService from '../app/service/entryService'

class EditEntry extends React.Component {

    state = {
        description: '',
        year: '',
        month: '',
        value: '',
        entryCode: '',
        id: '',
        userId: ''
    }

    constructor(){
        super();
        this.entryService = new EntryService();
    }

    componentDidMount(){
        const params = this.props.match.params        
        if(params.id){
            this.entryService.findById(params.id)
                .then(response => {                    
                    this.setState({... response.data})
                })
                .catch (error => {
                    toastrErrorMsg(error.response.data)
                })
        }
    }

    cancel = () => {
        this.props.history.push('/entries')
    }

    save = () => {
        const userLogged = LocalStorageService.getItem('_user_Logged');
        this.state.userId = userLogged.id;

        const msgs = this.entryService.validate();
        if (msgs && msgs.length > 0){
            msgs.forEach((msg, index) => {
                toastrErrorMsg(msg)
            })
            return false;            
        }

        if(!this.state.id){
            this.entryService.create({
                id: '',
                description: this.state.description,
                year: this.state.year,
                month: this.state.month,
                value: this.state.value,
                entryCode: this.state.entryCode,
                userId: this.state.userId
            }).then( response => {                        
                toastrSuccessMsg('New entry created with success.')            
                this.props.history.push('/entries')
            }).catch( error => {
                toastrErrorMsg(error.response.data)
            })
        } else {
            this.entryService.update({
                id: this.state.id,
                description: this.state.description,
                year: this.state.year,
                month: this.state.month,
                value: this.state.value,
                entryCode: this.state.entryCode,
                userId: this.state.userId
            }).then( response => {        
                toastrSuccessMsg('Entry edited with success.')            
                this.props.history.push('/entries')
            }).catch( error => {
                toastrErrorMsg(error.response.data)
            })
        }


    }

    render() {
        const months = this.entryService.getMonthsList();
        const entryTypes = this.entryService.getEntryTypes();

        return (
            <Card title="Edit entry">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="description" className="form-label mt-4">  Description  </label>
                            <input type="description" 
                                value={this.state.description} 
                                onChange={(e) => this.setState({ description: e.target.value })} 
                                className="form-control" 
                                id="description" 
                                placeholder="Enter the description"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="year" className="form-label mt-4">  Year  </label>
                            <input type="year" 
                                value={this.state.year} 
                                onChange={(e) => this.setState({ year: e.target.value })} 
                                className="form-control" 
                                id="year" 
                                placeholder="Enter the year"/>
                        </div>
                    </div>
                    <div className="col-md-6"> 
                        <div className="form-group">
                            <label htmlFor="month" className="form-label mt-4">  Month  </label>
                            <SelectMenu 
                                className="form-control" 
                                value={this.state.month}                                 
                                onChange={(e) => this.setState({ month: e.target.value })} 
                                list={months} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="value" className="form-label mt-4">  Value  </label>
                            <input type="value" 
                                value={this.state.value} 
                                onChange={(e) => this.setState({ value: e.target.value })} 
                                className="form-control" 
                                id="value" 
                                placeholder="Enter the value"/>
                        </div>
                    </div>
                    <div className="col-md-6"> 
                        <div className="form-group">
                            <label htmlFor="entryCode" className="form-label mt-4">  Entry type  </label>
                            <SelectMenu 
                                className="form-control" 
                                value={this.state.entryCode}                                 
                                onChange={(e) => this.setState({ entryCode: e.target.value })} 
                                list={entryTypes} />
                        </div>
                    </div>
                </div>
                <br />
                <button onClick={ this.save } type="button" className="btn btn-info">Save</button>
                <button onClick={ this.cancel } type="button" className="btn btn-warning">Cancel</button>
            </Card>
        )
    }
}
export default EditEntry