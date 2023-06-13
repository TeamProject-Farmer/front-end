import TabWrapper from '../common/InnerBox/TabWrapper';
import SingleTab from '../common/InnerBox/SingleTab';

const BoardTabWrapper = () => {
  return (
    <TabWrapper>
      <SingleTab text="Q&A" />
      <SingleTab text="review" />
    </TabWrapper>
  );
};

export default BoardTabWrapper;
