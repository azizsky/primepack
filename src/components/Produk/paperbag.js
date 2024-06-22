import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './dusmakanan.css';

Modal.setAppElement('#root');

const Paperbag = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  const items = [
    { imgUrl: '/image/content/amplop.jpg', price: 'Rp 10.000' },
    { imgUrl: '/image/content/amplop.jpg', price: 'Rp 20.000' },
    { imgUrl: '/image/content/amplop.jpg', price: 'Rp 30.000' },
    { imgUrl: '/image/content/amplop.jpg', price: 'Rp 40.000' },
    { imgUrl: '/image/content/amplop.jpg', price: 'Rp 50.000' },
    { imgUrl: '/image/content/amplop.jpg', price: 'Rp 60.000' },
    { imgUrl: '/image/content/amplop.jpg', price: 'Rp 70.000' },
    { imgUrl: '/image/content/amplop.jpg', price: 'Rp 70.000' },
    { imgUrl: '/image/content/amplop.jpg', price: 'Rp 70.000' },
    { imgUrl: '/image/content/amplop.jpg', price: 'Rp 70.000' },
    { imgUrl: '/image/content/amplop.jpg', price: 'Rp 70.000' },
    { imgUrl: '/image/content/amplop.jpg', price: 'Rp 70.000' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('zoom-in');
          } else {
            entry.target.classList.remove('zoom-in');
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const elements = document.querySelectorAll('.animated');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const openModal = (imgUrl, price) => {
    setSelectedImg(imgUrl);
    setSelectedPrice(price);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImg('');
    setSelectedPrice('');
  };

  return (
    <div className="dusmakanan">
      <h2 className="animated">Kami juga bisa membuat paperbag untuk kebutuhan toko anda. dan berbagai model </h2>
      <h2 className="animated relative top-8 ">untuk harga di bawah ini relative bisa naik atau turun dan untuk pembelian di atas 10 sampai 20 ribu pcs harga bisa jauh lebih murah</h2>
      {items.map((item, index) => (
        <div
          key={index}
          className="image-container animated"
          onClick={() => openModal(item.imgUrl, item.price)}
        >
          <img
            src={item.imgUrl}
            alt={`dusmakanan-${index}`}
          />
          <p>{item.price}</p>
        </div>
      ))}
      <h2 className=" relative top-16">gambar di atas hanya sebagai acuan.. mohon untuk menghubungi kami</h2>
      <h2 className="opacity-0 relative top-32">Kami hampir bisa membuat semua kemasan buat makanan yang terbuat</h2>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Popup"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '90%',
            maxHeight: '90%',
            padding: 0,
          },
        }}
      >
        <button onClick={closeModal} style={{ position: 'absolute', top: 10, right: 10 }}>Close</button>
        <img src={selectedImg} alt="Selected" style={{ width: '100%', height: 'auto' }} />
      </Modal>
    </div>
  );
};

export default Paperbag;
