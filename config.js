window.LIVE_CONFIG = {
  // 유튜브 영상 ID는 맥 watcher가 GitHub에 자동 갱신. 서버/담당자는 신경 안 써도 됨.
  remoteConfigUrl:
    "https://raw.githubusercontent.com/iuopp6702-wq/obs-live-viewer/main/config.js",
  defaultChannel: "all",
  accessKey: "ccb1234",

  // 유튜브 라이브 제목 기준 매핑 (2026-07-08 갱신 - 새 라이브로 교체)
  channels: {
    yeoju: {
      label: "여주",
      youtubeVideoId: "YAphrF_2ZL8", // CCB여주 실시간 (현재 신규 라이브 없음, 확인 필요)
    },
    yangsan: {
      label: "양산",
      youtubeVideoId: "XG9wKnPkXjM", // CCB양산 실시간 (인코더 연결 끊김, OBS 확인 필요)
    },
    gwangju: {
      label: "광주",
      youtubeVideoId: "hM_3jQRTPC0", // CCB광주 실시간 스트림
    },
    all: {
      label: "전체",
      youtubeVideoId: "4GKa69DTXa4", // ALL (생산기술팀) - watcher가 자동 갱신 예정 (관리자 권한 부여 후)
    },
  },
};
