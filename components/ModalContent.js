import RequestListing from './RequestListing'
import Loader from './Loader'


const ModalContent = props => {
  switch (props.content) {
    case "listingRequest":
      return <RequestListing formFields={props.formFields} handleChange={props.handleChange} handleSubmit={props.handleSubmit} />
    case "loader":
      return <Loader status="loading" size={80} />
    case "success":
      return <Loader status="success" size={80} />
    case "fail":
      return <Loader status="failed" size={80} />
    default:
      return <Loader />
  }

}

export default ModalContent
