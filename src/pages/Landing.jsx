import styled from 'styled-components';

function Landing() {
  return (
    <Wrapper>
      <h1>Landing</h1>
      <div className="content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam nisi
        consectetur dolores voluptatibus sunt qui. Dolor explicabo iusto
        excepturi iure atque consequuntur voluptatibus nisi sapiente, quibusdam
        repudiandae veniam soluta maiores!
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: aliceblue;
  background: red;
  h1 {
    color: white;
  }
  .content {
    color: white;
    background: green;
  }
`;

export default Landing;
