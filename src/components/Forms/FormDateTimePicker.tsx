import { DatePicker, DatePickerProps } from 'antd';
import { RangePickerProps } from 'antd/es/date-picker';
import dayjs, { Dayjs } from 'dayjs';

type DatePikerProps = {
  onChange?: (valOne: Dayjs | null, valTwo: string) => void;
  label?: string;
  defaultValue?: Dayjs | null;
  size?: 'large' | 'small';
  required?: boolean;
};

const FormDateTimePicker = ({
  label,
  onChange,
  size = 'large',
  required,
  defaultValue,
}: DatePikerProps) => {
  const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    return current && current < dayjs().endOf('day');
  };
  const handleOnChange: DatePickerProps['onChange'] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
  };

  return (
    <>
      {label ? label : null}
      {required ? (
        <span
          style={{
            color: 'red',
          }}
        >
          *
        </span>
      ) : null}
      <DatePicker
        defaultValue={dayjs(defaultValue, 'DD-MM-YYYY HH:mm')}
        showTime={{ defaultValue: dayjs('00:00:00', 'HH:mm:ss') }}
        disabledDate={disabledDate}
        format="DD-MM-YYYY HH:mm"
        placeholder="Select Date and Time"
        size={size}
        onChange={handleOnChange}
        changeOnBlur={true}
        style={{ width: '100%' }}
      />
    </>
  );
};

export default FormDateTimePicker;
