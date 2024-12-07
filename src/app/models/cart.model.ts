export interface CartItem {
    productId: number;
    quantity: number;
  }
  
  export interface Cart {
    userId: number;
    cartItems: CartItem[];
  }
  