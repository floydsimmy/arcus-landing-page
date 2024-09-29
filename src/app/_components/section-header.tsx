import Image from 'next/image'

interface SectionProps {
  title: string
  description?: string
}

export const SectionHeader = ({ title, description }: SectionProps) => {
  return (
    <div className="flex justify-start items-start flex-col gap-3 w-full ">
      <div className="flex w-fit rounded-[4rem] gap-[0.625rem] bg-blue-arc-700 text-white px-4 py-2">
        <Image src="/triangle.svg" alt="triangle" width={15} height={15} />
        <h2 className="text-base lg:text-2xl leading-9 ">{title}</h2>
      </div>
      <p className="max-md:text-sm text-gray-600">{description} </p>
    </div>
  )
}
