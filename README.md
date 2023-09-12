## Farmer-FE 입니다.

# FE 기술스택

- nextjs
- react
- typescript
- tailwind css
- emotion
- recoil
- react-query

# 코딩 컨벤션

### 1. 파일

- 파일명
  ts → CamelCase (ex > atomState.ts)
  tsx → PascalCase (ex > LoginPage.tsx)
- 서로 연관된 파일들은 하나의 폴더에 넣어준다.
- .ts와 .tsx확장자를 명확히 구분하여 쓴다.

### 2. 변수

- 변수명은 camelCase로 설정한다. (ex. isLogin)
- var는 사용하지 않는다.
- 약어와 풀네임 중 풀네임으로 설정한다. (ex. button VS btn)

### 3. 함수

- 함수는 arrow function을 사용한다.
- 함수명은 handle+기능으로 설정한다. (ex. handleLogin)

### 4. 기타

- 설명이 필요한 기능들에 대해서는 주석을 작성한다.

### 5. 폴더 구조 (유동적으로 추가 or 변경)

- 기본적으로 src 폴더 아래 위치한다.
- **pages** : 라우팅되는 페이지 컴포넌트
- **components** : 페이지 이외의 컴포넌트를 모아두는 폴더
- **hooks** : customHook을 모아놓는 폴더
- **api** : API 요청과 관련된 파일을 모아놓는 폴더
- **styles** : 스타일 관련 코드들이 저장된 폴더
- **assets** : 프로젝트에 사용되는 이미지, 비디오 등의 파일들을 저장 (public 하위 폴더)

# Git Convention

# **브랜치 머지 전략 📌**

- Git Flow 전략
- 기본적으로 main, feature, hotfix 등의 브랜치를 사용
- feature 브랜치를 생성할 때는 ex) feature/login, feature/register → feature/기능(camel case)
- feature 브랜치에서 작업을 하기 전에는, main 브랜치에서 최신 변경 내용을 pull 받아와서 feature 브랜치를 생성합니다.
- hotfix 브랜치에서는 긴급하게 수정해야 할 버그를 수정하고, main브랜치로 병합합니다.

1. feature 브랜치에서의 작업이 완료되면, main 브랜치 PR을 올립니다.
2. feature 브랜치에서는 QA 및 코드 리뷰를 진행하고, 필요한 경우 버그를 수정합니다.

# Commit Convention

### Commit Type

타입은 태그와 제목으로 구성되고, 태그는 영어로 쓰되 첫 문자는 소문자로 한다.
**`태그 : 제목`의 형태이며, `:`뒤에만 space가 있음에 유의한다.**

### Subject

- 제목은 최대 50글자가 넘지 않도록 하고 마침표 및 특수기호는 사용하지 않는다.
- 영문으로 표기하는 경우 동사(원형)를 가장 앞에 두고 첫 글자는 소문자로 표기한다.(과거 시제를 사용하지 않는다.)
- 제목은 **개조식 구문**으로 작성한다. --> 완전한 서술형 문장이 아니라, 간결하고 요점적인 서술을 의미.

| 태그             | 설명                                                                      |
| ---------------- | ------------------------------------------------------------------------- |
| feat             | 새로운 기능을 추가할 경우                                                 |
| fix              | 버그를 고친 경우                                                          |
| design           | CSS 등 사용자 UI 디자인 변경                                              |
| style            | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우                     |
| refactor         | 프로덕션 코드 리팩토링                                                    |
| comment          | 필요한 주석 추가 및 변경                                                  |
| docs             | 문서를 수정한 경우                                                        |
| test             | 테스트 추가, 테스트 리팩토링(프로덕션 코드 변경 X)                        |
| chore            | 빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X) |
| rename           | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우                        |
| remove           | 파일을 삭제하는 작업만 수행한 경우                                        |
| !BREAKING CHANGE | 커다란 API 변경의 경우                                                    |
| !HOTFIX          | 급하게 치명적인 버그를 고쳐야하는 경우                                    |

# PR 규칙 🔗

⇒ tag: subject (반드시 확인 후 merge)
