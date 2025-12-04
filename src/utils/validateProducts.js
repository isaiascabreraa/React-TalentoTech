
export const validateProducts = (product, fileRequired=true) => {

    const errors = {};
    if(!product.name || product.name.trim() === '') {
        errors.name = "El nombre es obligatorio";
    }

    if(!product.price || isNaN(product.price) || Number(product.price) < 0) {
        errors.price = "El precio debe ser un número positivo";
    }

    if(fileRequired && !product.imageFile) {
        errors.imageFile = "La imagen es obligatoria";
    }

    if(!product.category || product.category.trim() === '') {
        errors.category = "La categoría es obligatoria";
    }

    if(!product.description || product.description.trim() === '') {
        errors.description = "La descripción es obligatoria";
    }

    return errors;
}