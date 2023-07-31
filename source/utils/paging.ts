import { numPerPage } from '../constants/numPerPage';

export const paging = (total: number | undefined): number => {
  if (total) {
    return Math.trunc(total / numPerPage);
  } else {
    return 0;
  }
};
