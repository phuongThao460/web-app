import React from 'react';
import logo from './images/logo-cty.jpg';
import example from './images/example.jpg';
import herbaltea from './images/herbaltea.jpg';
import text from './images/Untitled-1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
function Introduction () {
  return (
    <div className="container-big">
      <div className='on-top'>
      <div className="nav-container">
        <img src={logo} style={{width: '8%'}} />
        <div className="nav-list">
          <p className="nav-item">TRANG CHỦ</p>
          <p className="nav-item">SẢN PHẨM</p>
          <p className="nav-item">LIÊN HỆ</p>
          <p className="nav-item">VỀ CHÚNG TÔI</p>
        </div>
        <div className="hotline-button">
          <button className="btn btn-success set-css">Hotline</button>
        </div>
      </div>
      <div className="img-cover"><img src={herbaltea} /></div>
      <div className="span-name"><h3>GIỚI THIỆU</h3></div>
      <div>
        <p>
          Ngày nay, cuộc sống hiện đại, dòng đời trôi nhanh đôi lúc mình chưa kịp nhận điều gì thì cảnh trí đã thay đổi. Cuộc sống làm cho chúng ta phụ thuộc hoàn toàn và những điều kiện sống tưởng chừng tốt hơn, hoàn hảo hơn cha ông chúng ta ngày xưa..

          Nhưng… “cuộc sống của chúng ta có quá nhiều rủi ro và lo toan”. Sự thật không ai muốn một rủi ro nào đó đến với mình và nhất là sức khoẻ, Chiến lược tốt nhất vẫn là làm sao đừng có bệnh tật xảy ra để cuộc sống mãi thanh xuân, vui vẻ. Nên chiến lược “phòng bệnh hơn chữa bệnh” bằng PHƯƠNG PHÁP DƯỠNG SINH ĐIỀU DƯỠNG BẰNG CÁCH CÂN BẰNG NĂNG LƯỢNG TRONG QUÁ TRÌNH ĂN UỐNG.

        </p>
        <p>
          Trên cơ sở kế thừa các loại trà dân gian và thảo mộc. Bản Việt JSC đã nghiên cứu và phát triển các nguồn dược liệu quý của thiên nhiên sẵn có trong từng bữa ăn hàng ngày. Tất cả đều tổng hợp đúc kết từ Mẹ thiên nhiên – vốn đã âm thầm, chắt chiu cho con người mà không phải ai cũng nhận ra được. Các phương pháp dưỡng và phòng bệnh ấy hoàn toàn là sự đúc kết từ thiên nhiên với mục đích mang lại sự cân bằng cho năng lượng sống trong cơ thể của mọi người, từ đó nâng cao thể trạng và chỉ số sinh tồn cho những ai biết lắng nghe chính mình và thiên nhiên.
        </p>
      </div>
      <div className="example-img">
        <img src={text} style={{width: '56%', paddingTop: '60px'}} />
        <img src={example} style={{width: '56%'}} />
        <span style={{fontSize: '14px', fontWeight: '300'}}>
          Hình 1: Mặt trước in dán theo loại vị, thông tin mặc định in trực tiếp lên bao bì
        </span>
      </div>
      <div className="description" style={{paddingTop:"50px"}}>
        <p>
          <strong>Trà Thảo Mộc Đồng Dao</strong>
          {' '}
          hoàn toàn 100% là thảo mộc, thành phần chính của trà bao gồm: tía tô, kinh giới, gừng, chanh trúc, vỏ quýt, cỏ ngọt hoặc cam thảo.

          Các loại thảo mộc bổ sung như rau sống được sấy khô và phối hợp cân bằng theo thể chế hấp thụ năng lượng dựa trên lý luận của y học cận thiên nhiên. Cách cân bằng năng lượng mà trà tạo ra cho cơ thể dựa trên hình thái kinh dịch ứng dụng trong thức ăn, mục đích làm cho cơ thể tự lấy các chất cần thiết bị thiếu trong cơ thể và thải ra những chất có gốc tự do, trôi nổi. Từ đó cơ thể tự cân bằng và sản sinh tăng cường sức khỏe trong từng nội môi tế bào, từ đó cơ thể khỏe hơn và tăng cường hệ miễn dịch một cách tự nhiên.

        </p>
        <p>
          Trà Đồng Dao lấy hành thổ làm gốc (Hậu thiên khí) dùng vận hành của ngũ hành khí trong cơ thể đại diện cho lục phủ ngũ tạng (các cơ quan nội tạng) để bổ trợ cho hoạt động của các thụ thể dinh dưỡng và cơ chế hoạt động màn tế bào, từ đó tăng cường hấp thụ dưỡng chất và giúp đào thải nhanh các gốc tự do trôi nổi và từ đó cơ thể sẽ mau phục hồi hơn.
        </p>
      </div>
      </div>
      <div className='bottom-pad'></div>
    </div>
  );
}

export default Introduction;
