#!/bin/bash

# 최신 edu 디렉토리에서 빌드하고 실행하는 스크립트
JAVA_CMD="/opt/homebrew/opt/openjdk@17/bin/java"
PORT=80

echo "=== 최신 Spring Boot 프로젝트 실행 ==="
echo ""

# Java 설치 확인
echo "Java 설치 확인 중..."
if [ ! -f "$JAVA_CMD" ]; then
    echo "오류: $JAVA_CMD 경로에서 Java 17을 찾을 수 없습니다."
    echo "Homebrew를 통해 OpenJDK 17이 설치되었는지 확인해주세요."
    echo ""
    echo "설치 방법:"
    echo "  brew install openjdk@17"
    exit 1
fi

echo "Java 버전 정보:"
"$JAVA_CMD" -version
echo ""

# edu 디렉토리로 이동
cd "$(dirname "$0")/edu" || exit 1

# gradlew 실행 권한 확인 및 부여
if [ ! -x "./gradlew" ]; then
    echo "gradlew 실행 권한 부여 중..."
    chmod +x ./gradlew
fi

# 빌드 확인
JAR_FILE="build/libs/edu-0.0.1-SNAPSHOT.jar"

if [ ! -f "$JAR_FILE" ]; then
    echo "JAR 파일이 없습니다. 빌드를 시작합니다..."
    echo ""
    ./gradlew clean build -x test
    
    if [ $? -ne 0 ]; then
        echo ""
        echo "오류: 빌드에 실패했습니다."
        exit 1
    fi
    echo ""
else
    echo "기존 빌드된 JAR 파일을 사용합니다: $JAR_FILE"
    echo ""
fi

# 실행
echo "$PORT 포트에서 Spring Boot 애플리케이션을 실행합니다..."
echo "알림: 80 포트는 관리자 권한이 필요합니다. 비밀번호를 입력해 주세요."
echo "브라우저에서 http://localhost:$PORT 접속하세요."
echo ""

# 80 포트를 위해 sudo로 실행
sudo "$JAVA_CMD" -jar "$JAR_FILE" --server.port=$PORT

