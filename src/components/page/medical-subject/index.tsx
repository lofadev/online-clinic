import { FC } from 'react';

import { ReactComponent as ArrowSubject } from 'assets/images/medical-subject/ArrowSubject.svg';
import history from 'configs/history';
import { ContentSubject, ImageStyle, MedicalSubjectStyle, TilteText, TitleIcon, TitleSubject } from './styled';

export type PropsSubject = {
  picture: string;
  title: string;
  content: string;
  path: string;
};

const MedicalSubject: FC<PropsSubject> = (props) => {
  const { picture, title, content, path } = props;

  const handleClick = () => {
    history.push(path);
  };

  return (
    <MedicalSubjectStyle onClick={handleClick}>
      <ImageStyle src={picture} alt="picture" />

      <TitleSubject>
        <TilteText>{title}</TilteText>

        <TitleIcon>
          <ArrowSubject />
        </TitleIcon>
      </TitleSubject>

      <ContentSubject>{content}</ContentSubject>
    </MedicalSubjectStyle>
  );
};

export default MedicalSubject;
