export class Product {
    constructor(
        public id?: number,
        public name?: string,
        public price?: number,
        public netPrice?: number,
        public barcode?: string,
        public productCategoryId?: number,
        public priceCategoryId?: number
    ) {
    }
}
