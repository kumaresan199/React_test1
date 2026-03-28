import {useState} from 'react'
function App2 ()
{
    const [products , setProducts ] = useState([
        {id : 1, name : "Laptop" , stock : 20},
        {id : 2, name : "Mobile" , stock : 30},
        {id : 3, name : "Headphones", stock :0}
    ]);

    const [name , setName]= useState("");
    const [stock, setStock] = useState("");

    const AddProduct = () => {
        if(name.trim()=== "") retrun;

        const newProduct = {
            id: products.length+1,
            name: name,
            stock : Number(stock)
        };

        setProducts([...products,newProduct]);
        setName("");
        setStock("");
    };
    return(
        <>
        <h2>Product list</h2>

        <input type="text" placeholder = "product name" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="number" placeholder = "stock" value= {stock} onChange = {(e) => setStock(e.target.value)}/>
        <button onClick = {AddProduct}> Add product & Stock</button>

        <ol>
       {products.map((product) => (
    <li key={product.id}>
        {product.name} - stock:
        {product.stock === 0
            ? <span style={{ color: "red" }}> Out of stock</span>
            : <span style={{ color: "green" }}> {product.stock}</span>
        }
    </li>

        ))}
        </ol>

        </>
    );

}
export default App2