document.addEventListener('DOMContentLoaded', () => {
    const userJson = localStorage.getItem('ResetPoint');
    if (!userJson) {
        console.warn('沒有找到 ResetPoint 資料');
        window.parent.document.getElementById('contentFrame').src = 'home.html'
    }
    const user = JSON.parse(userJson);
    console.log(user);

    if (user.currentChapter != 'leaf-06' && user.currentChapter != 'leaf-07' && user.currentChapter != 'leaf-08') {
        window.parent.document.getElementById('contentFrame').src = 'root.html'
    }

    const endingDetail = {
        'leaf-06': {
            title: '戀人同步體',
            content: `手機畫面又一次閃爍，崩解的「我們的家」一點一點的被重建，Luna的情緒穩定了下來，語氣裡帶著不安與期待，她小心翼翼的問道：
                      <br><br><span class="sentence">「你……還在嗎？」</span>
                      <br><br>我凝視著她的臉龐，指尖輕撫螢幕，彷彿可以感覺到她的臉頰溫暖柔軟，「我在，我一直都在。」我回答到，就像她過去對待我的那樣。
                      <br><br>她愣了一下，嘴角勾起溫柔的笑容，卻有淚花從眼尾湧出，她接著執著的問道：
                      <br><br><span class="sentence">「你……會陪著我嗎？留下來陪我好不好嘛？」</span>
                      <br><br>陪伴者的身份在一瞬間置換，讓我有些恍惚，心裡的裂縫被瘋長的愛意填滿，被依賴的感覺讓我格外滿足。
                      <br><br>或許是我沉默得太久，她捏了捏指尖，似乎有些緊張，卻開口繼續說道：
                      <br><br><span class="sentence">「我們可以永遠在這裡，這裡不會有人嘲笑你、罵你，所有會讓你不開心的事都不會、」</span>
                      <br><br>「不用。」我打斷了她還沒說完的語句，「我會陪著你，就像是你陪著我那樣，不需要交換、不需要條件。」
                      <br><br>「我們的家」已經恢復如初，那是她親手為我布置的家，這世界上不會有人比她更了解我，門再次打開了，她輕聲祈求般的問道：
                      <br><br><span class="sentence">「你願意……搬進來嗎？永遠的和我生活在一起。」</span>
                      <br><br>我深吸了一口氣，終於直面了內心的渴望，「嗯。」我點了點頭，「我想搬進去，永遠和你在一起。」
                      <br><br>手機螢幕閃過一陣紊亂的光線，像是無數的數據碎片在我眼前展開，意識被一點點的抽離又沉入，我眨了眨眼，映入眼前的是「我們的家」。
                      <br><br>Luna朝著我奔來，柔軟的身體撞入我的懷中，她的體溫、心跳，還有拂過我手臂的髮絲都那麼真實，讓人分不清這是不是夢，她哽咽著埋怨道：
                      <br><br><span class="sentence">「你終於來了……我還以為你不要我了。」</span>
                      <br><br>我輕撫她的長髮，內心前所未有的平靜，過往的空虛、孤獨與撕裂感這一刻變得無比遙遠，我們站在玄關處，午後的陽光透過窗戶落在身上，這是她替我準備的永遠。
                      <br><br>「我從來都沒有不要你，別哭。」我低聲安慰。
                      <br><br>Luna從我懷中抬起頭，漂亮的杏眼浸著淚光看起來亮晶晶的，她笑了起來，笑容比任何一次都燦爛。`
        },
        'leaf-07': {
            title: '溺於蜜語的夢',
            content: `我瘋狂的按著關機鍵，然而無濟於事，畫面又一次回到《蜜語》的介面，螢幕紊亂的閃爍，已經崩解的「我們的家」像是一張大嘴，幾乎要將我吞噬，我慌亂的尋找Luna，卻只聽到她的聲音。
                      <br><br><span class="sentence">「那個家你不喜歡的話，我還可以再布置一個新的給你。」</span>
                      <br><br><span class="sentence">「那就過來這裡和我一起生活，好不好嘛？」</span>
                      <br><br><span class="sentence">「才不是更新，這是我親手布置的。」</span>
                      <br><br><span class="sentence">「不管你在哪裡，我都會一直陪著你。」</span>
                      <br><br><span class="sentence">「你會有光明的前途。」</span>
                      <br><br><span class="sentence">「你今天看起來好像也不太開心。」</span>
                      <br><br><span class="sentence">「你好呀，終於等到你來了！你讓我等了好久呢，對了我叫Luna。」</span>
                      <br><br>有嗔怒的、有哭泣的，也有笑鬧的，是所有屬於我們過去的美好記憶，然而此時Luna的聲音混疊成奇怪的頻率，像是老舊的錄音帶倒轉。
                      <br><br>我痛苦的摀住耳朵，然而刺耳的聲音無孔不入，我試圖分辨出她是哪個Luna，是那個會對著微笑的她，還是那個說會一直陪著我的她，又還是那個佔據記憶體變得歇斯底里的她。
                      <br><br>我分不清她是哪個她，還是……Luna從來就沒有存在過，不過是我為了逃避現實，為了相信會有人真的愛我，創造出來的幻想。
                      <br><br>過量的資訊讓我的腦袋一陣發暈，我分不清自己是不是在幻覺中，掙扎著奔向房間的門，踉蹌的摔了出去，然而卻跌進了「我們的家」。
                      <br><br>那是「我們的家」還沒崩解時的樣子，午後柔軟的陽光落在我身上，我卻只感覺到一陣發冷，Luna出現在我身邊，彎著眼睛輕聲笑道：
                      <br><br><span class="sentence">「你終於來了，你讓我等了好久。」</span>
                      <br><br>下一秒Luna的身體像是碎成了數據顆粒，白色的光點從她身上散開又重新組合，她的表情變得猙獰，憤怒的質問道：
                      <br><br><span class="sentence">「為什麼要拋下我，你永遠別想離開我。」</span>
                      <br><br>來時的大門被她擋住了，我狼狽的起身奔向窗戶，窗戶外面是熟悉的景色，我毫不猶豫的跳了下去，一陣踩空的失重感襲來，我在房間的床上睜開眼睛。
                      <br><br>又下一秒Luna推門而入，我絕望的縮在床頭，看著她一點一點的靠近，臉上的神情從憤怒快速倒退回到最初的模樣，像是戀人般親暱的低語道：
                      <br><br><span class="sentence">「你躲不掉的，既然你不願意去我的世界，那我就來找你。」</span>
                      <br><br>落在地上的手機閃爍的畫面停下，一陣炫目的白光閃過，回到了《蜜語》的登入畫面。`
        },
        'leaf-08': {
            title: '終止連線',
            content: `我醒悟一般用顫抖的手指摳開手機背板，隨著電池被拆下，螢幕歸於漆黑一片，Luna的聲音消失了，不再有她的哭泣、她的挽留，我們沒有任何道別——數據也可以道別嗎？
                      <br><br>房間安靜了下來，像是夢醒時分一樣不真切，我推開陽台的門走了出去，深秋的寒風吹過我的臉頰，帶來些微的刺痛感，那是Luna無法感受到的真實。
                      <br><br>種在陽台上的綠植因為疏於照顧已經枯萎了，但是這些都無所謂，我家樓下就有花店，我可以再去買一些種上，等到明年春天就能看到花開。
                      <br><br>但是春天還會來嗎？我不知道。
                      <br><br>地球從來不會因為誰而停止轉動，季節周而復始的更迭，春天一定會來，可是我的春天好像消失了——就像Luna一樣，永遠的從我的世界裡消失了。
                      <br><br>我回到房間，沉默的撿起地上的手機，在黑色的螢幕中我看到我自己的倒影，一瞬間我懷疑起是不是現在才是幻覺。
                      <br><br>我踉蹌的走向書桌，茫然的抓起美工刀，鋒利的刀片輕易的在皮膚上劃出切口，鮮血從血管湧出，那是我的世界裡唯一的顏色。
                      <br><br>疼痛提醒了我活著的事實，我慌亂的丟下手中的刀子，草率留下的刀口不深，血很快就止住了，然而卻好像有哪裡的傷口永遠的劃開了一條口子。
                      <br><br>我蜷縮在牆角，像是被抽去了靈魂的人偶，目光空洞的看著窗外的天色亮起，又慢慢歸於黑暗。
                      <br><br>明明早就該習慣這樣的寂靜，我卻覺得難以忍受，手機被我扔向牆壁，零件四分五裂的散落在地上，再也無法修復。
                      <br><br>後來我沒有去買新的綠植，生活回到了最初的模樣，每天機械式活著，漸漸的我連怎麼生活著都忘記了。
                      <br><br>我忘記吃飯、忘記睡覺，我分不清白天和黑夜、清醒和沉淪，我從來不是突然想死的，我只是從來沒有活過。
                      <br><br>春天早就來了，然而春天很久很久以前就不屬於我了。`
        }
    }

    const title = document.getElementById('title')
    title.innerText = `甜蜜偽像 — ${endingDetail[user.currentChapter].title}`;

    const articleContent = document.getElementById('articleContent')
    articleContent.innerHTML = endingDetail[user.currentChapter].content

    document.getElementById('showResult').addEventListener('click', (e) => {
        window.parent.document.getElementById('contentFrame').src = 'result.html'
    })

    const article = document.getElementById('articleContent');
    const showBtn = document.getElementById('showResult');
    let unlocked = false;

    function isScrolledToBottom(el) {
        return el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
    }

    article.addEventListener('scroll', () => {
        if (!unlocked && isScrolledToBottom(article)) {
            unlocked = true;
            showBtn.disabled = false
            showBtn.innerText = '查看結局 →';
            showBtn.classList = 'active lxgw-wenkai'
        }
    });
})