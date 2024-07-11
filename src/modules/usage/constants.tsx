import { translations } from 'locales/translations';
import { PropsAppointment } from 'components/page/appointment';
import { PropsCommitment } from 'components/page/commitment';
import { Point1, Point2, Point3, Point4 } from 'assets/images/commitment';
import { ChildrenAppointment, ChildrenStyle, ContentChildren, LinkChildren, LinkStyle, SubContent } from './styled';

export const listDataApointment: (t) => PropsAppointment[] = (t) => {
  const { usage } = translations;
  return [
    {
      id: 1,
      picture: 'https://clinic.dmm.com/images/usage/pic_usage_appointment_01_pc.webp?=20240221',
      step: 1,
      title: 'usage.DataApointment.usage1.title',
      children: (
        <ChildrenAppointment>
          {t(usage.DataApointment?.usage1.content)}
          <ContentChildren>
            <LinkStyle href="/path" target="blank">
              {t(usage.DataApointment?.usage1.link)}
            </LinkStyle>
            {t(usage.DataApointment?.usage1.desc)}
          </ContentChildren>
        </ChildrenAppointment>
      ),
    },
    {
      id: 2,
      picture: 'https://clinic.dmm.com/images/usage/pic_usage_appointment_02_pc.webp?=20240221',
      step: 2,
      title: 'usage.DataApointment.usage2.title',
      children: (
        <ChildrenAppointment>
          <ContentChildren>{t(usage.DataApointment?.usage2.content)}</ContentChildren>
        </ChildrenAppointment>
      ),
    },
    {
      id: 3,
      picture: 'https://clinic.dmm.com/images/usage/pic_usage_appointment_03_pc.webp?=20240221',
      step: 3,
      title: 'usage.DataApointment.usage3.title',
      children: (
        <ChildrenAppointment>
          <ContentChildren>{t(usage.DataApointment?.usage3.content)}</ContentChildren>
          <ContentChildren>{t(usage.DataApointment?.usage3.content2)}</ContentChildren>
        </ChildrenAppointment>
      ),
    },
    {
      id: 4,
      picture: 'https://clinic.dmm.com/images/usage/pic_usage_appointment_04_pc.webp?=20240221',
      step: 4,
      title: 'usage.DataApointment.usage4.title',
      children: (
        <ChildrenAppointment>
          <ContentChildren>{t(usage.DataApointment?.usage4.content)}</ContentChildren>
        </ChildrenAppointment>
      ),
    },
    {
      id: 5,
      picture: 'https://clinic.dmm.com/images/usage/pic_usage_appointment_05_pc.webp?=20240221',
      step: 5,
      title: 'usage.DataApointment.usage5.title',
      children: (
        <ChildrenAppointment>
          <ContentChildren>{t(usage.DataApointment?.usage5.content)}</ContentChildren>
          <ContentChildren>{t(usage.DataApointment?.usage5.content2)}</ContentChildren>
        </ChildrenAppointment>
      ),
    },
    {
      id: 6,
      picture: '	https://clinic.dmm.com/images/usage/pic_usage_appointment_06_pc.webp?=20240221',
      step: 6,
      title: 'usage.DataApointment.usage6.title',
      children: (
        <ChildrenAppointment>
          <ContentChildren>{t(usage.DataApointment?.usage6.content)}</ContentChildren>
        </ChildrenAppointment>
      ),
    },
    {
      id: 7,
      picture: 'https://clinic.dmm.com/images/usage/pic_usage_appointment_07_pc.webp?=20240221',
      step: 7,
      title: 'usage.DataApointment.usage7.title',
      children: (
        <ChildrenAppointment>
          <ContentChildren>{t(usage.DataApointment?.usage7.content)}</ContentChildren>
          <ContentChildren>{t(usage.DataApointment?.usage7.content2)}</ContentChildren>
        </ChildrenAppointment>
      ),
    },
  ];
};

