import ReceiptData from "../common/ReceiptData";
import {FirebaseDAO} from "../dao/FirebaseDAO";

export const OrderLogic = {
    makeAnOrder : () => {
        const time = new Date().getTime();
        const order = {
            bucket : ReceiptData.bucket,
            address: 'No:422, Ambal Street, Anpuvalipuram, Trincomalee',
            //TODO :: Calculate total
            total: 650,
            //TODO :: Find Deliverer
            deliverer: 'ChrustDelivery',
            time: time
        };
        return FirebaseDAO.saveOrder(order);
    }
}
