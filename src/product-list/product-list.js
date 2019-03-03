import React from 'react';

import ProductListItem from '../product-list-item';
import './product-list.css';

const ProductList = ({prods, cartDiscount, onDeleted, 
    onProductChange}) => {
        
        const elements = prods.map((item) => {
            let {id, ...itemProps} = item;

        return (
                <tr key={id}> 
                    <ProductListItem {...itemProps}
                    onDeleted={() => onDeleted(id)}
                    onProductChange = {(newValue, summary, propname ) => 
                        onProductChange(id, propname, newValue, summary)}
                    cartDiscount = {cartDiscount}/>
                </tr>             
                    
            );

       });
  
    
       return (<>{elements}</>);    
   }

   export default ProductList;
