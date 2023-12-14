import {ChangeEvent, ComponentPropsWithoutRef, ElementRef, forwardRef, useState} from 'react'

import {EyeIcon} from '@/icons/icon-components/eye-icon'
import {EyeOffIcon} from '@/icons/icon-components/eye-off-icon'
import {SearchIcon} from '@/icons/icon-components/search-icon'
import clsx from 'clsx'

import s from './text-field.module.scss'
import {CloseIcon} from "@/icons";

type OwnProps = {
  disabled?: boolean
  errorMessage?: string
  isModal?: boolean
  label?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  type?: string
  textValue?: string
}
type TextFieldProps = OwnProps & Omit<ComponentPropsWithoutRef<'input'>, keyof OwnProps>

export const TextField = forwardRef<ElementRef<'input'>, TextFieldProps>(
  (
    {
      disabled,
      errorMessage,
      isModal,
      label,
      onChange,
      onValueChange,
      placeholder,
      type,
      textValue,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [currentValue, setCurrentValue] = useState<string | undefined>(textValue)
    const isPasswordButtonShow = type === 'password'
    const isSearchButtonShow = type === 'search'
    const activeColor = currentValue ? 'var(--color-light-100)' : 'var(--color-dark-300)'

    const classNames = {
      errorLabel: s.errorLabel,
      field: clsx(
        s.field,
        errorMessage && s.error,
        isSearchButtonShow ? s.fieldWithSearch : s.fieldWithOutSearch,
        disabled && s.disabledLabel
      ),
      fieldContainer: s.fieldContainer,
      label: clsx(s.label, disabled ? s.disabledLabel : s.label),
      root: clsx(!isModal && s.root),
      showPassword: s.showPassword,
      showSearch: s.showSearch,
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      setCurrentValue(e.currentTarget.value)
      onValueChange && onValueChange(e.target.value)
    }

    const onCloseClickHandler = () => {
      setCurrentValue('')
    }

    return (
      <div className={classNames.root}>
        <span className={classNames.label}>{label}</span>
        <div className={classNames.fieldContainer}>
          <input
            className={classNames.field}
            disabled={disabled}
            onChange={onChangeHandler}
            placeholder={errorMessage ? errorMessage : placeholder}
            ref={ref}
            type={showPassword ? 'text' : type}
            value={currentValue}
            {...props}
          />
          {isPasswordButtonShow && (
            <button
              className={classNames.showPassword}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeIcon/> : <EyeOffIcon/>}
            </button>
          )}
          {isSearchButtonShow && (
            <>
                <SearchIcon className={s.showSearch} fill={activeColor}/>
              {currentValue && (
                <CloseIcon
                  style={{display:"flex", justifyContent:'center', alignItems:'center'}}
                  className={s.closeIcon}
                  onClick={onCloseClickHandler}
                />
              )}
            </>
          )}
        </div>
        <div>
          <span className={classNames.errorLabel}>{errorMessage}</span>
        </div>
      </div>
    )
  }
)
