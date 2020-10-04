import React from 'react';
import {Button, Popover, OverlayTrigger} from 'react-bootstrap';

function PageButton() {
  const tampilPopover = <Popover title="informasi">Website ini dibuat untuk memudahkan
  dalam pencarian informasi terkini tentang berita olahraga</Popover>


  return (
    <>
          <OverlayTrigger
                  trigger="click"
                  placement ="right"
                  overlay={tampilPopover}>
                  <Button variant="primary">Informasi</Button>
          </OverlayTrigger>{' '}
    </>
  )
 }

export default PageButton;
