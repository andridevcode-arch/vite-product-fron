const stats = [
  { label: 'Revenue', value: 'Rp 24,8 jt', change: '+12,5%' },
  { label: 'Orders', value: '1.284', change: '+8,2%' },
  { label: 'Customers', value: '842', change: '+5,1%' },
]

const orders = [
  { id: '#1048', customer: 'Nadia Putri', total: 'Rp 680.000', status: 'Paid' },
  { id: '#1047', customer: 'Raka Pratama', total: 'Rp 245.000', status: 'Paid' },
  { id: '#1046', customer: 'Dinda Lestari', total: 'Rp 320.000', status: 'Pending' },
]

function App() {
  return (
    <main className="min-h-screen bg-slate-100 p-4 text-slate-900 sm:p-6">
      <div className="mx-auto grid min-h-[calc(100vh-2rem)] max-w-7xl overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 lg:grid-cols-[220px_1fr]">
        <aside className="flex items-center justify-between border-b border-slate-100 px-6 py-5 lg:flex-col lg:items-stretch lg:border-b-0 lg:border-r lg:py-7">
          <a className="text-xl font-black tracking-tight" href="#dashboard">LUMA<span className="text-violet-600">.</span></a>
          <nav className="hidden gap-2 lg:flex lg:flex-col lg:pt-12">
            <a className="rounded-xl bg-violet-50 px-4 py-3 text-sm font-semibold text-violet-700" href="#dashboard">Dashboard</a>
            <a className="rounded-xl px-4 py-3 text-sm font-medium text-slate-500" href="#orders">Orders</a>
            <a className="rounded-xl px-4 py-3 text-sm font-medium text-slate-500" href="#customers">Customers</a>
          </nav>
          <div className="hidden rounded-xl bg-slate-50 p-3 text-sm lg:block">
            <p className="font-semibold">Admin</p>
            <p className="mt-1 text-slate-500">admin@luma.id</p>
          </div>
        </aside>

        <section className="p-6 sm:p-8">
          <header className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-slate-500">Monday, 30 October</p>
              <h1 id="dashboard" className="mt-1 text-3xl font-bold tracking-tight">Good morning, Admin</h1>
            </div>
            <button className="rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-sm">Create order</button>
          </header>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <article key={stat.label} className="rounded-2xl border border-slate-100 p-5">
                <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                <div className="mt-3 flex items-end justify-between gap-2">
                  <p className="text-2xl font-bold tracking-tight">{stat.value}</p>
                  <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-bold text-emerald-600">{stat.change}</span>
                </div>
              </article>
            ))}
          </div>

          <section id="orders" className="mt-8 rounded-2xl border border-slate-100">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <div>
                <h2 className="font-bold">Recent orders</h2>
                <p className="mt-1 text-sm text-slate-500">Latest activity from your store</p>
              </div>
              <button className="text-sm font-semibold text-violet-600">View all</button>
            </div>
            <div className="divide-y divide-slate-100">
              {orders.map((order) => (
                <div key={order.id} className="flex items-center justify-between gap-4 px-5 py-4">
                  <div className="min-w-0">
                    <p className="font-semibold">{order.customer}</p>
                    <p className="mt-1 text-sm text-slate-500">{order.id}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{order.total}</p>
                    <span className={`mt-1 inline-block rounded-full px-2 py-1 text-xs font-bold ${order.status === 'Paid' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>{order.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>
    </main>
  )
}

export default App
