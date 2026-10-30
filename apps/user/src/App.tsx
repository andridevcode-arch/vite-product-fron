const products = [
  { name: 'Studio Lamp', price: 'Rp 245.000', color: 'bg-amber-100' },
  { name: 'Soft Chair', price: 'Rp 680.000', color: 'bg-rose-100' },
  { name: 'Side Table', price: 'Rp 320.000', color: 'bg-sky-100' },
]

function App() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <a className="text-xl font-black tracking-tight" href="#home">
          NARA<span className="text-orange-500">.</span>
        </a>
        <nav className="hidden gap-7 text-sm font-medium text-stone-600 sm:flex">
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
        </nav>
        <button className="rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white">
          Bag (0)
        </button>
      </header>

      <section id="home" className="mx-auto grid w-full max-w-6xl gap-8 px-6 pb-14 pt-8 md:grid-cols-2 md:items-center md:pt-16">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-orange-600">New collection</p>
          <h1 className="max-w-lg text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl">
            Everyday objects, beautifully simple.
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-stone-600">
            Thoughtful pieces made for calm and comfortable spaces.
          </p>
          <a href="#shop" className="mt-8 inline-flex rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-orange-600">
            Explore collection
          </a>
        </div>
        <div className="relative min-h-80 overflow-hidden rounded-[2rem] bg-orange-200 sm:min-h-96">
          <div className="absolute -right-12 -top-16 h-72 w-72 rounded-full bg-orange-300" />
          <div className="absolute bottom-10 left-10 h-48 w-52 rounded-t-[7rem] rounded-b-2xl bg-stone-800 shadow-2xl" />
          <div className="absolute bottom-10 left-24 h-9 w-24 rounded-full bg-stone-700" />
          <p className="absolute bottom-7 right-7 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold backdrop-blur">Made to last</p>
        </div>
      </section>

      <section id="shop" className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold text-orange-600">Curated for you</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight">Popular picks</h2>
          </div>
          <a className="text-sm font-semibold underline underline-offset-4" href="#shop">See all</a>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="group rounded-2xl bg-white p-3 shadow-sm ring-1 ring-stone-200/70">
              <div className={`h-44 rounded-xl ${product.color} transition duration-300 group-hover:scale-[0.98]`} />
              <div className="flex items-center justify-between px-1 pb-1 pt-4">
                <div>
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="mt-1 text-sm text-stone-500">{product.price}</p>
                </div>
                <button aria-label={`Add ${product.name} to bag`} className="grid h-9 w-9 place-items-center rounded-full bg-stone-900 text-lg text-white">+</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
