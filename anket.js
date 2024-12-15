
const sorular = [
    {
        soru: "Hangi mevsimi daha çok seviyorsunuz?",
        secenekler: ["1- İlkbahar", "2- Yaz", "3- Sonbahar", "4- Kış"]
    },
    {
        soru: "En sevdiğiniz yemek türü nedir?",
        secenekler: ["1- Deniz ürünleri", "2- Et yemekleri", "3- Sebze yemekleri", "4- Tatlılar"]
    },
    {
        soru: "Hangi tür filmleri tercih edersiniz?",
        secenekler: ["1- Aksiyon", "2- Komedi", "3- Dram", "4- Bilim Kurgu"]
    }
];


const kullaniciCevaplari = [];


for (let i = 0; i < sorular.length; i++) {
    console.log(sorular[i].soru);
    console.log("Seçenekler:");
    for (let j = 0; j < sorular[i].secenekler.length; j++) {
        console.log(sorular[i].secenekler[j]);
    }
    
    let cevap = Number(prompt(`${sorular[i].soru}\n${sorular[i].secenekler.join("\n")}`));
    kullaniciCevaplari.push({
        soru: sorular[i].soru,
        cevap: sorular[i].secenekler[cevap - 1]
    });
}


console.log("Kullanıcı Cevapları:");
console.log(kullaniciCevaplari);
