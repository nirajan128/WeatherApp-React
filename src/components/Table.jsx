/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
function Table(props){
 return(
      <tr className="text-center">
      <td scope="row">{props.date}</td>
      <td>{props.minTemp} °C</td>
      <td><img src={props.imgSrc} alt=""/></td>
      <td>{props.maxTemp} °C</td>
      </tr>)
}

export default Table;