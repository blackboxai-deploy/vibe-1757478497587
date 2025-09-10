"use client";

interface Ebook {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  coverImage: string;
  hotmartLink: string;
  featured: boolean;
  tags: string[];
  pages: number;
  format: string;
}

interface EbookCardProps {
  ebook: Ebook;
}

export default function EbookCard({ ebook }: EbookCardProps) {
  const handleDirectPurchase = () => {
    alert('🎉 Funcionalidad de compra directa - Próximamente disponible');
  };

  const handlePayPalPurchase = () => {
    // Aquí integrarías con PayPal
    window.open(`https://www.paypal.com/paypalme/mividaketoalmacreativa/${ebook.price}?locale.x=es_ES&country.x=ES`, '_blank');
  };

  const handleHotmartPurchase = () => {
    window.open(ebook.hotmartLink, '_blank', 'noopener,noreferrer');
  };

  const getCategoryStyles = (category: string) => {
    const styles = {
      'keto': 'bg-gradient-to-r from-keto-primary to-keto-teal text-white',
      'creatividad': 'bg-gradient-to-r from-keto-secondary to-keto-pink text-white',
      'idiomas': 'bg-gradient-to-r from-keto-blue to-keto-indigo text-white',
      'salud': 'bg-gradient-to-r from-keto-lime to-keto-primary text-white',
      'bienestar': 'bg-gradient-to-r from-keto-purple to-keto-pink text-white',
    };
    return styles[category as keyof typeof styles] || 'bg-gradient-to-r from-gray-500 to-gray-700 text-white';
  };

  const getRandomGlow = () => {
    const glows = [
      'hover:shadow-2xl hover:shadow-keto-primary/50',
      'hover:shadow-2xl hover:shadow-keto-secondary/50',
      'hover:shadow-2xl hover:shadow-keto-purple/50',
      'hover:shadow-2xl hover:shadow-keto-orange/50',
      'hover:shadow-2xl hover:shadow-keto-teal/50',
    ];
    return glows[Math.floor(Math.random() * glows.length)];
  };

  return (
    <div className={`bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden group card-hover relative ${getRandomGlow()}`}>
      {/* Gradiente decorativo animado en el borde */}
      <div className="absolute inset-0 bg-gradient-to-r from-keto-primary via-keto-secondary via-keto-purple to-keto-teal opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl"></div>
      
      {/* Cover Image con efectos */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"></div>
        <img 
          src={ebook.coverImage}
          alt={ebook.title}
          className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500 brightness-110 saturate-125"
        />
        
          {/* Etiquetas orgánicas */}
        <div className="absolute top-4 left-4 z-20">
          <span className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${getCategoryStyles(ebook.category)} natural-shadow`}>
            {ebook.category.toUpperCase()}
          </span>
        </div>
        
        {ebook.featured && (
          <div className="absolute top-4 right-4 z-20">
            <span className="bg-keto-sand text-keto-earth px-3 py-1.5 rounded-lg text-xs font-bold natural-shadow">
              DESTACADO
            </span>
          </div>
        )}

        {/* Precio natural */}
        <div className="absolute bottom-4 left-4 z-20">
          <div className="bg-white/95 backdrop-blur-md rounded-lg px-3 py-2 natural-shadow">
            <span className="text-xl font-bold text-keto-primary">
              ${ebook.price}
            </span>
            <span className="text-xs text-keto-stone ml-1">USD</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <h3 className="font-display text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:gradient-text transition-all duration-300">
          {ebook.title}
        </h3>
        
        <p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-3">
          {ebook.description}
        </p>

        {/* Book Details con iconos */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4 bg-gradient-to-r from-keto-cream to-transparent p-3 rounded-xl">
          <span className="flex items-center">📖 {ebook.pages} páginas</span>
          <span className="flex items-center">💾 {ebook.format}</span>
        </div>

        {/* Tags coloridos */}
        <div className="flex flex-wrap gap-2 mb-6">
          {ebook.tags.slice(0, 3).map((tag, index) => {
            const colors = ['bg-keto-primary/20 text-keto-primary', 'bg-keto-secondary/20 text-keto-secondary', 'bg-keto-purple/20 text-keto-purple'];
            return (
              <span 
                key={index}
                className={`px-3 py-1 rounded-full text-xs font-medium ${colors[index % colors.length]} hover:scale-110 transition-transform duration-200`}
              >
                #{tag}
              </span>
            );
          })}
        </div>

          {/* Purchase Buttons - Orgánicos */}
        <div className="space-y-3">
          {/* PayPal Button - Destacado */}
          <button
            onClick={handlePayPalPurchase}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 natural-shadow hover:scale-102 organic-glow flex items-center justify-center space-x-3 group"
          >
            <span className="text-lg">💳</span>
            <span>Pagar con PayPal</span>
            <span className="text-sm opacity-80">Seguro</span>
          </button>
          
          {/* Compra Directa */}
          <button
            onClick={handleDirectPurchase}
            className="w-full bg-keto-primary hover:bg-keto-forest text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 natural-shadow hover:scale-102 organic-glow flex items-center justify-center space-x-3"
          >
            <span className="text-lg">🌱</span>
            <span>Comprar Directo</span>
          </button>
          
          {/* Hotmart Button */}
          <button
            onClick={handleHotmartPurchase}
            className="w-full border-2 border-keto-secondary text-keto-secondary hover:bg-keto-secondary hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 natural-shadow hover:scale-102 flex items-center justify-center space-x-3"
          >
            <span className="text-lg">🛒</span>
            <span>Ver en Hotmart</span>
          </button>
        </div>

        {/* Garantía natural */}
        <div className="mt-4 text-center">
          <span className="inline-flex items-center px-4 py-2 bg-keto-cream text-keto-earth text-xs font-semibold rounded-lg border border-keto-sand">
            🌿 Garantía natural 30 días
          </span>
        </div>
      </div>
    </div>
  );
}