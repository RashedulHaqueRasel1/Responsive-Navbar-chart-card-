import PropTypes from 'prop-types';
import { FaCircleCheck } from "react-icons/fa6";


export default function Feature({ feature }) {
    // console.log(feature)
    return (
        <div>


            <h1 className='flex items-center' >
                <FaCircleCheck className='mr-2' />
                {feature}
            </h1>

        </div>
    )
}


Feature.propTypes = {
    feature: PropTypes.string
}