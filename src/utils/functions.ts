export const getDate = (created: string) => {
  const today = new Date();
  const createdDate = new Date(created);
  const diffDate = today.getDate() - createdDate.getDate();
  let date: string;

  if (diffDate) {
    date = createdDate.toLocaleString('en-GB').replaceAll('/', '.');
  } else date = today.getHours() - createdDate.getHours() + ' hours ago';

  return date;
};
