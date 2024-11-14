import React from 'react'

export default function PaymentMethod(props) {
    const {expandedDivs,toggleExpand, item} = props
  return (
    <div className="">
    <button
      onClick={() => toggleExpand(item.id)}
      className="px-4 py-2 hover:bg-dark dark:hover:bg-white border-r-2 border-dark dark:border-white"
    >
      <img
        className="h-8"
        src={item.payment_method_image}
        alt=""
      />
    </button>
    {expandedDivs === item.id && (
      <div className="absolute left-0 w-full">
        <table className="w-full mx-auto border-collapse">
          <thead>
            <tr className="bg-gray">
              <th>Method</th>
              <th>Type</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center font-bold">
              <td>{item.method}</td>
              <td>{item.type}</td>
              <td>{item.phone_number}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )}
  </div>
  )
}
