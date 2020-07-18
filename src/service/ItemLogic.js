import ReceiptData from "../common/ReceiptData";

const ItemLogic = {
    addItem : (itemId, adjustableBy, category) => {
        const bucket = ReceiptData.bucket;
        if (category in bucket && itemId in bucket[category]) {
            bucket[category][itemId] += adjustableBy;
        } else if (category in bucket && !(itemId in bucket[category])) {
            bucket[category][itemId] = adjustableBy;
        } else if (!(category in bucket)) {
            bucket[category] = {};
            bucket[category][itemId] = adjustableBy;
        }
        //FirebaseDAO.saveBucket();
        ReceiptData.bucketTotalCount += adjustableBy;
    },

     removeItem : (itemId, adjustableBy, category) => {
        const bucket = ReceiptData.bucket;
        bucket[category][itemId] -= adjustableBy;
        if (bucket[category][itemId] === 0) {
            delete bucket[category][itemId];
            if (Object.keys(bucket[category]).length === 0) {
                delete bucket[category];
            }
        }
        console.log(bucket);
        //FirebaseDAO.saveBucket();
        ReceiptData.bucketTotalCount -= adjustableBy;
    }

};

export default ItemLogic;
