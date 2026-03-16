export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen">
        <img 
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1600&h=900&fit=crop" 
          alt="Sanguche" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-black text-yellow-400 uppercase tracking-tight mb-4 drop-shadow-[0_0_30px_rgba(250,204,21,0.5)]" style={{textShadow: '4px 4px 0px #000, -2px -2px 0px #DC2626'}}>
            El Carrito
          </h1>
          <h2 className="text-4xl md:text-6xl font-black text-red-600 uppercase mb-6" style={{textShadow: '3px 3px 0px #000'}}>
            Sanguchero
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-white mb-8 max-w-2xl">
            Los mejores sanguches del barrio 🔥
          </p>
          <div className="bg-yellow-400 text-black px-8 py-4 text-2xl font-black uppercase transform rotate-[-2deg] border-4 border-black shadow-[8px_8px_0px_0px_rgba(220,38,38,1)]">
            ¡Pedí el tuyo ya!
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 px-4 bg-red-600">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-yellow-400 uppercase text-center mb-16" style={{textShadow: '4px 4px 0px #000'}}>
            El Menú
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Sanguche 1 */}
            <div className="bg-yellow-400 border-8 border-black p-6 transform hover:rotate-1 transition-transform shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-3xl font-black uppercase mb-2">El Clásico</h3>
              <p className="text-lg mb-4">Jamón, queso, tomate, lechuga y mayonesa casera</p>
              <div className="text-4xl font-black text-red-600">$2.500</div>
            </div>

            {/* Sanguche 2 */}
            <div className="bg-yellow-400 border-8 border-black p-6 transform hover:rotate-1 transition-transform shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-3xl font-black uppercase mb-2">El Picante</h3>
              <p className="text-lg mb-4">Chorizo, cebolla caramelizada, chimichurri picante</p>
              <div className="text-4xl font-black text-red-600">$3.000</div>
            </div>

            {/* Sanguche 3 */}
            <div className="bg-yellow-400 border-8 border-black p-6 transform hover:rotate-1 transition-transform shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-3xl font-black uppercase mb-2">El Completo</h3>
              <p className="text-lg mb-4">Milanesa, huevo frito, queso, lechuga, tomate</p>
              <div className="text-4xl font-black text-red-600">$3.500</div>
            </div>

            {/* Sanguche 4 */}
            <div className="bg-yellow-400 border-8 border-black p-6 transform hover:rotate-1 transition-transform shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-3xl font-black uppercase mb-2">El Veggie</h3>
              <p className="text-lg mb-4">Berenjenas grilladas, palta, rúcula, queso</p>
              <div className="text-4xl font-black text-red-600">$2.800</div>
            </div>

            {/* Sanguche 5 */}
            <div className="bg-yellow-400 border-8 border-black p-6 transform hover:rotate-1 transition-transform shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-3xl font-black uppercase mb-2">El Supremo</h3>
              <p className="text-lg mb-4">Bondiola, provolone, cebolla morada, barbacoa</p>
              <div className="text-4xl font-black text-red-600">$4.000</div>
            </div>

            {/* Sanguche 6 */}
            <div className="bg-yellow-400 border-8 border-black p-6 transform hover:rotate-1 transition-transform shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-3xl font-black uppercase mb-2">El Nocturno</h3>
              <p className="text-lg mb-4">Salchicha parrillera, panceta, cheddar, criolla</p>
              <div className="text-4xl font-black text-red-600">$3.200</div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-0">
        <img 
          src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=1600&h=600&fit=crop" 
          alt="Food truck" 
          className="w-full h-80 object-cover"
        />
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black text-yellow-400 uppercase mb-12" style={{textShadow: '4px 4px 0px #DC2626'}}>
            Encontranos
          </h2>
          
          <div className="bg-yellow-400 border-8 border-red-600 p-8 md:p-12 mb-12 transform rotate-[-1deg] shadow-[16px_16px_0px_0px_rgba(220,38,38,1)]">
            <p className="text-2xl md:text-3xl font-black mb-4 uppercase">📍 Esquina de La Plata y San Martín</p>
            <p className="text-xl md:text-2xl font-bold mb-6">De Lunes a Sábados de 19:00 a 02:00</p>
            <p className="text-3xl md:text-4xl font-black text-red-600">📱 +54 9 11 2345-6789</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <div className="bg-red-600 text-yellow-400 border-4 border-black px-8 py-4 text-xl md:text-2xl font-black uppercase transform rotate-[1deg] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform cursor-pointer">
              WhatsApp
            </div>
            <div className="bg-red-600 text-yellow-400 border-4 border-black px-8 py-4 text-xl md:text-2xl font-black uppercase transform rotate-[-1deg] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform cursor-pointer">
              Instagram
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-yellow-400 py-6 text-center border-t-8 border-black">
        <p className="text-xl font-black uppercase">El Carrito Sanguchero © 2024 - Puro sabor de barrio 🔥</p>
      </footer>
    </div>
  );
}
