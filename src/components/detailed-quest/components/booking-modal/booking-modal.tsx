import * as S from './booking-modal.styled';

import { ReactComponent as IconClose } from '../../../../assets/img/icon-close.svg';
import { OrderPost } from '../../../../types/state';
import React, { useEffect, useState } from 'react';
import { api } from '../../../../store';
import { APIRoute } from '../../../../const';

type BookingModalProps = {
  onCloseButtonClick: (arg0: boolean) => void,
}

const initialState: OrderPost = {
  name: '',
  peopleCount: '',
  phone: '',
  isLegal: false,
};

enum InputTypeMap {
  Name = 'name',
  PeopleCount = 'peopleCount',
  Phone = 'phone',
}

const BookingModal = ({ onCloseButtonClick }: BookingModalProps): JSX.Element => {
  const [formData, setFormData] = useState(initialState);
  const [sendOrder, setSendOrder] = useState(false);

  const inputWritingHandle = (evt: React.FormEvent<HTMLInputElement>, inputType: string) => {
    const { value } = evt.currentTarget;
    setFormData({ ...formData, [inputType]: value });
  };

  const inputCheckHandle = () => {
    setFormData({ ...formData, isLegal: !formData.isLegal });
  };

  const onFormSubmit = (evt: React.FormEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setSendOrder(true);
  };

  useEffect(() => {
    if (sendOrder) {
      api.post<OrderPost>(APIRoute.Orders, formData);
      setFormData(initialState);
      setSendOrder(false);
    }
  }, [sendOrder]);

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={() => onCloseButtonClick(false)}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          action="https://echo.htmlacademy.ru"
          method="post"
          id="booking-form"
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              required
              onInput={(evt) => inputWritingHandle(evt, InputTypeMap.Name)}
              value={formData.name}
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон"
              required
              onInput={(evt) => inputWritingHandle(evt, InputTypeMap.Phone)}
              value={formData.phone}
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              required
              onInput={(evt) => inputWritingHandle(evt, InputTypeMap.PeopleCount)}
              value={formData.peopleCount}
            />
          </S.BookingField>
          <S.BookingSubmit type="submit" onSubmit={onFormSubmit}>Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              required
              onChange={inputCheckHandle}
              checked={formData.isLegal}
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
};

export default BookingModal;
