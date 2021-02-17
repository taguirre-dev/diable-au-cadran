import React from "react"
import "./style/style.css"

const Menu = ({ listItem, appContext, setAppContext }) => {
  const settings = appContext.globalSettings[0]
  return (
    <div className={`main-menu`}>
      <div
        className={
          appContext.isMenuOpen ? "list-item-menu open" : "list-item-menu"
        }
      >
        {listItem}
        <div className={"adress"}>
          <span>{settings && settings.adress}</span>
          <span>
            {settings && settings.zipcode} - {settings && settings.city}
          </span>
          <span>{settings && settings.phone}</span>
        </div>
      </div>
      <div
        className={appContext.isOpenMenu ? "btn-menu open" : "btn-menu"}
        onClick={() =>
          setAppContext((prev) => {
            return {
              ...prev,
              isMenuOpen: !prev.isMenuOpen,
            }
          })
        }
      >
        <p className='menu'>menu.</p>
      </div>
    </div>
  )
}

export default Menu
