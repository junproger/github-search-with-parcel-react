import { ISearchItem } from './ISearchItem';

export interface ISearchData {
  total_count: number;
  incomplete_results: boolean;
  items: ISearchItem[];
}
