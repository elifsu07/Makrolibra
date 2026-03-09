
// --- 1. VERİ YAPILARI ---
const besinVerileri = {
    tavuk: { ad: "Tavuk Göğsü", cal: 165, p: 31, c: 0, y: 3.6, adetGram: 150 },
    tonbaligimemiş: { ad: "75 Gr Konserve Süzülmemiş Ton Balığı", cal: 180, p: 14, c: 0, y: 12, adetGram: 75 },
    tonbaligi: { ad: "75 Gr Konserve Süzülmüş Ton Balığı", cal: 50, p: 11, c: 0, y: 1, adetGram: 50},
    hamburger: { ad: "Hamburger", cal: 250, p: 13, c: 25, y: 11, adetGram: 180 },
    makarna_sade: { ad: "Makarna (Haşlanmış)", cal: 157, p: 5.8, c: 30, y: 0.9, adetGram: 100 },
    pilav: { ad: "Pirinç Pilavı", cal: 130, p: 2.4, c: 28, y: 0.3, adetGram: 200 },
    kofte: { ad: "Köfte", cal: 250, p: 26, c: 0, y: 17, adetGram: 100 },
    et_doner: { ad: "Et Döner", cal: 550, p: 50, c: 5, y: 25, adetGram: 250 },
    lahmacun: { ad: "Lahmacun", cal: 250, p: 12, c: 30, y: 10, adetGram: 180 },
    pizza: { ad: "Pizza", cal: 266, p: 11, c: 33, y: 10, adetGram: 150 },
    kuru_fasulye: { ad: "Kuru Fasulye", cal: 127, p: 8.7, c: 23, y: 0.5, adetGram: 200 },
    nohut: { ad: "Nohut Yemeği", cal: 164, p: 8.9, c: 27, y: 2.6, adetGram: 200 },
    mercimek_corba: { ad: "Bir Kase Mercimek Çorbası", cal: 56, p: 3.2, c: 8.5, y: 1, adetGram: 250 },
    yumurtahaslama: { ad: "Haşlanmış Yumurta", cal: 90, p: 7, c: 0.7, y: 6, adetGram: 63 },
    elma: { ad: "Elma", cal: 52, p: 0.3, c: 14, y: 0.2, adetGram: 150 },
    muz: { ad: "Muz", cal: 100, p: 1.1, c: 23, y: 0.3, adetGram: 120 },
    ayran: { ad: "Ayran", cal: 35, p: 2, c: 2.5, y: 1.8, adetGram: 200 },
    tambugday: { ad: "Tam Buğday Ekmeği", cal: 65, p:3, c: 12, y: 0.5, adetGram: 8 },
    hurma : { ad: "Hurma", cal: 20, p: 0.1, c: 5, y: 0, adetGram: 8 },
    kivi:{ad:"Kivi", cal:40, p: 0.7, c: 10, y: 0.3, adetGram: 70},
    ceviziçi: { ad: "Bir Tam Ceviz İçi", cal: 30, p: 0.7, c: 0.6, y: 3, adetGram: 5},
    birkasepatlamismisir: { ad: "Bir Kase Patlamış Mısır", cal: 140, p: 3, c: 23, y: 4, adetGram: 30 },
    yogurt_yarim_yagli: { ad: "Yarım Yağlı Yoğurt", cal: 90, p: 7.5, c: 9, y: 3, adetGram: 200 },
    domates_corba : { ad: "Bir Kase Domates Çorbası ", cal: 120, p: 2, c: 15, y: 5, adetGram:200 },
    bir_dilim_cevizli_baklava:{ ad: "Bir Dilim Cevizli Baklava", cal: 170, p: 2, c: 22, y: 9, adetGram: 100 },
    ceyrekpide : { ad: "Çeyrek Pide", cal: 220, p:6 , c: 45, y: 0, adetGram: 80 },
    ezogelin:{ad:"Bir Kase Ezogelin Çorba", cal:110, p:6 , c: 14, y: 4, adetGram: 200 },
    birtatlikasfistikez:{ ad: "Bir Tatlı Kaşığı Fıstık Ezmesi", cal: 60, p:3 , c: 1.5, y: 5, adetGram: 10 },
    sinitzel : { ad: "Tavuk Şinitzel", cal: 350, p:25 , c: 15, y: 18, adetGram: 120 },
    havuc: { ad: "Orta Boy Havuç", cal: 25, p:0.6 , c: 6, y: 0.1, adetGram: 60 },
    patates_kızartması_incebirpor: { ad: "Patates Kızartması İnce Dilim 1 Porsiyon", cal: 470, p:5 , c: 60, y: 25, adetGram: 150 },
    ranch: { ad: "Bir Tatlı Kaşığı Ranch Sos", cal: 45, p:0.6 , c: 4.5, y: 0.1, adetGram: 10 },
    yaylacorba: { ad: "Bir Kase Yayla Çorbası", cal: 95, p:3.5 , c: 12, y: 4, adetGram: 200 },
    yesilzeytin: { ad: "Adet Yeşil Zeytin", cal: 5, p:0.05 , c: 0.1, y: 0.5, adetGram: 4 },
    yarımyagsüt: { ad: "Yarım Yağlı Süt ", cal: 90, p:6 , c: 9, y: 3, adetGram: 200 },
    cay: { ad: "Şekersiz Çay", cal: 1, p:0 , c: 0, y: 0, adetGram: 120 },
}

