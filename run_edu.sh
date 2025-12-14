#!/bin/bash

# 설정
JAR_FILE="edu-0.0.1-SNAPSHOT.jar"
JAVA_CMD="/opt/homebrew/opt/openjdk@17/bin/java"
PORT=80

echo "Java 설치 확인 중..."
if [ ! -f "$JAVA_CMD" ]; then
    echo "오류: $JAVA_CMD 경로에서 Java 17을 찾을 수 없습니다."
    echo "Homebrew를 통해 OpenJDK 17이 설치되었는지 확인해주세요."
    exit 1
fi

echo "Java 버전 정보:"
"$JAVA_CMD" -version

echo ""
echo "$PORT 포트에서 $JAR_FILE 실행을 시도합니다..."
echo "알림: 80 포트는 관리자 권한이 필요합니다. 비밀번호를 입력해 주세요."
echo ""

# 80 포트를 위해 sudo로 실행
sudo "$JAVA_CMD" -jar "$JAR_FILE" --server.port=$PORT
