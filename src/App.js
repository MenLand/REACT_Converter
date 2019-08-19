import React from 'react';
import './App.css';
import Converter from './components/Converter';
import MoneyInput from './components/MoneyInput';



class App extends React.Component {
    state = {
        type: 'BYN',
        value: ''
    }

    componentWillMount = async () => {
        const currentCourse = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
        const { Valute } = await currentCourse.json();

        this.setState({
            BLR: Valute.BYN.Value,
            USD: Valute.USD.Value
        });
    }

    changeMoneyBYN = (value) => {
        this.setState(this.setState({ type: 'BYN', value }))
    }

    changeMoneyUSD = (value) => {
        this.setState(this.setState({ type: 'USD', value }))
    }

    convert(type, amount) {
        let result;
        console.log(amount)
        if(Number.isNaN(parseFloat(amount))) return '';

        switch (type) {
            case 'BYN':
                result = this.state.BLR * amount / this.state.USD;
                break;
            case 'USD':
                result = this.state.USD * amount / this.state.BLR ;
                break;

            default:
                break;
        }
       
        return result.toFixed(4);
    }

    render() {
        const type = this.state.type;
        const value = this.state.value;
        const valueBYN = type === 'USD' ? this.convert(type, value) : value;
        const valueUSD = type === 'BYN' ? this.convert(type, value) : value;
        return (
            <div className="wrapper">
                <Converter>
                    <MoneyInput operationName="sell" valutName="USD" moneyValue={valueUSD} changeMoney={this.changeMoneyUSD} />
                    <MoneyInput operationName="purchase" valutName="BYN" moneyValue={valueBYN} changeMoney={this.changeMoneyBYN} />
                </Converter>
            </div>
        )
    }
}

export default App;
