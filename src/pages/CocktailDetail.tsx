import { useParams } from 'react-router-dom';
import { cocktails } from '../data/cocktails';
import styles from './styles/CocktailDetail.module.scss';
import { useEffect, useRef } from 'react';

const CocktailDetail = () => {
  const { id } = useParams<{ id: string }>();
  const cocktail = cocktails.find((c) => c.id === id);
  const detailRefs = useRef<HTMLDetailsElement[]>([]);

  useEffect(() => {
    detailRefs.current.forEach((detail) => {
      const summary = detail.querySelector('summary');
      const content = detail.querySelector('div');

      if (!summary || !content) return;

      summary.addEventListener('click', (e) => {
        e.preventDefault();

        const isOpen = detail.getAttribute('data-open') === 'true';

        if (isOpen) {
          const height = content.scrollHeight;
          const animationClose = content.animate(
            [
              { height: `${height}px` },
              { height: '0px' }
            ],
            {
              duration: 300,
              fill: 'forwards',
              easing: 'ease-in-out'
            }
          );

          animationClose.onfinish = () => {
            detail.removeAttribute('open');
            detail.setAttribute('data-open', 'false');
          };
        } else {
          const height = content.scrollHeight;
          detail.setAttribute('open', 'true');
          const animationOpen = content.animate(
            [
              { height: '0px' },
              { height: `${height}px` }
            ],
            {
              duration: 300,
              fill: 'forwards',
              easing: 'ease-in-out'
            }
          );

          animationOpen.onfinish = () => {
            detail.setAttribute('data-open', 'true');
          };
        }
      });
    });
  }, []);

  if (!cocktail) {
    return <p>カクテルが見つかりません</p>
  }

  return (
    <main className={styles['cocktail-detail']}>
      <div className={styles['cocktail-detail__container']}>
        <img src={cocktail.image} alt={cocktail.name} className={styles['cocktail-detail__image']}/>
        <table>
          <tr>
            <th>ベース</th>
            <td>{cocktail.base}</td>
          </tr>
          <tr>
            <th>味</th>
            <td>{cocktail.taste}</td>
          </tr>
          <tr>
            <th>アルコール度数</th>
            <td>{cocktail.alc}</td>
          </tr>
          <tr>
            <th>色</th>
            <td>{cocktail.color}</td>
          </tr>
        </table>
      </div>
      <div className={styles['cocktail-detail__section']}>
        <h1 className={styles['cocktail-detail__name']}>{cocktail.name}</h1>
        <div className={styles['cocktail-detail__list']}>
          {['description', 'ingredient', 'recipe'].map((key, index) => (
            <details
              key={key}
              ref={(el) => {
                if (el) detailRefs.current[index] = el;
              }}
              data-open="false"
              className={styles['cocktail-detail__details']}
            >
              <summary className={styles['cocktail-detail__summary']}>
                {key === 'description' ? '説明' : key === 'ingredient' ? '材料' : 'レシピ'}
              </summary>
              <div className={styles['cocktail-detail__content']}>
                <div className={styles['cocktail-detail__content--inner']}>
                  {key === 'recipe' || key === 'ingredient' ? (
                    <ol>
                      {cocktail[key].map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ol>
                  ) : (
                    cocktail.description
                  )}
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CocktailDetail;
