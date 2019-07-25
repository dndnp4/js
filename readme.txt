[[ 리눅스기초, 노드, 블록체인 이론, 이더리움 ]]
1. aws 
 - 1년간 무료 지원 (자원을 많이 사용하면 과금)
 - 아마존에서 리눅스 세팅 (상용 시스템)
 - nodejs project(개발이 완료된 결과물) deploy(배포) & 운영
 - 상용서비스 관점 테스트
 - 무료로 사용서비스(리눅스 우분트 18.xx) 사용
 - 데이터베이스 1년간 무료 지원
 - 가입후 > 콘솔에 로그인 > 서비스 > EC2 클릭시 화면이 열리면 승인완료(시간이 걸릴수있음)
 - 세팅
  1) 우측 상단 > zone 조절 > 아시아 태평양 (서울) 조정
  2) 서비스 > EC2(웹서비스를위한OS세팅) > 인스턴스 시작 > 왼쪽창에 프리 티어만 체크
  3) Ubuntu Server 18.04 LTS (HVM), SSD Volume Type 선택
  4) 중간단계를 다음으로 선택할수 있으나, 검토및 시작 버튼 눌러서 바로 7단계 진입
  5) 시작하기 > 새키파일 > 이름지정 > 다운로드 > 인스턴스 시작 > 인스턴스 보기
  5-1) 시작하기 > 기존키파일 > 선택 > 체크 > 인스턴스 시작 > 인스턴스 보기
  6) 서버의 name을 적당히 지정하여 향후 관리의 편의성 제공
    ----------------- 서버 생성 ----------------------------------------------
  7) 접속하기(ssh) : 윈도우 or 다른 os (터미널 작업)
  8) 윈도우용 ssh 프로그램 다운로드 (putty)
    > https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html
    > putty.exe (64bit) 다운로드 
    > puttygen.exe (64bit) 다운로드 
    > xxx.pem 파일과 같은 위치에 둔다
    > puttygen.exe 실행 > load > xxx.pem > Save Private key > 저장 > xxx.ppk 생성됨
    > putty.exe 실행 > ubuntu@본인서버공인IP > saved Session에 이름 기입( aws ) > save
    > Connection > SSH > Auth > Browse 클릭 > xxx.ppk 선택 > session > aws 선택 > save
    > open


2. 도커
 - 리눅스를 윈도우, 맥, 등등 가상환경하에 운영
 - 리눅스-> 이미지로 제공
 - 빠른 설치!!
 - 적은 공간!!
 - 가상화쪽에서는 신흥강자~> : 하둡테스트, 운영

3. javascript 
 - 발전진행사항
 1995 : 탄생
 1997 : ECMA 표준단체 탄생 -> 이후는 바이러스의 온상이 되면서 외면~
 2005 : 구글지도 -> AJAX -> 비동기통신을 통한 화면처리기술 발전
 2008 : 크롬 브라우저 발표 및 소스 공개 => V8엔진 기반
 2009 : nodejs 등장 -> v8엔진 기반 : js기반 서버사이드 개발 플랫폼, 스마트폰 출시
 2010 : 앱시장 확장 -> android vs ios 진영으로 확산 => one source multi use 움직임이 진행
        -> 하이브리드앱 시장 (html5 css3 js를 이용한 개발방식)
 2011~: Non액티브엑스, html5 발전, 앱개발 SPA(Single Page Applicaton) 발전
        -> AngularJS(구글), reactjs(페이스북), vue(커뮤니티) 개발 -> JS발전, 웹서비스 개발의
        매커니즘이 서버사이드에서 클라이언트사이드로 전환
        -> AngularJS:typeScript(개발언어)->transcompile->javascript 구조
        -> reactjs:modern javascript(표준js)->babel(표준js->호환js수정)->webpack(압축,소스보호)
           ->최종 소스 생성
        -> 앱 개발
           1) 네이티브   : android (java or kotlin), ios(objectiv-c, swift)
           2) 하이브리드 : 1세대 : 폰갭, html5, css3, js
                          2세대 : 아이오닉, 코드도바, react-native(인스타그램, 페이스북)
                          3세대 : fultter(구글:pc,모바일,전방위->Dart)
 2015 : 모던스크립트 정립, 발표 적용이 시작~
 -------------------------------------------------------------------------
 변수 : var, const, let
 연산자,제어문,반복문 : for ~ of
 함수 : function a(){}, function(){}, ()=>{}, 사용형태:콜백함수, 정의위치:클로저
 클레스 : {}, 5가지 형태, let obj = {} <= 객체리터럴,1회성, 인자가많을때사용
 기타 js만의 표현

