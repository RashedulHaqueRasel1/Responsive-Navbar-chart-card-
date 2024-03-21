import PropTypes from 'prop-types';

export default function Link({ route }) {
    return (
 
            <li className="mr-6 hover:bg-white hover:text-black p-2 rounded-md cursor-zoom-out" >
                <a href={route.path}>{route.name} </a>
            </li>
 
    )
}

Link.propTypes = {
    route: PropTypes.object
}