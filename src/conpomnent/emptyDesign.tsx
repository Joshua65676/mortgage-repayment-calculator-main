// import React from 'react'

import Completed from "./completed"
import Form from "./form"
import FormSide from "./formside"

const EmptyDesign = () => {
  return (
    <div className="flex">
      <div className="bg-White w-5/12 ml-52 mt-10 h-max rounded-3xl">
        <div className="flex justify-center space-x-32 p-10 -mb-1">
            <div className="-ml-10">
              <h1 className="text-xl font-bold text-Slate-900">Mortgage Calculator</h1>
            </div>
            <button className="">
             <span className="underline font-medium text-Slate-300"> Clear All </span>
            </button>
        </div>
        <div className="p-10 -ml-10 -mt-10 h-[450px] flex">
          <Form />
          {/* <div className="w-[450px] -ml-[580px] -mt-[107px] h-[520px] rounded-r-3xl rounded-bl-[70px] bg-Slate-900">
          <FormSide />
          <Completed />
         </div> */}
        </div>
      </div>
      <div className="w-5/12 -ml-16 mt-10 h-[520px] rounded-r-3xl rounded-bl-[70px] bg-Slate-900">
        {/* <FormSide /> */}
        <Completed />
      </div>
    </div>
  )
}

export default EmptyDesign
