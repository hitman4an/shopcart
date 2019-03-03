import React, {Component} from 'react';

import './add-product-form.css';

export default class ProductAddForm extends Component {
    
    state = {
        label: 'Smartphone',
        quantity: 1,
        price: 100, 
        summary: 100     
        };
    

    onQuantityChange = (e) => {
        this.setState({
            quantity: e.target.value,
            summary: e.target.value*this.state.quantity
        })
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value,
            price: this.setPrice(e.target.value),
        })
    };

    setPrice = (label) => {
        switch(label) {
            case 'Smartphone': return 100
            case 'Laptop': return 250
            case 'Tablet PC': return 200
            default : return 100
        }
    };



    onAddItem = () => {
        this.props.onItemAdded(this.state.label,
                                this.state.quantity,
                                this.state.price,
                                this.state.summary
                                );
    };
    
    onUndo = () => {
        this.props.onUndoAction();
    }

    onRedo = () => {
        this.props.onRedoAction();
    }





    render() {

        return (
            <div className="form form-row">
                <div className="select form-group col-md-4">
                <select className="form-control"
                onChange={this.onLabelChange} 
                value={this.state.label}>
                    <option>Smartphone</option>
                    <option>Laptop</option>
                    <option>Tablet PC</option>
                </select>
                </div>
                <div className="form-group col-md-2 ">
                <input type="number" min="1" max="100" 
                    className="form-control"
                    onChange={this.onQuantityChange} 
                    value={this.state.quantity}>
                </input>
                </div>
                
                <div className="form-group col-md-2">
                <button className="btn btn-outline-secondary"
                onClick={this.onAddItem}>
                Add product</button>
                </div>
                
                <div className="form-group col-md">
                    
                <button className="span btn btn-outline-primary float-right"
                onClick={this.onRedo}>
                <i className="fa fa-mail-forward" />
                </button>
                <button className="btn btn-outline-primary float-right"
                onClick={this.onUndo}>
                <i className="fa fa-mail-reply" />
                </button>

                </div>
            </div>
        )
    }
}