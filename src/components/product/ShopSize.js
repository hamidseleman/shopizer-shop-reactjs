import PropTypes from "prop-types";
import React from "react";
import { setActiveSort } from "../../helpers/product";

const ShopSize = ({ sizes, getSortParams }) => {
  return (
    <div className="sidebar-widget mt-40">
      <h4 className="pro-sidebar-title">Size </h4>
      <div className="sidebar-widget-list mt-20">
        {sizes.length > 0 ? (
          <ul>
            {/* <li>
              <div className="sidebar-widget-list-left">
                <button
                // onClick={e => {
                //   getSortParams("size", "");
                //   setActiveSort(e);
                // }}
                >
                  <span className="checkmark" /> All Sizes{" "}
                </button>
              </div>
            </li> */}
            {sizes.map((size, key) => {
              return (
                <li key={key}>
                  <div className="sidebar-widget-list-left">
                    <button
                      className="text-uppercase"
                      onClick={e => {
                        getSortParams("optionValues", size.value);
                        setActiveSort(e);
                      }}
                    >
                      {" "}
                      <span className="checkmark" />
                      {size.name}{" "}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
            "No sizes found"
          )}
      </div>
    </div>
  );
};

ShopSize.propTypes = {
  getSortParams: PropTypes.func,
  sizes: PropTypes.array
};

export default ShopSize;
