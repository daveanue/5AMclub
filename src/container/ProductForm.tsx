import { useState, useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

export default function ProductForm() {
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    productPrice: 0,
    avaliableQuantity: 0
  });

  // const [products, setProducts] = useContext(ProductContext)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // if productName && productPrice && avaliableQuantity is valid we can submit the form
    // temporary check

    if (formData.avaliableQuantity && formData.productPrice && formData.productName.length > 0) {
      // service method to create product and returns an unique ID for that product
    }

  }


  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <label>
          Product Name:
        <input
          type="text"
          name="productName"
          value={formData.productName}
          onChange={handleInputChange}
        />
        </label>
        <label>
          Description:
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
        </label>
        <label>
          Price:
        <input
          type="number"
          name="productPrice"
          value={formData.productPrice}
          onChange={handleInputChange}
        />
        </label>
        <label>
          avaliableQuantity:
        <input
          type="number"
          name="avaliableQuantity"
          value={formData.avaliableQuantity}
          onChange={handleInputChange}
        />
        </label>
      </form>
    </div>
  )
}