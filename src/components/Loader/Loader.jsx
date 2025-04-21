import { FadeLoader } from 'react-spinners';
import css from './Loader.module.css';

export default function Loader({ replace }) {
  return (
    <>
      <FadeLoader className={replace ? css['loader-replace'] : css.loader} />
    </>
  );
}