export const listDataFlowDay: (t) => PropsAppointment[] = (t) => {
  const { usage } = translations;

  return [
    {
      id: 1,
      picture: 'https://clinic.dmm.com/images/usage/pic_usage_appointment_01_pc.webp?=20240221',
      step: 1,
      title: 'usage.dataFlowDay.flow1.title',
      children: (
        <ChildrenAppointment>
          <ContentChildren>{t(usage.dataFlowDay.flow1.content)}</ContentChildren>
          <ContentChildren>{t(usage.dataFlowDay.flow1.content2)}</ContentChildren>
          <SubContent>{t(usage.dataFlowDay.flow1.subContent)}</SubContent>
        </ChildrenAppointment>
      ),
    },
    {
      id: 2,
      picture: 'https://clinic.dmm.com/images/usage/pic_usage_flowoftheday_02_pc.webp?=20240221',
      step: 2,
      title: 'usage.dataFlowDay.flow2.title',
      children: (
        <ChildrenAppointment>
          <ContentChildren>{t(usage.dataFlowDay.flow2.content)}</ContentChildren>
          <ContentChildren>{t(usage.dataFlowDay.flow2.content2)}</ContentChildren>
          <SubContent>{t(usage.dataFlowDay.flow2.subContent)}</SubContent>
        </ChildrenAppointment>
      ),
    },
    {
      id: 3,
      picture: 'https://clinic.dmm.com/images/usage/pic_usage_flowoftheday_03_pc.webp?=20240221',
      step: 3,
      title: 'usage.dataFlowDay.flow3.title',
      children: (
        <ChildrenAppointment>
          <ContentChildren>{t(usage.dataFlowDay.flow3.content)}</ContentChildren>
          <ContentChildren>{t(usage.dataFlowDay.flow3.content)}</ContentChildren>
        </ChildrenAppointment>
      ),
    },
  ];
};

export const listDataOrder: (t) => PropsAppointment[] = (t) => {
  const { usage } = translations;

  return [
    {
      id: 1,
      picture: 'https://clinic.dmm.com/images/usage/pic_usage_order_01_pc.webp?=20240221',
      step: 1,
      title: 'usage.dataOrder.order1.title',
      children: (
        <ChildrenAppointment>
          <ContentChildren>{t(usage.dataOrder.order1.content)}</ContentChildren>
        </ChildrenAppointment>
      ),
    },
    {
      id: 2,
      picture: 'https://clinic.dmm.com/images/usage/pic_usage_order_02_pc.webp?=20240221',
      step: 2,
      title: 'usage.dataOrder.order2.title',
      children: (
        <ChildrenAppointment>
          <ContentChildren>{t(usage.dataOrder.order2.content)}</ContentChildren>
          <ContentChildren>{t(usage.dataOrder.order2.content2)}</ContentChildren>
          <LinkChildren>
            <LinkStyle href="/blog/1" target="blank">
              usage.dataOrder.order2.link
            </LinkStyle>
          </LinkChildren>
        </ChildrenAppointment>
      ),
    },
    {
      id: 3,
      picture: '	https://clinic.dmm.com/images/usage/pic_usage_order_03_pc.webp?=20240221',
      step: 3,
      title: 'usage.dataOrder.order3.title',
      children: (
        <ChildrenAppointment>
          <ContentChildren>{t(usage.dataOrder.order3.content)}</ContentChildren>
          <ContentChildren>{t(usage.dataOrder.order3.content2)}</ContentChildren>
        </ChildrenAppointment>
      ),
    },
    {
      id: 4,
      picture: 'https://clinic.dmm.com/images/usage/pic_usage_order_04_pc.webp?=20240221',
      step: 4,
      title: 'usage.dataOrder.order4.title',
      children: (
        <ChildrenAppointment>
          <ContentChildren>{t(usage.dataOrder.order4.content)}</ContentChildren>
          <SubContent>t{usage.dataOrder.order4.content2}</SubContent>
        </ChildrenAppointment>
      ),
    },
  ];
};

export const listDataCommitment: (t) => PropsCommitment[] = (t) => {
  const { usage } = translations;

  return [
    {
      id: 1,
      picture: Point1,
      point: 1,
      title: 'usage.dataCommitment.commitment1.title',
      content: [
        {
          id: 1,
          text: 'usage.dataCommitment.commitment1.text1',
        },
        { id: 2, text: 'usage.dataCommitment.commitment1.text2 ' },
      ],
    },
    {
      id: 2,
      picture: Point2,
      point: 2,
      title: 'usage.dataCommitment.commitment2.title',
      content: [
        {
          id: 1,
          text: 'usage.dataCommitment.commitment2.text1',
        },
        {
          id: 1,
          text: 'usage.dataCommitment.commitment2.text2',
        },
      ],
    },
    {
      id: 3,
      picture: Point3,
      point: 3,
      title: 'usage.dataCommitment.commitment1.title',
      content: [
        {
          id: 1,
          text: 'usage.dataCommitment.commitment2.text1',
        },
        {
          id: 2,
          text: 'usage.dataCommitment.commitment2.text2',
        },
      ],
    },
    {
      id: 4,
      picture: Point4,
      point: 4,
      title: 'usage.dataCommitment.commitment1.title',
      content: [
        {
          id: 1,
          text: 'usage.dataCommitment.commitment2.text1',
        },
        {
          id: 2,
          text: 'usage.dataCommitment.commitment2.text2',
        },
      ],
      children: (
        <ChildrenStyle>
          <div>
            <div>{t(usage.text1)}</div>
            <div>{t(usage.text2)}</div>
          </div>
        </ChildrenStyle>
      ),
    },
  ];
};
