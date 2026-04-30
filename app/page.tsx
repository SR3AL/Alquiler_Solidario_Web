"use client";

import { HeartHandshake, Leaf, Search, Shirt, Droplets, School, Instagram, Facebook, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProductCard } from '@/components/ui/product-card';
import { EcoButton } from '@/components/ui/eco-button';
import products from '@/data/products.json';

const categories = ['Hombre', 'Mujer', 'Bebé', 'Eventos'];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-800">
      <nav className="sticky top-0 z-30 border-b border-emerald-100/80 bg-stone-50/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-emerald-100 p-2 text-emerald-700">
              <Shirt className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">Alquiler Solidario</span>
          </div>

          <div className="order-3 w-full md:order-none md:w-auto md:flex-1 md:px-8">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="Buscar prendas..."
                className="w-full rounded-full border border-emerald-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none ring-emerald-300 transition focus:ring-2"
              />
            </label>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <ul className="hidden items-center gap-1 md:flex">
              {categories.map((category) => (
                <li key={category}>
                  <button className="rounded-full px-3 py-1.5 text-sm text-stone-600 transition hover:bg-emerald-100 hover:text-emerald-800">
                    {category}
                  </button>
                </li>
              ))}
            </ul>
            <EcoButton icon={HeartHandshake}>Mi Impacto</EcoButton>
          </div>
        </div>
      </nav>

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.5 }}>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-800">
            <Leaf className="h-3.5 w-3.5" />
            Moda circular con propósito
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-stone-900 sm:text-5xl">
            Viste el cambio, comparte el armario
          </h1>
          <p className="mt-5 max-w-xl text-base text-stone-600 sm:text-lg">
            Alquila prendas con estilo mientras reduces residuos textiles y financias oportunidades para familias en tu comunidad.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <EcoButton>Explorar colección</EcoButton>
            <EcoButton variant="secondary">Cómo funciona</EcoButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white p-3 shadow-sm"
        >
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80"
            alt="Ropa sostenible organizada por colores neutros"
            className="h-[360px] w-full rounded-2xl object-cover sm:h-[430px]"
          />
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.4 }}>
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900">Prendas destacadas</h2>
          <p className="mt-2 text-stone-600">Selecciona tu look y multiplica el impacto positivo de cada alquiler.</p>
        </motion.div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-emerald-900/95 py-14 text-emerald-50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.4 }}>
            <h2 className="text-2xl font-semibold tracking-tight">Impacto en tiempo real</h2>
            <p className="mt-2 max-w-2xl text-emerald-100/90">
              Cada alquiler extiende la vida útil de una prenda y genera recursos para programas educativos.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-emerald-700 bg-emerald-800/70 p-6"
            >
              <div className="mb-4 inline-flex rounded-xl bg-emerald-700/70 p-2">
                <Droplets className="h-5 w-5" />
              </div>
              <p className="text-3xl font-bold">94,250 L</p>
              <p className="mt-1 text-sm text-emerald-100/90">Litros de agua ahorrados</p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border border-emerald-700 bg-emerald-800/70 p-6"
            >
              <div className="mb-4 inline-flex rounded-xl bg-emerald-700/70 p-2">
                <School className="h-5 w-5" />
              </div>
              <p className="text-3xl font-bold">1,320</p>
              <p className="mt-1 text-sm text-emerald-100/90">Uniformes donados</p>
            </motion.article>
          </div>
        </div>
      </section>

      <footer className="border-t border-emerald-100 bg-stone-50">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-stone-600 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex gap-4">
            <a className="hover:text-emerald-700" href="#">Aviso legal</a>
            <a className="hover:text-emerald-700" href="#">Privacidad</a>
            <a className="hover:text-emerald-700" href="#">Términos</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="rounded-full p-2 hover:bg-emerald-100"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="rounded-full p-2 hover:bg-emerald-100"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn" className="rounded-full p-2 hover:bg-emerald-100"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