4. nodejs
 - 본 과정에서 nodejs의 포지션
   일반유저가 블록체인에 다이렉트로 접근해서 업무를 볼수없으므로,
   앞단에 서비스가 필요하다. 웹기반 서비스라면, nodejs에서 제공하는 웹서비스를 통해
   블록체인상에 존재하는 DApp(이더리움 기반 스마트계약(프로그램))과 통신하여 블록체인의 특징
   /특성이 반영된 서비스를 제공받는다
 - 개념
  > V8엔진 기반 구동
  > 비동기, 이벤트 기반
  > 비슷한 유형 : 루비, 파이썬분야의 웹서비스
  > 1 스레드로 동시에 만건 요청을 처리했다?
  > nodejs vs spring : 어떤 것을 사용할 것인가? 각각 환경에 맞게 구성


 - 개발환경구축
  > nodejs.org
 - 모던스크립트(필요한 표현 위주)
 - express
 - 실제 프로젝트 : 개발(서버/클라이언트사이드) + 디자인 + 기획 + DB
   => 개발이 완려되면 디자인을 입히는 과정 진행
   => 템플릿을 적용하여 디자인 완성 과정
 - 실시간 통신
   => socket.io를 사용

5. 블록체인

6. 이더리움

7. 리눅스
 - 기본 세팅
 - 계정은 root(루트:소유자), ubuntu(일반사용자)
 - 기본 os 업데이트
  => sudo는 루트 권한으로 뭔가 작업할때 사용
     superuser do의 약자, 수퍼유저 권한으로 뭔가를 수행할때 사용한다
  => apt : ubuntu의 패키지 관리자
     -> 인덱스 정보는 /etc/apt/source.list 저장 -> 여기를 읽어서 패키지 설치시 사용
     -> nodejs를 서버에 설치하기 전에 몇버전을 설치하게 구성되어 있는지 확인후 버전이 않맞으면 버전을 맞춰서 등록후 설치
  $ sudo apt-get update
  $ sudo apt-get upgrade
  => curl이라는 모듈을 설치한다
     -> 다양한 프로토콜을 수행하는 전송 라이브러리, ftp, http...등 사용
  $ sudo apt install curl
  => nodejs 현재 설치할수 있는 버전 체크 => 패키지 정보 보기
  $ sudo apt-cache show nodejs
  => ...
     Filename: pool/universe/n/nodejs/nodejs_8.10.0~dfsg-2_amd64.deb
  => nodejs 버전이 8임으로 알게 되었다    
  => nodejs의 설치 버전을 10으로 조정한다
  $ curl -sL https://deb.nodesource.com/setup_10.x | sudo bash - 
  => -s : 진행상태, 에러등을 보이지 않는다
  => -L : 요청 페이지가 변경되면 재요청을 진행한다
  => shell(쉘) -> 리눅스상에서 명령어 처리기, 텍스트, 한줄씩 순차적으로 수행 Vs bat파일(윈도우)
    -> bash(배시), sh, zbash(좀더 이쁜)
    -> 쉘코드의 첫줄 -> #!/bin/bash : bash로 쉘스크립트를 구동해라라는 의미
  => 노드 설치
  $ sudo apt install nodejs
  => 버전 확인
  $ node -v


8. 실전 프로젝트
 - 목적
  > 노노재팬을 카피하여 nodejs 기반으로 구축 및 배포, 운영하겟다
  > nodejs의 서버 구성 + express(서버를 구성하는 모듈)
  > 데이터베이스(mysql) 연동 (Pooling, 풀링 <-> orm(객체기반쿼리처리) )
  > 데이터 구축을 위한 웹스크래핑 진행
    => 데이터 수집및 전처리 : 데이터 분석의 60~70% 비중
    -> 1단계(레벨) : 공공데이터, 데이터센터에서 제공, 통계제공, 국가제공 => 정제된 데이터
    -> 2단계(레벨) : openapi를 이용한 수집 (포털, 특수 목적,..)         => 정제된 데이터
    -> [사용]3단계(레벨) : 웹스크래핑(webscraping) : 웹을 요청해서 사이트를 긁어서 html에서 데이터를 추출
                    => css selector가 필수 기술, DOM(Document Object Model) 조작
    -> 4단계(레벨) : 매크로, 드루킹(예를들면 악하게 사용되면), 티켓자동예매(악하게 사용되면)
                    => crawling(크롤링), 브라워저에서 사람이 하는 행위처럼 구성하여 
                    자동화시켜서 데이터를 수집하는 행위(로그인, 글쓰기, 데이터 추출 다 된다)
                    => 유튜브, 로그인후 처리해야하는 사이트 => ajax를 사용하는사이트가 주대상
- 사용 모듈 : Node.js 웹 애플리케이션 프레임워크
 > expressjs 모듈이 nodejs 서버 구성의 거의 대부분을 차지
  -> 이미 서버를 구성해야할 모든 내용이 다 갖추어 졋다
- 설치 : 패키지 조회하는 사이트 : npmjs.com
 npm => nodejs에 써드파트 패키지(모듈)을 설치하는 패키지 관리자 
 $ npm i -g express
  -g : 시스템 전체에서 사용 가능
  i  : install, 설치해라
  => bc_projects\node> npm i -g express
 $ npm i -g express-generator
- 프로젝트 생성 ( ~\bc_projects\node 에서 진행 )
 $node> express -e notJapan
 $node> cd notJapan
 $ npm install
  -> package.json을 읽어서 dependencies에 존재하는 모듈을 설치
  -> node_modules 폴더가 생기고, 관련 패키지가 이않에 다운된다
- 실행
 $ npm start
 http://localhost:3000