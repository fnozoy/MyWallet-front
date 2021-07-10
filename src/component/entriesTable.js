import React from 'react'

export default props => {

    const rows = props.entries.map( entry => {
        return (
            <tr key={entry.id}>
                <td>{entry.description}</td>
                <td>{entry.value}</td>
                <td>{entry.entryCode}</td>
                <td>{entry.month}</td>
                <td>{entry.year}</td>
                <td>{entry.entryStatus}</td>
                <td>
                    action
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