type Product = {
  id: number;
  name: string;
  image: string;
  pricePerDay: number;
  socialImpact: string;
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <img src={product.image} alt={product.name} className="h-52 w-full object-cover" />
      <div className="space-y-3 p-4">
        <h3 className="font-semibold text-stone-800">{product.name}</h3>
        <p className="text-sm text-stone-600">${product.pricePerDay}/día</p>
        <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">
          Impacto Social: {product.socialImpact}
        </span>
      </div>
    </article>
  );
}
