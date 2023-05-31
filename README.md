1. Tải source code về máy.
2. Vào mongo DB và tạo một DB tên : mydatabase
3. ở terminal của PageCallApp: chạy lệnh npm start
4. tiếp tục trong terminals chạy lệnh: cd client để trỏ đến client. Sau đó chạy lệnh npm start
Giao diện AppCall sẽ hiển thị và ngngười dùng có thể nhập số điện thoại vào để gọi
Nút EndCall có chức năng dừng ngay lập tức cuộc trò chuyện, đóng cửa sổ "Thông tin cuộc gọi" và lưu một lịch sử cuộc gọi vào Database


Dưới đây là hình ảnh mô tả App
![image](https://github.com/Hongocthien190200/TestGcall/assets/58287122/7a320990-4a0a-4468-a79e-efc578e65335)
![image](https://github.com/Hongocthien190200/TestGcall/assets/58287122/bf8e4b73-61cf-43f0-8c60-d3e27c986d91)

Hành động:
I. Giao Diện Bàn Phím Số
  1. có thể nhập số từ bàn phím của người dùng (laptop/pc/..)
  2. có thể nhập số ngay trên app bằng cách click chuột theo từng nút trên app.
  3. Nút X bên phải dưới cùng là nút xóa, khi người nhận nhập nhầm số và muốn xóa bớt một số để nhấn số khác. 
  4. Nút có logo chiếc điện thoại để gọi, ấn nút này để gọi tới số đã nhập vào trước đó 
  5. Đối với popup hiển thị thông tin cuộc gọi khi nhấn nút Gọi:
  5.1. Thực hiện cuộc gọi đến : Số đã nhập trước đó
  5.2. Thanh trạng thái: 
   - Connecting... : Nếu đang kết nối đến người gọi
   - Hiển thị bộ đếm thời gian dạng (có dạng 00:00:00) khi người nhận nhấc máy, bộ đếm này sẽ đếm cho tới khi người dùng muốn dừng cuộc đàm thoại
   - Busy : Nếu người nhận bận máy
  5.3 Nút EndCall: Nhấn nút này sẽ dừng ngay lặp tức cuộc đàm thoại và sẽ lưu một lịch sử cuộc gọi bao gồm số điện thoại và tổng thời gian gọi (tính bằng giây) vào lịch sử cuộc gọi
 II. Giao diện Lịch sử cuộc gọi:
    - Một số chức năng chưa hoàn thiện, chỉ mới thêm lịch sử cuộc gọi và hiển thị ra giao diện
