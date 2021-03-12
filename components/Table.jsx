import Record from "./Record";
import {useEffect, useState} from "react";
import {Table} from 'react-bootstrap';

const TableCP = () => {

    const divStyle = {
        // borderRadius: '3rem',
        // backgroundColor: 'yellow'
    }

    const [coinList, setCoinList] = useState(null);
    const [cronJob, setCronJob] = useState(null);

    useEffect(() => {
        console.log(cronJob);
        setTimeout(() => {
            setCronJob(!cronJob);
        }, 600000);
    }, [cronJob]);

    useEffect(() => {
        fetch('/api/data')
            .then(data => data.json())
            .then(data => setCoinList(data))
            .catch(error => console.log(error));
    }, [cronJob]);

    let coins = [];
    if (coinList) {
        coins = coinList.map((coin, index) => <Record
            id={index}
            key={coin['id']}
            name={coin['name']}
            price={coin['quote']['USD']['price']}
            _24H={coin['quote']['USD']['volume-24h']}
            _7D={coin['quote']['USD']['percent_change_7d']}
            marketCap={coin['quote']['USD']['market_cap']}
            volume_24H={coin['quote']['USD']['volume_24h']}
            circulatingSupply={coin['circulation_supply']}
            last7Days={coin['quote']['USD']['last_updated']}/>);
   } else {
        console.log(typeof coinList);
    }

    return (
        <div style={divStyle}>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Currency</th>
                    <th>Price (USD)</th>
                    <th>24 Hours</th>
                    <th>7 Days</th>
                    <th>Market Cap</th>
                    <th>Volume in 24 Hours</th>
                    <th>Circulating Supply</th>
                    <th>Last Update</th>
                </tr>
                </thead>
                <tbody>
                { coins }
                </tbody>
            </Table>
        </div>
    );
}

export default TableCP;