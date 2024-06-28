import styles from './Slider.module.scss';
import '../../styles/global.scss';
import { diplomasArray } from '../../constants/Contacts';
import { useState } from 'react';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { FaRegCircleDot } from 'react-icons/fa6';
import { FaCircleDot } from 'react-icons/fa6';

export const Slider = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const showPrevImage = () => {
    setImageIndex((imageIndex) => {
      if (imageIndex === 0) {
        return diplomasArray.length - 1;
      } else {
        return imageIndex - 1;
      }
    });
  };

  const showNextImage = () => {
    setImageIndex((imageIndex) => {
      if (imageIndex === diplomasArray.length - 1) {
        return 0;
      } else {
        return imageIndex + 1;
      }
    });
  };

  return (
    <section className="blockWhite">
      <h2 className={styles.title}>Образование</h2>
      <div className={styles.wrapper}>
        <img className={styles.image} src={diplomasArray[imageIndex]} alt="" />
        <button
          onClick={showPrevImage}
          className={`${styles.button}  ${styles.left}`}
        >
          <IoIosArrowDropleftCircle className={styles.icon} />
        </button>
        <button
          onClick={showNextImage}
          className={`${styles.button}  ${styles.right}`}
        >
          <IoIosArrowDroprightCircle className={styles.icon} />
        </button>
        <div className={styles.indexWrapper}>
          {diplomasArray.map((_, index) => (
            <button
              className={styles.indexButton}
              onClick={() => setImageIndex(index)}
              key={index}
            >
              {index === imageIndex ? (
                <FaCircleDot
                  className={`${styles.indexIcon} ${styles.chosen}`}
                />
              ) : (
                <FaRegCircleDot className={styles.indexIcon} />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
