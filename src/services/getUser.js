
import {ref} from 'vue'
import { projectAuth } from '../firebase/config'


const user = ref(projectAuth.currentUser)

projectAuth.onAuthStateChanged(authUser => {
    user.value=authUser
    console.log('Current User is ', authUser);
}) 

const getUser = () => {
    return {user}
}

export default getUser