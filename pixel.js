/**
 * ARQUITETURA DE RASTREAMENTO BLINDADA v1.0
 * Este módulo isola o Meta Pixel do layout HTML.
 * Para trocar de pixel após um bloqueio, mude apenas o ID na variável abaixo.
 */

const META_PIXEL_ID = 'SEU_PIXEL_ID_AQUI'; // Substitua pelo ID do seu Pixel atual

(function(f,b,e,v,n,t,s) {
  if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)
})(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

fbq('init', META_PIXEL_ID);
fbq('track', 'PageView');

// Objeto Global para acionar eventos de conversão de forma segura
window.MascotesTracking = {
  trackAddToCart: function(productName, price) {
    if(typeof fbq === 'function') {
      fbq('track', 'AddToCart', {
        content_name: productName,
        value: price,
        currency: 'BRL'
      });
    }
  },
  trackInitiateCheckout: function(productName, price) {
    if(typeof fbq === 'function') {
      fbq('track', 'InitiateCheckout', {
        content_name: productName,
        value: price,
        currency: 'BRL'
      });
    }
  },
  trackPurchase: function(productName, price) {
    if(typeof fbq === 'function') {
      fbq('track', 'Purchase', {
        content_name: productName,
        value: price,
        currency: 'BRL'
      });
    }
  }
};