const BASE_URL = 'https://webaccounting.herokuapp.com';
//let res_password = 0;
const h2 = document.createElement('h2');
h2.appendChild(document.createTextNode(''));
document.body.appendChild(h2);

updatePassword.onclick = () =>{
    const token = `Basic ${btoa(`${login.value.trim()}:${password.value}`)}`;
    if (newPassword.value === repeatPassword.value)
    {
        fetch(`${BASE_URL}/account/user/password/`,{
            method: 'Put',
            headers: {
                Authorization: token,
                "X-Password": newPassword.value
            }
        })
            .then(response => {
                if(response.ok){
                    h2.innerText = 'Your password is changed';
                    alert('Your password is changed');
                }else{
                    throw new Error("Invalid dates");
                }
            })
            .catch(e => {h2.innerText = e;
            })
    }
    else {
        h2.innerText = 'Your password is not changed'
        alert('Your password is not changed');
    }
}
