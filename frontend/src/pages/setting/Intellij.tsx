const Intellij = () => {
  return (
    <>
      <h2>Intellij Setting</h2>
      <br />
      <h4>1. JDK </h4>
      <a href="https://www.oracle.com/kr/java/technologies/downloads/" target="_blank" rel="noopener noreferrer">
        JDK Download
      </a>
      <br />
      <br />
      <h4>2. Intellij </h4>
      <a href="https://www.jetbrains.com/ko-kr/idea/download/" target="_blank" rel="noopener noreferrer">
        Intellij Download
      </a>
      <br />
      <br />
      <h4>3. Intellij 환경 Setting</h4>
      <br />
      <h6>Project explorer setting</h6>
      <img src="/imgs/intellij1.png" alt="Intellij Setting 1" width="600px" />
      <br />
      <br />
      <br />
      <h6>Rerun as soon as you save the code</h6>
      <ol>
        <li>Settings - advanced - compiler - Allow auto-make to start even if....: check</li>
        <li>Settings - Build, Execution, Deployment - Compiler - Build project automatically : check</li>
        <li>Settings - encoding 검색 후 - 모두 UFT-8 로 변경</li>
        <li>
          Edit Configurations - Modify options - On 'Update' action - Update classes and resources : check
          <br />
          <img src="/imgs/intellij2.png" alt="Intellij Setting 2" width="600px" />
          <br />
          <br />
          <img src="/imgs/intellij3.png" alt="Intellij Setting 3" width="600px" />
          <br />
          <br />
        </li>
      </ol>
    </>
  );
};

export default Intellij;

