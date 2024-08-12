import Form from "./form"

const EmptyDesign = () => {

  return (
    <div className="flex">
      <div className="bg-White w-5/12 ml-52 mt-10 h-max rounded-3xl">
        <div className=" p-10 -mb-1">
            <h1 className="text-xl font-bold text-Slate-900">Mortgage Calculator</h1>
        </div>
        <div className="p-10 -ml-10 -mt-10 h-[450px] flex">
          <Form />
        </div>
      </div>
    </div>
  )
}

export default EmptyDesign
