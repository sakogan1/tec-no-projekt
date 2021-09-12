import axios from 'axios';
// export const getParamValues = (url) => {
//   return url
//     .substring(1)
//     .split('&')
//     .reduce(function(initial, item) {
//       if (item) {
//         var parts = item.split("=");
//         initial[parts[0]] = decodeURIComponent(parts[1]);
//       }
//       return initial;
//     }, {});
// };
export const setAuthHeader = () => {
    const params = JSON.parse(localStorage.getItem('params'));
    if (params) {
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${params}`;
    }
};