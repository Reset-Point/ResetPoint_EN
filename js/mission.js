document.addEventListener('DOMContentLoaded', () => {
    const userJson = localStorage.getItem('ResetPoint');
    if (!userJson) {
        console.warn('沒有找到 ResetPoint 資料');
        window.parent.document.getElementById('contentFrame').src = 'home.html'
    }
    const user = JSON.parse(userJson);
    console.log(user);

    //更新任務進度
    user.missions['mission01'].currentProgress = [2, 3, 4, 5].reduce((count, idx) => {
        return count + (user.missions[`mission0${idx}`].rewardClaimed === true ? 1 : 0);
    }, 0);
    user.missions['mission02'].currentProgress = Math.min(user.completedChapter, user.missions['mission02'].maxProgress);
    user.missions['mission03'].currentProgress = Math.min(user.completedChapter, user.missions['mission03'].maxProgress);
    user.missions['mission04'].currentProgress = Math.min(user.completedChapter, user.missions['mission04'].maxProgress);
    user.missions['mission05'].currentProgress = user.completedEndings;

    localStorage.setItem('ResetPoint', JSON.stringify(user));

    if (user.missions['mission01'].rewardClaimed) {
        const clearAllBtn = document.getElementById('clearAll');
        if (clearAllBtn) clearAllBtn.style.display = 'block';
    }

    const missionDetail = {
        mission01: {
            id: 'mission01',
            describe: '完成[甜蜜偽像]所有任務',
            currentProgress: user.missions['mission01'].currentProgress,
            maxProgress: user.missions['mission01'].maxProgress,
            rewardClaimed: user.missions['mission01'].rewardClaimed,
        },
        mission02: {
            id: 'mission02',
            describe: '完成一個節點',
            currentProgress: user.missions['mission02'].currentProgress,
            maxProgress: user.missions['mission02'].maxProgress,
            rewardClaimed: user.missions['mission02'].rewardClaimed,
        },
        mission03: {
            id: 'mission03',
            describe: '完成三個節點',
            currentProgress: user.missions['mission03'].currentProgress,
            maxProgress: user.missions['mission03'].maxProgress,
            rewardClaimed: user.missions['mission03'].rewardClaimed,
        },
        mission04: {
            id: 'mission04',
            describe: '完成五個節點',
            currentProgress: user.missions['mission04'].currentProgress,
            maxProgress: user.missions['mission04'].maxProgress,
            rewardClaimed: user.missions['mission04'].rewardClaimed,
        },
        mission05: {
            id: 'mission05',
            describe: '通關[甜蜜偽像]所有結局',
            currentProgress: user.missions['mission05'].currentProgress,
            maxProgress: user.missions['mission05'].maxProgress,
            rewardClaimed: user.missions['mission05'].rewardClaimed,
        }
    };

    const missionBody = document.getElementById('missionBody');
    if (!missionBody) {
        console.error('找不到 missionBody 容器');
        return;
    }

    Object.entries(missionDetail).forEach(([key, mission]) => {
        const data = user.missions[key];
        if (!data) return;

        const container = document.createElement('div');
        container.id = mission.id;

        const fillWidth = data.maxProgress > 0 ? (data.currentProgress / data.maxProgress) * 100 : 0;

        container.innerHTML = `
        <div class="perMission">
            <p class="lxgw-wenkai">${mission.describe}</p>
            <div>
                <div class="missionBar" style="display: block;">
                    <div id="missionFill${key}" class="fillMissionBar" style="width: ${fillWidth}%"></div>
                </div>
                <button id="missionClear${key}" class="clear jersey-15" style="display: none;">CLEAR</button>
                <p id="missionRecord${key}" class="missionRecord jersey-15" style="display: block;">
                    (${data.currentProgress}/${data.maxProgress})
                </p>
            </div>
        </div>
        <div class="line"></div>
        `;

        missionBody.appendChild(container);

        const missionBar = container.querySelector('.missionBar');
        const clearBtn = container.querySelector('button.clear');

        if (data.currentProgress === data.maxProgress && data.rewardClaimed === false) {
            missionBar.style.display = 'none';
            clearBtn.style.display = 'block';
        } else {
            missionBar.style.display = 'block';
            clearBtn.style.display = 'none';
        }

        if (data.rewardClaimed) {
            container.style.display = 'none';
        }

        clearBtn.addEventListener('click', () => {
            data.rewardClaimed = true;
            container.style.display = 'none';
            user.missions[key].rewardClaimed = true;
            localStorage.setItem('ResetPoint', JSON.stringify(user));
            window.parent.document.getElementById('contentFrame').src = 'mission.html';
        });
    });
});
