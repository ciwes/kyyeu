// DANH SÁCH KHÁCH MỜI VÀ LỜI CHÚC
const GUEST_LIST = {
    "HANADZ": {
        name: "Ngọc Hân",
        msg: "Gửi Hân - ngoại lệ ngọt ngào nhất trong thanh xuân của tớ. Cảm ơn cậu đã xuất hiện, chịu đựng cái tính khí của tớ và biến những ngày tháng cấp 3 bình thường trở nên rực rỡ. Kỷ yếu chỉ là cái cớ, điều tớ muốn nhất là được cùng Hân lưu giữ khoảnh khắc tuổi 18 này mãi mãi. Hôm đó, hãy là cô gái rạng rỡ nhất và để tớ được đứng cạnh Hân trong mọi khung hình nhé!"
    },
    "PHUC36": {
        name: "Phạm Phúc",
        msg: "Chào chiến thần Lý, người anh em chí cốt! Bao năm cùng nhau giải đề, giờ là lúc anh em mình cùng 'giải' bài toán tạo dáng chụp ảnh nhé!"
    },
    "KHANH": {
        name: "Nguyễn Khánh",
        msg: "Gửi Khánh, thằng bạn thân của tôi. Mấy năm qua cảm ơn ông đã luôn ở bên. Hôm đó nhớ đến sớm check-in với tao kiểu ảnh để đời nhé!"
    },
    "NINH26": {
        name: "Thái Ninh",
        msg: "Chào Ninh, rất vui vì được đồng hành cùng cậu. Mong cậu sẽ có mặt đầy đủ để cùng lớp mình lưu giữ những khoảnh khắc đẹp."
    },
    "CHU26": {
        name: "Ngọc Chu",
        msg: "Chào Ngoc, hy vọng cậu sẽ có những kỷ niệm thật vui vẻ và đáng nhớ trong buổi chụp kỷ yếu này nhé!"
    },
    "TUAN26": {
        name: "Bùi Tuấn",
        msg: "Chào Tuấn, chúc ông bạn có một ngày chụp ảnh thật ngầu và cháy hết mình với anh em!"
    },
    "VAN26": {
        name: "Thùy Vân",
        msg: "Gửi Vân, chúc cậu luôn xinh đẹp và rạng rỡ. Hãy cùng tạo nên những bức ảnh kỷ niệm thật đẹp cùng cả lớp nhé!"
    },
    "LINH26": {
        name: "Khánh Linh",
        msg: "Chào Linh, mong rằng buổi chụp kỷ yếu này sẽ lưu giữ lại những nụ cười tươi nhất của cậu."
    },
    "ANNH26": {
        name: "Annh Pham",
        msg: "Chào Banh, đã lâu không gặp. Rất mong cậu có thể bớt chút thời gian đến chung vui và chụp cùng tớ và lớp vài kiểu ảnh kỷ niệm."
    },
    "THAYLICHVIPPRO": {
        name: "Thầy Lịch",
        msg: "Em chào Thầy ạ! Em cảm ơn Thầy đã dẫn dắt chúng em suốt thời gian qua. Chúng em rất mong Thầy đến tham dự chụp ảnh cùng tập thể lớp ạ."
    },
    "COHAI": {
        name: "Cô Hải",
        msg: "Em chào Cô ạ! Cảm ơn Cô vì những bài giảng tuyệt vời. Sự hiện diện của Cô là niềm vui lớn cho chúng em trong ngày đặc biệt này."
    },
    "KYYEU": {
        name: "Cậu",
        msg: "Chào mừng cậu đến với buổi kỷ yếu của tớ. Hãy cùng nhau tạo nên một cái kết thật đẹp cho thanh xuân này nhé!"
    }
};

function checkCode() {
    const input = document.getElementById('access-code').value.toUpperCase().trim();
    const errorDiv = document.getElementById('error');
    
    let guestKey = null;
    if (GUEST_LIST[input]) { guestKey = input; } 
    else if (input.startsWith("12A")) { guestKey = "12A"; }

    if (guestKey) {
        const filmOverlay = document.getElementById('film-overlay');
        const errorDiv = document.getElementById('error');
        
        // Ẩn lỗi, bật phim
        errorDiv.style.opacity = '0';
        filmOverlay.classList.add('active');

        const guest = GUEST_LIST[guestKey];
        
        // --- SỬA THỜI GIAN NGẮN HƠN TẠI ĐÂY ---
        
        // 1. Đổi nội dung cực nhanh: Chỉ đợi 0.7 giây (700ms)
        setTimeout(() => {
            document.getElementById('guest-name').innerText = "Gửi " + guest.name;
            document.getElementById('personal-msg').innerText = guest.msg;
            transitionPage('page1', 'page2');
        }, 700); 

        // 2. Tắt phim sau 1.5 giây (1500ms) -> Nhanh gấp đôi lúc nãy
        setTimeout(() => {
            filmOverlay.classList.remove('active');
        }, 1500);

    } else {
        errorDiv.style.opacity = '1';
        const frame = document.querySelector('#page1 .decorative-frame');
        frame.style.transform = 'translateX(10px)';
        setTimeout(() => frame.style.transform = 'translateX(-10px)', 100);
        setTimeout(() => frame.style.transform = 'translateX(0)', 200);
    }
}

function nextPage(current) { transitionPage(`page${current}`, `page${current + 1}`); }

function transitionPage(fromId, toId) {
    const fromPage = document.getElementById(fromId);
    const toPage = document.getElementById(toId);
    fromPage.classList.remove('active');
    fromPage.classList.add('exit');
    setTimeout(() => { toPage.classList.add('active'); }, 600); 
}

document.getElementById("access-code").addEventListener("keypress", function(e) {
    if (e.key === "Enter") checkCode();
});

// --- HIỆU ỨNG KÝ TỰ TOÁN HỌC BAY ---
const canvas = document.getElementById('canvas-bg');
const ctx = canvas.getContext('2d');
let particlesArray;

const mathSymbols = ['∑', '∫', 'π', '∞', '√', 'Δ', 'λ', 'θ', 'Ω', '∂', '∇', '∀', '∃', '∈', '∉', '⊂', '⊃', '∪', '∩', '∮', '∴', '∵', '⊥', '∥', '∠', 'ħ', 'Ψ', 'Φ', 'ζ', 'ξ', 'lim', 'log', 'ln', 'd/dx', '∫∫', 'e^x'];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 15 + 8; 
        this.speedX = (Math.random() * 0.5) - 0.25;
        this.speedY = (Math.random() * 0.5) - 0.25;
        this.opacity = Math.random() * 0.4 + 0.1;
        this.symbol = mathSymbols[Math.floor(Math.random() * mathSymbols.length)]; 
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (Math.random() > 0.98) this.opacity = Math.random() * 0.4;
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
    }
    draw() {
        ctx.fillStyle = `rgba(197, 160, 89, ${this.opacity})`; 
        ctx.font = `italic ${this.size}px serif`; 
        ctx.fillText(this.symbol, this.x, this.y); 
    }
}

function initParticles() {
    particlesArray = [];
    let numberOfParticles = 150; 
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animateParticles);
}
initParticles();
animateParticles();
