import {auth} from "../config/FirebaseConfig";

const Validation = {
    isAuthenticated : (navigation) => {
        if (auth.currentUser == null){
            navigation.navigate('Login')
        }
    }
}

export default Validation
