import {ref} from 'vue'
import  {projectAuth}  from '../firebase/config';

const error = ref(null)

const login = async (email, password) => {
    error.value= null
    try {
        const response = await projectAuth.signInWithEmailAndPassword(email, password)
        error.value=null

        return response
    }
    catch(err){
        error.value = 'Incorrect email or password !'
    }

}

const useLogin = () => {
    return {login, error}
}

export default useLogin