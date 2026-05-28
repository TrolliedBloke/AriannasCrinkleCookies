"use client";
import { useState } from "react";
import { products } from "@/lib/products";
import FloatingHeartsBackground from "@/lib/Floatingheartsbackground";

export default function Order() {
  const sixPc = products.filter((p) => p.category === "6pc");
  const twelvePc = products.filter((p) => p.category === "12pc");
  const mix = products.filter((p) => p.category === "mix");

  const [cart, setCart] = useState<
    { id: string; name: string; price: number }[]
  >([]);

  function addToCart(product: { id: string; name: string; price: number }) {
    setCart([...cart, product]);
  }

  function removeFromCart(index: number) {
    setCart(cart.filter((_, i) => i !== index));
  }

  function ProductCard(product: { id: string; name: string; price: number }) {
    return (
      <div className="flex items-center justify-between border rounded-lg px-4 py-3">
        <span className="font-medium">{product.name}</span>
        <div className="flex items-center gap-4">
          <span className="text-zinc-500">${product.price.toFixed(2)}</span>
          <button
            onClick={() => addToCart(product)}
            className="text-sm bg-pink-400 hover:bg-pink-500 text-white px-3 py-1 rounded-lg transition-colors"
          >
            Add
          </button>
        </div>
      </div>
    );
  }

  async function handleCheckout() {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart }),
    });

    const data = await response.json();
    window.location.href = data.url;
  }

  return (
    <FloatingHeartsBackground>
      <main className="max-w-2xl mx-auto py-16 px-6">
        <h1 className="text-3xl font-bold mb-2 text-white">Place an Order</h1>
        <p className="text-zinc-500 mb-8">
          Pick your cookies and we&#39;ll handle the rest 🍪
        </p>
        <p className="text-zinc-500 mb-8">
          * All Products Made Peanut Free in a Peanut Free Environment!
        </p>
        <section className="mb-10 shadow-2xl px-5 py-5 rounded-2xl border-2 border-white">
          <h2 className="text-xl font-semibold mb-4">6 Piece Boxes</h2>
          <div className="flex flex-col gap-3">
            {sixPc.map((product) => (
              <div key={product.id}>{ProductCard(product)}</div>
            ))}
          </div>
        </section>

        <section className="mb-10 shadow-2xl px-5 py-5 rounded-2xl border-2 border-white">
          <h2 className="text-xl font-semibold mb-4">12 Piece Boxes</h2>
          <div className="flex flex-col gap-3">
            {twelvePc.map((product) => (
              <div key={product.id}>{ProductCard(product)}</div>
            ))}
          </div>
        </section>

        <section className="mb-10 shadow-2xl px-5 py-5 rounded-2xl border-2 border-white">
          <h2 className="text-xl font-semibold mb-4">Mix and Match Boxes</h2>
          <div className="flex flex-col gap-3">
            {mix.map((product) => (
              <div key={product.id}>{ProductCard(product)}</div>
            ))}
          </div>
        </section>

        {cart.length > 0 && (
          <div className="mt-8 shadow-2xl rounded-lg p-4 flex flex-col gap-3 border-2 border-white">
            <h2 className="font-semibold text-lg">Your Cart</h2>
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-sm"
              >
                <span>{item.name}</span>
                <div className="flex items-center gap-4">
                  <span>${item.price.toFixed(2)}</span>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-red-400 hover:text-red-500 text-xs"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="border-t pt-3 flex items-center justify-between font-semibold">
              <span>Total</span>
              <span>
                ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full rounded-xl bg-pink-600 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-pink-500 hover:shadow-xl hover:shadow-pink-500/50 active:translate-y-0"
            >
              Checkout
            </button>
          </div>
        )}
      </main>
    </FloatingHeartsBackground>
  );
}