const kategoriler = {
    ana_yemek: ["tavuk", "ranch",  "patates_kızartması_incebirpor","tonbaligi" ,"tonbaligimemiş" ,"sinitzel", "tambugday","yogurt_yarim_yagli","ceyrekpide" ,"hamburger", "makarna_sade", "pilav", "kofte", "et_doner", "lahmacun", "pizza", "kuru_fasulye", "nohut"],
    corba: ["mercimek_corba","domates_corba","ezogelin","yaylacorba"],
    kahvalti: ["yumurtahaslama" , "patates_kızartması_incebirpor","yesilzeytin"],
    meyve: ["elma", "muz","kivi","havuc"],
    icecek: ["ayran","cay","yarımyagsüt"],
    tatli: ["bir_dilim_cevizli_baklava","hurma","birkasepatlamismisir","ceviziçi","birtatlikasfistikez"]
};

let sepet = [];

// --- 2. MODAL (ALERT) FONKSİYONLARI ---






function ozelAlert(mesaj) {
    const modal = document.getElementById('customAlert');
    const msgAlan = document.getElementById('alertMessage');
    if(modal && msgAlan) {
        msgAlan.innerHTML = mesaj; // HTML desteği için innerHTML kullanıyoruz
        modal.style.display = 'flex';
    }
}

function alertKapat() {
    const modal = document.getElementById('customAlert');
    if(modal) modal.style.display = 'none';
}

// --- 3. SAYFA YÜKLENME ---
window.onload = function () {
    kategoriFiltrele('hepsi', document.querySelector('.cat-btn.active'));
};

// --- 4. FİLTRELEME VE ARAMA ---
function kategoriFiltrele(kat, btn) {
    const listeGövdesi = document.getElementById('besinListesi');
    if(!listeGövdesi) return;
    
    listeGövdesi.innerHTML = "";
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    let liste = kat === "hepsi" ? Object.keys(besinVerileri) : (kategoriler[kat] || []);
    
    liste.forEach(key => {
        const veri = besinVerileri[key];
        const div = document.createElement("div");
        div.className = "besin-item";
        div.textContent = veri.ad.toUpperCase();
        
        div.onclick = function() {
            document.querySelectorAll('.besin-item').forEach(i => i.classList.remove('selected'));
            div.classList.add('selected');
            document.getElementById('secilenBesinKey').value = key;
        };
        listeGövdesi.appendChild(div);
    });
}

function besinAra() {
    const aranan = document.getElementById("besinSearch").value.toLowerCase().trim();
    const items = document.querySelectorAll(".besin-item");
    items.forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(aranan) ? "" : "none";
    });
}

