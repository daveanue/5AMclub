import { cartItemsType } from "./cartItemsType"
export interface CartComponentProps {
  cartItem: cartItemsType
  removeItem: (cartItemId: number) => void
  editItemQuantity: (productId: number, quantityNumber: number) => void
}
