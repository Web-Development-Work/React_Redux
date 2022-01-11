import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



export const ProductComponent =()=>{
    const products=useSelector((state)=>state.allProducts.products);
    const renderList=products.map((product)=>{
        const{id,title,image,price,category}=product;
        return(
            <div className="four column wide"  Style="width:20rem" key={id} >
                <Link to={`/product/${id}`}>
            <div className="ui link cards">
                <div className="card">
                    <div className="image">
                        <img src={image} alt={title}/>
                    </div>
                    <div className="content">
                        <div className="header">{title}</div>
                        <div className="meta price">$ {price}</div>
                        <div className="mata ">{category}</div>
                    </div>
                </div>
            </div>
            </Link>
        </div>
  
        )
    });

    return(
        <>
        {renderList}
        </>
    )

};