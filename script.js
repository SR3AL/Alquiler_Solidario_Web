const products = [
  {
    id: 1,
    category: 'Hombre',
    name: 'Blazer Tierra Unisex',
    image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=800&q=80',
    pricePerDay: 18,
    socialImpact: 'Financia 1 kit escolar'
  },
  {
    id: 2,
    category: 'Mujer',
    name: 'Vestido Verde Oliva',
    image: 'https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=800&q=80',
    pricePerDay: 16,
    socialImpact: 'Aporta 2 cuadernos'
  },
  {
    id: 3,
    category: 'Bebé',
    name: 'Conjunto Bebé Algodón Orgánico',
    image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80',
    pricePerDay: 9,
    socialImpact: 'Financia 1 merienda'
  },
  {
    id: 4,
    category: 'Eventos',
    name: 'Traje Ceremonia Arena',
    image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80',
    pricePerDay: 24,
    socialImpact: 'Dona 1 uniforme'
  }
];

const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const chips = document.querySelectorAll('.chip');

let selectedCategory = 'Todas';

function renderProducts() {
  const q = searchInput.value.trim().toLowerCase();
  const filtered = products.filter((p) => {
    const matchCategory = selectedCategory === 'Todas' || p.category === selectedCategory;
    const matchSearch = p.name.toLowerCase().includes(q);
    return matchCategory && matchSearch;
  });

  productsGrid.innerHTML = filtered
    .map((product) => `
      <article class="product-card">
        <img src="${product.image}" alt="${product.name}" />
        <div class="product-body">
          <h3 class="product-title">${product.name}</h3>
          <p class="product-price">$${product.pricePerDay}/día</p>
          <span class="badge">Impacto Social: ${product.socialImpact}</span>
        </div>
      </article>
    `)
    .join('');
}

searchInput.addEventListener('input', renderProducts);
chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    selectedCategory = chip.dataset.category;
    chips.forEach((c) => c.classList.remove('active'));
    chip.classList.add('active');
    renderProducts();
  });
});

renderProducts();
