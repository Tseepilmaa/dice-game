// Тоглогчийн ээлжийг хадгалах хувьсагч, 1-р тоглогчийг 0, 2-р тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 0;

//Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

//Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй. 1-6 гэсэн утгыг хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var diceNumber = Math.floor(Math.random() * 6) + 1;

//Програм эхлэхэд бэлдэе
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

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


    //switchToNextPlayer();

    //Тоглогчийн ээлжийг солино
});
//Энэ функц нь тоглох ээлжийг дараачийн хүнд шилжүүлнэ.
function switchToNextPlayer() {
    //Ээлжийн оноог 0 болгоно
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    //Тоглогчийн ээлжийг нөгөө тоглогчид шилжүүлэх
    //Хэрэв идэвхтэй тоглогч нь 0 бвал идэвхтэй тоглогчийг 1 болго Үгүй бол 0 болго.
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    //if (activePlayer === 0)
    //   activePlayer = 1
    // activePlayer = 0;

    //Улаан цэгийг хайж олох 
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    //шоог түр алга болгох
    diceDom.style.display = "none";
}
// Тоглоомыг шинээр эхлэх функц бичих
//<button class="btn-new"><i class="ion-ios-plus-outline"></i>New game</button>
document.querySelector(".btn-new").addEventListener("click", function(){
    
});