git --version // git 설치되었는지 유무랑 버젼 확인
git config --global user.name "myname" // 전체 git repository에 쓰일 user name 설정
git config --global user.name // 내 global user name 확인
git config user.name "myname" // 만약 local user name은 다르게 하고 싶다면 적용하고 싶은 local working directory로 가서 --global은 뺀 위 명령어를 쓴다
git config --global user.email // 이메일 넣기, local은 --global만 마찬가지로 빼면된다.
///git id 두 개 쓸 경우 쓰지 말자git config --global credential.helper wincred // HTTPS를 쓸 경우, 내 username 과 password를 기억하게 한다.

git remote add origin https://github.com/내주소/git_practice.git // github와 온라인 연결
git push -u origin master // github로 전송한다
* 만약 repo1 denied to repo2 에러 메세지가 뜨면(다른 repo와 충돌 일어나서..) 제어판 -> 윈도우 사용자 계정 -> 자격증명관리(credential) -> windows 자격 증명에서 git 부분을 지우자



git init // git 시작, create new git repository
git status // working directory와 staging area 사이의 파일내 자료 변화가 있고, repository에 아직 올라가 있지 않으면 빨간색으로 표시됨
git add filename.txt // staging area로 바뀐 내용을 내보내 repository에 저장한 준비를 한다
git diff filename.txt // working directory와 staging area 사이에 차이가 있으면 초록색으로 하이라이트 된다. status와 다른점은 diff는 파일내 어떤 자료가 바뀌었는지 더 상세하게 보여준다.
git commit -m "hahaha" // staging area에서 repository로 전달한다. -m은 메세지 추가, 메시지는 큰따옴표로 묶이고, 되도록 심플하고 명확하게
바뀐 점을 현재형으로 쓴다
git log // repository에 올려진 것을 보여주고 확인할 수 있다.
