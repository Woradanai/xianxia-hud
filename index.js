jQuery(async () => {
    // รอให้ระบบโหลดแป๊บนึง
    setTimeout(() => {
        // เช็กว่ามี HUD อยู่หรือยัง ถ้ายังไม่มีให้สร้างขึ้นมา
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
            console.log("Achi's Xianxia HUD Loaded successfully!");
        }
    }, 2000); // หน่วงเวลา 2 วินาทีให้ ST โหลดหน้าต่างแชทเสร็จก่อน
});

