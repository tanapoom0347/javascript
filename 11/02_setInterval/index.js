let lyricArray = [
    'อยู่ๆก็มีแต่น้ำตา<br>จิตใจก็เริ่มอ่อนล้ามลายหายไป',
    'อยากกลับคืนวันให้เป็นดังเก่า<br>อยากกลับคืนวันให้เป็นของเรา',
    'ดอกไม้นั้นที่มีเธอให้เขา<br>แต่ดอกไม้นั้นของเราใช่มั้ย',
    'ปวดใจดังไฟสุมทรวง<br>ทะลวงอกฉัน',
    'เธอบอกว่าชั้นไม่ดี<br>มาบอกตอนนี้มันสายไป',
    'อยู่ทางนี้ พี่ทำงาน<br>ทำนา ทำสวน ทำไร่',
    'รู้อยู่แก่ใจว่าเธอไปไหนมา<br>เห็นอยู่ตำตาว่าเธอไปกับเขา',
    'มีแลมโบก็ยังติดแก๊สไม่เสร็จ<br>เงินในบัญชีมันก็ยังมีแค่ล้านเจ็ด',
    'จึงมาตามห้วงอารมณ์<br>ผสมกับความคิดถึงกัน<br>อย่ารำคาญกันเลยนะเธอจ๋า',
    'หากว่าเธอผ่านมาได้ยินเพลงนี้<br>คาดว่าเธอก็คงรู้ดีว่าเป็นชั้น',
    'หน้าชา ปากชา<br>ขาชา ไอ้นั่นก็ชา',
    'ได้เพียงยืนมองเธอกับเขา<br>ที่กำลังจะจากชั้นไป<br>ไม่มีคำพูดจาใดๆไม่มีเหตุผล',
    'ตอนชั้นที ว่าชั้นไม่ดีตรงไหน<br>ตอบชั้นที ว่าชั้นไม่ดีอย่างไร'
];

let randomButton = document.getElementById('random');
let stopButton = document.getElementById('stop');
let output = document.getElementById('output');

let timeoutId = 0;

randomButton.addEventListener('click', () => {
    timeoutId = setInterval(() => {
        let n = lyricArray.length;
        let index = Math.floor(Math.random() * n);
        let lyric = lyricArray[index];
        output.innerHTML = lyric;
    }, 3000);
});

stopButton.addEventListener('click', () => {
    clearInterval(timeoutId);
});