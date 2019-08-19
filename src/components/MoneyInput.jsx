import React from 'react';

export default class MoneyInput extends React.Component {

    makeProperty() {
        let className;
        let holderName;
        switch (this.props.operationName) {
            case 'sell':
                className = 'money-convert__input money-convert_sell';
                holderName = 'Продажа';
                break;
            case 'purchase':
                className = 'money-convert__input money-convert_purchase'
                holderName = "Покупка";
                break;
            default:
                break;
        }

        return {
            className,
            holderName
        }
    }

    changeMoney = (e) => {
        this.props.changeMoney(e.target.value);
    }


    render() {
        const property = this.makeProperty();

        return (
            <>
                <div className={property.className}>
                    <label>{this.props.valutName}
                        <input type="text" placeholder={property.holderName} value={this.props.moneyValue} onChange={this.changeMoney} />
                    </label>
                </div>
            </>
        )
    }
}