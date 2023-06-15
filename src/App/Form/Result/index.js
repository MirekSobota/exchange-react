import { Wrapper } from "./styled";

const Result = ({ result }) => (
  <Wrapper>
    {result !== null && (
      <>
        {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;
        <strong>
          {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
        </strong>
      </>
    )}
  </Wrapper>
);

export default Result;