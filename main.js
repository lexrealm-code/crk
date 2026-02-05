(function(_0x1b2c3d){
    const _0xKEY = "crk2026";
    const _0xM = {
        'YWRzb3lhZA==': 'aHR0cHM6Ly9odWt1bXN1ei5kZS9hcGkvbWVybmlzLnBocD9hZD17djF9JnNveWFkPXt2Mn0=',
        'dGM=': 'aHR0cHM6Ly9hcmFzdGlyLnNicy9hcGkvc3VsYWxlLnBocD90Yz17djF9',
        'c3VsYWxl': 'aHR0cHM6Ly9odWt1bXN1ei5kZS9hcGkvc3VsYWxlLnBocD90Yz17djF9',
        'YWRyZXM=': 'aHR0cHM6Ly9hcmFzdGlyLnNicy9hcGkvYWRyZXMucGhwP3RjPXt2MX0=',
        'aXN5ZXJp': 'aHR0cHM6Ly9hcmFzdGlyLnNicy9hcGkvaXN5ZXJpLnBocD90Yz17djF9',
        'bXVsdGVjaQ==': 'aHR0cHM6Ly9odWt1bXN1ei5kZS9hcGkvbXVsdGVjaS5waHA/dGM9e3YxfQ==',
        'Z3NtX3Rj': 'aHR0cHM6Ly9hcmFzdGlyLnNicy9hcGkvZ3NtdGMucGhwP2dzbT17djF9',
        'dGNfZ3Nt': 'aHR0cHM6Ly9odWt1bXN1ei5kZS9hcGkvZ3NtLnBocD90Yz17djF9',
        'cGxha2E=': 'aHR0cHM6Ly9odWt1bXN1ei5kZS9wbGFrYS9hcGkucGhwP2lzbGVtPWJhc2xhdCZwbGFrYT17djF9',
        'ZGNpZA==': 'aHR0cHM6Ly9odWt1bXN1ei5kZS9hcGkvZGlzY29yZDIucGhwP2lkPXt2MX0='
    };

    const _0xDec = (_0xS) => atob(_0xS);

    window.log = function(msg) {
        const box = document.getElementById('toast-container');
        const el = document.createElement('div');
        el.className = 'toast'; el.innerText = msg;
        box.appendChild(el);
        setTimeout(() => { el.style.opacity = '0'; setTimeout(() => el.remove(), 500); }, 3000);
    };

    window.kayit = function() {
        const u = document.getElementById('user_input').value;
        const p = document.getElementById('pass_input').value;
        if(u && p) { localStorage.setItem('user_'+u, p); log("OPERATOR TANIMLANDI."); }
    };

    window.giris = function() {
        const u = document.getElementById('user_input').value;
        const p = document.getElementById('pass_input').value;
        const k = document.getElementById('key_input').value;
        if(k !== _0xKEY) { log("ACCESS DENIED: WRONG KEY"); return; }
        if(localStorage.getItem('user_'+u) === p && u) {
            document.getElementById('auth-screen').style.display = 'none';
            document.getElementById('main-panel').style.display = 'grid';
            document.getElementById('display_user').innerText = u.toUpperCase();
            log("SİSTEME ERİŞİM SAĞLANDI.");
        } else { log("KİMLİK DOĞRULANAMADI."); }
    };

    let _0xCM = "";
    window.ac = function(m, el) {
        _0xCM = m;
        document.getElementById('home_v').style.display = 'none';
        document.getElementById('query_v').style.display = 'block';
        document.getElementById('monitor_v').classList.remove('active');
        document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active'));
        el.classList.add('active');
        const area = document.getElementById('input_area');
        document.getElementById('tool_name').innerText = m.toUpperCase().replace('_', ' ');
        area.innerHTML = "";
        if(m === 'adsoyad') {
            area.innerHTML = `<div class="input-box"><label>İSİM</label><input type="text" id="v1"></div><div class="input-box"><label>SOYİSİM</label><input type="text" id="v2"></div>`;
        } else {
            area.innerHTML = `<div class="input-box" style="grid-column: span 2;"><label>VERİ GİRİŞİ</label><input type="text" id="v1"></div>`;
        }
    };

    window.sorgula = function() {
        const v1 = document.getElementById('v1')?.value;
        const v2 = document.getElementById('v2')?.value;
        const frame = document.getElementById('api_frame');
        const mon = document.getElementById('monitor_v');
        
        let _0xTarget = btoa(_0xCM);
        if(_0xM[_0xTarget]) {
            let _0xURL = _0xDec(_0xM[_0xTarget]).replace('{v1}', v1).replace('{v2}', v2);
            log("VERİ ÇEKME İŞLEMİ BAŞLADI...");
            mon.classList.add('active');
            frame.src = _0xURL;
        }
    };

    window.kopyala = function() { log("VERİLER PANEYE ALINDI."); };

    // Anti-Source Protect Layer
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.onkeydown = (e) => {
        if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74 || e.keyCode == 67)) || (e.ctrlKey && e.keyCode == 85)) return false;
    };
})();
