import { useState } from 'react';
import { CartComponentProps } from '../../interfaces/CartComponent'

export default function CartComponent({ cartItem, removeItem, editItemQuantity } : CartComponentProps) {
  const [quantityInput, setQuantityInput] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = event.target.value;
    setQuantityInput(newValue); // Keep the input as a string
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (quantityInput !== '') {
      const parsedValue = parseInt(quantityInput, 10);
      if (!isNaN(parsedValue)) {
        await editItemQuantity(cartItem.product.id, parsedValue);
        console.log('submitted value', parsedValue);
        setQuantityInput(''); // Clear the input after successful submission
      }
    }
  }

  return (
    <div>
      <h3> {cartItem.product.name} </h3>
      <h4> {cartItem.product.price} </h4>
      <p> {cartItem.quantity} </p>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={quantityInput}
          onChange={handleInputChange}
        />
        <button type="submit">+</button>
      </form>
      <button onClick={() => removeItem(cartItem.product.id)}>Remove</button>
    </div>
  )
}