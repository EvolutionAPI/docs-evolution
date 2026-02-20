// Cria e adiciona o script da biblioteca do Google ao cabeçalho
var script = document.createElement('script');
script.async = true;
script.src = 'https://www.googletagmanager.com/gtag/js?id=G-DKSKFWQWVK';
document.head.appendChild(script);

// Configura o GA4
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-DKSKFWQWVK', {
  linker: {
    domains: [
      'evolution-api.com',
      'evolution-api.io',
      'evoapicloud.com',
      'evoai.app',
      'evo-si.co',
      'evofoundation.com.br'
    ]
  }
});
