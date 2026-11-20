# Thoradeep — AI-Powered Cardiothoracic Ratio (KTO) Analysis Web Interface

*[English](#english) | [Türkçe](#türkçe)*

---

<a name="english"></a>
## English

### Overview
**Thoradeep** is a bilingual (Turkish / English) web showcase built for our AI-powered Cardiothoracic Ratio (CTR / Turkish: *Kardiyotorasik Oran – KTO*) chest X-ray analysis project. The site presents the project's mission, vision, neural network pipeline, and sample diagnostic outputs in an interactive, modern interface.

### Development Timeline & Process
- **Development Date:** January 12, 2026 (based on original source timestamps)
- **Process:** Designed as a clean, lightweight PHP + vanilla JavaScript showcase without heavy build tooling. A key highlight of the build was creating a procedural 3D visualization in Three.js featuring a particle-plexus lung model and a faceted low-poly heart directly in the hero section, paired with an animated CNN architecture flow diagram and real KTO model output samples.

### Key Features
- **Interactive 3D Hero Scene (`assets/js/main.js`):** Procedural Three.js plexus lungs and wireframe/glass cyberpunk heart animation.
- **Bilingual Support (`lang.php`):** Session-based Turkish (`tr`) and English (`en`) language switching.
- **CNN Architecture Diagram (`index.php`):** Visual step-by-step flow from input chest X-ray scan through convolution/pooling blocks to diagnostic output.
- **Diagnostic Output Gallery (`assets/images/`):** Sample Cardiothoracic Ratio (KTO) detection results.

### Project Structure
```text
thoradeep-kto-web/
├── assets/
│   ├── css/style.css
│   ├── images/          # Sample KTO AI output images
│   └── js/main.js       # Three.js 3D lung/heart visualization & interactions
├── includes/
│   ├── header.php
│   └── footer.php
├── index.php
└── lang.php             # TR/EN translations
```

### Running Locally
Run with any local PHP server (XAMPP, Laragon, or PHP's built-in server):
```bash
php -S localhost:8000
```
Then open `http://localhost:8000` in your browser.

### Acknowledgments & Open-Source Credits
We would like to thank the open-source communities and tools that made this interface possible:
- **[Three.js](https://threejs.org/)** — 3D WebGL rendering for the interactive lung and heart visualization.
- **[Google Fonts](https://fonts.google.com/)** — Typography assets.
- **Team:** Abdullah Kaan Akdağ & Eymen Çapoğlu.

---

<a name="türkçe"></a>
## Türkçe

### Genel Bakış
**Thoradeep**, akciğer grafileri üzerinden yapay zeka destekli Kardiyotorasik Oran (KTO) hesaplaması yapan projemiz için geliştirdiğimiz, Türkçe ve İngilizce dil desteğine sahip tanıtım web sitesidir. Projenin misyonunu, vizyonunu, yapay sinir ağı (CNN) iş akışını ve model çıktı örneklerini modern ve etkileşimli bir arayüzle sunar.

### Geliştirme Süreci ve Tarihçesi
- **Geliştirme Tarihi:** 12 Ocak 2026 (orijinal kaynak dosya tarihlerine göre)
- **Süreç:** Karmaşık derleme araçlarına ihtiyaç duymadan hızlı ve akıcı çalışacak şekilde saf PHP, CSS ve JavaScript ile geliştirildi. Tasarım sürecinde en çok odaklandığımız nokta, Three.js kullanarak akciğerleri nokta bulutu (plexus) formunda ve kalbi çokgen (low-poly) lazer tel kafes formunda matematiksel olarak 3 boyutlu sahneye aktarmak ve bunu animasyonlu bir CNN mimari şeması ile desteklemek oldu.

### Öne Çıkan Özellikler
- **Etkileşimli 3B Sahne (`assets/js/main.js`):** Three.js ile prosedürel olarak üretilen 3B akciğer ve kalp animasyonu.
- **Çift Dil Desteği (`lang.php`):** Oturum (session) tabanlı Türkçe (`tr`) ve İngilizce (`en`) geçişi.
- **CNN Mimari Diyagramı (`index.php`):** Giriş grafisinden konvolüsyon, havuzlama (max pooling) ve sonuç aşamasına kadar görsel akış.
- **Örnek Model Çıktıları (`assets/images/`):** Yapay zeka KTO analiz çıktıları.

### Yerel Çalıştırma
XAMPP, Laragon veya PHP dahili sunucusu ile doğrudan çalıştırabilirsiniz:
```bash
php -S localhost:8000
```
Tarayıcıdan `http://localhost:8000` adresini açmanız yeterlidir.

### Açık Kaynak Teşekkürler ve Kaynaklar
Bu projenin geliştirilmesinde faydalandığımız açık kaynak teknolojilere teşekkür ederiz:
- **[Three.js](https://threejs.org/)** — 3B WebGL akciğer ve kalp görselleştirmesi.
- **[Google Fonts](https://fonts.google.com/)** — Yazı tipi kaynakları.
- **Geliştiriciler:** Abdullah Kaan Akdağ & Eymen Çapoğlu.