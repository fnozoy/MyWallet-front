import React from 'react'
import currencyFormatter from 'currency-formatter';

export default props => {

    const rows = props.entries.map( entry => {
        return (
            <tr key={entry.id}>
                <td>{entry.description}</td>
                <td>{currencyFormatter.format(entry.value, {locale: 'en-US'})}</td>
                <td>{entry.entryCode}</td>
                <td>{entry.month}</td>
                <td>{entry.year}</td>
                <td>{entry.entryStatus}</td>
                <td>
                    <button type="button" 
                            className="btn btn-success"
                            disabled={entry.entryStatus !== 'PENDING'}
                            title="Aprove entry"
                            onClick={e => props.updateStatusApprove(entry)}>
                        <i className="pi pi-thumbs-up"></i> 
                    </button>
                    <button type="button" 
                            className="btn btn-warning"
                            disabled={entry.entryStatus !== 'PENDING'}
                            title="Cancel entry"
                            onClick={e => props.updateStatusReject(entry)}>
                        <i className="pi pi-thumbs-down"></i> 
                    </button>
                    <button type="button" 
                            className="btn btn-info"
                            title="Edit entry"
                            onClick={e => props.editRow(entry)}>
                        <i className="pi pi-pencil"></i> 
                    </button>
                    <button type="button" 
                            className="btn btn-danger"
                            title="Delete entry"
                            onClick={e => props.deleteRow(entry)}>
                        <i className="pi pi-trash"></i>                        
                    </button>
                </td>
            </tr>
        )
    })

    return (
        <table className="table table-rover">
            <thead>
                <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Value</th>
                    <th scope="col">Type</th>
                    <th scope="col">Month</th>
                    <th scope="col">Year</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )

}