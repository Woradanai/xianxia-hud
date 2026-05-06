import { extension_settings } from '../../../extensions.js';

const extensionName = 'xianxia-hud';
const extensionFolderPath = `scripts/extensions/${extensionName}/`;

async function initHUD() {
    // โหลดไฟล์ CSS ของเรา
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = extensionFolderPath + 'style.css';
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
    
    // ดันหน้าจอไปแสดงในแชท
    $('body').append(hudHTML);
}

jQuery(async () => {
    initHUD();
});

