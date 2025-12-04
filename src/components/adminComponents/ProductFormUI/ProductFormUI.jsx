
export const ProductFormUI = ({ product, errors, loading, onChange, onFileChange, onSubmit }) => {
    return (
        <section>
            <form onSubmit={onSubmit} action="">
                <h2>Agregar producto</h2>
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" value={product.name} onChange={onChange} required/>
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>

                <div>
                    <label htmlFor="price">Precio:</label>
                    <input type="number" id="price" name="price" value={product.price} min="0" onChange={onChange} required/>
                    {errors.price && <span className="error">{errors.price}</span>}
                </div>

                <div>
                    <label htmlFor="category">Categoría:</label>
                    <input type="text" id="category" name="category" value={product.category} onChange={onChange} required/>
                    {errors.category && <span className="error">{errors.category}</span>}
                </div>

                <div>
                    <label htmlFor="description">Descripción:</label>
                    <input type="text" id="description" name="description" value={product.category} onChange={onChange} required/>
                    {errors.description && <span className="error">{errors.description}</span>}
                </div>

                <div>
                    <label htmlFor="imageFile">Imagen:</label>
                    <input type="file" id="imageFile" name="imageFile" accept="image/*" onChange={(e) => onFileChange(e.target.files?.[0] ?? null)} />
                    {errors.imageFile && <span className="error">{errors.imageFile}</span>}
                </div>

                <button type="submit" onClick={onSubmit} disabled={loading}>
                    {loading ? 'Guardando...' : 'Guardar Producto'}
                </button>

            </form>
        </section>
    );
};