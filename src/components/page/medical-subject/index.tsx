import { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { ReactComponent as ArrowSubject } from 'assets/images/medical-subject/ArrowSubject.svg';
import { ContentSubject, ImageStyle, MedicalSubjectStyle, TilteText, TitleIcon, TitleSubject } from './styled';

export type PropsSubject = {
  id: number;
  picture: string;
  title: string;
  content: string;
  path: string;
};

const MedicalSubject: FC<PropsSubject> = (props) => {
  const { id, picture, title, content, path } = props;
  const history = useHistory();

  const handleClick = () => {
    history.push(path);
  };

  return (
    <MedicalSubjectStyle key={id} onClick={handleClick}>
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
