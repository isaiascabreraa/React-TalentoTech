
import { useState } from 'react';
import { validateProducts } from '../../../utils/validateProducts';
import { ProductFormUI } from '../ProductFormUI/ProductFormUI';
import { uploadImage } from '../../../services/uploadImage';
import { createProduct } from '../../../services/products';


export const ProductFormContainer = () => {

    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState({
        name: '',
        price: '',
        category: '',
        description: '',
    });
    const [file, setFile] = useState(null);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({  ...prevProduct, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrors({});
        setLoading(true);

        const newErrors = validateProducts({ ...product, imageFile: file });
        if(Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setLoading(false);
            return;
        }

        try {
            const imageUrl = file ? await uploadImage(file) : null;
            const productData = { ...product, price: Number(product.price), imageUrl,  };
            
            await createProduct(productData);
            setProduct({
                name: '',
                price: '',
                category: '',
                description: '',
            });
            setFile(null);
        
        } catch (error) {
            setErrors({ imageFile: error.message });
        } finally {
            setLoading(false);
        }
            return;
    }

    return (
       <ProductFormUI product={product} errors={errors} loading={loading}
        onChange={handleChange} onFileChange={setFile} onSubmit={handleSubmit} />
    )
}