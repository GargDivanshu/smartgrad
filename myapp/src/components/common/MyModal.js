import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {FiFilter} from 'react-icons/fi'
import products  from './../App';
import {RxCross1} from 'react-icons/rx'
import {IoMdDoneAll} from 'react-icons/io'


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

export default function MyModal({}) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }



 


  return (
    <div className="my-auto align-middle">
      
      <div className="flex flex-row text-sm font-bold align-middle my-auto mx-1 px-2">
      <span className="mx-1 my-auto"
      >Filter</span>
      <FiFilter
      fontSize={30}
      className="shadow-md border p-1 rounded-md cursor-pointer my-auto border-gray-500"
       onClick={openModal}/>
       </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        
      </Modal>
    </div>
  );
}

// ReactDOM.render(<MyModal />);