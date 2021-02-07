import moment from 'moment';

export const transformDate = (date: string | Date): string => moment(date).format('DD/MM/YYYY, HH:mm'); 