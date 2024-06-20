import { FC, RefObject, createRef, useEffect, useState } from 'react';
import { ReactComponent as ArrowComponent } from 'assets/svgs/arrow_down_fill_icon.svg';
import data from './fakedata.json';
import { OptionStyle, WrapperStyled } from './styled';

export const ServiceMenu: FC = () => {
  const [elRefs, setElRefs] = useState<{
    [key: number]: RefObject<HTMLDivElement>;
  }>({});

  useEffect(() => {
    const refs: { [key: number]: RefObject<HTMLDivElement> } = {};
    data.forEach(function (item) {
      refs[item.id] = elRefs[item.id] || createRef();
    });

    setElRefs(refs);
  }, [data]);

  const handleScroll = (id: number) => {
    elRefs[id]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <WrapperStyled>
      {data?.map((item) => (
        <OptionStyle key={item.id} onClick={() => handleScroll(item.id)}>
          <p>
            {item.content}
            <ArrowComponent />
          </p>
        </OptionStyle>
      ))}
    </WrapperStyled>
  );
};
