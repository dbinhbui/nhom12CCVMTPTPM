const Login = () => {
    document.getElementById('tendangnhap').value === 'admin' || document.getElementById('pass').value === 'admin' ? document.getElementById('formdangnhap').setStyle({display: 'none'}) : alert("Sai tên đăng nhập/mật khẩu")
}