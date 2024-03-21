import PriceOption from "../PriceOption/PriceOption"


export default function PriceOptions() {

  const priceOptions = [
    {
      "id": 1,
      "name": "Basic",
      "price": "$29.99/month",
      "features": [
        "Access to cardio area",
        "Access to weightlifting area",
        "Locker room access",
        "Discounts on gym merchandise"
      ]
    },
    {
      "id": 2,
      "name": "Standard",
      "price": "$49.99/month",
      "features": [
        "Access to cardio area",
        "Access to weightlifting area",
        "Access to group fitness classes",
        "Access to sauna",
        "Personalized workout plan"
      ]
    },
    {
      "id": 3,
      "name": "Premium",
      "price": "$79.99/month",
      "features": [
        "Access to cardio area",
        "Access to weightlifting area",
        "Access to group fitness classes",
        "Access to sauna",
        "Personalized workout plan",
        "Unlimited tanning sessions",
        "Monthly nutrition consultation"
      ]
    }
  ]
  



  return (
    <div className="m-12">

 

      <div className="grid md:grid-cols-3 gap-6 ">
        {
          priceOptions.map((option) =>
            <PriceOption
              key={option.id}
              option={option}
            ></PriceOption>)
        }
      </div>

    </div>
  )
}
