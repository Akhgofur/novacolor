import { ChangeEvent, FC } from "react";
interface ContactInputProps {
  type?: string;
  className?: string;
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => any;
}
const ContactInput: FC<ContactInputProps> = ({
  className,
  placeholder,
  type = "text",
  multiline = false,
  rows,
  value,
  onChange,
}) => {
  return multiline ? (
    <textarea
      rows={rows}
      className={`w-full py-3 px-4 bg-[#f6f2eb] rounded-md outline-none text-base text-[#333029] resize-none  ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></textarea>
  ) : (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
      className={`w-full py-3 px-4 bg-[#f6f2eb] rounded-md outline-none text-base text-[#333029]  ${className}`}
    />
  );
};

export default ContactInput;
