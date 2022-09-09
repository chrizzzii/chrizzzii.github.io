function validasi() {
		const email = document.getElementById("email").value;
		const password = document.getElementById("password").value;
		if (email =="yuk@gmail.com" && password =="yuklah") {
			return true;
		}else{
			alert('Isian salah!');
            return validasi().reload();
        }
}