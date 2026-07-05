// دالة العداد التنازلي التلقائي
function updateCountdown() {
    const endDate = new Date('2026-07-31T23:59:59');
    const now = new Date();
    const diffTime = endDate - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    const displayElement = document.getElementById('countdown-display');
    
    if (diffDays > 0) {
        displayElement.innerText = `متبقي ${diffDays} يوم على انتهاء التأسيس - طريقك للطب يبدأ من هنا`;
    } else {
        displayElement.innerText = "انتهت فترة التأسيس، حان وقت الانطلاق!";
    }
}

// تحديث العداد فور فتح الصفحة
updateCountdown();

// وظائف المؤقت
function startTimer() { console.log("تم بدء المؤقت"); }
function pauseTimer() { console.log("تم إيقاف المؤقت"); }
