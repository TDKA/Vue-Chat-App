import {ref} from 'vue'
import  {projectAuth}  from '../firebase/config';

const error = ref(null)

const signup = async (email, password, displayName) => {

    error.value = null;
    try {
     const response = await projectAuth.createUserWithEmailAndPassword(email, password)
     console.log(response );
     if(!response) {
         throw new Error('Ops... try again !')
     }
     await response.user.updateProfile({ displayName })
     error.value = null
     return response
     console.log(response);
    }
    catch(err) {
        error.value = "This email is already used in another account !"
        console.log(err.message);
    }

}
const useSignup =  () => {
    return  { error, signup }
}

export default useSignup