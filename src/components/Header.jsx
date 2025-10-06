function Header() {
    
    return (
      <>
        <nav className={`bg-blue`}>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                        <img src="https://msmeregistration.in/static/media/navLogo.f48f282d409cc0f5873b.webp"
                        alt="Company Logo" className="h-16 w-[170px]" />
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                            <div className="relative inline-block text-left">
                              <button onClick={() => {
                                document.getElementById('dropdownMenu1')?.classList?.toggle('hidden')
                                document.getElementById('dropdownMenu2')?.classList?.add('hidden')
                              }} className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-white rounded-md">
                                Registration
                                <svg viewBox="0 0 20 20" fill="currentColor" className="-mr-1 h-5 w-5 text-white">
                                  <path d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.72-3.73a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z" />
                                </svg>
                              </button>

                              <div id="dropdownMenu1" className="hidden absolute right-0 mt-2 w-65 rounded-md bg-white shadow-lg z-10">
                                <div className="py-1">
                                  <a href='/register' className="block px-4 py-2 text-sm text-black hover:bg-gray-100 flex"><img src="../src/assets\RightAngleIcon.png" className="h-5 w-[14px] mr-2" />Udyam Registration Form</a>
                                  <a href='/re-register' className="block px-4 py-2 text-sm text-black hover:bg-gray-100 flex" ><img src="../src/assets\RightAngleIcon.png" className="h-5 w-[14px] mr-2" />Udyam Re-Registration Form</a>
                                  <a href='/cancel' className="block px-4 py-2 text-sm text-black hover:bg-gray-100 flex"><img src="../src/assets\RightAngleIcon.png" className="h-5 w-[14px] mr-2" />Cancel Udyam Registration Form</a>
                                  <a href='/forgot' className="block px-4 py-2 text-sm text-black hover:bg-gray-100 flex "><img src="../src/assets\RightAngleIcon.png" className="h-5 w-[14px] mr-2" />Forgot Udyam Registration Form</a>
                                </div>
                              </div>
                            </div>
                            <div className="relative inline-block text-left">
                              <button onClick={() => {
                                document.getElementById('dropdownMenu2')?.classList?.toggle('hidden')
                                document.getElementById('dropdownMenu1')?.classList?.add('hidden')
                              }} className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-white rounded-md">
                                Certificate
                                <svg viewBox="0 0 20 20" fill="currentColor" className="-mr-1 h-5 w-5 text-white">
                                  <path d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.72-3.73a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z" />
                                </svg>
                              </button>

                              <div id="dropdownMenu2" className="hidden absolute right-0 mt-2 w-55 rounded-md bg-white shadow-lg z-10">
                                <div className="py-1">
                                  <a href='/update' className="block px-4 py-2 text-sm text-black hover:bg-gray-100 flex"><img src="../src/assets\RightAngleIcon.png" className="h-5 w-[14px] mr-2" />Update Udyam Certificate</a>
                                  <a href='/print' className="block px-4 py-2 text-sm text-black hover:bg-gray-100 flex"><img src="../src/assets\RightAngleIcon.png" className="h-5 w-[14px] mr-2" />Print Udyam Certificate</a>
                                  <a href='/udyog_print' className="block px-4 py-2 text-sm text-black hover:bg-gray-100 flex"><img src="../src/assets\RightAngleIcon.png" className="h-5 w-[14px] mr-2" />Udyog Print Certificate</a>
                                  <a href='/sample' className="block px-4 py-2 text-sm text-black hover:bg-gray-100 flex"><img src="../src/assets\RightAngleIcon.png" className="h-5 w-[14px] mr-2" />Sample Certificate</a>
                                </div>
                              </div>
                            </div>
                            <div className="relative inline-block text-left">
                              <button onClick={() => document.getElementById('dropdownMenu3')?.classList?.toggle('hidden')} className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-white rounded-md">
                                Contact us
                                <svg viewBox="0 0 20 20" fill="currentColor" className="-mr-1 h-5 w-5 text-white">
                                  <path d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.72-3.73a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z" />
                                </svg>
                              </button>
                            </div>
                            <div className="relative inline-block text-left">
                              <button onClick={() => document.getElementById('dropdownMenu4')?.classList?.toggle('hidden')} className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-white rounded-md">
                                Blogs
                                <svg viewBox="0 0 20 20" fill="currentColor" className="-mr-1 h-5 w-5 text-white">
                                  <path d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.72-3.73a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z" />
                                </svg>
                              </button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
      </nav>
      </>
    );
}

export default Header;