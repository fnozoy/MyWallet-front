import React from 'react'
import Card from '../component/card'
import { withRouter } from 'react-router-dom'
import SelectMenu from '../component/selectMenu'
import EntriesTable from '../component/entriesTable'
import { toastrErrorMsg, toastrSuccessMsg } from '../component/toastr'
import LocalStorageService from '../app/service/localStorageService'
import EntryService from '../app/service/entryService'
import { Dialog } from 'primereact/dialog';
import {Button} from 'primereact/button';


class SearchEntries extends React.Component{

    state = {
        year: '',
        month: '',
        entryCode: '',
        entryStatus: '',
        description: '',
        userId: '',
        entries: [],
        showConfirmDialog: false,
        entryToDelete: ''
    }
    
    constructor(){
        super();
        this.entryService = new EntryService();
    }

    search = () => {               

        if (!this.state.year){
            toastrErrorMsg('Year is mandatory')
            return false;        
        }

        const userLogged = LocalStorageService.getItem('_user_Logged');
        this.state.userId = userLogged.id;

        const entryFilter = {
            year: this.state.year,
            month: this.state.month,
            entryCode: this.state.entryCode,
            entryStatus: this.state.entryStatus,
            description: this.state.description,
            userId: this.state.userId        
        }
        
        this.entryService
            .search(entryFilter)
            .then( response => {
                if (response.data == ''){
                    toastrErrorMsg('Search retrieved no data. Try other filters.')
                } else {
                    toastrSuccessMsg('Search finished with success.')
                }
                this.setState({entries: response.data})
            }).catch(error => {
                console.error(error.response)            
            })
    }

    deleteRow = () => {
        this.entryService
            .deleting(this.state.entryToDelete.id)      
            .then (response => {                

                const entries = this.state.entries;
                const index = entries.indexOf(this.state.entryToDelete)
                entries.splice(index, 1);
                this.setState( { entries: entries, showConfirmDialog: false } )
                toastrSuccessMsg('Entry deleted successfully.')
            })            
            .catch(error => {
                toastrErrorMsg('Delete failed!!!')
            })
            
    }

    updateStatusApprove = (entry) => {
        entry.entryStatus = 'APPROVED'
        this.updateStatus(entry)
    }

    updateStatusReject = (entry) => {
        entry.entryStatus = 'CANCELED'
        this.updateStatus(entry)
    }

    updateStatus = (entry) => {
        this.entryService
            .updateStatus(entry)      
            .then (response => {
                const entries = this.state.entries;
                const index = entries.indexOf(this.state.entryToDelete)
                if(index !== -1){
                    entries[index] = entry
                }                
                this.setState( { entries: entries, showConfirmDialog: false } )
                toastrSuccessMsg('Status updated successfully.')
            })            
            .catch(error => {
                toastrErrorMsg('Status update failed!!!')
            })
            
    }

    confirmDelete = (entry) => {
        this.setState({showConfirmDialog: true, entryToDelete: entry})
    }

    cancelDelete = (entry) => {
        this.setState({showConfirmDialog: false, entryToDelete: ''})
    }

    editRow = (entry) => {
        this.props.history.push(`/editEntry/${entry.id}`) 
    }

    navigateEditEntry = () => {
        this.props.history.push('/editEntry')
    }

    render() {        
        const months = this.entryService.getMonthsList();

        const entryTypes = this.entryService.getEntryTypes();

        const confirmDialogFooter = (
            <div>
                <Button label="Confirm" icon="pi pi-check" onClick={this.deleteRow} />
                <Button label="Cancel" icon="pi pi-times" onClick={this.cancelDelete} 
                        className="p-button-secondary" />
            </div>
        );

        return (         
            <Card title="Entries">
                <div className="row">
                    <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="year" className="form-label mt-4">  Year  </label>
                                <input type="year" 
                                    value={this.state.year} 
                                    onChange={(e) => this.setState({ year: e.target.value })} 
                                    className="form-control" 
                                    id="year" 
                                    placeholder="Enter the year to search"/>
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
                                <label htmlFor="description" className="form-label mt-4">  Description  </label>
                                <input type="description" 
                                    value={this.state.description} 
                                    onChange={(e) => this.setState({ description: e.target.value })} 
                                    className="form-control" 
                                    id="description" 
                                    placeholder="Enter the description to search"/>
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
                <button onClick={ this.search } type="button" className="btn btn-info"><i className="pi pi-search"></i>  Search</button>
                <button onClick={ this.navigateEditEntry } type="button" className="btn btn-warning"><i className="pi pi-plus"></i>  Create new</button>
                <br />
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-component">
                            <EntriesTable entries={this.state.entries} 
                                          editRow={this.editRow}  
                                          deleteRow={this.confirmDelete}
                                          updateStatusApprove={this.updateStatusApprove}  
                                          updateStatusReject={this.updateStatusReject}  
                            />
                        </div>
                    </div>
                    <Dialog header="Confirmation" 
                            visible={this.state.showConfirmDialog} 
                            footer={confirmDialogFooter} 
                            style={{width: '50vw'}}
                            modal={true}
                            onHide={() => this.setState({showConfirmDialog: false})}>
                            Are you sure you want to proceed?
                    </Dialog>                
                </div>
            </Card>
        )
    }

}
export default withRouter(SearchEntries);

