import ReceiptData from "../common/ReceiptData";
import {auth, db} from "../config/FirebaseConfig";

const authId = auth.currentUser.uid;
export const FirebaseDAO = {
    saveBucket: () => {
        const bucket = ReceiptData.bucket;
        const refURI = authId + '/bucket';
        db.ref(refURI).set(
            bucket
        );
    },

    saveOrder: (order) => {
        const refURI = 'orders/' + authId;
        return db.ref(refURI).push(
            order
        );
    }

}