// --- 5. HESAPLAMA VE SEPET ---
function besinekle() {
    const key = document.getElementById('secilenBesinKey').value;
    const miktar = parseFloat(document.getElementById('miktar').value);
    const birim = document.getElementById('birim').value;
    const veri = besinVerileri[key];

    if (!key || isNaN(miktar) || miktar <= 0) {
        ozelAlert("Lütfen bir besin seçin ve miktar girin!"); 
        return;
    }

    // DOĞRU ORAN MANTIĞI: Adet seçilirse miktar, gram seçilirse gram/adetGram
    let oran = (birim === "adet") ? miktar : miktar / veri.adetGram;

    sepet.push({
        id: Date.now(),
        ad: veri.ad,
        cal: Math.round(veri.cal * oran),
        p: (veri.p * oran).toFixed(1),
        c: (veri.c * oran).toFixed(1),
        y: (veri.y * oran).toFixed(1)
    });

    sepetiGuncelle();
}

function sepetiGuncelle() {
    const tablo = document.getElementById('tabloGövdesi');
    const container = document.getElementById('listeAlani');
    if(!tablo || !container) return;

    tablo.innerHTML = "";
    let tCal = 0, tP = 0, tC = 0, tY = 0;

    sepet.forEach(item => {
        tCal += item.cal;
        tP += parseFloat(item.p);
        tC += parseFloat(item.c);
        tY += parseFloat(item.y);

        tablo.innerHTML += `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 18px 0; border-bottom: 1px solid #f8f8f8;">
                <div style="text-align: left;">
                    <div style="font-weight: 800; color: #222; font-size: 1.05rem; letter-spacing: -0.5px;">${item.ad.toUpperCase()}</div>
                    <div style="font-size: 0.85rem; color: #888; margin-top: 5px; font-weight: 500;">
                        🔥 ${item.cal} KCAL &nbsp; | &nbsp; 🥩 P: ${item.p}g &nbsp; | &nbsp; 🌾 K: ${item.c}g &nbsp; | &nbsp; 🥑 Y: ${item.y}g
                    </div>
                </div>
                <button onclick="satirSil(${item.id})" style="background:none; border:none; color:#ddd; cursor:pointer; font-size:1.2rem; transition:0.3s;" onmouseover="this.style.color='#ff4d4d'" onmouseout="this.style.color='#ddd'">✕</button>
            </div>`;
    });

    container.style.display = sepet.length > 0 ? "block" : "none";
    document.getElementById('toplamCal').innerText = Math.round(tCal);
    
    document.getElementById('toplamMakro').innerHTML = `
        <div style="display: flex; justify-content: center; gap: 30px; margin-top: 25px;">
            <div style="text-align: center;">
                <div style="font-size: 0.75rem; color: #aaa; letter-spacing: 1.5px; margin-bottom: 5px; font-weight: 700;">PROTEİN</div>
                <div style="font-weight: 800; color: #444; font-size: 1.1rem;">🥩 ${tP.toFixed(1)}g</div>
            </div>
            <div style="text-align: center;">
                <div style="font-size: 0.75rem; color: #aaa; letter-spacing: 1.5px; margin-bottom: 5px; font-weight: 700;">KARBONHİDRAT</div>
                <div style="font-weight: 800; color: #444; font-size: 1.1rem;">🌾 ${tC.toFixed(1)}g</div>
            </div>
            <div style="text-align: center;">
                <div style="font-size: 0.75rem; color: #aaa; letter-spacing: 1.5px; margin-bottom: 5px; font-weight: 700;">YAĞ</div>
                <div style="font-weight: 800; color: #444; font-size: 1.1rem;">🥑 ${tY.toFixed(1)}g</div>
            </div>
        </div>
    `;
}

function satirSil(id) {
    sepet = sepet.filter(i => i.id !== id);
    sepetiGuncelle();
}

function sifirla() {
    sepet = [];
    sepetiGuncelle();
}

