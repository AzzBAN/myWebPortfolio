import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [navigation, setNavigation] = useState([
    { name: "Home", href: "#home", current: true },
    { name: "About", href: "#about", current: false },
    // { name: "Projects", href: "#", current: false },
    // { name: "Calendar", href: "#", current: false },
  ]);
  const handleNavigationClick = (index) => {
    const updatedNavigation = navigation.map((item, i) => {
      if (i === index) {
        return { ...item, current: true };
      } else {
        return { ...item, current: false };
      }
    });

    setNavigation(updatedNavigation);
  };
  return (
    <Disclosure as="nav" className="bg-gray-800 z-10 fixed w-full top-0 shadow-md">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                </Disclosure.Button>
              </div>

              {/* navbar Left */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start gap-x-2">
                <div className="flex items-center">
                  <svg height={30} width={30} viewBox="0 0 400 400">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <polygon
                        className="cls-3 fill-[#187c8c]"
                        points="393.87 111.1 361.87 129.54 329.92 148.03 297.76 129.38 265.6 110.79 233.6 92.24 201.55 73.7 169.65 92.08 137.81 110.52 105.91 128.91 73.96 147.34 42.12 128.75 10.38 110.26 42.23 91.87 74.07 73.49 105.86 55.1 105.91 55.1 137.7 36.72 137.75 36.72 169.54 18.33 169.6 18.33 201.39 0 233.34 18.44 265.28 36.88 265.34 36.88 297.39 55.42 329.45 73.91 329.5 73.91 361.66 92.51 393.87 111.1"
                      />
                      <polygon
                        className="cls-2 fill-[#1d6278]"
                        points="190.47 312.81 190.47 385.77 158.74 367.43 127 349.15 95.21 330.77 63.47 312.44 63.47 385.45 31.74 367.12 0 348.84 0 129.86 31.74 148.19 63.47 166.47 63.47 239.48 95.21 257.81 127 276.14 158.74 294.48 190.47 312.81"
                      />
                      <polygon
                        className="cls-1 fill-[#11526d]"
                        points="402.4 130.71 402.4 348.84 370.67 367.12 338.93 385.45 338.93 312.44 307.14 330.82 275.4 349.15 243.67 367.43 211.93 385.77 211.93 312.81 243.67 294.48 275.4 276.14 307.14 257.81 338.93 239.48 338.93 167.32 370.67 148.99 402.4 130.71"
                      />
                      <polygon className="cls-1 fill-[#11526d]" points="201.47 98.64 100.5 156.92 92.2 172.06 92.2 229.84 92.46 229.98 201.47 167.69 201.47 98.64" />
                      <polygon className="cls-2 fill-[#1d6278]" points="310.2 172.73 303.07 157.47 201.47 98.64 201.47 167.56 310.2 229.69 310.2 172.73" />
                      <path className="cls-3 fill-[#187c8c]" d="m201.47,167.56v.13l-109.01,62.29,97.64,56.39,2.61,1.5h17.01c.26,0,1.39-.53,3.23-1.5,17.33-9.1,97.25-56.54,97.25-56.54v-.14l-108.73-62.13Z" />
                    </g>
                  </svg>
                </div>
                <div className="flex items-center">
                  <a>
                    <span className="font-bold">A</span>zz<span className="font-bold">BAN</span> WebPortfolio
                  </a>
                </div>
              </div>
              {/* end Navbar Left */}

              {/* Navbar Right */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item, index) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "rounded-md px-3 py-2 text-sm font-medium")}
                        aria-current={item.current ? "page" : undefined}
                        onClick={() => handleNavigationClick(index)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Profile dropdown */}
                {/* <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a href="#" className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a href="#" className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a href="#" className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu> */}
              </div>
              {/* end nvabar right */}
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block rounded-md px-3 py-2 text-base font-medium")}
                  aria-current={item.current ? "page" : undefined}
                  onClick={() => handleNavigationClick(index)}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
