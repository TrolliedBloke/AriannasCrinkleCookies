"use client";
import { useState } from "react";

{
  /* import from lib folder which containts products.ts file with all price codes */
}
import { products } from "@/lib/products";

{
  /* filter by category we set in products.ts file (6, 12, mix and match) */
}
export default function Order() {
  const sixPc = products.filter((p) => p.category === "6pc");
  const twelvePc = products.filter((p) => p.category === "12pc");
  const mix = products.filter((p) => p.category === "mix");

  const [selected, setSelected] = useState<string | null>(null);
  {
    /* order section layout */
  }
  return (
    <main className="max-w-2xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-2">Place an Order</h1>
      <p className="text-zinc-500 mb-8">
        Pick your cookies and we&#39;ll handle the rest 🍪
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">6 Piece Boxes</h2>
        <div className="flex flex-col gap-3">
          {sixPc.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelected(product.id)}
              className={`flex items-center justify-between border rounded-lg px-4 py-3 cursor-pointer transition-colors ${
                selected === product.id
                  ? "border-pink-400 bg-pink-50"
                  : "hover:border-pink-200"
              }`}
            >
              <span className="font-medium">{product.name}</span>
              <span className="text-zinc-500">${product.price.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">12 Piece Boxes</h2>
        <div className="flex flex-col gap-3">
          {twelvePc.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelected(product.id)}
              className={`flex items-center justify-between border rounded-lg px-4 py-3 cursor-pointer transition-colors ${
                selected === product.id
                  ? "border-pink-400 bg-pink-50"
                  : "hover:border-pink-200"
              }`}
            >
              <span className="font-medium">{product.name}</span>
              <span className="text-zinc-500">${product.price.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Mix and Match Boxes</h2>
        <div className="flex flex-col gap-3">
          {mix.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelected(product.id)}
              className={`flex items-center justify-between border rounded-lg px-4 py-3 cursor-pointer transition-colors ${
                selected === product.id
                  ? "border-pink-400 bg-pink-50"
                  : "hover:border-pink-200"
              }`}
            >
              <span className="font-medium">{product.name}</span>
              <span className="text-zinc-500">${product.price.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </section>
      <button
        disabled={!selected}
        className="mt-6 w-full bg-pink-400 hover:bg-pink-500 disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition-colors"
      >
        Checkout
      </button>
    </main>
  );
}
