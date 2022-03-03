import React, { useState } from 'react';
import './CreateProducts.css';
import { db, cloud } from '../../firebase/firebase';

const CreateProducts = () => {
    const [image, setImage] = useState('')
    const [productName, setProductName] = useState('');
    const [productImage, setProductImage] = useState('');
    const [productRating, setProductRating] = useState('');
    const upload = ()=>{
        if(image == null)
          return;
          cloud.ref(`/images/${image.name}`).put(image)
            .on("state_changed" , alert("success") , alert);
      }
      
    const createTheProduct = (e) => {
        e.preventDefault();
        db.collection("smartphone").add({
            productName: productName,
            productImage: productImage,
            productRating: +productRating
        })
    }
    
    return (
        <div className="create__products">
           <form onSubmit={createTheProduct}>
                <input type="text" placeholder="Product Name" value={productName} onChange={e => setProductName(e.target.value)}/>
                <input type="text" placeholder="Product Image" value={productImage} onChange={e => setProductImage(e.target.value)}/>
                <input type="number" placeholder="Product Rating" value={productRating} onChange={e => setProductRating(e.target.value)}/>
                <button type="submit">Create Product</button>
           </form>

           <input type="file" accept="image/.jpg, .png, .jpeg" onChange={(e)=>{setImage(e.target.files[0])}}/>
           <button onClick={upload}>Upload</button>

          
        </div>
    )
}

export default CreateProducts
