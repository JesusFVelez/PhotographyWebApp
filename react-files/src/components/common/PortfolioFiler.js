import Link from "next/link";
import React, { useMemo, useState } from "react";
import portfoliofilerData from "../../data/portfolio_data.json";
function PortfolioFiler() {
  const [items, setItems] = useState(portfoliofilerData);
  const [CategoryActiveSlug, setCategoryActiveSlug] = useState(null);

  const filterItem = (catagoryItem) => {
    setCategoryActiveSlug(catagoryItem);
    const updateItems = portfoliofilerData.filter((curentElemet) => {
      return curentElemet.categorySlug === catagoryItem;
    });
    setItems(updateItems);
  };

  const setAllItems = (allItems) => {
    setCategoryActiveSlug(allItems);
    return setItems(portfoliofilerData);
  };

  const categoryCard = useMemo(
    () =>
      new Map([
        ...portfoliofilerData.map((categoryData) => [
          categoryData.category,
          categoryData.categorySlug,
        ]),
      ]),
    []
  );
  return (
    <div className="our-portfilio-area pt-120 mb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="filters filter-button-group">
              <ul className="d-flex justify-content-lg-start justify-content-center flex-wrap">
                <li
                  onClick={() => setAllItems("all")}
                  className={
                    CategoryActiveSlug == "all" || CategoryActiveSlug == null
                      ? "active"
                      : ""
                  }
                  data-filter="*"
                >
                  All
                </li>
                {[...categoryCard].map((key) => {
                  return (
                    <li
                      key={key[1]}
                      onClick={() => filterItem(`${key[1]}`)}
                      className={key[1] == CategoryActiveSlug ? "active" : ""}
                    >
                      {key[0]}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="row grid g-4 mb-70">
          {items.slice(0, 9).map((element) => {
            const { id, image, title, date } = element;
            return (
              <div
                key={id}
                className="col-lg-4 col-md-6 col-sm-12 grid-item wedding"
              >
                <div className="portfolio-img magnetic-item">
                  <img className="img-fluid" src={image} alt="image" />
                  <div className="overlay">
                    <div className="icon">
                      <Link
                        legacyBehavior
                        data-cursor="View<br>Details"
                        href="/portfolio-details"
                      >
                        <i className="bi bi-plus" />
                      </Link>
                    </div>
                    <div className="content">
                      <h4>
                        <Link legacyBehavior href="/portfolio-details">
                          {title}
                        </Link>
                      </h4>
                      <span>{date}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PortfolioFiler;
