import * as React from "react";
import PropTypes from "prop-types";
import { DefaultButton } from "@fluentui/react";
import Header from "./Header";
import HeroList from "./HeroList";
import Progress from "./Progress";
import AttachmentList from "./AttachmentList";

/* global require */

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      listItems: [],
      largo: 0,
      listAttachments: [], 
    };
  }

  componentDidMount() {
    this.setState({
      listItems: [
        {
          icon: "Ribbon",
          primaryText: "Achieve more with Office integration",
        },
        {
          icon: "Unlock",
          primaryText: "Unlock features and functionality",
        },
        {
          icon: "Design",
          primaryText: "Create and visualize like a pro",
        },
      ],
    });
    this.setAttachments();
  }

  setAttachments(){
    let attachments = Office.context.mailbox.item.attachments;
    this.setState({
     largo: JSON.stringify(attachments),
     listAttachments: attachments.map((a) => {
       return {
        id: a.id,
        name: a.name,
        attachmentType: a.attachmentType,
       };
     })
   })

  }
  click = async () => {
    /**
     * Insert your Outlook code here
     */
     let attachments = Office.context.mailbox.item.attachments;
     this.setState({
      largo: attachments.length,
    })
  };

  render() {
    const { title, isOfficeInitialized } = this.props;

    if (!isOfficeInitialized) {
      return (
        <Progress
          title={title}
          logo={require("./../../../assets/logo-filled.png")}
          message="Please sideload your addin to see app body."
        />
      );
    }

    return (
      <div className="ms-welcome">
        <Header logo={require("./../../../assets/logo-filled.png")} title={this.props.title} message="Welcome" />
        <HeroList message="Discover what Office Add-ins can do for you today!" items={this.state.listItems}>
        </HeroList>
        <AttachmentList  message="Prueba de Attachments!" items={this.state.listAttachments} >
        <p className="ms-font-l">
            Modify the source files, then click <b>Run</b>.
          </p>
          <DefaultButton className="ms-welcome__action" iconProps={{ iconName: "ChevronRight" }} onClick={this.click}>
            Run
          </DefaultButton>
          <p className="ms-font-l">
            -----------
          </p>
          <p className="ms-font-l">
            {this.state.largo}
          </p>
          <p className="ms-font-l">
            --------
          </p>
        </AttachmentList>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string,
  isOfficeInitialized: PropTypes.bool,
};
