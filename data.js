import data from './database.json'


export default function getTherapists() {

  return data.therapists
}

// Home.getInitialProps = function() {
//   let therapists = getTherapists()
//
//   return {
//     therapists: therapists
//   }
// }
