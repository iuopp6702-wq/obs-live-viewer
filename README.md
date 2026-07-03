# 검사기 라이브 뷰어

OBS 장면별 YouTube 라이브 4개를 **링크 하나**에서 고를 수 있는 페이지.

## 공유 링크

배포 후 이렇게 공유:

```
https://<사이트주소>/?key=검사기2026
```

- 처음 들어가면 **전체** 화면
- 하단 버튼: 여주 / 양산 / 광주 / 전체
- 접근 코드는 `config.js`의 `accessKey`에서 변경

## 비공개 (일부 공개처럼)

1. **사이트**: 접근 코드 + 검색엔진 차단(`noindex`) — 링크+코드 아는 사람만
2. **YouTube**: 각 라이브를 **일부 공개(링크 있는 사용자)** 로 설정

> 완전한 보안은 아님. 링크와 코드를 아는 사람은 시청 가능.

## GitHub Pages 배포 (무료)

1. github.com 에서 로그인 → New repository → 이름 `obs-live-viewer`
2. 이 폴더 파일 push
3. repo → Settings → Pages → Source: `main` 브랜치 → Save
4. 몇 분 후 `https://<아이디>.github.io/obs-live-viewer/?key=검사기2026` 로 접속

## 채널 매핑 (config.js)

| 버튼 | 영상 ID |
|------|---------|
| 여주 | sq3nhsPl9XQ |
| 양산 | qMhJU-CCgb4 |
| 광주 | VYKCLaB4Ozs |
| 전체 | sYgkvIP-TOA |

순서가 틀리면 `config.js`에서 ID만 바꾸면 됨.
