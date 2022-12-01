import { Fragment, SetStateAction, Dispatch } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { openNewWin } from "@/utils";
export default function SideWin({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const callback = () => {
    setOpen(false);
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg bold font-medium text-gray-900"></Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      {/* Replace with your content */}
                      <div className="w-full">
                        <div className="ml-3 flex-1 pt-0.5">
                          <p className="text-3xl bold font-medium text-gray-900">
                            Get a Wallet Address
                          </p>
                          <p className="text-2xl bold font-medium text-gray-900 mt-8">
                            An Existing secp256k1 Wallet Address
                          </p>
                          <p className="mt-6 text-base text-gray-600 leading-6">
                            If you already have a private key generated by the
                            secp256k1 algorithm and its corresponding wallet
                            address, such as an Ethereum wallet address, you can
                            use that wallet address directly.
                          </p>
                          <p className="text-2xl mt-6 bold font-medium text-gray-900">
                            Using MetaMask
                          </p>
                          <p className="mt-6 text-base text-gray-600">
                            You can download
                            <a
                              onClick={() => {
                                openNewWin("https://metamask.io/download/");
                              }}
                              className="text-[#3B7DDD] cursor-pointer underline px-2"
                            >
                              MetaMask
                            </a>
                            and create an account for free.
                          </p>
                          <div className="w-[20rem] h-[40rem] meta-mask"></div>

                          <p className="mt-1 text-base text-gray-600 leading-6">
                            The account address in MetaMask can be used as a
                            Wallet Address, and the corresponding private key is
                            the same.
                          </p>
                        </div>
                      </div>
                      {/* /End replace */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}