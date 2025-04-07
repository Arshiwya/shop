import React from 'react'

export default function Button({title}) {
  return (
    <button
    type="button"
    class="flex items-center rounded border bg-surface-solid-50 px-2 py-1 text-text-darkGray lg:hover:border-primary-main lg:hover:bg-surface-solid-0 gap-1 text-body-14 border-primary-main keen-slider__slide !w-fit min-w-fit justify-center"
    data-sentry-component="EasyAccess"
    data-sentry-source-file="easy-access.tsx"
  >
    {title}
    <svg
      class="h-4 w-4 hidden"
      data-sentry-element="svg"
      data-sentry-source-file="close.tsx"
      data-sentry-component="IconClose"
    >
      <use
        href="#close"
        data-sentry-element="use"
        data-sentry-source-file="close.tsx"
      ></use>
    </svg>
  </button>
  )
}