function hesaplaBKI() {
    const kilo = parseFloat(document.getElementById("kilo").value);
    let boy = parseFloat(document.getElementById("boy").value);
    const sonuc = document.getElementById("bkiSonuc");

    if (boy > 3) boy /= 100;

    // Kontrol: Kilo ve Boy girilmiş mi?
    if (kilo > 0 && boy > 0) {
        const bki = (kilo / (boy * boy)).toFixed(1);
        let durum = "";

        if (bki < 18.5) durum = "ZAYIF";
        else if (bki < 25) durum = "NORMAL AĞIRLIKLI";
        else if (bki < 30) durum = "FAZLA KİLOLU";
        else durum = "OBEZİTE";

        sonuc.innerHTML = `
            <div style="margin-top: 50px; text-align: center;">
                <div style="font-size: 4.5rem; font-weight: 900; color: #00d1b2; line-height: 0.8;">
                    ${bki}
                </div>
                <div style="font-size: 1.4rem; font-weight: 700; color: #00d1b2; letter-spacing: 3px; margin-top: 20px; text-transform: uppercase;">
                    ${durum}
                </div>
            </div>`;
    } else {
        // Eksik bilgi uyarısı
        sonuc.innerHTML = `
            <div style="margin-top: 30px; text-align: center; color: #ee7272; font-weight: 600; font-size: 0.9rem; letter-spacing: 1px;">
                ⚠️ LÜTFEN TÜM ALANLARI DOLDURUNUZ
            </div>`;
    }
}

function hesaplaKalori() {
    const yas = document.getElementById('yas').value;
    const kilo = document.getElementById('kiloKalori').value;
    const boy = document.getElementById('boyKalori').value;
    const cinsiyet = document.getElementById('cinsiyet').value;
    const aktivite = parseFloat(document.getElementById('activityLevel').value);
    const sonucGosterge = document.getElementById('kaloriSonuc');

    // Eğer alanlardan herhangi biri boşsa
    if (!yas || !kilo || !boy) {
        sonucGosterge.innerHTML = `
            <div style="color: #ff4d4d; font-weight: 600; font-size: 0.9rem; letter-spacing: 1px;">
                ⚠️ LÜTFEN TÜM ALANLARI DOLDURUNUZ
            </div>`;
        return; // Fonksiyonu burada durdur, hesaplama yapma
    }

    // Sayılar geçerli mi kontrolü (Hatalı giriş durumu)
    const nYas = parseInt(yas);
    const nKilo = parseFloat(kilo);
    const nBoy = parseFloat(boy);

    if (nYas <= 0 || nKilo <= 0 || nBoy <= 0) {
        sonucGosterge.innerHTML = `
            <div style="color: #ff4d4d; font-weight: 600; font-size: 0.9rem; letter-spacing: 1px;">
                ⚠️ LÜTFEN TÜM ALANLARI DOLDURUNUZ
            </div>`;
        return;
    }

    // Her şey doğruysa hesapla
    let bmr = (10 * nKilo) + (6.25 * nBoy) - (5 * nYas);
    bmr = (cinsiyet === "erkek") ? bmr + 5 : bmr - 161;
    const tdee = Math.round(bmr * aktivite);

    sonucGosterge.innerHTML = `
        <div style="margin-top: 20px; text-align: center;">
            <div style="font-size: 4rem; font-weight: 900; color: #00d1b2; line-height: 0.8;">
                ${tdee} <small style="font-size: 1.2rem;">KCAL</small>
            </div>
            <div style="font-size: 1.1rem; font-weight: 700; color: #00d1b2; letter-spacing: 3px; margin-top: 15px; text-transform: uppercase;">
                GÜNLÜK İHTİYACINIZ
            </div>
        </div>`;
}
    
         



// Firebase'den kullanıcının hesaplanmış kalori hedefini çekiyoruz
db.collection("users").doc(userId).get().then((doc) => {
    if (doc.exists) {
        const hedefKalori = doc.data().gunlukHedef; // Örneğin: 2350
        const alinanKalori = doc.data().bugunAlinan; // Örneğin: 1200
        
        // Dashboard'daki metni güncelle
        document.getElementById('hedefGosterge').innerText = alinanKalori;
        document.getElementById('hedefAltMetin').innerText = `Günlük Hedef: ${hedefKalori} kcal`;
        
        // Grafiğin doluluk oranını hesapla ve güncelle
        let dolulukOrani = (alinanKalori / hedefKalori) * 100;
        document.querySelector('.progress-circle').style.background = 
            `conic-gradient(var(--primary-teal) ${dolulukOrani}%, #eee 0)`;
    }
});