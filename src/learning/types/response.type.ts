export interface ApiSuccessResponse<T> {
  statusCode: number;
  success: true;
  data: T;
}
