/* =====================================================
   CONFIGURAÇÃO DO FUNIL PÓS-COMPRA (edite só este arquivo)
   Brinquedos Pintados à Mão (upsell e downsell do 100+ Brinquedos de Madeira)
   ===================================================== */
window.CFG = {
  // Para onde a pessoa vai quando recusa tudo, já viu a oferta ou volta depois.
  // Trocar pelo link da área de membros quando ela existir.
  ACCESS_URL: "https://100-brinquedos-de-madeira.vercel.app/acesso",

  // Links de checkout da Payt (versão Pix / cartão normal). Colar quando os checkouts forem criados.
  CHECKOUT_UPSELL: "https://checkout.payt.com.br/8cbf994720a1bedeaa4fc92f765cc572",
  CHECKOUT_DOWNSELL: "https://checkout.payt.com.br/1fea357118a796095291b9d751e7aa3d",

  // Segundo do vídeo em que o botão de compra aparece.
  REVEAL_UPSELL: 204,  // quando o R$ 47 aparece no vídeo
  REVEAL_DOWNSELL: 33  // quando o R$ 24,90 aparece no vídeo
};
