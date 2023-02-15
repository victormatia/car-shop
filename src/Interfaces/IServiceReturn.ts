import Car from '../Domains/Car';
import Motorcycle from '../Domains/Motorcycle';

interface IServiceReturn {
  result?: Car | Motorcycle,
  message?: string,
}

export default IServiceReturn;
