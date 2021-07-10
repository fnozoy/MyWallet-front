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
                            className="btn btn-primary"
                            onClick={e => props.editRow(entry)}>
                        Edit
                    </button>
                    <button type="button" 
                            className="btn btn-danger"
                            onClick={e => props.deleteRow(entry)}>
                        Delete
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