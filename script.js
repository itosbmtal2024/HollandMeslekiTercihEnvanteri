const quizForm = document.getElementById('quiz-form');
const submitBtn = document.getElementById('submit-btn');
const resultsDiv = document.getElementById('results');
const resultsChart = document.getElementById('results-chart');
const emailInput = document.getElementById('email-input'); // E-posta girişi için input alanı

let scores = {
    ARAŞTIRICI: 0,
    ARTİSTİK: 0,
    SOSYAL: 0,
    GİRİŞİMCİ: 0,
    GELENEKSEL: 0,
    GERÇEKÇİ: 0,
};

// Sorular burada tanımlanacak
const questions = [
    { id: 1, text: 'Kuşların nasıl göç ettiğini öğrenmek', category: 'ARAŞTIRICI' },
    { id: 2, text: 'İnsanlara yeni bir hobi öğretmek', category: 'SOSYAL' },
    { id: 3, text: 'Hava durumu tahmini için kişisel gözlemleri kullanmak', category: 'ARAŞTIRICI' },
    { id: 4, text: 'Bitki hastalıklarını incelemek', category: 'ARAŞTIRICI' },
    { id: 5, text: 'Bankaya yatırılan paranın faizini hesaplamak', category: 'GELENEKSEL' },
    { id: 6, text: 'Resimler tasarlamak ve çizmek', category: 'ARTİSTİK' },
    { id: 7, text: 'Bir iş yaptırmak için parayla adam tutmak', category: 'GİRİŞİMCİ' },
    { id: 8, text: 'Bir bilim müzesini incelemek', category: 'ARAŞTIRICI' },
    { id: 9, text: 'Gözlük için mercekleri parlatmak', category: 'GERÇEKÇİ' },
    { id: 10, text: 'Modern yazarların yazı stillerini araştırmak', category: 'ARTİSTİK' },
    { id: 11, text: 'Mikroskop gibi laboratuar aletlerini kullanmak', category: 'ARAŞTIRICI' },
    { id: 12, text: 'Bir dükkanda envanter tutmak', category: 'GELENEKSEL' },
    { id: 13, text: 'Bir kuş yemliği tasarlamak', category: 'GERÇEKÇİ' },
    { id: 14, text: 'Bir oyun için takım oluşturma', category: 'ARTİSTİK' },
    { id: 15, text: 'Yeni bir satış kampanyası düzenlemek', category: 'GİRİŞİMCİ' },
    { id: 16, text: 'Bir toplantıyı yönetmek', category: 'SOSYAL' },
    { id: 17, text: 'Vitaminlerin hayvanlar üzerindeki etkisini araştırmak', category: 'ARAŞTIRICI' },
    { id: 18, text: 'Küçük bir işletmeyi idare etmek', category: 'GİRİŞİMCİ' },
    { id: 19, text: 'Bir makinenin nasıl kullanılacağı konusunda talimatlar yazmak', category: 'GELENEKSEL' },
    { id: 20, text: 'Diğer insanlar için iş planlamak', category: 'GİRİŞİMCİ' },
    { id: 21, text: 'Küçük grup tartışmalarına katılmak', category: 'SOSYAL' },
    { id: 22, text: 'Yeni bir cerrahi işlem hakkında yazılar okumak', category: 'ARAŞTIRICI' },
    { id: 23, text: 'Mali bir hesaptaki hataları bulmak', category: 'GELENEKSEL' },
    { id: 24, text: 'Bir rapor taslağındaki hataları bulmak incelemek', category: 'GELENEKSEL' },
    { id: 25, text: 'Planlar ve grafikler yapmak', category: 'GİRİŞİMCİ' },
    { id: 26, text: 'Fırtınadan sonra zarar görmüş bir ağacı onarmak', category: 'GERÇEKÇİ' },
    { id: 27, text: 'Kusurları bulmak için mamulleri incelemek', category: 'GERÇEKÇİ' },
    { id: 28, text: 'Telefonla iş idare etmek', category: 'SOSYAL' },
    { id: 29, text: 'Acil durumlarda insanlara yardım etmek', category: 'SOSYAL' },
    { id: 30, text: 'Bir kuruluşun parayla ilgili bütün işlerini idare etmek', category: 'GELENEKSEL' },
    { id: 31, text: 'Müzik eseri bestelemek veya düzenlemek', category: 'ARTİSTİK' },
    { id: 32, text: 'Filmler için konu müziği bestelemek', category: 'ARTİSTİK' },
    { id: 33, text: 'Yeni kurallar veya politikalar geliştirmek', category: 'GİRİŞİMCİ' },
    { id: 34, text: 'Biyoloji çalışmak', category: 'ARAŞTIRICI' },
    { id: 35, text: 'Bir politik kurum için kampanyaya katılmak', category: 'SOSYAL' },
    { id: 36, text: 'Maddeleri ayırmak, biriktirmek ve saklamak', category: 'GELENEKSEL' },
    { id: 37, text: 'Bir toplum geliştirme projesinde çalışmak', category: 'SOSYAL' },
    { id: 38, text: 'Bir daktilonun nasıl tamir edileceğini öğrenmek', category: 'GERÇEKÇİ' },
    { id: 39, text: 'Dünyanın merkezi, güneş ve yıldızlar hakkında kitaplar okumak', category: 'ARAŞTIRICI' },
    { id: 40, text: 'Tam doğru zaman tutmak için bir saati ayarlamak', category: 'GERÇEKÇİ' },
    { id: 41, text: 'Beynin nasıl çalıştığını öğrenmek', category: 'ARAŞTIRICI' },
    { id: 42, text: 'Yaratıcı fotoğraflar çekmek', category: 'ARTİSTİK' },
    { id: 43, text: 'Masraflara ait hesap kayıtları tutmak', category: 'GELENEKSEL' },
    { id: 44, text: 'Bir bandoda çalmak', category: 'ARTİSTİK' },
    { id: 45, text: 'Bir orkestrada caz müziği çalmak', category: 'ARTİSTİK' },
    { id: 46, text: 'Bir grup veya klüp için bütçe hazırlamak', category: 'GELENEKSEL' },
    { id: 47, text: 'Depremin nedenlerini araştırmak', category: 'ARAŞTIRICI' },
    { id: 48, text: 'Ünlü bir bilim adamının dersine katılmak', category: 'ARAŞTIRICI' },
    { id: 49, text: 'Bir proje üzerinde başkaları ile beraber çalışmak', category: 'SOSYAL' },
    { id: 50, text: 'Bir sinema filmi senaryosu yazmak', category: 'ARTİSTİK' },
    { id: 51, text: 'Şirket hakkındaki şikayetleri konusunda işçilerle röportaj yapmak', category: 'SOSYAL' },
    { id: 52, text: 'Mobilya yapmak', category: 'GERÇEKÇİ' },
    { id: 53, text: 'Değerli taşları kesmeyi ve parlatmayı öğrenmek', category: 'GERÇEKÇİ' },
    { id: 54, text: 'Yaralı bir insana ilkyardım yapmak', category: 'SOSYAL' },
    { id: 55, text: 'Yerel bir radyo istasyonunda çalınması için müzik parçaları seçmek', category: 'ARTİSTİK' },
    { id: 56, text: 'İl genel meclisinde çalışmak', category: 'SOSYAL' },
    { id: 57, text: 'Mali raporları hazırlamak ve yorumlamak', category: 'GELENEKSEL' },
    { id: 58, text: 'Tehlikedeki bir insana yardım etmeye çalışmak', category: 'SOSYAL' },
    { id: 59, text: 'Elektronik alet çalıştırmak', category: 'GERÇEKÇİ' },
    { id: 60, text: 'Çocuklara nasıl oyun oynanacağını veya spor yapılacağını göstermek', category: 'SOSYAL' },
    { id: 61, text: 'Bir ustayı televizyon tamir ederken seyretmek', category: 'GERÇEKÇİ' },
    { id: 62, text: 'Bir magazin hikayesini anlatan çizimler yapmak', category: 'ARTİSTİK' },
    { id: 63, text: 'Ziyaretçilere yol göstermek', category: 'SOSYAL' },
    { id: 64, text: 'Diğer insanların bir problemin çözülebileceğine nasıl inandıklarını öğrenmek', category: 'SOSYAL' },
    { id: 65, text: 'Bir sergiye gezi düzenlemek', category: 'SOSYAL' },
    { id: 66, text: 'Uyuşturucu kullanan insanlara danışmanlık yapmak', category: 'SOSYAL' },
    { id: 67, text: 'İş gazeteleri veya dergileri okumak', category: 'ARAŞTIRICI' },
    { id: 68, text: 'Yıldızların oluşumunu öğrenmek', category: 'ARAŞTIRICI' },
    { id: 69, text: 'Taksit ödemelerini tahsil etmek', category: 'GELENEKSEL' },
    { id: 70, text: 'Bir slayt veya film projektörünü çalıştırmak', category: 'GERÇEKÇİ' },
    { id: 71, text: 'Kelebekleri gözlemlemek ve sınıflandırmak', category: 'ARAŞTIRICI' },
    { id: 72, text: 'Metal bir heykel tasarlamak', category: 'ARTİSTİK' },
    { id: 73, text: 'İnsanlara kanuni doğruları açıklamak', category: 'SOSYAL' },
    { id: 74, text: 'Kısa hikayeler yazmak', category: 'ARTİSTİK' },
    { id: 75, text: 'İnsanların mali kararlar vermelerine yardımcı olmak', category: 'GELENEKSEL' },
    { id: 76, text: 'Gelir vergisi kazancını düzenlemek', category: 'GELENEKSEL' },
    { id: 77, text: 'Sertifika, plaket veya taktir belgesi kazanmak', category: 'GİRİŞİMCİ' },
    { id: 78, text: 'Tiyatro oyunu, müzikaller gibi sanatsal etkinliklerin eleştirilerini yazmak', category: 'ARTİSTİK' },
    { id: 79, text: 'Aylık bütçe planı yapmak', category: 'GELENEKSEL' },
    { id: 80, text: 'Bir havuz veya gölde yabani hayatı araştırmak', category: 'ARAŞTIRICI' },
    { id: 81, text: 'Bir tiyatro oyununda rol almak', category: 'ARTİSTİK' },
    { id: 82, text: 'Bir resim çerçevesi yapmak', category: 'ARTİSTİK' },
    { id: 83, text: 'İş gezilerine çıkmak', category: 'GİRİŞİMCİ' },
    { id: 84, text: 'Orman yangınları için gözetleme yapmak', category: 'GERÇEKÇİ' },
    { id: 85, text: 'Yeni alışveriş merkezinin tanıtımını yapmak', category: 'GİRİŞİMCİ' },
    { id: 86, text: 'Bir muhasebecilik sistemi kurmak', category: 'GELENEKSEL' },
    { id: 87, text: 'Arkadaşlar arasındaki bir tartışmayı yatıştırmak', category: 'SOSYAL' },
    { id: 88, text: 'Birine önemli bir karar vermesinde yardım etmek', category: 'SOSYAL' },
    { id: 89, text: 'Taşıma için nakil maliyetlerini hesaplamak', category: 'GELENEKSEL' },
    { id: 90, text: 'Fıkralar ve hikayeler anlatarak insanları eğlendirmek', category: 'SOSYAL' },
];

