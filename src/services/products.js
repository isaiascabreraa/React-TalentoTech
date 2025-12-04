
const BASE_URL = "https://6930bcb5778bbf9e0072580f.mockapi.io";

export const getProducts = async () => {
    const response = await fetch(`${BASE_URL}/products`);
    if(!response.ok) {
        throw new Error("Error al crear el producto");
    }

    const data = await response.json();
    if(!data) {
        throw new Error("No se pudieron obtener los productos");
    }
    
    return data;
}

export const getProductById = async (id) => {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if(!response.ok) {
        throw new Error("Error al crear el producto");
    }

    const data = await response.json();
    if(!data) {
        throw new Error("Producto no encontrado");
    }

    return data;
}

export const createProduct = async (product) => {
    const response = await fetch(`${BASE_URL}/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    });
    if(!response.ok) {
        throw new Error("Error al crear el producto");
    }
    const data = await response.json();
    if(!data) {
        throw new Error("No se pudo crear el producto");
    }

    return data;
}

export const updateProduct = async (id, product) => {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    });
    if(!response.ok) {
        throw new Error("Error al crear el producto");
    }

    const data = await response.json();
    if(!data) {
        throw new Error("Producto no encontrado");
    }

    return data;
}