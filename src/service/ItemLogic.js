import ReceiptData from "../common/ReceiptData";

const COUNT = 'count';
const PRICE = 'price';
const MEASURE = 'measure';

const ItemLogic = {
    addItem : (itemId, adjustableBy, category, price, measure) => {
        const bucket = ReceiptData.bucket;
        if (category in bucket && itemId in bucket[category]) {
            bucket[category][itemId][COUNT] += adjustableBy;
        } else if (category in bucket && !(itemId in bucket[category])) {
            bucket[category][itemId] = {};
            bucket[category][itemId][PRICE] = price;
            bucket[category][itemId][COUNT] = adjustableBy;
            bucket[category][itemId][MEASURE] = measure;
        } else if (!(category in bucket)) {
            bucket[category] = {};
            bucket[category][itemId] = {};
            bucket[category][itemId][PRICE] = price;
            bucket[category][itemId][COUNT] = adjustableBy;
            bucket[category][itemId][MEASURE] = measure;
        }
        //FirebaseDAO.saveBucket();
        ReceiptData.bucketTotalCount += adjustableBy;
    },

     removeItem : (itemId, adjustableBy, category) => {
        const bucket = ReceiptData.bucket;
        bucket[category][itemId][COUNT] -= adjustableBy;
        if (bucket[category][itemId] === 0) {
            delete bucket[category][itemId];
            if (Object.keys(bucket[category]).length === 0) {
                delete bucket[category];
            }
        }
        //FirebaseDAO.saveBucket();
        ReceiptData.bucketTotalCount -= adjustableBy;
    }

};

export default ItemLogic;
