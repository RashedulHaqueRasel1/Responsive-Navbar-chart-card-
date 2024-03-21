import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

export default function PriceOption({ option }) {

  // console.log(option)

  const { name,  price, features } = option;
  return (
    <div>

      <div className=" bg-blue-600 p-5 h-[500px] flex flex-col rounded-lg">

        <h1 className='text-5xl text-center font-bold my-4'>{name}</h1>
        <h1 className='text-7xl font-extrabold text-center'> {price}</h1>

        <div className='pl-6 mt-5  flex-grow'>
          
        {
          features.map((feature, id) => <Feature
           key={id}
           feature={feature}
           >
           </Feature>)
        }
        </div>

        <button className='btn bg-rose-600 w-full text-white border-1 lg:text-lg border-[#FF4240] rounded-lg mt-6 hover:bg-transparent hover:border-white hover:text-white'>Buy Now</button>

      </div>

      




    </div>
  )
}


PriceOption.propTypes = {
  option: PropTypes.object
}