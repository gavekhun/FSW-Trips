import _CurrencyInput, { CurrencyInputProps } from "react-currency-input-field";
import { twMerge } from "tailwind-merge";

interface InputProps extends CurrencyInputProps {
  error?: boolean;
  errorMessage?: string;
}

function OrçamentoInput({
  className,
  error,
  errorMessage,
  ...props
}: InputProps) {
  const inputCurrencyClassName = twMerge(
      "rounded-lg border shadow-sm bg-white p-2 text-sm font-normal text-primaryDark placeholder-black placeholder-opacity-20 outline-none transition-all focus:ring-1 focus:ring-primary",
      error ? "border-red-500" : "",
      className,
  );

  return (
    <div className="flex w-full flex-col">
      <_CurrencyInput
        lang="pt-BR"
        className={inputCurrencyClassName}
        intlConfig={{ locale: "pt-BR", currency: "BRL" }}
        {...props}
      />
      {error && errorMessage && (
        <div className="mt-1 text-xs text-red-500">{errorMessage}</div>
      )}
    </div>
  );
}

export default OrçamentoInput;