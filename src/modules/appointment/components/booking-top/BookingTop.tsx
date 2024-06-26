import EveningIcon from 'assets/svgs/ico_circle_evening.svg';
import MorningIcon from 'assets/svgs/ico_circle_morning.svg';
import NightIcon from 'assets/svgs/ico_circle_night.svg';
import { Text } from 'components';
import Switch from 'components/switch';
import { formatDateToJapanese } from 'utils/date';
import BookingItem from '../booking-item/BookingItem';
import PeriodItem, { TPeriodProps } from '../period-item/PeriodItem';
import {
  ActionsTopStyled,
  ButtonStyled,
  DaylistStyled,
  NoteStyled,
  PeriodActionStyled,
  PeriodMenuStyled,
  PeriodWrapperStyled,
  WrapperStyled,
} from './styled';

const periods: TPeriodProps[] = [
  {
    icon: MorningIcon,
    timeline: '07:00',
  },
  {
    icon: EveningIcon,
    timeline: '13:00',
  },
  {
    icon: NightIcon,
    timeline: '19:00',
  },
];

const days: string[] = [
  '2024-06-26',
  '2024-06-27',
  '2024-06-28',
  '2024-06-29',
  '2024-06-30',
  '2024-07-01',
  '2024-08-02',
];

const BookingTop = () => {
  return (
    <WrapperStyled>
      <ActionsTopStyled>
        <ButtonStyled type="primary" size="small" rounded="sm" disabled>
          前週
        </ButtonStyled>
        <Text.Primary fontWeight="FW_700" fontSize="SIZE_20">
          6月26日-7月2日
        </Text.Primary>
        <ButtonStyled type="primary" size="small" rounded="sm">
          翌週
        </ButtonStyled>
      </ActionsTopStyled>

      <NoteStyled>
        <Text.Primary fontWeight="FW_700" fontSize="SIZE_12">
          ご予約いただいた方の中から順番にご案内いたします。
        </Text.Primary>
        <Text.Primary fontSize="SIZE_12">※予約時間に開始しない場合は枠内（14分）の間で開始いたします。</Text.Primary>
      </NoteStyled>

      <PeriodWrapperStyled>
        <PeriodMenuStyled>
          {periods.map((period: TPeriodProps) => {
            return <PeriodItem key={period.timeline} {...period} />;
          })}
        </PeriodMenuStyled>
        <PeriodActionStyled>
          <Text.Primary fontWeight="FW_700" fontSize="SIZE_16">
            深夜枠を表示
          </Text.Primary>
          <Switch />
        </PeriodActionStyled>
      </PeriodWrapperStyled>

      <DaylistStyled>
        <BookingItem />
        {days.map((day) => (
          <BookingItem key={day}>{formatDateToJapanese(day)}</BookingItem>
        ))}
      </DaylistStyled>
    </WrapperStyled>
  );
};

export default BookingTop;
