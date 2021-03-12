const Record = (props) => {
    const { id, name, price, _24H, _7D, marketCap, volume_24H, circulatingSupply, last7Days } = props;

    const divStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'baseline',
        alignContent: 'flex-start',
        flexWrap: 'wrap',
        flexGrow: 1,
        backgroundColor: 'teal',
        borderRadius: '3rem',
        margin: '1rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        width: '100%'
    };
    const itemStyle = {
        // alignSelf: 'space-evenly',
        // justifySelf: 'space-evenly',
        padding: '1rem'
    };

    return (
        <tr>
            <td>{ id }</td>
            <td>{ name }</td>
            <td>{ price.toFixed(2) } $ </td>
            <td>{ _24H }</td>
            <td>{ _7D }</td>
            <td>{ marketCap }</td>
            <td>{ volume_24H }</td>
            <td>{ circulatingSupply }</td>
            <td>{ last7Days }</td>
        </tr>
    );
}

export default Record;