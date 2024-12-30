export default function Register() {
    return (
        <>
            <div className="container">
                <h1>Register</h1>
                <form>
                    <div class="mb-3">
                        <label for="name" class="form-label">Họ và tên:</label>
                        <input type="text" class="form-control" id="name" aria-describedby="emailHelp" />

                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email:</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />

                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Mật Khẩu:</label>
                        <input type="password" class="form-control" id="password" />
                    </div>

                    <button type="submit" class="btn btn-dark w-100">Đăng Ký</button>
                </form>
            </div>

        </>
    )
}