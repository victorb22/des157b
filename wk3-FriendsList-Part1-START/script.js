// JS here
  // Initialize Parse
  Parse.initialize("Ad0LnAEjm1unDfeBzts4aHsV2xffj1fP9xo2Zn8j", "EuV577xtJ5IzgprSImZwjXDwv1tZ4u9bLzyGkYDB"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
  Parse.serverURL = "https://parseapi.back4app.com/";

const newButton = document.querySelector('#newbtn');
const editButton = document.querySelectorAll('.fa-edit');
const addFriendForm = document.querySelector('#add-friend');
const editFriendForm = document.querySelector('#edit-friend');
const friendList = document.querySelector("main ol");

async function displayFriends(){
    const friends2 = Parse.Object.extend('friends');
    const query = new Parse.Query(friends2);
    const results = await query.ascending('lname').find();
    console.log(results);

    results.forEach(function(eachFriend){
        const id = eachFriend.id;
        const lname = eachFriend.get('lname');
        const fname = eachFriend.get('fname');
        const email = eachFriend.get('email');
        const twitter = eachFriend.get('twitter');
        const facebook = eachFriend.get('facebook');
        const instagram = eachFriend.get('instagram');
        const linkedin = eachFriend.get('linkedin');

        const theListItem = document.createElement('li');
        theListItem.setAttribute('id', `r-${id}`);
        theListItem.innerHTML = `
                <div class="name">
                    ${fname} ${lname}
                </div>
                <div class="email">
                    <i class="fas fa-envelope-square"></i> ${email}
                </div>
                <div class="social">
                    <a href="${facebook}"><i class="fab fa-facebook-square"></i></a>
                    <a href="${twitter}"><i class="fab fa-twitter-square"></i></a>
                    <a href="${instagram}"><i class="fab fa-instagram"></i></a>
                    <a href="${linkedin}"><i class="fab fa-linkedin"></i></a>
                </div>
                <i class="fas fa-edit" id="e-${id}"></i>
                <i class="fas fa-times-circle" id="d-${id}"></i>
            `;
            friendList.append(theListItem);
        });
}
displayFriends();

newButton.addEventListener('click', function(event){
    event.preventDefault();
    addFriendForm.className = 'add-friend-onscreen';
});

addFriendForm.addEventListener('submit', function(event){
    event.preventDefault();
    addFriendForm.className = 'add-friend-offscreen';
});

for(let i = 0; i < editButton.length; i++){
    editButton[i].addEventListener('click', function(){
    editFriendForm.className = 'edit-friend-onscreen';
    });
}

editFriendForm.addEventListener('click', function(event){
    event.preventDefault();
    editFriendForm.className = 'edit-friend-offscreen';
})

