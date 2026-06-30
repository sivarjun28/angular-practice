import { computed, effect, Injectable, signal } from "@angular/core";
import { CartItem } from "../models/cart-item.model";
import { Product } from "../models/product.model";

@Injectable({ providedIn: 'root' })
export class CartService {
    private cart = signal<CartItem[]>(this.loadFromStorage());

    cartItems = this.cart.asReadonly();

    total = computed(() =>
        this.cart().reduce((sum, item) => sum + item.price * item.quantity, 0)
    );

    itemsCount = computed(() =>
        this.cart().reduce((sum, item) => sum + item.quantity, 0));

    constructor() {
        effect(() => {
            localStorage.setItem('cart', JSON.stringify(this.cart()));
        })
    }

    addToCart(product: Product) {
        const items = this.cart();

        const existing = items.find(i => i.id === product.id);

        if (existing) {
            this.updateQuantity(product.id, existing.quantity + 1);
        }
        else {
            this.cart.set([...items, { ...product, quantity: 1 }])
        }
    }

    removeFromCart(id: number) {
        this.cart.set(this.cart().filter(item => item.id !== id));
    }

    updateQuantity(id: number, quantity: number) {
        if (quantity <= 0) {
            this.removeFromCart(id);
            return;
        }
        this.cart.set(
            this.cart().map(item =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    }

    clearCart() {
        this.cart.set([]);
    }

    applyCoupon(code: string): number {
        const total = this.total();
        if (code === 'SAVE10') return total * 0.9;
        if (code === 'SAVE20') return total * 0.8;

        return total;
    }

    private loadFromStorage() : CartItem[]{
        const data = localStorage.getItem('cart');

        return data? JSON.parse(data) : []
    }
}