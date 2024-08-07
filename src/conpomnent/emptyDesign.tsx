// import React from 'react'

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
        <div className="p-10 -ml-10 -mt-10">
          <Form />
        </div>
      </div>
      <div className="w-5/12 -ml-16 mt-10 h-max rounded-r-3xl rounded-bl-[70px] bg-Slate-900">
        <FormSide />
      </div>
    </div>
  )
}

export default EmptyDesign
