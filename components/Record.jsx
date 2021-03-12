const Record = (props) => {
    const { name, price, _24H, _7D, marketCap, volume_24H, circulatingSupply, last7Days } = props;

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
        <div style={divStyle}>
            <h3 style={itemStyle}>{ name }</h3>
            <h4 syle={itemStyle}>{ price } $ </h4>
            <h4 style={itemStyle}>{ _24H }</h4>
            <h4 style={itemStyle}>{ _7D }</h4>
            <h4 style={itemStyle}>{ marketCap }</h4>
            <h4 style={itemStyle}>{ volume_24H }</h4>
            <h4 style={itemStyle}>{ circulatingSupply }</h4>
            <h4 style={itemStyle}>{ last7Days }</h4>
        </div>
    );
}

export default Record;