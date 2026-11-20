<!DOCTYPE html>
<html lang="<?php echo $lang; ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $t['title']; ?></title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
</head>
<body>

<nav class="navbar">
    <div class="logo">THORADEEP</div>
    
    <div class="nav-links" id="navLinks">
        <a href="#home" onclick="closeMenu()"><?php echo $t['home']; ?></a>
        <a href="#about" onclick="closeMenu()"><?php echo $t['about']; ?></a>
        <a href="#tech" onclick="closeMenu()"><?php echo $t['tech']; ?></a>
        <a href="#contact" onclick="closeMenu()"><?php echo $t['contact']; ?></a>
        <div class="lang-switch">
            <a href="?lang=tr" class="<?php echo $lang == 'tr' ? 'active' : ''; ?>">TR</a>
            <span>|</span>
            <a href="?lang=en" class="<?php echo $lang == 'en' ? 'active' : ''; ?>">EN</a>
        </div>
    </div>

    <div class="hamburger" onclick="toggleMenu()">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </div>
</nav>
