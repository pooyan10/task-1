import React from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import { LockClosedIcon } from "@heroicons/react/24/outline";

function LoginPage() {
  return (
    <div className="md:grid grid-cols-12 ">
      <div className="col-span-5  h-screen bg-[#F8F8FB]">
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="flex flex-col justify-center items-center w-[20rem] rounded-xl">
            <div className="flex">
              <div className="flex flex-col justify-start text-center">
                <h1 className="text-lg font-bold text-[#282C52]">
                  ورود به حساب کاربری
                </h1>

                <h3 className="text-sm font-thin text-[#282C52]">
                  شرکت توسعه و پخش مک دونالد
                </h3>
              </div>
              <div className="border h-12 ml-2"></div>
              <svg
                className="p-3 -mt-3 -mr-3"
                width="62"
                height="69"
                viewBox="0 0 62 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.11908 54.1804L16.1705 59.3386"
                  stroke="#0116CB"
                  stroke-width="4"
                  stroke-miterlimit="10"
                />
                <path
                  d="M17.3214 59.9949L27.669 65.8919"
                  stroke="#0116CB"
                  stroke-width="4"
                  stroke-miterlimit="10"
                />
                <path
                  d="M5.94889 53.5135C4.96675 52.8374 4.16393 51.9325 3.60977 50.8767C3.05561 49.821 2.76677 48.6462 2.7682 47.4539L2.66821 22.7631"
                  stroke="#0116CB"
                  stroke-width="4"
                  stroke-miterlimit="10"
                />
                <path
                  d="M7.11907 54.1804L5.94885 53.5139C6.31824 53.7705 6.70988 53.9936 7.11907 54.1804V54.1804Z"
                  stroke="#0116CB"
                  stroke-width="4"
                  stroke-miterlimit="10"
                />
                <path
                  d="M27.4131 4.00922L25.5245 5.11834L27.4916 3.96738C27.465 3.98219 27.439 3.99441 27.4131 4.00922Z"
                  stroke="#0116CB"
                  stroke-width="4"
                  stroke-miterlimit="10"
                />
                <path
                  d="M38.4254 9.42184C37.7532 4.33917 32.0754 1.34882 27.4905 3.96737L25.5233 5.11833L6.27438 16.4132C5.17003 17.0633 4.25572 17.9919 3.62287 19.1063C2.99003 20.2206 2.66082 21.4816 2.66818 22.7631L2.76817 47.4539C2.76656 48.6464 3.05531 49.8214 3.60948 50.8773C4.16364 51.9333 4.96656 52.8384 5.94886 53.5146L7.11908 54.1812"
                  stroke="#0116CB"
                  stroke-width="4"
                  stroke-miterlimit="10"
                />
                <path
                  d="M34.5396 66.3444C34.7768 66.2378 35.0084 66.1189 35.2332 65.9881L56.3875 53.5672C56.4082 53.5553 56.4275 53.5413 56.4478 53.5302L34.5396 66.3444Z"
                  stroke="#0116CB"
                  stroke-width="4"
                  stroke-miterlimit="10"
                />
                <path
                  d="M28.1241 66.1511L27.669 65.8918C27.8178 65.9832 27.9696 66.0696 28.1241 66.1511Z"
                  stroke="#0116CB"
                  stroke-width="4"
                  stroke-miterlimit="10"
                />
                <path
                  d="M27.669 65.8919L28.1241 66.1511C29.1068 66.6738 30.1967 66.9632 31.3093 66.9967C32.4218 67.0302 33.5272 66.807 34.5396 66.3444L56.4478 53.529C57.5357 52.8747 58.435 51.9491 59.0577 50.8428C59.6804 49.7365 60.005 48.4875 59.9999 47.218L59.9344 22.5175C59.9199 16.8183 53.7393 13.2573 48.8473 16.128L48.777 16.1691C48.777 16.1754 48.777 16.1813 48.777 16.1873"
                  stroke="#0116CB"
                  stroke-width="4"
                  stroke-miterlimit="10"
                />
                <path
                  d="M17.3215 59.9948L16.1705 59.3386C16.5342 59.5906 16.9194 59.8102 17.3215 59.9948Z"
                  stroke="#0116CB"
                  stroke-width="4"
                  stroke-miterlimit="10"
                />
                <path
                  d="M48.7758 16.1691C48.7719 14.9436 48.4633 13.7383 47.8778 12.6618C47.2923 11.5852 46.4482 10.6712 45.4216 10.002C44.395 9.33272 43.218 8.92931 41.9967 8.82804C40.7755 8.72677 39.5481 8.93082 38.4253 9.42182"
                  stroke="#0116CB"
                  stroke-width="4"
                  stroke-miterlimit="10"
                />
                <path
                  d="M48.9143 25.1479C48.9106 24.7535 48.7662 16.812 48.7662 16.812C48.7662 16.6164 48.7551 16.4246 48.7403 16.2365C48.6481 16.2843 48.5551 16.3324 48.4674 16.3846L41.589 20.4204L27.3768 28.7593C26.372 29.3503 25.5235 30.1735 24.9024 31.1598C24.2812 32.1462 23.9054 33.2671 23.8065 34.4285L23.8876 51.1301C23.8885 52.0398 24.1285 52.9334 24.5837 53.7212C25.0388 54.5089 25.6931 55.1632 26.4809 55.6183C27.2686 56.0734 28.1622 56.3134 29.072 56.3141C29.9818 56.3149 30.8758 56.0765 31.6644 55.6228L46.0906 47.1498L46.4669 46.9277C47.2405 46.4716 47.8808 45.8203 48.3236 45.039C48.7664 44.2576 48.9962 43.3737 48.9899 42.4756L48.9143 25.1479Z"
                  stroke="#0116CB"
                  stroke-width="4"
                  stroke-miterlimit="10"
                />
                <path
                  d="M38.5583 18.401C38.5546 18.0048 38.4102 10.0317 38.4102 10.0317C38.4102 9.83547 38.3991 9.6429 38.3843 9.45404C38.2917 9.50218 38.1991 9.55032 38.1102 9.60217L31.2037 13.6535L16.9352 22.0265C15.9265 22.6199 15.0746 23.4463 14.4509 24.4366C13.8273 25.4269 13.4499 26.5522 13.3505 27.7183L13.432 44.4865C13.433 45.3997 13.6741 46.2966 14.131 47.0872C14.5879 47.8779 15.2446 48.5346 16.0353 48.9914C16.826 49.4483 17.7229 49.6893 18.6361 49.6903C19.5493 49.6913 20.4467 49.4522 21.2384 48.997L35.7216 40.4907L36.0994 40.2685C36.8761 39.8106 37.5188 39.1567 37.9634 38.3722C38.4079 37.5878 38.6386 36.7004 38.6324 35.7987L38.5583 18.401Z"
                  stroke="#0116CB"
                  stroke-width="4"
                  stroke-miterlimit="10"
                />
              </svg>
            </div>

            <form
              action=""
              className="flex flex-col p-4 rounded-xl w-[20rem] space-y-2"
            >
              <label className="text-right text-sm text-[#282C52] " htmlFor="">
                نام کاربری
              </label>

              <div className="flex items-center bg-white rounded-xl border">
                <input
                  type="text"
                  placeholder="ایمیل یا کد ملی خود را وارد کنید"
                  className="flex-grow  text-right  rounded-md overflow-hidden p-2 bg-transparent outline-none placeholder-gray-400 text-gray-600 text-xs"
                />
                <UserIcon className="h-8 rounded-full text-black p-2 " />
              </div>

              <div className="flex items-center justify-between ">
                <h3 className="text-gray-600 cursor-pointer text-xs underline decoration-dotted  ">
                  رمزعبور خود را فراموش کرده ام
                </h3>
                <label className="text-right text-sm text-[#282C52]" htmlFor="">
                  کلمه عبور
                </label>
              </div>

              <div className="flex items-center bg-white rounded-xl border">
                <input
                  type="text"
                  placeholder="کلمه عبور خود را وارد کنید"
                  className="flex-grow text-right rounded-md overflow-hidden p-2 bg-transparent outline-none placeholder-gray-400 text-gray-600 text-xs"
                />
                <LockClosedIcon className="h-8 rounded-full text-black p-2 " />
              </div>
              <div className="flex justify-end">
                <h3 className="text-xs pr-2">مرا به خاطر داشته باش</h3>
                <input type="checkbox" className="bg-gray-300" />
              </div>

              <button
                className="border rounded-xl hover:shadow-lg  text-xs p-2 bg-[#0116CB] text-white"
                type="submit"
              >
                ورود
              </button>
              <div className="flex space-x-2 justify-end ">
                <h3 className="text-[#0116CB] font-thin text-sm cursor-pointer ">
                  ثبت نام
                </h3>
                <h3 className="text-sm font-thin cursor-pointer">
                  کاربر جدید هستید؟
                </h3>
              </div>
              <div className="border "></div>
              <button className="bg-[#E9EBFF] rounded-xl text-sm text-[#282C52] p-2 flex flex-row-reverse justify-center items-center gap-x-2 ">
                <svg
                  className=""
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.9444 13.2778L24.8056 10.7778H13V15.5H19.6667C19.3889 17.1667 18.5556 18.5555 17.1667 19.3889V22.4444H21.3333C22.5384 21.2507 23.4818 19.8192 24.1034 18.2411C24.7251 16.6629 25.0116 14.9726 24.9444 13.2778Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M13 25.5C16.3333 25.5 19.25 24.3889 21.3333 22.4444L17.1667 19.3889C16.2013 19.9936 15.1109 20.3705 13.9781 20.491C12.8453 20.6114 11.7 20.4723 10.6291 20.0841C9.55813 19.6958 8.58968 19.0688 7.79723 18.2504C7.00478 17.4321 6.40915 16.444 6.05555 15.3611H1.88889V18.5556C2.91697 20.6279 4.49995 22.3742 6.46163 23.6003C8.42331 24.8263 10.6867 25.484 13 25.5Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M6.05554 15.3611C5.54707 13.8281 5.54707 12.1719 6.05554 10.6389V7.44444H1.88888C1.03221 9.17111 0.586456 11.0725 0.586456 13C0.586456 14.9275 1.03221 16.8289 1.88888 18.5556L6.05554 15.3611Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M13 5.5C14.8056 5.5 16.4722 6.05556 17.7222 7.30556L21.3333 3.69445C19.8998 2.42765 18.1947 1.50678 16.3492 1.00276C14.5038 0.498744 12.5673 0.425031 10.6888 0.787299C8.81041 1.14957 7.0402 1.93815 5.51454 3.09231C3.98888 4.24647 2.74848 5.73541 1.88889 7.44445L6.05555 10.7778C6.542 9.30975 7.47039 8.02798 8.71355 7.10804C9.95672 6.1881 11.4539 5.67495 13 5.63889V5.5Z"
                    fill="#EA4335"
                  />
                </svg>
                ورود از طریق حساب گوگل
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="col-span-7">
        <div className="flex items-center w-[16rem] h-screen ml-8 my-auto">
          <div className="">
            <div className=""></div>
            <h1 className="text-left text-[#282C52]">
              لورم ایپسام یا طرح نما به متنی بی معنی در صنعت چاپ طراحی گرافیک
              گفته می شود
            </h1>
            <h2 className="text-[#FFA300]"> جان سالیوان-</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
