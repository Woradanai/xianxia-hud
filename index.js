jQuery(async () => {
    const extensionName = 'xianxia-hud';
    const extensionFolderPath = `scripts/extensions/${extensionName}/`;

    function initHUD() {
        // โหลด CSS ถ้ายังไม่ได้โหลด
        if (!$('link[href="' + extensionFolderPath + 'style.css"]').length) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = extensionFolderPath + 'style.css';
            document.head.appendChild(link);
        }

        // สร้างและแปะ HUD ลงไป
        if ($('#xianxia-hud-container').length === 0) {
            const hudHTML = `
            <div class="xianxia-hud" id="xianxia-hud-container">
              <div class="hud-header">
                <span class="race-badge">เผ่ามาร</span>
                <span class="realm-level">ขั้นก่อตั้งรากฐาน (ระดับ 3)</span>
              </div>
              <div class="hud-stats">
                <div class="stat-row">
                  <span class="stat-label">ปราณชีวิต</span>
                  <div class="bar-container">
                    <div class="bar-fill health-fill" style="width: 80%;"></div>
                  </div>
                  <span class="stat-value">80/100</span>
                </div>
                <div class="stat-row">
                  <span class="stat-label">ไอพรรคมาร</span>
                  <div class="bar-container">
                    <div class="bar-fill qi-fill" style="width: 45%;"></div>
                  </div>
                  <span class="stat-value">45/100</span>
                </div>
              </div>
            </div>
            `;
            $('body').append(hudHTML);
            console.log("HUD Loaded!"); // แอบใส่ log ไว้เช็กว่าโค้ดทำงานไหม
        }
    }

    // ดีเลย์นิดนึงเผื่อ ST โหลด UI ของมันเองอยู่
    setTimeout(initHUD, 1000);
});
