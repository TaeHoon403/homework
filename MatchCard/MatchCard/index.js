let flipCard1 = "", flipCard2 = "";
let matchSet = 16;
let cardList;





// 카드 일치여부 확인
function isMatch() {
    const img1 = flipCard1.querySelector("div:nth-child(1)>img").src;
    console.log(img1);

    const img2 = flipCard2.querySelector("div:nth-child(1)>img").src;
    console.log(img2);

    if (img1 === img2) {
        flipCard1.classList.replace("incorrect", "correct");
        flipCard2.classList.replace("incorrect", "correct");

        matchSet += 2;

        if (matchSet == 16) {
            alert("성공!!")
        }
    }
    else {
        flipCard1.classList.add("flip_b");
        flipCard2.classList.add("flip_b");
        flipCard1.classList.remove("flip_f");
        flipCard2.classList.remove("flip_f");
    }

    flipCard1 = "";
    flipCard2 = "";
}
// 게임 시작
function start() {
    if(matchSet == 16){
        matchSet = 0;
        flipCard1 = "";
        flipCard2 = "";
    }
    else{
        return;
    }

    backImg();
    frontImg();
    getCard();
    // 카드 클릭 시 뒤집기
    cardList.forEach(function (a) {
        a.addEventListener(
            "click"
            , function () {
                console.log("클릭됨");
                console.log(this);
                this.className += " flip_f";
                this.classList.remove("flip_b");


                if (flipCard1 == "") {
                    flipCard1 = this;

                }
                else if (flipCard1 != "" && flipCard2 != "") {
                    const wait = window.setTimeout(
                        function () {
                            flipCard1 = this;
                        }
                        , 800
                    );

                }
                else {
                    flipCard2 = this;
                    const timer = window.setTimeout(
                        function () {
                            isMatch();
                            console.log(matchSet);

                        }
                        , 2000
                    );
                }

                console.log(flipCard1);
                console.log(flipCard2);
            }
        )
    });
}

// 카드 요소 수집
function getCard() {
    cardList = document.querySelectorAll(".incorrect");
}

// 뒷면 이미지 설정
function backImg() {

    const arr = document.querySelectorAll(".back");

    for (let i = 0; i < arr.length; i++) {
        const imgNode = document.createElement("img");
        imgNode.setAttribute("src", "./back.webp");
        arr[i].append(imgNode);
    }
}


// 앞면 위치 랜덤으로 설정
function frontImg() {
    src1 = "https://item.kakaocdn.net/do/df2d96acfd5a739f61945481ec3a18c6ba2da8249bd9ffef143efb890203e009"
    src2 = src1;
    src3 = "https://item.kakaocdn.net/do/df2d96acfd5a739f61945481ec3a18c6113e2bd2b7407c8202a97d2241a96625"
    src4 = src3;
    src5 = "https://item.kakaocdn.net/do/df2d96acfd5a739f61945481ec3a18c6a88f7b2cbb72be0bdfff91ad65b168ab"
    src6 = src5;
    src7 = "https://item.kakaocdn.net/do/df2d96acfd5a739f61945481ec3a18c615b3f4e3c2033bfd702a321ec6eda72c"
    src8 = src7;
    src9 = "https://item.kakaocdn.net/do/df2d96acfd5a739f61945481ec3a18c62df16ed7012359e344d47930e49e9310"
    src10 = src9;
    src11 = "https://item.kakaocdn.net/do/df2d96acfd5a739f61945481ec3a18c69f5287469802eca457586a25a096fd31"
    src12 = src11;
    src13 = "https://item.kakaocdn.net/do/df2d96acfd5a739f61945481ec3a18c6616b58f7bf017e58d417ccb3283deeb3"
    src14 = src13;
    src15 = "https://item.kakaocdn.net/do/df2d96acfd5a739f61945481ec3a18c682f3bd8c9735553d03f6f982e10ebe70"
    src16 = src15;

    let arr = [src1, src2, src3, src4, src5, src6, src7, src8, src9, src10, src11, src12, src13, src14, src15, src16];

    arr = shuffleArray(arr);

    const imgArr = document.querySelectorAll(".front>img");
    for (let i = 0; i < imgArr.length; i++) {
        imgArr[i].setAttribute("src", arr[i]);
        imgArr[i].style.opacity = 1;
    }
}


// 배열 내 데이터 무작위 순서로 섞기
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}