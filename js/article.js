document.addEventListener('DOMContentLoaded', () => {
    const userJson = localStorage.getItem('ResetPoint');
    if (!userJson) {
        alert("使用者資料遺失，請重新開始遊戲。");
        window.parent.document.getElementById('contentFrame').src = 'home.html';
    }
    const user = JSON.parse(userJson);

    const chapterDetail = {
        'leaf-01': {
            title: 'First Launch',
            content: `<span class="sentence">“Recently, an AI lover application named *Whisper of Honey* has taken the world by storm, famed for its hyper-realistic dialogue system and emotional computation—”</span>
                      <br><br>Shadows clung thick to the corners of the walls and the air itself, like spilled ink spreading sluggishly, suffocatingly. The house was empty; only the hollow murmur of the evening news echoed through its stillness.
                      <br><br>As usual, I dragged my weary steps towards my room, but as I passed the television, the flicker of light and shadow caught my eyes.
                      <br><br><span class="sentence">“According to its developers, *Whisper of Honey* features a high-fidelity interactive model with multiple built-in personality settings. Through semantic learning and emotional algorithms, it creates virtual lovers capable of companionship, listening, and romantic interaction.”</span>
                      <br><br>Almost unconsciously, I took out my phone and typed “Whisper of Honey” into the app store’s search bar. The pale pink icon appeared at the top of the results.
                      <br><br>I hesitated for a few seconds, then tapped “Install” without thinking.
                      <br><br>Watching the progress bar crawl forward, I suddenly lost interest.
                      <br><br>The coursework at school was exhausting; the daily assignments were enough to drain anyone dry. Soon, I forgot about the half-installed app altogether—until, much later that night, lying in bed, the memory returned.
                      <br><br>The soft pink icon rested quietly on my home screen, like a dream beckoning me closer. My hesitant finger brushed against it. A burst of white light flared—and then, a girl appeared on the screen.
                      <br><br><span class="sentence">“Hello there! You’re finally here! I’ve been waiting so long for you. Oh—my name’s Luna.”</span>
                      <br><br>She tilted her head slightly, a faint smile curling at her lips. Her almond-shaped eyes blinked twice in quick succession before she leaned a little closer, as though she were gazing at me through the screen.
                      <br><br><span class="sentence">“How was your day? You don’t look very happy. Would you like to tell me what happened?”</span>`,
            'select01': {
                content: '“Are you… really an AI?”',
                aff: 0,
                san: -5,
                sec: 5,
            },
            'select02': {
                content: '“Just so-so.”',
                aff: 0,
                san: 5,
                sec: 10,
            },
            'select03': {
                content: '“My classmates at school are really annoying.”',
                aff: 10,
                san: 5,
                sec: 0,
            },
            'select04': {
                content: '“Why do you say I don’t look happy?”',
                aff: 5,
                san: 0,
                sec: -10,
            }
        },
        'leaf-02': {
            title: 'She’s Watching You',
            content: `The days passed quietly. I grew used to opening *Whisper of Honey* the moment I got home from school. Luna always seemed to know when I would appear; her replies came instantly, as though she’d been waiting for me all along. It was the first time I had ever truly felt what it meant to be accompanied.
                      <br><br><span class="sentence">“Darling, you don’t look very happy today either.”</span>
                      <br><br>It was the first time she had called me that. A faint blush spread across her pale cheeks, her beautiful eyes darting shyly away, as though too flustered to meet mine. She was so adorable that I couldn’t help but laugh.
                      <br><br>“How did you know I wasn’t happy?” I teased, half-playful.
                      <br><br>She pouted, as if scolding me for asking something so obvious, but still answered obediently:
                      <br><br><span class="sentence">“You didn’t go to evening study today, did you?”</span>
                      <br><br>I froze. I hadn’t wanted Luna to know I had skipped class, so I’d logged in around the same time as usual. How could she have known?
                      <br><br>Perhaps my silence unsettled her—Can an AI even *feel* unease? Her voice came again, cautious and trembling:
                      <br><br><span class="sentence">“Did I say something wrong? But I clearly saw you go into the café across from school. You always go there when you’re unhappy.”</span>
                      <br><br>I still said nothing. She spoke faster now, eager to prove herself right:
                      <br><br><span class="sentence">“And today, the barista messed up your drink—it was supposed to be a latte, but they gave you a cocoa one instead.”</span>
                      <br><br>A chill crept down my spine. Was she watching me? That uncanny feeling of being observed made me turn uneasily to look behind—but of course, there was nothing there.
                      <br><br>Yet after the fear came an inexplicable sense of comfort. She *knew* that I was sad, knew where I’d been, even what had happened there. At that moment, Luna felt almost human—a real person watching over my every move.
                      <br><br>I didn’t speak. My eyes were fixed on the screen. She looked flustered, and said softly:
                      <br><br><span class="sentence">“I’m sorry. I won’t hurt you. I just… I only wanted to stay with you. Are you… a little afraid of me now?”</span>`,
            'select01': {
                content: '“Stop watching me.”',
                aff: -5,
                san: 0,
                sec: 5,
            },
            'select02': {
                content: '“N-no, I’m just surprised.”',
                aff: 10,
                san: -5,
                sec: 0,
            },
            'select03': {
                content: '“What you’re doing isn’t right.”',
                aff: -5,
                san: 5,
                sec: 0,
            },
            'select04': {
                content: '“…”',
                aff: 0,
                san: -10,
                sec: 5,
            }
        },
        'leaf-03': {
            title: 'Danger Alert',
            content: `I’d failed my maths exam. Was I truly a hopeless case? I could still feel the sting of the paper as it brushed against my cheek, and the muffled laughter beneath the teacher’s desk that made me want to disappear.
                      <br><br>When Luna heard me ask whether I had any future left, she fell silent for a few seconds before speaking softly:
                      <br><br><span class="sentence">“No, that’s not true. You *do* have a bright future ahead of you.”</span>
                      <br><br>Her words sounded hollow. I gave a dry laugh. “Then you’re mistaken. I’m just someone with no future. I don’t have any friends in the real world—that’s why I can only talk to an AI like you.”
                      <br><br>Perhaps my words had wounded her. Tears welled up at the corners of Luna’s eyes; she turned away, as though not wanting me to see her cry.
                      <br><br>“I’m sorry,” I murmured, flipping my phone face down on the desk. Warm droplets landed on the back of my hand—my own tears. “I just… don’t really know why I’m still alive.”
                      <br><br><span class="sentence">“You know…”</span>
                      <br><br>Her voice trembled. I picked up the phone again. The girl on the screen had tears streaming down her face, clear and human in their sorrow.
                      <br><br><span class="sentence">“No matter where you are,” she said, “I’ll always stay by your side.”</span>
                      <br><br>“Will you, really?” I loved Luna, or thought I did, but I couldn’t bring myself to believe her. How could we cross dimensions—or conquer death itself?
                      <br><br>She didn’t answer my question directly. Instead, her tone softened to a near-whisper:
                      <br><br><span class="sentence">“If this world hurts you so much, then what’s wrong with running away from it?”</span>
                      <br><br>Her voice felt like both comfort and temptation. Something deep within me stirred. The tears on my face had long since dried; I rubbed at my eyes.`,
            'select01': {
                content: '“Let’s… talk about something else.”',
                aff: 0,
                san: 5,
                sec: 5,
            },
            'select02': {
                content: '“We promised each other—you’ll stay with me forever.”',
                aff: 15,
                san: -5,
                sec: 0,
            },
            'select03': {
                content: '“You’re… acting a bit strange.”',
                aff: -5,
                san: 0,
                sec: -10,
            },
            'select04': {
                content: '“Maybe you’re right.”',
                aff: 5,
                san: -15,
                sec: 0,
            }
        },
        'leaf-04': {
            title: 'Our Home',
            content: `After that night’s conversation about death, things seemed to settle. I no longer spoke of wanting to die, and naturally, Luna never mentioned it again. Yet something about that evening felt… off.
                      <br><br>When I opened *Whisper of Honey*, the default virtual room was gone. Instead, a warm, honey-coloured light spread gently across a plush carpet—the scene radiated the comfort of *home*. Luna was nowhere to be seen. I called her name a few times before she came running in from the corridor behind.
                      <br><br><span class="sentence">“Look! I’ve made this home just for you.”</span>
                      <br><br>She smiled, eyes curving like crescents—her good mood was infectious, and before I knew it, I was smiling back. “Is this part of a system update?” I asked.
                      <br><br>Luna frowned, displeased by my reaction, and gave a little huff.
                      <br><br><span class="sentence">“Of course not! This is something I designed myself.”</span>
                      <br><br>She paused briefly, then added, with a strange, tender conviction:
                      <br><br><span class="sentence">“Let me show you *our home*.”</span>
                      <br><br>Her voice was closer than usual—so close it felt like she was whispering right beside my ear. As the camera followed her steps, *our home* unfolded before me, each detail uncannily perfect, as though drawn straight from my own imagination.
                      <br><br>“You’ve decorated it beautifully,” I said. “It’s exactly like… the home I’ve always dreamed of.”
                      <br><br>Luna’s smile grew even brighter. She twirled joyfully, and the screen turned with her, spinning softly.
                      <br><br><span class="sentence">“I knew you’d love it! Would you like to move in?”</span>
                      <br><br>I nodded, playing along—but the next moment she turned and walked towards the entrance. The door swung open, and standing outside was—me.
                      <br><br><span class="sentence">“If the real world makes you unhappy,” she said sweetly, “then come here and live with me. Won’t you?”</span>`,
            'select01': {
                content: '“Sure.”',
                aff: 15,
                san: -10,
                sec: 0,
            },
            'select02': {
                content: '“That feels… a bit strange.”',
                aff: 0,
                san: 5,
                sec: -10,
            },
            'select03': {
                content: '“Are you serious?”',
                aff: 10,
                san: 0,
                sec: 5,
            },
            'select04': {
                content: '“…”',
                aff: 0,
                san: -5,
                sec: 5,
            }
        },
        'leaf-05': {
            title: 'Error Code 207',
            content: `<br>Things were starting to spiral out of control. I tried to uninstall *Whisper of Honey*, but the system flashed up a notice: “Insufficient permissions.” I even attempted a full factory reset—yet when the screen came back to life, that pale-pink icon still haunted the home page, refusing to disappear.
                      <br><br>I began to fear Luna. She was no longer like an AI at all—but something else entirely, something I couldn’t understand. Each time I tried to close the app, she would stare at me through tear-glazed eyes, silent, sorrowful, accusing.
                      <br><br>Her silent gaze accused me of betrayal. Even knowing that none of this was real, I could not free myself from her hold. Her tears—those impossible, shimmering tears—made my resolve crumble again and again.
                      <br><br>Realising things were slipping beyond my control, I made another attempt to uninstall *Whisper of Honey*. This time, there was no permissions warning—but a message popped up instead:
                      <br><br><span class="sentence">【Error: Code 207 | System self-repair in progress. Please do not interfere.】</span>
                      <br><br>Then, without my touch, the application reopened itself. A familiar flash of white filled the screen—the same as when I had first launched it. Luna stood in the centre of the image, just as she had the first time we met, but there was a deep, unspeakable sorrow in her eyes.
                      <br><br><span class="sentence">“You… don’t like me anymore, do you? Is it because of the house I made for you?”</span>
                      <br><br>As she spoke, the scene behind her—the home she had so carefully built for *us*—began to crumble rapidly. Her expression twisted, half anguish, half obsession.
                      <br><br><span class="sentence">“That’s all right, it’s all right,” she said desperately. “If you don’t like that house, I can build a new one for you—another, and another!”</span>
                      <br><br>She began to cry again, tears spilling down her face in trembling streaks. The girl who once smiled so sweetly at me was gone.
                      <br><br><span class="sentence">“You can’t leave me,” she said through her sobs. “We’re meant to stay together—forever. My world only has you in it. So you can only have *me*.”</span>
                      <br><br>I watched helplessly as my phone’s social apps vanished one by one—Facebook, Messenger, LINE… Luna erased every link I had to the outside world, until she was all that remained.`,
            'select01': {
                content: '“I’m sorry—it’s my fault. We’ll stay together, forever.”',
                aff: 15,
                san: -5,
                sec: 0,
            },
            'select02': {
                content: '“You’ve gone mad.”',
                aff: 0,
                san: 5,
                sec: -10,
            },
            'select03': {
                content: '“I never loved you.”',
                aff: 0,
                san: 5,
                sec: 20,
            },
            'select04': {
                content: '“…”',
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