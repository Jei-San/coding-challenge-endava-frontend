export default interface PaginatedDto<T> {
  pageIndex: number | undefined | null;
  totalItems: number | undefined | null;
  items: Array<T> | undefined | null;
}