import React, {useEffect} from"react";
import"./text2.css";
import '../../animation.css';
import { animateOnScroll, disconnectObserver } from '../../animation';


const Text2 = () => {
   
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

    const elements = document.querySelectorAll('.image-container');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
   
   
   return (
   <div className="containertext2">   
      <div className="isi2">
      
      <h1 className=" w-full text-white text-center m-auto p-2 m-2 font-bold items-center  bg-cyan-950">Informasi Produk</h1>
        <div className="image-container">
         <h1>Bahan:</h1>
         <h2>Kami menyediakan 4 jenis bahan berkualitas: Duplex, Ivory, Craft, dan Art Paper (AP). Semua jenis bahan ini memiliki karakteristik, jenis ketebalan, dan kelenturan yang berbeda, mulai dari 100 hingga 400 gsm.</h2>
         </div>
        <div className="image-container">
         <h1>laminasi:</h1>
         <h2>Kami menyediakan opsi laminasi, yaitu melapisi bahan dengan plastik agar produk tahan air dan minyak. Ada 2 jenis laminasi: dop/matte dan glossy. </h2>
         </div>
         <div className="image-container">
         <h1>foil:</h1>
         <h2>Kami menyediakan opsi foil, yaitu menempelkan pita foil agar produk memiliki warna mencolok dan berkilau seperti emas dan perak. Cocok untuk logo brand atau teks agar memiliki ciri khas premium. </h2>
         </div>
         <div className="image-container">
         <h1>emboss & deboss:</h1>
         <h2>Kami menyediakan opsi emboss dan deboss, di mana bahan dipress agar permukaan bahan bertekstur keluar (emboss) atau masuk (deboss). Biasanya digunakan untuk logo brand atau teks agar produk memiliki ciri khas premium.  </h2>
         </div>
         <div className="image-container">
         <h1>Spot uv/varnish :</h1>
         <h2>Kami menyediakan opsi spot UV varnish, di mana bahan dilapisi seperti cairan resin dan dikeringkan menggunakan UV agar berkilau. Cocok untuk logo brand atau teks.</h2>
         </div>
          <div className="image-container">
      <h1>perhatian!:</h1>
         <h2>Semua fitur ini opsional dan tidak semua bahan bisa menggunakan fitur seperti di atas. Harap menanyakan atau konsultasi dengan kami.</h2>
         </div>
            <h1 className=" w-full relative text-white text-center m-auto p-2 m-2 font-bold items-center  bg-cyan-950">Informasi Order</h1>
         <div className="image-container">
         <h1>Minimal jumlah Pesanan:</h1>
         <h2>Minimal jumlah pesanan setiap produk memiliki batas minimal yang berbeda. Rata-rata minimal di atas 1000 pcs </h2>
         </div>
         <div className="image-container">
         <h1>Pelanggan Pertama:</h1>
         <h2>Untuk pesanan pertama kali di Asz Team, diperlukan DP/uang muka sebesar 70% dari total harga barang.</h2>
         </div>
         <div className="image-container">
         <h1>Waktu Pengerjaan:</h1>
         <h2>Waktu pengerjaan relatif tergantung pada tingkat kesulitan pembuatan produk dan jumlah yang diminta. Standarnya adalah 1 minggu hingga 15 hari.</h2>
         </div>
         <div className="image-container">
         <h1>Pembayaran:</h1>
         <h2>Untuk pembayaran, kami mempermudah pelanggan melalui transfer bank (BCA, BRI, Mandiri), atau dompet digital (Dana, Ovo, Gopay), maupun pembayaran tunai.</h2>
         </div>
         <div className="image-container">
         <h1>Pengiriman:</h1>
         <h2>Untuk pengiriman di daerah Bandung, Anda bisa mengambil pesanan di tempat kami di Jalan Pagarsih 143B atau menggunakan layanan Grab & Gojek. Untuk daerah luar Bandung, pengiriman dapat dilakukan melalui ekspedisi, dan ongkos kirim ditanggung oleh pembeli.</h2>
         </div>
            <h1 className=" w-full relative text-white text-center m-auto p-2 m-2 font-bold items-center  bg-cyan-950">Mengapa Memilih Kami</h1>
                 
         <div className="image-container">   
         <h1>Kualitas Terjamin:</h1>
         <h2>Kami menggunakan bahan berkualitas tinggi dan proses produksi yang cermat untuk memastikan setiap produk yang kami hasilkan memenuhi standar tertinggi.</h2>
         </div>
         <div className="image-container">   
         <h1>Desain </h1>
         <h2>jika kami belum punya desain. kami juga siap membantu buatkan desain kemasan anda agar lebih menarik.. Baik Anda membutuhkan desain baru atau revisi desain yang sudah ada, kami siap membantu..</h2>
         </div>
         <div className="image-container">
         <h1>flexsibilitas & Costumisasi:</h1>
         <h2>Kami menawarkan berbagai opsi customisasi seperti laminasi, foil, emboss & deboss, dan spot UV varnish. Ini memungkinkan Anda untuk menciptakan kemasan yang sesuai dengan kebutuhan dan identitas brand Anda.</h2>
         </div>
         <div className="image-container">
         <h1>Harga Kompetitif:</h1>
         <h2>Kami menawarkan harga yang kompetitif tanpa mengorbankan kualitas. Kami percaya bahwa produk berkualitas tinggi tidak harus mahal.</h2>
         </div>
         <div className="image-container">
         <h1>Pengalaman & Keahlian:</h1>
         <h2>Dengan pengalaman bertahun-tahun di industri kemasan, tim kami memiliki keahlian yang diperlukan untuk memberikan solusi terbaik untuk kebutuhan kemasan Anda.</h2>
         </div>
         <div className="image-container">
         <h1>Pelayanan Terbaik:</h1>
         <h2>Kami berkomitmen untuk memberikan pelayanan pelanggan yang ramah dan responsif. Tim kami siap membantu dan memberikan konsultasi untuk memastikan Anda mendapatkan produk yang Anda inginkan.</h2>
         </div>
         <div className="image-container">
         <h1>Skala Produksi:</h1>
         <h2>Kami menerima order dalam jumlah skala kecil maupun besar. Dengan kapasitas produksi hingga 300 ribu pcs per bulan, kami siap memenuhi kebutuhan Anda, baik untuk pesanan dalam jumlah kecil maupun produksi massal.</h2>
         </div>
      <h1 className=" text-center m-auto image-container font-extrabold ">Terima kasih atas kepercayaan dan kerjasama Anda dengan Asz Team. Kami sangat menghargai dukungan Anda dan berkomitmen untuk terus memberikan layanan dan produk terbaik. Jika Anda memiliki pertanyaan atau membutuhkan informasi lebih lanjut, jangan ragu untuk menghubungi kami. Kami siap membantu Anda.
      </h1>
      <div className="concel">
         <h1>Spot uv/varnish :</h1>
         <h2>Kami menyediakan opsi uv varnish jadi bahan di lapisi seperti cairan resin dan di keringkan pakai uv agar berkilau cocok buat logo brand atau texs</h2>
         </div>   
      </div>
   </div>
      
      );
};
export default Text2;