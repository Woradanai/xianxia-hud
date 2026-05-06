async function initHUD() {
    // โหลดไฟล์ CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '/scripts/extensions/xianxia-hud/style.css';
    document.head.appendChild(link);

    // สร้างโครงสร้างหน้าจอ HUD
    const hudHTML = `
    <div class="xianxia-hud">
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
    
    // ดันหน้าจอไปแสดงในแชท (เช็คก่อนว่ามีหรือยัง จะได้ไม่ซ้ำ)
    if ($('.xianxia-hud').length === 0) {
        $('body').append(hudHTML);
    }
}

// หน่วงเวลา 2 วินาทีเพื่อให้ระบบหลักของ ST โหลดให้เสร็จก่อน แล้วค่อยโชว์ HUD
setTimeout(() => {
    initHUD();
}, 2000);

