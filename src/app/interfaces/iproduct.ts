export interface IProduct {
    Id: number;
    Brand: string;
    Category: string;
    Supplier: string;
    Brand_Id: number;
    Category_Id: number;
    Supplier_Id: number;
    Product_Code: string;
    Badge: ArrayBuffer;
    Stock_Count: number;
    Condition: string;
    Product_Description: string;
    Price: number;
    Update_Date: string;
    User_Id: string;
}

export interface ITblProducts {
    Id: number;
    Brand_Id: number;
    Category_Id: number;
    Supplier_Id: number;
    Product_Code: string;
    Badge: any;
    Stock_Count: number;
    Condition: string;
    Product_Description: string;
    Price: number;
    Update_Date: Date;
    User_Id: string;
}