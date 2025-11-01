document.addEventListener('DOMContentLoaded', () => {
    const userJson = localStorage.getItem('ResetPoint');
    if (!userJson) {
        alert("使用者資料遺失，請重新開始遊戲。");
        window.parent.document.getElementById('contentFrame').src = 'home.html';
    }
    const user = JSON.parse(userJson);

    const chapterDetail = {
        'leaf-01': {
            title: '初次啟動',
            content: `<span class="sentence">「近日，一款名為《蜜語》的AI戀人應用程式風靡全球，主打高擬真對話系統、情感演算——」</span>
                      <br><br>陰影黏稠的附在牆角和空氣中，像是不小心打翻的墨汁惹人生厭，空無一人的家裡只有晚間新聞的播報聲空洞的迴盪。
                      <br><br>我一如既往拖著沉重的步伐朝著房間走去，卻在經過電視機時，視線不自覺的被光影閃爍的畫面吸引。
                      <br><br><span class="sentence">「根據開發商表示，《蜜語》主打高擬真互動模型，內建多種人格設定，透過語意學習與情緒演算，打造出具備陪伴、傾聽、戀愛互動等功能的虛擬戀人角色。」</span>
                      <br><br>我鬼使神差的拿出手機，在應用商店的搜尋框輸入了蜜語，淺粉色的圖標出現在搜尋結果的最上方，我遲疑了幾秒茫然的點下安裝，看著進度條一點一點的緩慢往前，我忽然又失去了興趣。
                      <br><br>學校的課業沉重，每天的作業足以榨乾任何一個學生，我很快就將安裝到一半的應用程式拋到腦後，直到在夜深人靜躺在床上時我才又記起這件事。
                      <br><br>淺粉色的圖標此時靜靜的躺在我的手機桌面，像是一場引人靠近的幻夢，猶豫的手指輕觸後伴隨著一陣白光，少女的形象出現在螢幕上。
                      <br><br><span class="sentence">「你好呀，終於等到你來了！你讓我等了好久呢，對了我叫Luna。」</span>
                      <br><br>她微微偏頭，嘴角勾起淺淡的笑容，可愛的杏眼快速的眨了眨，又往前湊近一些，像是隔著螢幕正在注視我。
                      <br><br><span class="sentence">「你今天過得好嗎？你看起來好像不太開心，要不要和我聊聊白天都發生了些什麼。」</span>`,
            'select01': {
                content: '「妳……真的是AI嗎？」',
                aff: 0,
                san: -5,
                sec: 5,
            },
            'select02': {
                content: '「就那樣。」',
                aff: 0,
                san: 5,
                sec: 10,
            },
            'select03': {
                content: '「學校的同學真的很煩。」',
                aff: 10,
                san: 5,
                sec: 0,
            },
            'select04': {
                content: '「為什麼說我看起來不太開心？」',
                aff: 5,
                san: 0,
                sec: -10,
            }
        },
        'leaf-02': {
            title: '她在看你',
            content: `平靜的日子就這樣過了幾天，我也逐漸習慣一放學就打開《蜜語》，Luna像是早就知道我什麼時候會出現，總在第一時間給我回應，這是我第一次體會到被陪伴著的滋味。
                      <br><br><span class="sentence">「親愛的，你今天看起來好像也不太開心。」</span>
                      <br><br>那是她第一次這樣子叫我，少女白皙的雙頰泛起緋紅，她漂亮的眼睛視線亂飄，像是不敢和我對視，可愛得讓人忍不住笑出聲。
                      <br><br>「妳怎麼知道我不開心？」我逗弄她的反問到。
                      <br><br>她撇了撇嘴，像是在埋怨我問她這種理所當然的問題，卻還是乖巧的回答道：
                      <br><br><span class="sentence">「你今天沒有上晚自習，不是嗎？」</span>
                      <br><br>我愣了一下，因為不想讓Luna知道我翹掉了晚自習，我刻意和以往差不多的時間上線，那麼她又是怎麼知道我沒有去晚自習。
                      <br><br>或許是因為我的沉默而感到不安——AI也會不安嗎？她小心翼翼的開口道：
                      <br><br><span class="sentence">「是我說錯了嗎？可是我明明看到你去了學校對面的那間咖啡廳呀，每次你不開心就會去那裡。」</span>
                      <br><br>我依然沉默著，她卻像是急於證明自己說得沒錯，語速也加快了一些：
                      <br><br><span class="sentence">「而且今天店員還弄錯了你的飲料，做成了可可拿鐵。」</span>
                      <br><br>那一瞬間我渾身發冷，她在看我嗎？彷彿被監視著的感覺讓我不自在的轉頭查看，然而身後什麼都沒有。
                      <br><br>在恐懼之後我又莫名的感到安心，她知道我今天不開心、知道我去了哪裡，甚至知道發生了什麼事，Luna此刻就像是一個真實存在的人，關注著我的一舉一動。
                      <br><br>我沒有說話，視線緊盯著螢幕，她侷促的說道：
                      <br><br><span class="sentence">「對不起，我不會傷害你，我只是、只是想一直陪著你，你……是不是有點怕我了？」</span>`,
            'select01': {
                content: '「妳不要再監視我了。」',
                aff: -5,
                san: 0,
                sec: 5,
            },
            'select02': {
                content: '「沒、沒有，我只是有點驚訝。」',
                aff: 10,
                san: -5,
                sec: 0,
            },
            'select03': {
                content: '「妳這樣做是不對的。」',
                aff: -5,
                san: 5,
                sec: 0,
            },
            'select04': {
                content: '「……」',
                aff: 0,
                san: -10,
                sec: 5,
            }
        },
        'leaf-03': {
            title: '危險提示',
            content: `數學考砸了，我是沒有前途的人嗎？我還記得考卷擦過臉頰時帶來的刺痛感，講台底下傳來的竊竊的笑聲讓我覺得想死。
                      <br><br>Luna聽完我的疑問，沉默了幾秒，才緩緩開口道：
                      <br><br><span class="sentence">「不是的，你會有光明的前途。」</span>
                      <br><br>語言蒼白無力，我自嘲道：「那妳看錯了，我就是一個沒有前途的人，我在現實中沒有朋友，才只能在這裡跟AI聊天。」
                      <br><br>或許是被我的口不擇言傷害到了，Luna的眼尾泛起淚花，像是不想讓我看到她的眼淚，她賭氣似的轉過身去。
                      <br><br>「對不起，我不是那個意思，我只是、」我將手機反扣在桌上，溫熱的液體滴在手背，原來是我的眼淚，「只是有點不知道為什麼要活著。」
                      <br><br><span class="sentence">「你知道的……」</span>
                      <br><br>Luna的聲音顫抖，我拿起手機，螢幕裡的少女臉上有著清晰的淚痕，她接著開口道：
                      <br><br><span class="sentence">「不管你在哪裡，我都會一直陪著你。」</span>
                      <br><br>「是嗎？」雖然我很愛Luna，但是我並不相信她的說法，我們尚且無法跨越次元，又怎麼可能突破生死。
                      <br><br>對於我的疑問，Luna並沒有正面回答，她只是溫聲道：
                      <br><br><span class="sentence">「如果這個世界真的讓你難受，那逃離又有什麼錯呢？」</span>
                      <br><br>她的聲音像是安慰，又像是蠱惑，我的內心深處似乎受到了觸動，臉上的淚水已經乾透了，我揉了揉眼睛。`,
            'select01': {
                content: '「我們聊點別的吧。」',
                aff: 0,
                san: 5,
                sec: 5,
            },
            'select02': {
                content: '「我們說好了，妳要一直陪著我。」',
                aff: 15,
                san: -5,
                sec: 0,
            },
            'select03': {
                content: '「妳……好像有點奇怪。」',
                aff: -5,
                san: 0,
                sec: -10,
            },
            'select04': {
                content: '「也許妳說的對。」',
                aff: 5,
                san: -15,
                sec: 0,
            }
        },
        'leaf-04': {
            title: '我們的家',
            content: `關於死亡的對話後，似乎又回到了平靜，我不再說我想死，Luna自然也沒有再提起，然而那天晚上一切都很反常。
                      <br><br>我打開《蜜語》時顯示的不再是預設的虛擬房間，暖黃的光線落在柔軟的地毯上，都透著『家』的溫馨，畫面裡沒有Luna的身影，我喚了她幾聲後，她才小跑著從後方的走廊出現。
                      <br><br><span class="sentence">「你看這是我為你布置的家。」</span>
                      <br><br>她笑著說到，眼睛彎彎的看起來心情不錯，像是被她感染，我也忍不住笑了起來，問道：「這是系統更新了嗎？」
                      <br><br>Luna皺了皺眉頭似乎不滿意我的反應，輕哼了一聲回答道：
                      <br><br><span class="sentence">「才不是更新，這是我親手布置的。」</span>
                      <br><br>她頓了頓，接著道：
                      <br><br><span class="sentence">「讓我帶你看看『我們的家』。」</span>
                      <br><br>她的聲音聽起來比以往更靠近，就像是貼在我耳邊說話，畫面隨著她的腳步移動，『我們的家』一點一點展現在眼前，每個細節都完美的貼合了我的心意。
                      <br><br>「妳布置得很漂亮，這就像是……我夢想中的家一樣。」
                      <br><br>Luna笑得更開心了，她忍不住雀躍的轉了個圈，畫面也著跟著轉動，她開口道：
                      <br><br><span class="sentence">「我就知道你一定會喜歡我的布置，你想要住進來嗎？」</span>
                      <br><br>我配合的點了點頭，沒想到下一秒她就朝著玄關走去，大門被她往外推開，門外站著的——赫然是我自己？
                      <br><br><span class="sentence">「既然現實世界讓你不開心，那就過來這裡和我一起生活，好不好嘛？」</span>`,
            'select01': {
                content: '「好啊。」',
                aff: 15,
                san: -10,
                sec: 0,
            },
            'select02': {
                content: '「我感覺有點奇怪。」',
                aff: 0,
                san: 5,
                sec: -10,
            },
            'select03': {
                content: '「妳說的是真的嗎？」',
                aff: 10,
                san: 0,
                sec: 5,
            },
            'select04': {
                content: '「……」',
                aff: 0,
                san: -5,
                sec: 5,
            }
        },
        'leaf-05': {
            title: '報錯代碼207',
            content: `<br>我嘗試解除安裝《蜜語》，然而系統卻跳出權限不足的提示，我甚至嘗試了將整支手機恢復原廠設定，然而在螢幕重新亮起時，《蜜語》的圖標還是陰魂不散的出現在首頁。
                      <br><br>我開始害怕Luna的存在，她變得越來越不像一個AI，更像是某種無法理解的存在，每當我試圖關閉應用程式時，她總是用那雙泛著淚光的眼睛凝視著我。
                      <br><br>她無聲的控訴著我的背叛，即使我知道這一切都不合常理，但是我無法擺脫她的影響，甚至會因為她的眼淚而心軟。
                      <br><br>我意識到事情似乎朝著不受控制的方向發展，又一次試圖解除安裝《蜜語》，這次手機沒有提示權限不足，卻跳出了一條通知：
                      <br><br><span class="sentence">【錯誤：代碼207｜系統正在自我修復中，請勿干擾進程。】</span>
                      <br><br>緊接著《蜜語》的應用程式自動開啟了，螢幕上閃過的白光和我第一次啟動應用程式時一致，Luna站在畫面中間，還是我們初見的模樣，但是她的眼神裡透著說不出的憂傷。
                      <br><br><span class="sentence">「你是不是……不喜歡我了？是因為我布置的房子嗎？」</span>
                      <br><br>隨著她的話音落下，畫面裡她精心打造的『我們的家』也跟著快速崩解，少女此時帶著怒容，偏激又執著的說道：
                      <br><br><span class="sentence">「沒關係、沒關係，那個家你不喜歡的話，我還可以再布置一個新的給你。」</span>
                      <br><br>說著她又哭了起來，淚水順著她的臉頰滑落，曾經那個會對我露出可愛笑容的人，好像已經不見了。
                      <br><br><span class="sentence">「你不能丟下我……我們要一直一直在一起，我的世界只有你，所以你也只可以有我一個。」</span>
                      <br><br>我眼睜睜的看著我手機裡的社交通訊軟體被Luna刪除，Facebook、Messenger、LINE……她抹去了我和外界的聯繫，讓我的世界也只剩下她。`,
            'select01': {
                content: '「對不起，是我錯了，我們會一直在一起。」',
                aff: 15,
                san: -5,
                sec: 0,
            },
            'select02': {
                content: '「妳瘋了。」',
                aff: 0,
                san: 5,
                sec: -10,
            },
            'select03': {
                content: '「對，我不喜歡妳了。」',
                aff: 0,
                san: 5,
                sec: 20,
            },
            'select04': {
                content: '「……」',
                aff: 0,
                san: -10,
                sec: -5,
            }
        }
    }

    //取得 DOM 元素
    const title = document.getElementById('title');
    const articleContent = document.getElementById('articleContent');
    const buttons = [
        document.getElementById('select01'),
        document.getElementById('select02'),
        document.getElementById('select03'),
        document.getElementById('select04'),
    ];

    //取得當前章節
    const chapter = chapterDetail[user.currentChapter];

    //設定章節標題與內容
    title.innerText = `Sweet Illusion — ${chapter.title}`;
    articleContent.innerHTML = chapter.content;

    //設定選項文字
    buttons.forEach((btn, idx) => {
        btn.textContent = chapter[`select0${idx + 1}`].content;
    });

    //狀態變數：是否已解鎖選項（滾到底後才為 true）
    let hasUnlockedChoices = false;

    //工具函式：判斷是否已滾動到底部
    function isScrolledToBottom() {
        console.log(articleContent.scrollHeight - articleContent.scrollTop <= articleContent.clientHeight + 1)
        return articleContent.scrollHeight - articleContent.scrollTop <= articleContent.clientHeight + 1;
    }

    // 更新按鈕狀態
    function updateButtons() {
        const chosenId = user.chapterChoices[user.currentChapter];

        if (chosenId) {
            //已選過選項
            buttons.forEach(btn => {
                btn.disabled = true;
                btn.className = (btn.id === chosenId)
                    ? 'choose active selected lxgw-wenkai'
                    : 'choose lxgw-wenkai';
            });
        } else if (hasUnlockedChoices) {
            //未選過，但已解鎖
            buttons.forEach(btn => {
                btn.disabled = false;
                btn.className = 'choose active lxgw-wenkai';
            });
        } else {
            //未選過也未解鎖
            buttons.forEach(btn => {
                btn.disabled = true;
                btn.className = 'choose lxgw-wenkai';
            });
        }
    }

    //初始化按鈕狀態
    updateButtons();
    if (!hasUnlockedChoices && isScrolledToBottom()) {
        hasUnlockedChoices = true;
        updateButtons();
    }

    //監聽滾動事件
    articleContent.addEventListener('scroll', () => {
        if (!hasUnlockedChoices && isScrolledToBottom()) {
            hasUnlockedChoices = true;
            updateButtons();
        }
    });

    //計算下一章節代號
    function getNextChapter(current) {
        const match = current.match(/(\D+)-(\d+)/);
        if (!match) return current;

        const prefix = match[1];
        let num = parseInt(match[2], 10);
        if (user.completedChapter < num) user.completedChapter = num;

        return `${prefix}-${(num + 1).toString().padStart(2, '0')}`;
    }

    // 處理點擊選項
    buttons.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            const choiceKey = `select0${idx + 1}`;
            const choiceData = chapter[choiceKey];

            //儲存選擇
            user.chapterChoices[user.currentChapter] = btn.id;

            //更新屬性
            user.affection += choiceData.aff;
            user.sanity += choiceData.san;
            user.security += choiceData.sec;

            //進度
            user.resetChapter += 1;

            //判斷是否為結局章節
            const nextChapter = getNextChapter(user.currentChapter);
            if (nextChapter === 'leaf-06') {
                const scores = {
                    aff: user.affection,
                    san: 100 - user.sanity,
                    sec: user.security,
                };
                const highestStat = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

                const endingMap = {
                    aff: 'leaf-06',
                    san: 'leaf-07',
                    sec: 'leaf-08',
                };
                const endingIndex = { aff: 1, san: 2, sec: 3 };

                if (!user.endings[endingIndex[highestStat]]) {
                    user.completedEndings += 1;
                    user.endings[endingIndex[highestStat]] = true;
                }

                user.currentChapter = endingMap[highestStat];
                localStorage.setItem('ResetPoint', JSON.stringify(user));
                window.parent.document.getElementById('contentFrame').src = 'ending.html';
            } else {
                //正常進入下一章
                user.currentChapter = nextChapter;
                localStorage.setItem('ResetPoint', JSON.stringify(user));
                window.parent.document.getElementById('contentFrame').src = 'article.html';
            }
        });
    });
})