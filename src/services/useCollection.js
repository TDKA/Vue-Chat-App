
import {ref} from 'vue'
import { projectFirestore } from '../firebase/config'

const useCollection = () => {
    const error = ref(null)
    const addMessage = async (msg) => {
        error.value=null;
        try {
            await projectFirestore.collection('messages').add(msg)
        }catch(err) {
            console.log(err.message);
            error.value = 'Message is not sended ....'
        }

    }
    return { error, addMessage}

}


export default useCollection