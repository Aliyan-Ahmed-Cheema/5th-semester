import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
}

interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  type?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  readOnly?: boolean;
  className?: string;
  renderSkeleton?: (field: any) => React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
  const { fieldType, type, placeholder, className, onChange } = props;

  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="relative">
          <FormControl>
            <Input
              placeholder={placeholder}
              type={type}
              className={className}
              {...field}
            />
          </FormControl>
        </div>
      );

    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            placeholder={placeholder}
            className={className}
            {...field}
          />
        </FormControl>
      );

    case FormFieldType.SELECT:
      return (
        <Select
          onValueChange={(value) => {
            field.onChange(value);
            if (onChange)
              onChange({
                target: { value },
              } as React.ChangeEvent<HTMLInputElement>);
          }}
          defaultValue={field.value}
        >
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
          </FormControl>
          <SelectContent>{props.children}</SelectContent>
        </Select>
      );
  }
};

const CustomFormField = (props: CustomProps) => {
  const { control, fieldType, name, label, disabled } = props;
  return (
    <FormField
      disabled={disabled}
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}
          <RenderField field={field} props={props} />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
