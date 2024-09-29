'use client'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useTransition } from 'react'

export const LanguageSelector = () => {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const localActive = useLocale()

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value
    startTransition(() => {
      router.replace(`/${nextLocale}`)
    })
  }

  return (
    <label htmlFor="">
      <p className="sr-only">Change language</p>
      <select
        className="border rounded-[64px] ring-0 hover:ring-0 hover:border-none p-2 text-slate-arc-500 focus:ring-0 focus:border-none bg-inherit"
        name=""
        id=""
        onChange={onSelectChange}
        defaultValue={localActive}
        disabled={isPending}
      >
        <option value="en">Inglês</option>
        <option value="pt">Português</option>
      </select>
    </label>
  )
}
