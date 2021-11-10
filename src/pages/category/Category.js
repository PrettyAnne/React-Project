import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from './Category.module.css';
export default function Category() {
  const { categoryId } = useParams();

  const [prdLists, setPrdLists] = useState([]);
  useEffect(function () {
    fetch('/React-Project/json/prdLists.json').then(function (res) {
      res.json().then(function (json) {
        setPrdLists(json.find(value => value.categoryId + '' == categoryId).prdList);
      }).catch(function (e) {
      });
    });
  }, []);

  return (
    <>
      <div className={styles["top-banner"]}>
        <div className={styles["top-banner-inner"]}>
          <p>주간 베스트</p>
          <span>누구나 좋아하는 인기 제품을 만나 보세요!</span>
        </div>
      </div>
      <div className={styles["cg-main"]}>
        <div className={styles.title}>
          <h2>주간 베스트</h2>
        </div>
        <div>
          <ul className={styles["lower-category"]}>
            <li>전체(253)</li>
            <li>주간 베스트(30)</li>
          </ul>
        </div>
        <div className={styles["prd-list"]}>
          <ul>
            {prdLists.map(function (data) {
              return (
                <li>
                  <div className={styles["prd-img"]}>
                    <img src={data.thumbUrl} />
                  </div>
                  <div className={styles["prd-icon"]}><span>{data.btn}</span></div>
                  <div className={styles["prd-name"]}>{data.name}</div>
                  <div className={styles["prd-tag"]}>{data.tag}</div>
                  <div className={styles["prd-price"]}>{data.price}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}