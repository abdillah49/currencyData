import React  from 'react'
import { Table } from 'react-bootstrap'

const valueExchange = ({data}) => {
    let exchange = data.rates;
    let point = [];
    let i = 0;
    for(let key in exchange) { 
        point[i] = {
            name : key,
            value : exchange[key].toFixed(6)
        };
        i++;
    }

    return (
        <Table>
            <tbody style={{color:"#ffffff"}}>
                {
                    point.map((element) => (
                        <tr key={element.value}><td>{element.value}</td></tr>
                    ))
                }
            </tbody>
        </Table>
    )
}

export default valueExchange;