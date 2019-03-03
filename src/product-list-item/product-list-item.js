import React, {Component} from 'react';

import './product-list-item.css';

export default class ProductListItem extends Component {
    
    QuantityChange = (e) => {
        this.props.onProductChange(e.target.value, 
            this.countSum(this.props.price,e.target.value,
                this.props.discount), 'quantity');
    };
    

    countSum(price,quantity,discount) {
        return quantity*price - quantity*price*discount;
    }
        
        DiscountChange = (e) => {
                this.props.onProductChange(e.target.value, 
                    this.countSum(this.props.price,
                        this.props.quantity, e.target.value), 'discount');
        };
    
        
   
    render(){
        
        const {name, onDeleted, cartDiscount, price, quantity, summary, discount} = this.props;

        return (
            <>
                <td>
                    {name}
                </td>
                <td>
                    <input className="form-control" type="number" min ="1" max="100"
                    value={quantity}  
                    onChange={this.QuantityChange}> 
                    </input>
                </td>
                <td>
                    {price}  
                </td>
                <td>
                <select className="form-control form-control-select"
                onChange={this.DiscountChange} value={discount} 
                            disabled={cartDiscount}> 
                        <option value="0">0%</option>
                        <option value="0.1">10%</option>
                        <option value="0.25">25%</option>
                    </select>
                </td>
                <td className="summary">
                    {summary}
                </td>
                <td className="noprint">
                    <button type="button"
                        className="btn btn-outline-danger btn-sm float-right"
                        onClick={onDeleted}>
                        <i className="fa fa-trash-o" />
                    </button>
                </td>
            </>
        )
    }
}