export interface ISearchError {
  message: string;
  errors: [
    {
      message?: string;
      resource: string;
      field: string;
      code: string;
    },
  ];
  documentation_url: string;
}
