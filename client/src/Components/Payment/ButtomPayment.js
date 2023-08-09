import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import PaymentPage from './PaymentPage';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function ButtomPayment({moked}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Box sx={{ paddingBottom: '80px' }}>
            {!show && (
                <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, backgroundColor: '#C9A140' }}>
                    <Toolbar sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '20px'
                    }}>
                        <Button
                            variant="dark"
                            className="me-3"
                            style={{
                                borderRadius: '50px',
                                padding: '0 24px',
                                height: '48px',
                                fontSize: '16px',
                                // fontWeight: 'bold',
                            }}
                        >
                            שתף
                        </Button>
                        <Button
                            onClick={handleShow}
                            variant="dark"
                            className="me-3"
                            style={{
                                borderRadius: '50px',
                                padding: '0 24px',
                                height: '48px',
                                width: '180px',
                                fontSize: '16px',
                                // fontWeight: 'bold',
                            }}
                        >
                            תרום
                        </Button>
                    </Toolbar>
                </AppBar >
            )}
            <Modal show={show} onHide={handleClose} fullscreen={true}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <PaymentPage moked={moked}/>
                </Modal.Body>
            </Modal>
        </Box >
    )
}
