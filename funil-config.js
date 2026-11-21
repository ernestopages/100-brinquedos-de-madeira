/* =====================================================
CONFIGURAÇÃO DO FUNIL PÓS-COMPRA (edite só este arquivo)
Brinquedos Pintados à Mão (upsell e downsell do 100+ Brinquedos de Madeira)
===================================================== */
window.CFG = {
// Para onde a pessoa vai quando recusa tudo, já viu a oferta ou volta depois.
// Trocar pelo link da área de membros quando ela existir.
ACCESS_URL: "https://100-brinquedos-de-madeira.vercel.app/acesso",

// Links de checkout da Payt (versão Pix / cartão normal). Duplicados do checkout sem CPF.
CHECKOUT_UPSELL: "https://checkout.payt.com.br/8bf08c057db57ed4c344a60bf904d9c6",
CHECKOUT_DOWNSELL: "https://checkout.payt.com.br/858dc0a31f7379f4873679bdfd00abb8",

// Segundo do vídeo em que o botão de compra aparece.
REVEAL_UPSELL: 204, // quando o R$ 47 aparece no vídeo
REVEAL_DOWNSELL: 33 // quando o R$ 24,90 aparece no vídeo
};
