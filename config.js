window.LIVE_CONFIG = {
  // 유튜브 영상 ID는 맥 watcher가 GitHub에 자동 갱신. 서버/담당자는 신경 안 써도 됨.
  remoteConfigUrl:
    "https://raw.githubusercontent.com/iuopp6702-wq/obs-live-viewer/main/config.js",
  defaultChannel: "all",
  accessKey: "ccb1234",

  // 허브 직결 우선 (같은 PC / Tailscale). 닿으면 /viewer 로 이동, 안 되면 유튜브.
  preferHub: true,
  hubBaseUrls: [
    "http://127.0.0.1:8787",
    "http://100.85.85.4:8787",
    "https://desktop-lvk845s.tailef62c9.ts.net",
  ],

  // 유튜브 라이브 제목 기준 매핑 (외부/폴백용)
  channels: {
    yeoju: {
      label: "여주",
      youtubeVideoId: "-e6c7TtwkI0",
    },
    yangsan: {
      label: "양산",
      youtubeVideoId: "JdwB7AgZvCA",
    },
    gwangju: {
      label: "광주",
      youtubeVideoId: "Xl5nGmDF3WE",
    },
    all: {
      label: "전체",
      youtubeVideoId: "zyD-Sr1KilU",
    },
  },
};
