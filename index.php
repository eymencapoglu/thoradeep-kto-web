<?php include 'lang.php'; ?>
<?php include 'includes/header.php'; ?>

<section id="home" class="hero-section">
    <div id="canvas-container"></div>
    <div class="hero-text">
        <h1><?php echo $t['hero_title']; ?></h1>
        <p><?php echo $t['hero_subtitle']; ?></p>
        <a href="#about" class="cta-button"><?php echo $t['explore_more']; ?></a>
    </div>
</section>

<section id="about" class="about-section">
    <div class="container">
        <div class="about-card glass">
            <h2><?php echo $t['mission_title']; ?></h2>
            <p><?php echo $t['mission_text']; ?></p>
        </div>
        <div class="about-card glass">
            <h2><?php echo $t['vision_title']; ?></h2>
            <p><?php echo $t['vision_text']; ?></p>
        </div>
    </div>
</section>

<section id="tech" class="tech-section">
    <div class="container">
        <h2><?php echo $t['tech_title']; ?></h2>
        <p class="section-desc"><?php echo $t['tech_desc']; ?></p>
        
        <div class="cnn-diagram-wrapper glass">
            <h3 class="diagram-title">Yapay Sinir Ağı Mimarisi</h3>
            
            <div class="cnn-flow">
                <!-- 1. Input -->
                <div class="cnn-step">
                    <div class="cnn-visual input-box">
                        <img src="assets/images/kto cikti 1.jpg" alt="Input">
                        <div class="scan-line"></div>
                    </div>
                    <div class="cnn-label">INPUT SCAN</div>
                </div>

                <div class="cnn-arrow"></div>

                <!-- 2. Conv 1 -->
                <div class="cnn-step">
                    <div class="cnn-visual conv-stack">
                        <div class="layer c1"></div>
                        <div class="layer c2"></div>
                        <div class="layer c3"></div>
                    </div>
                    <div class="cnn-label">CONVOLUTION BLOCK 1</div>
                </div>

                <div class="cnn-arrow"></div>

                <!-- 3. Pooling -->
                <div class="cnn-step">
                    <div class="cnn-visual pool-box">
                        <div class="grid-cell"></div>
                        <div class="grid-cell"></div>
                        <div class="grid-cell"></div>
                        <div class="grid-cell"></div>
                    </div>
                    <div class="cnn-label">MAX POOLING</div>
                </div>

                <div class="cnn-arrow"></div>

                <!-- 4. Conv 2 -->
                <div class="cnn-step">
                    <div class="cnn-visual conv-single">
                        <div class="layer green-layer"></div>
                    </div>
                    <div class="cnn-label">CONVOLUTION BLOCK 2</div>
                </div>

                <div class="cnn-arrow"></div>

                <!-- 5. Dense -->
                <div class="cnn-step">
                    <div class="cnn-visual dense-net">
                        <div class="neuron-col">
                            <span></span><span></span><span></span><span></span><span></span>
                        </div>
                        <div class="neuron-col mid">
                            <span></span><span></span><span></span>
                        </div>
                        <div class="neuron-col">
                            <span></span><span></span>
                        </div>
                    </div>
                    <div class="cnn-label">FULLY CONNECTED</div>
                </div>

                <div class="cnn-arrow"></div>

                <!-- 6. Output -->
                <div class="cnn-step">
                    <div class="cnn-visual output-circle">
                        <svg viewBox="0 0 36 36" class="circular-chart">
                            <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <path class="circle" stroke-dasharray="98, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        </svg>
                        <div class="percentage">98%</div>
                        <div class="result-label">DIAGNOSIS</div>
                    </div>
                    <div class="cnn-label">RESULT</div>
                </div>
            </div>

            <p class="diagram-footer">Çok katmanlı konvolüsyonel sinir ağlarımız (CNN), her pikseli analiz ederek medikal görüntülerdeki anormallikleri sınıflandırır.</p>
        </div>

        <div class="photo-grid">
            <div class="gallery-item">
                <div class="photo-box glass">
                    <img src="assets/images/kto cikti 1.jpg" alt="Analysis 1">
                </div>
                <div class="accuracy-text">Doğruluk: %97.8</div>
            </div>
            <div class="gallery-item">
                <div class="photo-box glass">
                    <img src="assets/images/kto cikti 2.jpg" alt="Analysis 2">
                </div>
                <div class="accuracy-text">Doğruluk: %99.2</div>
            </div>
            <div class="gallery-item">
                <div class="photo-box glass">
                    <img src="assets/images/kto cikti 3.jpg" alt="Analysis 3">
                </div>
                <div class="accuracy-text">Doğruluk: %98.4</div>
            </div>
        </div>
    </div>
</section>

<section id="contact" class="contact-section">
    <div class="container glass">
        <h2><?php echo $t['contact_title']; ?></h2>
        <div class="contact-info">
            <div class="person">
                <h3>Abdullah Kaan Akdağ</h3>
                <p><a href="tel:+905510609962">+90 551 060 9962</a></p>
            </div>
            <div class="person">
                <h3>Eymen Çapoğlu</h3>
                <p><a href="tel:+905384013081">+90 538 401 30 81</a></p>
            </div>
        </div>
    </div>
</section>

<?php include 'includes/footer.php'; ?>
