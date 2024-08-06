/**
 * Burada yazılanlar sadece örnektir, bu dosyayı çalıştırmayı denemeyin.
 * Burada yazılanları komutlarınızda uygulayabilirsiniz.
 */

// Embed oluşturmak için EmbedBuilder sınıfını içeri aktarmalısınız.
const { EmbedBuilder } = require("discord.js");

const embed = new EmbedBuilder()
    // Embed'in üst kısmında görünür
    .setAuthor({name: "Genelde kullanıcı adı girilir", iconURL: "Genelde kullanıcı avatarı URL'si girilir"})
    // Embed'in başlığını belirler, author'un bir altında görünür, kalın ve büüyk yazı stilinde görünür, markdown kullanılamaz
    .setTitle("Başlık")
    // Başlığın altında bulunur, ince ve küçük yazı stilinde görünür, markdown kullanılabilir
    .setDescription("Açıklama")
    // Embed'in gönderildiği tarih formatlanmış bir şekilde aşağı kısımda görünür (Örn: " bugün 18:16 " gibi görünür)
    .setTimestamp(Date.now())
    // Girilen URL bir resim formatı içeriyorsa (örn: https://ornek.com/resim.png?size=512) Embed'in sağ üst köşesinde küçük bir resim olarak görünür
    .setThumbnail("url" /*Kullanacağınız değer zaten bir string döndürüyorsa iki tırnak kullanmanıza gerek yok*/)
    // Embed'in rengini belirler, sol tarafta bir çizgi şeklinde görünür
    .setColor("Aqua")
    // setTitle ile birlikte kullanıldığında başlığı tıklanabilir bir link metnine (link label) dönüştürür.
    .setURL("url")
    // Başlık ve açıklama dışında daha fazla veri eklemek için kullanılır
    .addFields(
        {name: "Başlık" /*setTitle gibi davranır, ancak daha küçük görünür*/, value: "Açıklama" /*setDescription gibi davranır*/},
        {name: "Başlık2", value: "Açıklama2", inline: true /*Varsayılan olarak 'false'dur. Sıralı bir şekilde kullanarak field'ların alt alta veya daha farklı şekillerde görünmesini sağlayabilirsiniz.*/}
    );

    // Nasıl gönderilir?

    // reply ile : reply({embeds: [embed]}) Birden fazla embed'de gönderilebilir, ama önerilmez
    // channel.send ile : channel.send({embeds: [embed]})