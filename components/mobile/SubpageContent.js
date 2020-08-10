import Filters from './Filters'
import Filter from './Filter'
import Loader from '../Loader'


const SubpageContent = props => {
  switch (props.content) {
    case "filters":
      return <Filters show={props.show} filters={props.filters}/>
    case "clientTypeFilter":
      return <Filter filter="clientTypes" label="Client Type" selected={props.filters.clientTypes} options={props.catalogue.clientTypes} onChange={props.onChange}  type="radio" />
    case "specialtyFilter":
      return <Filter filter="specialties" label="Specialties" selected={props.filters.specialties} options={props.catalogue.specialties} onChange={props.onChange}  type="radio" />
    case "insuranceFilter":
      return <Filter filter="insurance" label="Insurance" selected={props.filters.insurance} options={props.catalogue.insurance} onChange={props.onChange}  type="radio" />
    default:
      return <Loader />
  }

}

export default SubpageContent