// Soruları sayfaya ekle
function loadQuestions() {
    const questionsContainer = document.getElementById('questions');
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionNumber = document.createElement('span');
        questionNumber.classList.add('question-number');
        questionNumber.textContent = `Soru ${question.id}:`;
        questionDiv.appendChild(questionNumber);

        const questionText = document.createElement('p');
        questionText.textContent = question.text;
        questionDiv.appendChild(questionText);

        const optionsDiv = document.createElement('div');
        optionsDiv.classList.add('options');

        for (let i = 0; i < 3; i++) {
            const optionDiv = document.createElement('div');
            optionDiv.classList.add('option');

            // Yeni puanları buraya atıyoruz
            const values = [2, 1, 0];
            optionDiv.setAttribute('data-value', values[i]); // Puanı buradan alıyoruz

            optionDiv.textContent = ['Hoşlanıyorum', 'Kararsızım', 'Hoşlanmıyorum'][i];

            optionDiv.addEventListener('click', function() {
                const questionDiv = this.closest('.question');
                questionDiv.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');
                checkAllAnswered();
            });

            optionsDiv.appendChild(optionDiv);
        }

        questionDiv.appendChild(optionsDiv);
        questionsContainer.appendChild(questionDiv);
    });
}

function checkAllAnswered() {
    const allQuestions = quizForm.querySelectorAll('.question');
    const allAnswered = Array.from(allQuestions).every(question => 
        question.querySelector('.option.selected')
    );
    submitBtn.disabled = !allAnswered || emailInput.value.trim() === ''; // E-posta kontrolü
}

