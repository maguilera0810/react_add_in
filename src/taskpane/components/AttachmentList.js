import * as React from "react";
import PropTypes from "prop-types";

export default class AttachmentList extends React.Component {
  render() {
    const { children, items, message } = this.props;


    const listItems = items.map((item, index) => (
      <>
      <li className="ms-ListItem" key={index + "1111"}>
        <i style={{marginRight: 10}} className={""}>Id: </i>
        <span style={{width: 700}} className="ms-font-m ms-fontColor-neutralPrimary">{item.id}</span>
      </li>
      <li className="ms-ListItem" key={index + "2222"}>
      <i style={{marginRight: 10}} className={""}>Name: </i>
        <span className="ms-font-m ms-fontColor-neutralPrimary">{item.name}</span>
      </li>
      <li className="ms-ListItem" key={index + "3333"}>
        <i style={{marginRight: 10}}className={""}>attachmentType: </i>
        <span className="ms-font-m ms-fontColor-neutralPrimary">{item.attachmentType}</span>
      </li>
      </>
    ));

    return (
      <main className="ms-welcome__main">
        <h2 className="ms-font-xl ms-fontWeight-semilight ms-fontColor-neutralPrimary ms-u-slideUpIn20">{message}</h2>
        <ul className="ms-List ms-welcome__features ms-u-slideUpIn10">{listItems}</ul>
        {children}
      </main>
    );
  }
}

AttachmentList.propTypes = {
  children: PropTypes.node,
  items: PropTypes.array,
  message: PropTypes.string,
};
