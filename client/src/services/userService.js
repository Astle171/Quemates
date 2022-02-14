import Axios from 'axios'

const apiEndPoint='http://localhost:8800/api/users/username'

export function getUsers(){
    return Axios.get(apiEndPoint)
}
