import React, { Component } from 'react';

import ProductAddForm from '../add-product-form';
import ProductList from '../product-list';

import './App.css';

class App extends Component {

  Id = 1;

  state = {
    productData : [
      this.createItem('Smartphone', "1", 100),
      this.createItem('Tablet PC', "1", 200),
      this.createItem('Laptop', "1", 250)
    ],
    totalDiscount: 0,
    cartDiscount: false,
    historyIndex: 0   
  };

  stateHistory = [this.state];
  
  addHistoryItem(i) {
    if (this.stateHistory[i] === undefined)
      this.stateHistory.push(this.state);
    else {
      this.stateHistory[i] = this.state;
    }
  }

  createItem(name, quantity, price) {
    return {
      name,
      quantity,
      price,
      summary: price*quantity,
      discount: "0",
      id: this.Id++ 
    };
  };

  addItem = (name, quantity, price) => {
    const newItem = this.createItem(name, quantity, price);

    let i = this.state.historyIndex;
    i++;
    
    this.setState(({ productData })=> {

      
      const newArr = [...productData,
                        newItem];
      return { 
        productData: newArr,
        historyIndex: i        
      };
    }, () => {
      this.addHistoryItem(i); 
    });
  }

  onUndoAction = () => {

      if (this.state.historyIndex !== 0) {

        let i = this.state.historyIndex;
        i--;
        
       
       this.setState(() => {
          
          const newArray = this.stateHistory[i].productData;

          return {           
          
          productData: newArray,
          totalDiscount : this.stateHistory[i].totalDiscount,
          cartDiscount: this.stateHistory[i].cartDiscount,
          historyIndex : i
         };
        });
     }
    }

    onRedoAction = () => {

      if (this.state.historyIndex < this.stateHistory.length-1) {

        let i = this.state.historyIndex;
        i++;        
       
       this.setState(() => {
          
          const newArray = this.stateHistory[i].productData;

          return {           
          
          productData: newArray,
          totalDiscount : this.stateHistory[i].totalDiscount,
          cartDiscount: this.stateHistory[i].cartDiscount,
          historyIndex : i
         };
        });
        
      }
    }

    toggleProperty(arr, id, propName, newValue, summary){
      
      const idx = arr.findIndex((el) => el.id === id);
        
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: newValue, summary: summary};
        return [
          ...arr.slice(0, idx),
          newItem, 
          ...arr.slice(idx + 1)];        
    };

    onProductChange = (id, propname, newValue, summary) => {
      let i = this.state.historyIndex;
      i++;
      this.setState({ 
          productData: this.toggleProperty(this.state.productData, id, 
            propname, newValue, summary),
          historyIndex: i  
                  
        }, () => 
        {
          this.addHistoryItem(i); 
        });                
      };
    
    

    TotalDiscountChange = (e) => {
      this.setState({
        totalDiscount: e.target.value,
        cartDiscount: this.isCartDiscount(e.target.value),
      }, () => {
          if (this.state.cartDiscount) {
            this.state.productData.forEach((item) => {
              this.onProductChange(item.id,'discount','0', item.price*item.quantity)
            })
          }
      });
    }  
     

    deleteItem = (id) => {
      this.setState(({productData}) => {
        const idx = productData.findIndex((el) => el.id === id);

        let i = this.state.historyIndex;
        i++;
  
        const newArray = [
          ...productData.slice(0, idx), 
          ...productData.slice(idx + 1)];
          

        return {
          productData: newArray,
          historyIndex: i
       };
      }, () => {
        this.addHistoryItem();
      });
    };

    getTotal (productData, totalDiscount) {
      let sum = productData.reduce((result,value) => 
        result + value.summary, 0); 
      
      if (totalDiscount !== 0) {
        sum = sum - sum*totalDiscount;
      } 
       
     return sum;
    }

    isCartDiscount(totalDiscount) {
      if (totalDiscount === "0") 
      {
        return false 
      }
      else
      {
        return true
      }
    };

        

  render() {

    const {productData, cartDiscount, totalDiscount, historyIndex} = this.state;

    const total = this.getTotal(productData, totalDiscount);

    console.log('index ', historyIndex);
    console.log('history:', this.stateHistory);

    console.log(productData)
    
    return (
      <div className="shopcart-app">
        <h1>Receipt</h1>
        <div className="noprint">
          <ProductAddForm 
              onItemAdded={this.addItem}
              onUndoAction={this.onUndoAction}
              onRedoAction={this.onRedoAction}/>  
        </div>
      

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th width="25%">Product Name</th>
            <th width="15%">Quantity</th>
            <th width="10%">Price</th>
            <th width="15%">Discount</th>
            <th width="15%">Summary</th>
            <th width="15%" className="noprint"></th>
          </tr>
        </thead>
        <tbody>
          <ProductList prods={productData}
          onProductChange={this.onProductChange}
          onDeleted={this.deleteItem}
          cartDiscount={cartDiscount}/>
          <tr>
            <td/>
            <td/>
            <td className="discount"></td>
            <td align="center" >
              <b>Cart Discount:</b>
            </td>
            <td>
                <select className="form-control form-control-select"
                onChange={this.TotalDiscountChange} value={totalDiscount}>
                        <option value="0">0%</option>
                        <option value="0.1">10%</option>
                        <option value="0.25">25%</option>
                    </select>
                </td>
                <td className="noprint"></td>
                <td className="noprint"></td>
          </tr>
              <tr>
                <td/>
                <td/>
                <td/>
                <td align="right">
                  <b>Total:</b>
                </td>
                <td>
                  {total}
                </td>
                <td className="noprint"></td>
            </tr>
        </tbody>
        </table>

        <div className="noprint form-row">    
        <div className="col-md-8"/>
          <div className="col-md-4">
            <button className="btn btn-outline-secondary btn-md btn-block" 
              onClick={() => window.print()}>
              <i className="fa fa-print "> Print</i>
            </button>
          </div>
        </div>
        

      </div>
    );
  }
}



export default App;

