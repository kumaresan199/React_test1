
import { useState } from 'react'
function App1()
{
    const products = [
        {id :1 ,name : "Laptop", stock : 30},
        {id :2 ,name : "Mobile", stock : 20},
        {id :3 ,name : "Headphones", stock : 0}
    ];

    return(
        <>
<h2>product list</h2>
<ul>
    {products.map((product) => (
        <li key = {product.id}>{product.name} - stock : {product.stock === 0 ?  <span style ={{color : "red"}}> "out of stock"</span>:  <span style = {{color : "green"}}> {product.stock}</span>}</li>
    ))}
    </ul>
    </>
    )
    
}

export default App1