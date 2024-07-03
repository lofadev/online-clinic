import { yupResolver } from '@hookform/resolvers/yup';
import { ReserveIcon } from 'assets';
import { Button, FieldInput, FieldRadio, FieldSelect } from 'components';
import Input from 'components/input/Input';
import { translations } from 'locales/translations';
import { IAddress, IGenderOptions, IUserModel, IUserWithAddress } from 'models/user.model';
import { FC, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom';
import RoutesName from 'routes/constant';
import { useNotification } from 'slices/notification';
import { useUserProfile } from 'slices/user';

import schema from './schema';
import { coverPrefectureList, generateDays, isValidAgeRange, months, years } from './utils';

import {
  AddressLabelStyled,
  AppointmentImageStyled,
  AppointmentWrapper,
  BodyContainerStyled,
  ButtonWrapper,
  ContainerStyled,
  ErrorText,
  FieldWrapperStyled,
  HeaderStyled,
  NavigatorStyled,
  NoteWrapperStyled,
  PasswordChangeStyled,
  RadioWrapper,
  RightColumnStyled,
  RowInfomationStyled,
  SelectNotDivStyled,
  SelectRightColumnStyled,
  SelectWrapperStyled,
  TitleStyled,
} from './styled';

const initialValues: Partial<IUserModel> = {
  first_name: '',
  last_name: '',
  first_hiragana: '',
  last_hiragana: '',
  phone: '',
  zip_code: '',
  municipality: '',
  address: '',
};

export const UserProfile: FC = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const { userInfomation } = translations;
  const { userProfile, prefectureList, addresses, getProfile, getPrefecture, updateProfile } = useUserProfile();
  const { setNotif } = useNotification();

  const genderOptions: IGenderOptions[] = [
    {
      value: 0,
      label: t(userInfomation.male_gender),
    },
    {
      value: 1,
      label: t(userInfomation.female_gender),
    },
    {
      value: 2,
      label: t(userInfomation.other_gender),
    },
  ];

  const methods = useForm<IUserModel>({
    defaultValues: { ...initialValues },
    resolver: yupResolver(schema),
  });

  const [days, setDays] = useState(generateDays(new Date().getFullYear(), new Date().getMonth() + 1));

  const selectedYear = methods.watch('year', new Date().getFullYear().toString());
  const selectedMonth = methods.watch('month', (new Date().getMonth() + 1).toString().padStart(2, '0'));
  const [month, day, year, gender] = methods.watch(['month', 'day', 'year', 'gender']);

  useEffect(() => {
    if (selectedYear && selectedMonth) {
      setDays(generateDays(selectedYear, selectedMonth));
    }
  }, [selectedYear, selectedMonth]);

  useEffect(() => {
    if (!month || !day || !year) {
      methods.setError('date_of_birth', {
        type: 'date_of_birth',
      });
    } else {
      methods.setValue('date_of_birth', `${year}-${month}-${day}`);
      methods.clearErrors('date_of_birth');
    }

    if (!gender) {
      methods.setError('gender', {
        type: 'gender',
      });
    } else {
      methods.clearErrors('gender');
    }
  }, [month, day, year, gender]);

  useEffect(() => {
    getPrefecture();
    getProfile();
  }, []);

  const onSubmit = (data) => {
    if (isValidAgeRange(data.date_of_birth)) {
      const newInfo: Partial<IUserModel> = {
        first_name: data.first_name,
        last_name: data.last_name,
        first_hiragana: data.first_hiragana,
        last_hiragana: data.last_hiragana,
        gender: data.gender,
        date_of_birth: data.date_of_birth,
        phone: data.phone,
      };

      const newAddress: Partial<IAddress> = {
        id: addresses?.length ? addresses[0].id : 0,
        default_flg: addresses?.length && 1,
        zip_code: data.zip_code,
        municipality: data.municipality,
        address: data.address,
        phone: data.deliveryPhone,
        prefecture_id: Number(data.prefecture),
      };

      const mergedData: IUserWithAddress = {
        info: newInfo,
        address: newAddress,
      };

      updateProfile(mergedData);
    } else {
      setNotif({
        type: 'warning',
        message: '警告',
        description: '生年月日が一致しません',
      });
    }
  };

  useEffect(() => {
    if (!!prefectureList && !!userProfile) {
      let defaultAddress;
      if (addresses) {
        defaultAddress = addresses.find((item) => item.default_flg === 1);
      }

      const { date_of_birth } = userProfile;
      let dateObject;
      if (date_of_birth) {
        dateObject = new Date(date_of_birth);
      }

      const newUser = {
        ...userProfile,
        year: dateObject?.getFullYear(),
        month: (dateObject.getMonth() + 1).toString().padStart(2, '0'),
        day: dateObject?.getDate().toString().padStart(2, '0'),
        phone: defaultAddress?.phone,
        zip_code: defaultAddress?.zip_code,
        municipality: defaultAddress?.municipality,
        prefecture: defaultAddress?.prefecture.id,
        address: defaultAddress?.address,
      };

      const temp = { ...initialValues, ...newUser };

      Object.keys(temp).forEach((key) => {
        if (key in temp) methods.setValue(key as keyof IUserModel, temp[key as keyof IUserModel]);
      });
    }
  }, [addresses, prefectureList, userProfile]);

  return (
    <>
      <HeaderStyled>
        <ul>
          <li>
            <span>{userProfile ? `${userProfile?.first_name} ${userProfile?.last_name} ` : ''}</span>{' '}
            {t(userInfomation.my_page)}
          </li>
          <PasswordChangeStyled>
            <Link to={RoutesName.CHANGE}>
              <span>{t(userInfomation.change_password)}</span>
            </Link>
          </PasswordChangeStyled>
        </ul>
      </HeaderStyled>
      <NavigatorStyled>
        <ul>
          <li>
            <Link to="/">{t(userInfomation.top_page)}</Link>
          </li>
          <li>
            <Link to="/path1">{t(userInfomation.medical_treatment)}</Link>
          </li>
          <AppointmentWrapper onClick={() => history.push(RoutesName.APPOINTMENT)}>
            <Button size="small">
              <AppointmentImageStyled src={ReserveIcon} alt="icon" />
              {t(userInfomation.appointment_button)}
            </Button>
          </AppointmentWrapper>
        </ul>
      </NavigatorStyled>
      <FormProvider {...methods}>
        <BodyContainerStyled>
          <TitleStyled>{t(userInfomation.title)}</TitleStyled>
          <ContainerStyled>
            <RowInfomationStyled>
              <p>{t(userInfomation.name)}</p>
              <RightColumnStyled>
                <FieldWrapperStyled width="228px">
                  <FieldInput name="first_name" size="small" placeholder={t(userInfomation.placeholder.first_name)} />
                </FieldWrapperStyled>
                <FieldWrapperStyled width="228px">
                  <FieldInput name="last_name" size="small" placeholder={t(userInfomation.placeholder.last_name)} />
                </FieldWrapperStyled>
              </RightColumnStyled>
            </RowInfomationStyled>
            <RowInfomationStyled>
              <p>{t(userInfomation.name_hiragana)}</p>
              <RightColumnStyled>
                <FieldWrapperStyled width="228px">
                  <FieldInput
                    name="first_hiragana"
                    size="small"
                    placeholder={t(userInfomation.placeholder.first_hiragana)}
                  />
                </FieldWrapperStyled>
                <FieldWrapperStyled width="228px">
                  <FieldInput
                    name="last_hiragana"
                    size="small"
                    placeholder={t(userInfomation.placeholder.last_hiragana)}
                  />
                </FieldWrapperStyled>
              </RightColumnStyled>
            </RowInfomationStyled>
            <RowInfomationStyled>
              <p>{t(userInfomation.gender)}</p>

              <RightColumnStyled>
                <RadioWrapper>
                  <FieldWrapperStyled width="228px">
                    <FieldRadio name="gender" options={genderOptions} />
                  </FieldWrapperStyled>
                  {methods.formState.errors.gender && <ErrorText>{methods.formState.errors.gender.message}</ErrorText>}
                </RadioWrapper>
              </RightColumnStyled>
            </RowInfomationStyled>

            <RowInfomationStyled>
              <p>{t(userInfomation.dob)}</p>
              <SelectRightColumnStyled>
                <div>
                  <SelectWrapperStyled width="124px">
                    <FieldSelect name="year" options={years} defaultValue="-" />
                    <span>{t(userInfomation.year_dob)} </span>
                  </SelectWrapperStyled>

                  <SelectWrapperStyled width="124px">
                    <FieldSelect name="month" options={months} defaultValue="-" />
                    <span>{t(userInfomation.month_dob)}</span>
                  </SelectWrapperStyled>

                  <SelectWrapperStyled width="124px">
                    <FieldSelect name="day" options={days} defaultValue="-" />
                    <span>{t(userInfomation.day_dob)}</span>
                  </SelectWrapperStyled>
                </div>
                {methods.formState.errors.date_of_birth && (
                  <ErrorText>{methods.formState.errors.date_of_birth.message}</ErrorText>
                )}
                <p>{t(userInfomation.note_on_age)}</p>
              </SelectRightColumnStyled>
            </RowInfomationStyled>

            <RowInfomationStyled>
              <p>{t(userInfomation.phone)}</p>
              <FieldWrapperStyled width="470px">
                <FieldInput name="phone" size="small" placeholder={t(userInfomation.placeholder.phone)} />
              </FieldWrapperStyled>
            </RowInfomationStyled>

            <RowInfomationStyled>
              <p>{t(userInfomation.email)}</p>
              <FieldWrapperStyled width="470px">
                <Input size="small" value={userProfile && userProfile.email} disabled />
              </FieldWrapperStyled>
            </RowInfomationStyled>

            <AddressLabelStyled>{t(userInfomation.address_delivery)}</AddressLabelStyled>

            <RowInfomationStyled>
              <p>{t(userInfomation.phone)}</p>
              <FieldWrapperStyled width="470px">
                <FieldInput name="deliveryPhone" size="small" placeholder={t(userInfomation.placeholder.phone)} />
              </FieldWrapperStyled>
            </RowInfomationStyled>

            <RowInfomationStyled>
              <p>{t(userInfomation.zip_code)}</p>
              <FieldWrapperStyled width="124px">
                <FieldInput name="zip_code" size="small" placeholder={t(userInfomation.placeholder.zip_code)} />
              </FieldWrapperStyled>
            </RowInfomationStyled>

            <RowInfomationStyled>
              <p>{t(userInfomation.prefecture)}</p>
              <RightColumnStyled>
                <SelectNotDivStyled width="124px">
                  <FieldSelect
                    name="prefecture"
                    defaultValue="-"
                    options={prefectureList && coverPrefectureList(prefectureList)}
                  />
                </SelectNotDivStyled>
              </RightColumnStyled>
            </RowInfomationStyled>

            <RowInfomationStyled>
              <p>{t(userInfomation.municipality)}</p>
              <RightColumnStyled>
                <FieldWrapperStyled width="470px">
                  <FieldInput name="municipality" size="small" />
                </FieldWrapperStyled>
              </RightColumnStyled>
            </RowInfomationStyled>
            <RowInfomationStyled>
              <p>{t(userInfomation.address)}</p>
              <RightColumnStyled>
                <FieldWrapperStyled width="470px">
                  <FieldInput name="address" size="small" />
                </FieldWrapperStyled>
              </RightColumnStyled>
            </RowInfomationStyled>

            <NoteWrapperStyled>
              <p>{t(userInfomation.note1)}</p>
              <p>{t(userInfomation.note2)}</p>
              <p>{t(userInfomation.note3)}</p>
            </NoteWrapperStyled>
            <ButtonWrapper>
              <Button size="middle" disabled={methods.formState.isSubmitting} onClick={methods.handleSubmit(onSubmit)}>
                {t(userInfomation.button)}
              </Button>
            </ButtonWrapper>
          </ContainerStyled>
        </BodyContainerStyled>
      </FormProvider>
    </>
  );
};
