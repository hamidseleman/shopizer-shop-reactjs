import PropTypes from "prop-types";
import React from "react";
import { setActiveSort } from "../../helpers/product";

const ShopCategories = ({ categories, getCategoryParams }) => {
  return (
    <div className="sidebar-widget">
      <h4 className="pro-sidebar-title">Categories </h4>
      <div className="sidebar-widget-list mt-20">
        {categories.length > 0 ? (
          <ul>
            {/* <li>
              <div className="sidebar-widget-list-left">
                <button
                // onClick={e => {
                //   getCategoryParams("category", "");
                //   setActiveSort(e);
                // }}
                >
                  <span className="checkmark" /> All Categories
                </button>
              </div>
            </li> */}
            {categories.map((category, key) => {
              return (
                <li key={key}>
                  <div className="sidebar-widget-list-left">
                    <button
                      onClick={e => {
                        getCategoryParams("category", category.id);
                        setActiveSort(e);
                      }}
                    >
                      {" "}
                      <span className="checkmark" /> {category.description.name}{" "}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
            "No categories found"
          )}
      </div>
    </div>
  );
};

ShopCategories.propTypes = {
  categories: PropTypes.array,
  getSortParams: PropTypes.func
};

export default ShopCategories;
