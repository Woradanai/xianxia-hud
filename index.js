jQuery(async () => {
    setTimeout(() => {
        if ($('#xianxia-hud-container').length === 0) {
            const hudHTML = `
            <div class="xianxia-hud" id="xianxia-hud-container">
              <div class="hud-header">
                <span class="race-badge">Demon Clan</span>
                <span class="realm-level">Foundation (Lv.3)</span>
              </div>
              <div class="hud-stats">
                <div class="stat-row">
                  <span class="stat-label">HP</span>
                  <div class="bar-container">
                    <div class="bar-fill health-fill" style="width: 80%;"></div>
                  </div>
                  <span class="stat-value">80/100</span>
                </div>
                <div class="stat-row">
                  <span class="stat-label">Demonic Qi</span>
                  <div class="bar-container">
                    <div class="bar-fill qi-fill" style="width: 45%;"></div>
                  </div>
                  <span class="stat-value">45/100</span>
                </div>
              </div>
            </div>
            `;
            
            // เชื่อฟังปั้นหวาน เปลี่ยนจาก 'body' เป็น '#chat' 
            $('#chat').append(hudHTML); 
            
            console.log("Xianxia HUD Loaded! Thanks to Pan-Waan and Achi!");
        }
    }, 2000);
});
