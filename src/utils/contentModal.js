import React from 'react';
import {Button, Modal} from "semantic-ui-react";

const ContentModal = (props) => {
    const [open, setOpen] = React.useState(props.open);

    return (
        <Modal onClose={() => setOpen(false)} open={open}>
            <Modal.Header>{props.title}</Modal.Header>
            <Modal.Content>
                {props.children}
            </Modal.Content>
            <Modal.Actions>
                <Button color="black" onClick={() => setOpen(false)}>
                    Close
                </Button>
            </Modal.Actions>
        </Modal>
    );
};

export default ContentModal;
