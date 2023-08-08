//Obtenemos el formulario
const form = document.getElementById("form");
//Obtenemos la barra de busqueda
const search = document.getElementById("search");
//Obtenemos el widget del usuario 
const UserCard = document.getElementById("UserCard");
//Escuchar el evento submit del form
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const UserName = search.value
    GetUserData(UserName);
    search.value = "";
})
//Obtener la info del usuaro en GitHub
async function GetUserData(UserName){
    const API = "https://api.github.com/users/";
    try{
        const UserRequest = await fetch(API+UserName);

        if (!UserRequest.ok){//SI capturamos un error se saltara directamente a catch
            throw new Error(UserRequest.status);
        };

        const UserData = await UserRequest.json();
        
        if (UserData.public_repos){
            const ReposRequest = await fetch(API+UserName+"/repos");
            const ReposData = await ReposRequest.json();
            UserData.repos = ReposData;
        }
        ShowUserData(UserData);
    }catch(error){
        ShowError(error.message)
    }
}

function ShowUserData(UserData){
    let UserContent =`
        <img src="${UserData.avatar_url}}" alt="Avatar">
        <h1>${UserData.name}</h1>
        <p>${UserData.bio}</p>
        
        <section class="data">
            <ul>
                <li>Followers: ${UserData.followers}</li>
                <li>Following: ${UserData.following}</li>
                <li>Repos: ${UserData.public_repos}</li>
            </ul>
        </section>`
    if (UserData.repos){
        UserContent += `<section class="repos">`
        UserData.repos.slice(0,7).forEach(repo => {
            UserContent += `<a href="${repo.html_url}" target = "_blank">${repo.name}</a>`
        });
        UserContent += `</section>`
    }
    UserCard.innerHTML = UserContent;
}

function ShowError(error){
    const ErrorContent = `<h1>Error: ⚠️${error}</h1>`;
    UserCard.innerHTML = ErrorContent;
}