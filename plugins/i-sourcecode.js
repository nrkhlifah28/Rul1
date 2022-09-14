let handler = async (m, { conn }) => {

     conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'INR',
      amount1000: 1339889,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: '*Nyari SC ya?😅*\nMending Cari di yt aja\nHarus mandiri😅\n\nBtw jangan lupa Gabung Gc Bot\n*Link:* https://chat.whatsapp.com/FM4JHZbUJZi0m786dBZrsr',
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode)$/i

module.exports = handler


