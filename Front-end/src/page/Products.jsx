import React, { useEffect, useState } from "react"


export function Products() {
    const [ content, setContent ] = useState(<ProductList showForm={showForm} />);

    function showList() {
        setContent(<ProductList showForm={showForm} />);
    }

    function showForm(product) {
        setContent(<ProductForm product={product} showList={showList} />);
    }

    return (
        <div className= "container my-5">
            {content}
        </div>
    );
}


function ProductList (props) {
    const [products, setProducts] = useState([])

    function fetchProducts() {

            fetch("https://api-e-collectic.vercel.app/products") //CAMBIA PARA NUESTRO BBDD
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Unexpected Server Response")
                }
                return response.json()
            
           })
          .then((data) => {
            //console.log(data);
            setProducts(data);
           })
          .catch((error) => console.log("Error: ",error));
          
    }

    //fetchProducts();
    useEffect(() => fetchProducts(), []);

    function deleteProduct(id) {
        fetch("https://api-e-collectic.vercel.app/products/" + id, { //CAMBIA PARA NUESTRO BBDD
            method: "DELETE",
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Unexpected Server Response")
            }
            return response.json()
        })
        .then((data) => {
            fetchProducts();
        })
        .catch((error) => console.log("Error: ",error));
    }

    return ( 
        <>
        <h2 className="text-center mb-3">List of Products</h2>
        <button onClick={() => props.showForm({}) }type="button" className="btn btn-primary m-1 btn-lg ">Create</button>
        <button onClick={() => fetchProducts() }type="button" className="btn btn-outline-secondary m-1 btn-lg  ">Refresh</button>
        <table className="table table-hover">
            <thead>
                <tr>
                    
                    <th>title</th>
                    <th>price</th>
                    <th>img</th>
                    <th>brand</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { 
                    products.map((product, index) => {
                        return ( 
                            <tr key={index}>

                                
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td><img className="img-product" src={product.img}></img></td>
                                <td>{product.brand}</td>
                                <td>{product.createAt}</td>
                                <td style={{width: "10px", whiteSpace: "nowrap"}}>
                                    <button onClick={() => props.showForm(product)} type="button" className="btn btn-outline-dark m-1 ">Edit</button>
                                    <button onClick={() => deleteProduct(product.id)} type="button" className="btn btn-outline-danger m-1">Delete</button>
                                </td>

                            </tr>  
                        );
                    })
                }
            </tbody>
        </table>
        </>
    );
}

function ProductForm(props) {
    const [errorMessage, setErrorMessage] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
     
        //read form data
        const formData = new FormData(event.target);

        // convert form Daata to object
        const product = Object.fromEntries(formData.entries());

        // form validation
        if (!product.title || !product.brand || !product.category || !product.price) {
            console.log("Please fill all the fields");
            setErrorMessage(
                <div class="alert alert-warning" role="alert">
                    Please fill all the fields
                </div>
            )
            return;
        }
    
        if (props.product.id) {
            // update the product
            fetch("https://api-e-collectic.vercel.app/products/" + props.product.id, { //CAMBIA PARA NUESTRO BBDD
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product)

            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not OK");
                    }
                    return response.json()
            
                })
                .then((data) => props.showList())
                .catch((error) => {
                    console.log("Error: ", error);
                });
        }
        else {
        
            // create a new product
            product.createdAt = new Date().toISOString().slice(0, 10);
            fetch("https://api-e-collectic.vercel.app/products", { //CAMBIA PARA NUESTRO BBDD
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product)

            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not OK");
                    }
                    return response.json()
            
                })
                .then((data) => props.showList())
                .catch((error) => {
                    console.log("Error: ", error);
                });
        }
    }


      
        return (
            <>
                <h2 className="text-center mb-3">{props.product.id ? "Edit Product" : "Create New Product"}</h2>
        

                <div className="row">
                    <div className="col-lg-6 mx-auto">


                        {errorMessage}

                        <form onSubmit={(event) => handleSubmit(event)}>
                            {props.product.id && <div className="row mb-3">
                                <label className="col-sm-4 col-form-label">ID</label>
                                <div className="col-sm-8">
                                    <input readOnly className="form-control-plaintext"
                                        name="id"
                                        defaultValue={props.product.id} />
                                </div>
                            </div>}

                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label">title</label>
                                <div className="col-sm-8">
                                    <input className="form-control"
                                        name="title"
                                        defaultValue={props.product.title} />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label">Brand</label>
                                <div className="col-sm-8">
                                    <input className="form-control"
                                        name="brand"
                                        defaultValue={props.product.brand} />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label">Category</label>
                                <div className="col-sm-8">
                                    <select className="form-select"
                                        name="category"
                                        defaultValue={props.product.category} >

                                        <option value="Others">Others</option>
                                        <option value="Phones">Phones</option>
                                        <option value="Computers">Computers</option>
                                        <option value="Accesories"> Accesories</option>
                                        <option value="GPS">GPS</option>
                                        <option value="Cameras">Cameras</option>
                                    </select>

                                </div>
                            </div>

                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label">Price</label>
                                <div className="col-sm-8">
                                    <input className="form-control"
                                        name="price"
                                        defaultValue={props.product.price} />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label">Description</label>
                                <div className="col-sm-8">
                                    <textarea className="form-control"
                                        name="description"
                                        defaultValue={props.product.description} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="offset-sm-4 col-sm-4 d-grid">
                                    <button type="submit" className="btn btn-outline-warning mb-3">Save</button>
                                </div>
                                <div className="col-sm-4 d-grid">
                                    <button onClick={() => props.showList()} type="button" className="btn btn-outline-warning mb-3">Cancel</button>
                                </div>
                        
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
