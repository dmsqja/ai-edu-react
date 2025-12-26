const PostgreSQL = () => {
  return (
    <>
      <h2>PostregSQL Setting</h2>
      <br />
      <h4>1. Docker 설치 </h4>
      <br />
      <a href="https://docs.docker.com/get-started/get-docker/" target="_blank" rel="noopener noreferrer">
        Docker Download
      </a>
      <br />
      <br />
      <h4>2. PostgreSQL Image Download </h4>
      <pre style={{ border: '1px solid cornflowerblue' }}>
        {`docker run -d --name pgvector-container -e POSTGRES_USER=user01 -e POSTGRES_PASSWORD=111111 -e POSTGRES_DB=springai -p 5432:5432 pgvector/pgvector:pg17`}
      </pre>
      <br />
      <h4>3. PostregSQL Server Start : Containers - start button</h4>
      <br />
      <img src="/imgs/docker.png" alt="Docker" width="600px" />
      <br />
      <br />
      <h4>4. PostregSQL & Intellij Integration</h4>
      <br />
      <p>intellij 우측에 DB모양 아이콘 클릭 후 Data Source에서 PostregSQL 선택</p>
      <img src="/imgs/postgre1.png" alt="PostgreSQL Setting 1" width="600px" />
      <br />
      <br />
      <p>PostregSQL 접속 id(user01)와 password(111111) 입력</p>
      <img src="/imgs/postgre2.png" alt="PostgreSQL Setting 2" width="600px" />
      <br />
      <br />
      <p>JDBC Driver 설치</p>
      <img src="/imgs/postgre3.png" alt="PostgreSQL Setting 3" width="600px" />
      <br />
      <br />
      <p>PostregSQL 접속 완료</p>
      <img src="/imgs/postgre4.png" alt="PostgreSQL Setting 4" width="600px" />
      <br />
      <br />
      <br />
    </>
  );
};

export default PostgreSQL;

