import EveningIcon from 'assets/svgs/ico_circle_evening.svg';
import MorningIcon from 'assets/svgs/ico_circle_morning.svg';
import NightIcon from 'assets/svgs/ico_circle_night.svg';
import { Text } from 'components';
import Switch from 'components/switch';
import { useAppointment } from 'slices/appointment';
import { formatDateToJapanese, getDate } from 'utils/date';
import BookingItem from '../booking-item/BookingItem';
import PeriodItem, { TPeriodProps } from '../period-item/PeriodItem';
import { daysTransform } from './hook';
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

const BookingTop = () => {
  const { timetables, getReservationTimeables, params, loading } = useAppointment();
  const days = daysTransform(timetables?.date_list);

  const handleChangeTimeTables = (distanceDay: number) => {
    getReservationTimeables({
      ...params,
      startDate: getDate(distanceDay, timetables?.date_list[0].date),
      endDate: getDate(distanceDay + 6, timetables?.date_list[0].date),
      serviceId: 1,
    });
  };

  return (
    <WrapperStyled>
      <ActionsTopStyled>
        <ButtonStyled
          type="primary"
          size="small"
          rounded="sm"
          disabled={!timetables?.enabled_last_week}
          onClick={() => handleChangeTimeTables(-7)}
          loading={loading && timetables?.enabled_last_week}
        >
          前週
        </ButtonStyled>
        <Text.Primary fontWeight="FW_700" fontSize="SIZE_20">
          {formatDateToJapanese(params.startDate, 'M月D日')}-{formatDateToJapanese(params.endDate, 'M月D日')}
        </Text.Primary>
        <ButtonStyled
          type="primary"
          size="small"
          rounded="sm"
          disabled={!timetables?.enabled_next_week}
          onClick={() => handleChangeTimeTables(7)}
          loading={loading && timetables?.enabled_next_week}
        >
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
        {!!days &&
          days.map((day) => (
            <BookingItem key={day.date} {...day}>
              {formatDateToJapanese(day.date)}
            </BookingItem>
          ))}
      </DaylistStyled>
    </WrapperStyled>
  );
};

export default BookingTop;
