<?php
session_start();

if (isset($_GET['lang'])) {
    $_SESSION['lang'] = $_GET['lang'];
}

if (!isset($_SESSION['lang'])) {
    $_SESSION['lang'] = 'tr'; // Default to Turkish
}

$lang = $_SESSION['lang'];

$translations = [
    'tr' => [
        'title' => 'Thoradeep - Yapay Zeka Destekli Kardiyotorasik Analiz',
        'home' => 'Ana Sayfa',
        'about' => 'Hakkımızda',
        'tech' => 'Teknolojimiz',
        'contact' => 'İletişim',
        'hero_title' => 'Geleceğin Sağlık Teknolojisi',
        'hero_subtitle' => 'Yapay zeka ve derin öğrenme ile kardiyotorasik oran hesaplamasında devrim yaratıyoruz.',
        'mission_title' => 'Misyonumuz',
        'mission_text' => 'Sağlık sektöründe yapay zeka tabanlı çözümler sunarak teşhis süreçlerini hızlandırmak ve doğruluğu artırmak.',
        'vision_title' => 'Vizyonumuz',
        'vision_text' => 'Dünya genelinde öncü bir sağlık teknolojisi şirketi olmak ve milyonlarca hayat dokunmak.',
        'tech_title' => 'Teknolojimiz',
        'tech_desc' => 'Derin sinir ağları ve gelişmiş görüntü işleme algoritmaları.',
        'explore_more' => 'Daha Fazlasını Keşfet',
        'diagram_placeholder' => 'Sinir Ağı Diyagramı Alanı',
        'img_placeholder' => 'Örnek Görsel',
        'contact_title' => 'İletişim',
        'contact_names' => 'Abdullah Kaan Akdağ & Eymen Çapoğlu'
    ],
    'en' => [
        'title' => 'Thoradeep - AI Powered Cardiothoracic Analysis',
        'home' => 'Home',
        'about' => 'About Us',
        'tech' => 'Technology',
        'contact' => 'Contact',
        'hero_title' => 'Healthcare Technology of the Future',
        'hero_subtitle' => 'Revolutionizing cardiothoracic ratio calculation with AI and deep learning.',
        'mission_title' => 'Our Mission',
        'mission_text' => 'To accelerate diagnostic processes and increase accuracy by providing AI-based solutions in the healthcare sector.',
        'vision_title' => 'Our Vision',
        'vision_text' => 'To be a leading healthcare technology company worldwide and touch millions of lives.',
        'tech_title' => 'Our Technology',
        'tech_desc' => 'Deep neural networks and advanced image processing algorithms.',
        'explore_more' => 'Explore More',
        'diagram_placeholder' => 'Neural Network Diagram Placeholder',
        'img_placeholder' => 'Sample Image',
        'contact_title' => 'Contact',
        'contact_names' => 'Abdullah Kaan Akdağ & Eymen Çapoğlu'
    ]
];

$t = $translations[$lang];
?>
