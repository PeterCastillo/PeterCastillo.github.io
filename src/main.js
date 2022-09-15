const usersContainer = document.querySelector('.section__users');

let  users = {};

window.addEventListener('load', async() => {

    if(localStorage.getItem('users')){
        users = JSON.parse(localStorage.getItem('users'));
        putUsers();
        return
    }
    
    await getUsers('https://reqres.in/api/users?page=1')
    await getUsers('https://reqres.in/api/users?page=2')
    setUsers();
})

const getUsers = async( url ) => {
    console.log("FETCH")
    const res = await fetch(url)
    const  { data } = await res.json();
    data.forEach(element => {
        const user = {
            id: element.id,
            email: element.email,
            firstName: element.first_name,
            lastName: element.last_name,
            img: element.avatar
        }
        users[user.id] = user;
    });
}

const setUsers = () => {
    localStorage.setItem('users' , JSON.stringify(users))
    putUsers();
}

const putUsers = () => {
    usersContainer.innerHTML = '';
    Object.values(users).forEach(usuario => {
        let infoUserContainer = document.createElement('div');
        let infoUser = `<user-info id="${usuario.id}" firstname="${usuario.firstName}" lastname="${usuario.lastName}" email="${usuario.email}" img="${usuario.img}"><user-info>`
        infoUserContainer.innerHTML = infoUser;
        usersContainer.appendChild(infoUserContainer)
    });
}

usersContainer.addEventListener('click' , (e) => {
    if(e.target.classList.contains('click')){
        setModal(e.target.dataset.id)
    }
    if(e.target.classList.contains('modal')){
        closeModal(e.target)
    }
})

const setModal = (user) => {
    const userModal = Object.values(users).find(element => element.id == user)
    let div = document.createElement('div')
    const modal = `<modal-user id="${userModal.id}" firstname="${userModal.firstName}" lastname="${userModal.lastName}" email="${userModal.email}" img="${userModal.img}"><modal-user>`
    div.innerHTML = modal
    usersContainer.appendChild(div)
}

const closeModal = (modal) => {
    modal.remove()
}