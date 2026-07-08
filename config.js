window.LIVE_CONFIG = {
  defaultChannel: "all",
  accessKey: "ccb1234",

  // 유튜브 라이브 제목 기준 매핑 (2026-07-08 갱신 - 새 라이브로 교체)
  channels: {
    yeoju: {
      label: "여주",
      youtubeVideoId: "qMhJU-CCgb4", // CCB여주 실시간 (현재 신규 라이브 없음, 확인 필요)
    },
    yangsan: {
      label: "양산",
      youtubeVideoId: "9bLXAgE-0jE", // CCB양산 실시간 (인코더 연결 끊김, OBS 확인 필요)
    },
    gwangju: {
      label: "광주",
      youtubeVideoId: "xqJXBDR5ZYQ", // CCB광주 실시간 스트림
    },
    all: {
      label: "전체",
      // 생산기술팀 채널은 공개 스트림이라 채널 ID 기반 동적 임베드 사용 (영상 ID가 바뀌어도 항상 최신 라이브를 자동으로 보여줌)
      youtubeChannelId: "UCl78E7rFThV0KBCvbMcRtRA",
    },
  },
};
