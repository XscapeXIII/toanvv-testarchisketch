import moment from 'moment';

const formatDateVi = (x: string | Date | number) => {
  return moment(x).locale('vi').format('LL');
};

export { formatDateVi };
