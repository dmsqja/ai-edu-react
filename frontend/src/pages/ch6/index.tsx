const Chapter6Index = () => {
  return (
    <>
      <h1>Chapter 6. Tool Calling</h1>
      <br />

      <h2>1. 개요</h2>
      <p>
        <strong>도구 호출(Tool Calling)</strong>, 또는 <strong>함수 호출(Function Calling)</strong>은 AI 모델이 외부 API나
        소프트웨어 도구와 상호작용하여 기능을 확장하는 핵심 패턴입니다. 이를 통해 모델은 단순 텍스트 응답을 넘어서 실제 기능
        수행, 데이터 검색, 시스템 제어 등 다양한 작업을 자동화할 수 있게 됩니다.
      </p>
      <li>
        <span>
          <a href="https://docs.spring.io/spring-ai/reference/api/tools.html">SpringAi 참고</a>
        </span>
      </li>
      <img src="/imgs/tools1.png" alt="Tools1" width="600px" />
      <br />
      <a href="https://docs.spring.io/spring-ai/reference/api/tools.html">출처:docs.springai.io</a>
      <br />
      <br />

      <h3>도구의 주요 활용 목적</h3>
      <ul>
        <li>
          <strong>정보 검색</strong>
          <br />
          데이터베이스, 웹 API, 검색 엔진, 파일 시스템 등 외부 리소스에서 데이터를 조회하여 모델의 지식을 보완합니다. 이는
          RAG(검색 증강 생성) 시나리오에서 특히 유용합니다.
        </li>
        <li>
          <strong>작업 실행</strong>
          <br />
          이메일 전송, DB 레코드 생성, 양식 제출, 워크플로 트리거 등 소프트웨어 시스템 내 실제 액션을 자동화합니다.
        </li>
      </ul>

      <p>
        Spring AI는 이러한 도구 호출을 일관되고 구조적인 방식으로 정의·관리·실행할 수 있도록 강력한 추상화 계층을
        제공합니다.
      </p>
      <hr />

      <h2>2. 도구 사용 방식</h2>

      <p>Spring AI에서 도구는 다음 두 가지 방식으로 등록하고 사용합니다.</p>

      <ul>
        <li>
          <strong>선언적 방식</strong> — <code>@Tool</code> 애노테이션 기반 정의
        </li>
        <li>
          <strong>프로그래밍 방식</strong> — <code>MethodToolCallback</code> 구현을 통한 저수준 접근
        </li>
      </ul>
      <hr />

      <h2>3. @ToolParam — 도구 매개변수 정의</h2>
      <p>
        Spring AI는 메서드 시그니처를 기반으로 자동으로 JSON Schema를 생성하여 모델이 도구 호출 시 사용할 입력 규격을
        제공합니다. <code>@ToolParam</code>을 사용하면 파라미터의 설명 및 필수 여부를 정확히 정의할 수 있습니다.
      </p>

      <pre style={{ border: '1px solid cornflowerblue' }}>
        <code>{`@Tool(description = """
사용자가 요청한 지역의 시간대별 기상 예보 데이터를 조회합니다.
지역명을 기반으로 위도(latitude) 및 경도(longitude)를 확인 후 예보 정보를 제공합니다.
""")
String getForecastWeather(
    @ToolParam(description = "latitude", required = true) double latitude,
    @ToolParam(description = "longitude", required = true) double longitude
) {
    return forecastWeatherService.getForecastWeather(latitude, longitude);
}`}</code>
      </pre>

      <ul>
        <li>
          <strong>description</strong> — 파라미터의 의미, 형식, 제약 등을 모델이 이해할 수 있게 제공
        </li>
        <li>
          <strong>required</strong> — 필수 여부 (기본값: true)
        </li>
      </ul>
      <hr />

      <h2>4. Tool Context — 도구 실행 시 추가 컨텍스트 전달</h2>
      <img src="/imgs/tools2.png" alt="Tools2" width="600px" />
      <br />
      <a href="https://docs.spring.io/spring-ai/reference/api/tools.html">출처:docs.springai.io</a>
      <br />
      <br />

      <p>
        Spring AI는 <code>ToolContext</code>를 통해 도구 호출 시 추가적인 사용자 데이터나 환경 정보를 함께 전달할 수
        있도록 지원합니다.
      </p>

      <pre style={{ border: '1px solid cornflowerblue' }}>
        <code>{`@Tool(description = "특정 사용자 ID의 구매 내역을 조회합니다.")
List<Shop> getOrderedByCustomer(ToolContext toolContext) {
    String userId = (String) toolContext.getContext().get("userId");
    return shoppingService.getOrderedByCustomer(userId);
}`}</code>
      </pre>
      <hr />

      <h2>5. Return Direct — 도구 결과를 모델이 아닌 호출자에게 직접 반환</h2>
      <img src="/imgs/tools3.png" alt="Tools3" width="600px" />
      <br />
      <a href="https://docs.spring.io/spring-ai/reference/api/tools.html">출처:docs.springai.io</a>
      <br />
      <br />

      <p>
        일반적으로 도구 실행 결과는 모델에 다시 전달되어 후속 응답 생성에 사용됩니다. 그러나 일부 시나리오에서는 결과를
        호출자에게 바로 반환하는 것이 더 효율적일 수 있습니다.
      </p>

      <ul>
        <li>RAG 도구의 검색 결과를 직접 반환</li>
        <li>에이전트 추론 루프를 종료하는 특수 도구 처리</li>
      </ul>

      <p>
        이를 위해 <code>returnDirect = true</code>를 설정하면, 도구 실행 후 모델로 전달하지 않고 호출자에게 즉시
        응답합니다.
      </p>
      <hr />

      <h2>6. 예외 처리 (Exception Handling)</h2>
      <p>
        도구 실행 중 오류가 발생하면 <code>ToolExecutionException</code>이 발생하며 이를 처리하기 위해{' '}
        <code>ToolExecutionExceptionProcessor</code>를 활용할 수 있습니다.
      </p>

      <p>Spring Boot Starter 사용 시 기본 프로세서는 <code>DefaultToolExecutionExceptionProcessor</code>입니다.</p>

      <pre style={{ border: '1px solid cornflowerblue' }}>
        <code>{`@Bean
ToolExecutionExceptionProcessor toolExecutionExceptionProcessor() {
    return new DefaultToolExecutionExceptionProcessor(true);
}`}</code>
      </pre>

      <p>
        <strong>true</strong>: 예외를 모델로 전달하지 않고 호출자에게 직접 throw
        <br />
        <strong>false</strong>: 오류 메시지를 생성하여 모델로 전송하여 모델이 오류를 처리하도록 함
      </p>
    </>
  );
};

export default Chapter6Index;

