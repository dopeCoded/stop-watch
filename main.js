let seconds = 0;
let timer;

// 時間表示の更新
function updateDisplay() {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    document.getElementById('display').textContent = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

// スタートボタン
document.getElementById('start').addEventListener('click', () => {
    timer = setInterval(() => {
        seconds++;
        updateDisplay();
    }, 1000);
    document.getElementById('start').disabled = true;
    document.getElementById('stop').disabled = false;
    document.getElementById('reset').disabled = false;
});

// ストップボタン
document.getElementById('stop').addEventListener('click', () => {
    clearInterval(timer);
    document.getElementById('start').disabled = false;
});

// リセットボタン
document.getElementById('reset').addEventListener('click', () => {
    clearInterval(timer);
    seconds = 0;
    updateDisplay();
    document.getElementById('start').disabled = false;
    document.getElementById('stop').disabled = true;
    document.getElementById('reset').disabled = true;
});

updateDisplay();
