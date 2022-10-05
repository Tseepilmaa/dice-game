//Глобал хувьсагчдыг зарлах
var activePlayer, scores, roundScore;

//Шооны зургийг үзүүлэх элементийг DOM-оос хайж олоод хадгалах
var diceDom = document.querySelector(".dice");

initGame();

//Тоглоом шинээр эхлэхэд бэлдэх функц
function initGame() {

    // Тоглогчийн ээлжийг хадгалах хувьсагч, 1-р тоглогчийг 0, 2-р тоглогчийг 1 гэж тэмдэглэе.
    activePlayer = 0;

    //Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
    scores = [0, 0];

    //Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
    roundScore = 0;

    //Шооны аль талаараа буусныг хадгалах хувьсагчид 1-6 гэсэн утгыг санамсаргүйгээр үүсгэж өгнө.
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    //Програм эхлэхэд бэлдэе
    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;

    //Тоглогчдын нэрийг буцааж гаргах
    document.getElementById('name-0').textContent="Player 1";
    document.getElementById('name-1').textContent="Player 2";

    //winner классыг remove хийх
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    //2 классаас active-ийг авч хаях
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");

    //Тоглоом эхлэхэд 1-р тоглогчийг автоматаар active болгох 
    document.querySelector(".player-0-panel").classList.add("active");


    diceDom.style.display = "none";
}
//Шоог шидэх эвентлистенер
document.querySelector(".btn-roll").addEventListener("click", function () {
    //1-6 хооронд санамсаргүй утга авах
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    //Шооны зургийг вэб дээр гаргаж ирнэ.
    diceDom.style.display = "block";

    //Буусан санамсаргүй тоонд харгалзах шооны зургийг вэб дээр гаргана.
    diceDom.src = "dice-" + diceNumber + ".png";
    //Буусан тоо 1-ээс ялгаатй бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ.

    if (diceNumber !== 1) {

        //1-ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө.
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;

    } else {

        switchToNextPlayer();
    }

});

//hold товчны эвентлистенер
document.querySelector(".btn-hold").addEventListener("click", function () {

    scores[activePlayer] = scores[activePlayer] + roundScore;

    //Дэлгэц дээр оноог нь өөрчилнө.
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

    //Уг тоглогч хожсон эсэхийг шалгах
    if (scores[activePlayer] >= 20) {

        //player1-ийн оронд winner гэж гаргах
        document.getElementById("name-" + activePlayer).textContent = "Winner!!!";
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    } else {
        switchToNextPlayer();
    }

});

//Энэ функц нь тоглох ээлжийг дараачийн хүнд шилжүүлнэ.
function switchToNextPlayer() {

    //Ээлжийн оноог 0 болгоно
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    //Хэрэв идэвхтэй тоглогч нь 0 бвал идэвхтэй тоглогчийг 1 болго Үгүй бол 0 болго.
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    //Улаан цэгийг хайж олох 
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    //шоог түр алга болгох
    diceDom.style.display = "none";
}
// New game товчийг дарвал Тоглоом шинээр эхлэх
document.querySelector(".btn-new").addEventListener("click", initGame);
