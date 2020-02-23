import axios from 'axios';

export default function (ctx, inject) {
  ctx.$axios = axios
  inject('axios', axios)
}