import nx from '@jswork/next';
import { toast } from 'react-toastify';

// https://fkhadra.github.io/react-toastify/installation/
nx.toast = toast;

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.toastify;
}

export default nx.toastify;