submitBtn.addEventListener('click', function() {
    if (emailInput.value.trim() === '') {
        alert('Lütfen e-posta adresinizi girin.');
        return;
    }

    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`.question:nth-child(${index + 1}) .option.selected`);
        if (selectedOption) {
            const value = parseInt(selectedOption.getAttribute('data-value'));
            scores[question.category] += value;
        }
    });

    const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
    const percentages = {};
    let maxCategory = '';
    let maxScore = 0;

    for (const category in scores) {
        const score = Math.max(scores[category], 0);
        percentages[category] = (score / totalScore) * 100 || 0;
        if (percentages[category] > maxScore) {
            maxScore = percentages[category];
            maxCategory = category;
        }
    }

    // Sonuçları göster
    resultsDiv.classList.remove('hidden');
    resultsDiv.innerHTML = `<h3>Sonuçlar</h3>`;
    for (const category in percentages) {
        const score = Math.max(scores[category], 0); // Skoru al
        resultsDiv.innerHTML += `<p>${category}: Puan: ${score}, Yüzde: ${percentages[category].toFixed(2)}%</p>`;
    }
    resultsDiv.innerHTML += `<h4>En Yüksek Kategori: ${maxCategory}</h4>`;

    // Grafiği çiz
    drawChart(percentages);

    // E-posta gönderme işlemi
    sendResultsByEmail(emailInput.value, percentages, maxCategory);
});

// E-posta gönderme fonksiyonu (EmailJS ile)
function sendResultsByEmail(email, percentages, maxCategory) {
    emailjs.send('itosbmtal2024', 'template_oj83twk', {
        to_email: email,
        message: `Sonuçlar:\n${Object.entries(percentages).map(([category, percentage]) => `${category}: %${percentage.toFixed(2)}`).join('\n')}\nEn Yüksek Kategori: ${maxCategory}`
    }, '-rKmHqcLFJuT7uwKf')
    .then((response) => {
        console.log('E-posta başarıyla gönderildi:', response.status, response.text);
        alert('Sonuçlar başarıyla e-posta adresinize gönderildi.');
    }, (error) => {
        console.error('E-posta gönderim hatası:', error);
        alert('E-posta gönderiminde bir sorun oluştu.');
    });
}

function drawChart(data) {
    const ctx = resultsChart.getContext('2d');
    const chartData = {
        labels: Object.keys(data),
        datasets: [{
            label: 'Kategoriler',
            data: Object.values(data),
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
            borderWidth: 1
        }]
    };

    const config = {
        type: 'bar',
        data: chartData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    new Chart(ctx, config);
}

// Soruları yükle
loadQuestions();
