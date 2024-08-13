import Form from "./form"

const EmptyDesign = () => {

  return (
    <div className="flex">
      <div className="bg-White md:w-5/12 -ml-10 md:mt-10 md:h-max md:rounded-3xl md:ml-52 -mt-7 h-[600px] w-[470px]">
        <div className=" p-10 -mb-1">
            <h1 className="text-xl font-bold text-Slate-900">Mortgage Calculator</h1>
        </div>
        <div className="p-10 md:-ml-10 -mt-10 h-[450px] md:flex -ml-14">
          <Form />
        </div>
      </div>
    </div>
  )
}

export default EmptyDesign
