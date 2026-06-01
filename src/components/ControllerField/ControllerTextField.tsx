import { COLORS } from '@/constants/colors';
import { SvgIconComponent } from '@mui/icons-material';
import { TextField, TextFieldProps } from '@mui/material';
import { ReactNode } from 'react';
import { Controller, ControllerProps, FieldValues } from 'react-hook-form';

type Props<T extends FieldValues> = {
  helperText?: ReactNode;
  hasError?: boolean;
  textFieldProps?: TextFieldProps;
  controllerProps: Omit<ControllerProps<T>, 'render'>;
  prefixIcon?: SvgIconComponent;
};

export default function ControllerTextField<T extends FieldValues>({
  helperText,
  hasError,
  textFieldProps,
  controllerProps,
  prefixIcon: PrefixIcon,
}: Props<T>) {
  return (
    <Controller
      {...controllerProps}
      render={({ field: { ref, ...field } }) => (
        <TextField
          {...field}
          inputRef={ref}
          fullWidth
          margin='normal'
          error={!!hasError}
          helperText={helperText}
          {...textFieldProps}
          slotProps={{
            input: {
              size: 'medium',
              startAdornment: PrefixIcon ? <PrefixIcon color='action' sx={{ mr: 1 }} /> : null,
              sx: {
                "& .MuiOutlinedInput-notchedOutline":{
                  border: `1px solid ${COLORS.BASE}`,
                  borderRadius:"10px",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: `1px solid ${COLORS.BASE}`,
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: `1px solid ${COLORS.BASE}`,
                }
              },
              ...textFieldProps?.slotProps?.input,
            },
          }}
        />
      )}
    />
  );
}
