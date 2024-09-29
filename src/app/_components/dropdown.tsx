import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { CaretDown } from '@phosphor-icons/react'

export function Dropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left max-lg:w-full">
      <div>
        <MenuButton className="flex justify-between w-full items-center lg:justify-center gap-x-1.5 rounded-[64px] border bg-inherit px-3 py-2 text-gray-700 hover:bg-gray-50">
          Português
          <CaretDown className="-mr-1 h-5 w-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-full lg:w-28 rounded-md bg-white transition"
      >
        <div className="py-1 rounded-lg border">
          <MenuItem>
            <a href="#" className="block px-4 py-2 text-gray-700">
              Inglês
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}
