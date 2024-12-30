export default function Login(){
    return (
        <>
       
       <div className=" container mt-5">
       <h2>Đăng Nhập</h2>
        <form>
  <div className="mb-3">
    <label for="email" className="form-label">Email</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="password" className="form-label">Mật Khẩu</label>
    <input type="password" className="form-control" id="password"/>
  </div>
  <button type="submit" className="btn btn-dark">Đăng Nhập</button>
</form>
       </div>
       </>
    )
}