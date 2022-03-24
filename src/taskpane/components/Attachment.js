import * as React from "react";
import PropTypes from "prop-types";

export default class Attachment extends React.Component {
  render() {
    const { children, message } = this.props;

    console.log("attachments 21");
    //let attachments = Office.context.mailbox.item.attachments;
    //console.log(attachments);
    // console.log("attachments 22");
    return (
      <main className="ms-welcome__main">
        <h2 className="ms-font-xl ms-fontWeight-semilight ms-fontColor-neutralPrimary ms-u-slideUpIn20">{message}</h2>
        <ul className="ms-List ms-welcome__features ms-u-slideUpIn10">{listItems}</ul>
        {children}
      </main>
    );
  }
}

Attachment.propTypes = {
  children: PropTypes.node,
  // items: PropTypes.array,
  message: PropTypes.string,
};
