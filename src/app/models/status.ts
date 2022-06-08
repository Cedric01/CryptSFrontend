export interface Status {
    timeStamp: Date;
    error_Code: number;
    error_Message?: any;
    elapsed: number;
    credit_count: number;
    notice?: any;
    total_Count: number;
}