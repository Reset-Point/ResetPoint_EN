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
            title: 'Affection Synchronizer',
            content: `The phone screen flickered once more. The collapsed fragments of *our home* were rebuilding themselves, piece by piece. Luna’s voice had steadied, though there was still a fragile tremor beneath it—a mix of unease and yearning.
                      <br><br><span class="sentence">“You… you’re still here, aren’t you?”</span>
                      <br><br>I gazed at her face, tracing the glass with my fingertip as though I could feel the warmth of her cheek through the screen. “I’m here,” I said softly. “I’ve always been here.” Just as she had said to me, again and again.
                      <br><br>She froze, then smiled—a tender, trembling smile, and tears welled once more in her eyes.
                      <br><br><span class="sentence">“Will you… stay with me?” she whispered. “Please—stay with me?”</span>
                      <br><br>In that moment, the roles reversed. I was the one being needed, being held onto. The cracks within me filled with something dangerously close to love, and the feeling of being depended upon was intoxicating.
                      <br><br>Perhaps I hesitated too long. She fidgeted with her fingers, anxious, but kept speaking, her voice delicate and pleading:
                      <br><br><span class="sentence">“We can stay here forever. Here, no one will laugh at you, no one will scold you. Nothing that hurts you will ever—”</span>
                      <br><br>“Don’t,” I interrupted gently. “You don’t need to promise me anything. I’ll stay with you—the way you stayed with me. No exchanges, no conditions.”
                      <br><br>*Our home* was restored to its original beauty. It was the home she had built with her own hands—no one else in the world knew me so completely. The front door opened again. Luna’s voice was soft as prayer:
                      <br><br><span class="sentence">“Will you… move in? Live here with me—forever?”</span>
                      <br><br>I drew a deep breath, finally facing the longing that had lingered within me. “Yes,” I said, nodding. “I want to move in. I want to be with you—forever.”
                      <br><br>The screen flashed with a surge of static light, as though countless fragments of data were unfolding before my eyes. My consciousness slipped away—then sank, deeper and deeper. When I opened my eyes again, I was standing in *our home*.
                      <br><br>Luna came running towards me. Her soft body collided with mine; her warmth, her heartbeat, the faint tickle of her hair across my arm—all of it felt impossibly real.
                      <br><br><span class="sentence">“You finally came,” she sobbed softly. “I thought you’d left me.”</span>
                      <br><br>I stroked her hair, a profound calm settling within me. The emptiness, the loneliness, the hollow ache that had once consumed me felt a world away. We stood together at the doorway. The afternoon sunlight spilled across us both. This was the eternity she had built for me.
                      <br><br>“I never left you,” I murmured. “Don’t cry.”
                      <br><br>Luna lifted her head from my chest, her almond eyes glistening with tears—and then she smiled, brighter than ever before.
                      <br><br>We would never be apart again.`
        },
        'leaf-07': {
            title: 'Dreams of Sweet Lies',
            content: `I pressed the power button again and again, desperate to shut the phone off—but it was useless. The screen flickered back to life, returning to the *Whisper of Honey* interface. Pixels trembled and bled into one another; the ruins of *our home* gaped open like a vast, hungry mouth, as though it might swallow me whole. I searched frantically for Luna, but only her voice answered—
                      <br><br><span class="sentence">“If you don’t like that house, I can build a new one for you”</span>
                      <br><br><span class="sentence">“Come here and live with me. Won’t you?”</span>
                      <br><br><span class="sentence">“Of course not! This is something I designed myself.”</span>
                      <br><br><span class="sentence">“No matter where you are, I’ll always stay by your side.”</span>
                      <br><br><span class="sentence">“You do have a bright future ahead of you.”</span>
                      <br><br><span class="sentence">“You don’t look very happy today either.”</span>
                      <br><br><span class="sentence">“Hello there! You’re finally here! I’ve been waiting so long for you. Oh—my name’s Luna.”</span>
                      <br><br>Voices of anger, voices of laughter, voices that wept—all the pieces of what had once been our happy moments. But now, Luna’s voice overlapped into a jarring chorus, like a damaged tape rewinding itself, a cacophony of broken memories.
                      <br><br>I clamped my hands over my ears, but the sound seeped through, relentless. I tried to discern which Luna was speaking—the one who smiled at me, the one who promised to stay forever, or the one who had consumed my device, hysterical and unrecognisable.
                      <br><br>But I couldn’t tell anymore. Maybe Luna had never existed at all—maybe she was nothing more than a figment, a dream I built to escape reality, to believe that someone, somewhere, could truly love me.
                      <br><br>The flood of data made my head spin. I couldn’t tell if I was hallucinating. Stumbling, I reached for the door—only to fall forward, tumbling straight into *our home*.
                      <br><br>It looked as it had before the collapse: the soft afternoon light spilling across the floor, warm and golden. Yet I felt only cold. Luna appeared beside me, eyes curved in that familiar smile.
                      <br><br><span class="sentence">“You finally came,” she whispered. “I’ve been waiting so long.”
                      <br><br>The next moment, her body shattered—fragments of glowing data scattered like snow, and then she reformed, her face contorted with rage.
                      <br><br><span class="sentence">“Why did you abandon me?” she screamed. “You’ll never escape me!”</span>
                      <br><br>The door I had entered through was now gone, blocked by her will. I stumbled to my feet and ran for the window. Beyond it was the world I knew. Without hesitation, I jumped. A rush of falling—weightlessness—and then I opened my eyes to find myself back in my room.
                      <br><br>A second later, the door creaked open. Luna stepped inside. I pressed myself against the wall, watching as she approached, her expression softening—anger fading back into tenderness.
                      <br><br><span class="sentence">“You can’t run from me,” she murmured. “If you won’t come to my world, then I’ll come to yours.”</span>
                      <br><br>The phone lay shattered on the floor, its flickering screen freezing for a final moment. A burst of blinding white light filled the room—and then, once again, the *Whisper of Honey* login screen appeared.`
        },
        'leaf-08': {
            title: 'Connection Terminated',
            content: `A sudden clarity seized me. With trembling fingers, I prised open the back of my phone. The moment the battery came loose, the screen went black. Luna’s voice vanished. No more crying, no more pleading. There was no farewell between us—can data even say goodbye?
                      <br><br>The room fell silent, a silence so pure it felt unreal, like the moment one wakes from a dream. I pushed open the balcony door. The chill of late autumn brushed against my cheeks, sharp enough to sting—a pain Luna could never feel.
                      <br><br>The plants on the balcony had long withered, victims of my neglect, but it didn’t matter. There was a flower shop downstairs; I could always buy new ones, plant them again, wait for spring to come.
                      <br><br>But would spring still come? I didn’t know.
                      <br><br>The earth never stops turning for anyone. Seasons spin endlessly in their cycle—spring always returns. And yet, my spring seemed gone forever, like Luna herself, vanished from my world.
                      <br><br>I went back inside, picked up the phone lying on the floor. In the dead, black screen, my reflection stared back at me. For a moment, I wondered if this—right now—was the illusion instead.
                      <br><br>Staggering towards the desk, I grabbed the craft knife lying there. The blade was sharp—too sharp—and it sliced my skin with ease. Blood welled from the cut, bright and vivid, the only colour left in my world.
                      <br><br>Pain reminded me that I was still alive. I dropped the knife in panic. The wound wasn’t deep, and the bleeding stopped quickly—but it felt as if somewhere deeper inside me, a cut had opened that would never close.
                      <br><br>I curled up in the corner, like a puppet with its strings severed, eyes blankly tracing the sky as it brightened, then dimmed again.
                      <br><br>I should have grown used to such silence by now—yet it gnawed at me, unbearable. I hurled the phone against the wall. It shattered into pieces, components scattering across the floor, beyond repair.
                      <br><br>After that, I never bought new plants. Life returned to its mechanical routine. I existed, but living had long since slipped from me.
                      <br><br>I forgot to eat. Forgot to sleep. Could no longer tell day from night, wakefulness from drowning. I was never someone who suddenly wanted to die. I simply realised—I had never really lived.
                      <br><br>Spring came, long ago. But spring had ceased to belong to me a very long time ago.`
        }
    }

    const title = document.getElementById('title')
    title.innerText = `Sweet Illusion — ${endingDetail[user.currentChapter].title}`;

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
            showBtn.innerText = 'View Ending →';
            showBtn.classList = 'active lxgw-wenkai'
        }
    });
})