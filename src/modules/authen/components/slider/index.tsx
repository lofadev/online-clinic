import { MainStyled, TitleStyled, TitleSlider, SliderStyled, ActiveSlider, Circle } from './styled';

interface ActiveSliderProps {
  widthActive: string;
}
const SliderRegister: React.FC<ActiveSliderProps> = ({ widthActive }) => {
  return (
    <MainStyled>
      <TitleStyled>
        <TitleSlider>1.登録</TitleSlider>
        <TitleSlider>2.認証コード入力</TitleSlider>
        <TitleSlider>3.完了</TitleSlider>
      </TitleStyled>

      <SliderStyled>
        <ActiveSlider widthActive={widthActive}>
          <Circle />
        </ActiveSlider>
      </SliderStyled>
    </MainStyled>
  );
};

export default SliderRegister;
