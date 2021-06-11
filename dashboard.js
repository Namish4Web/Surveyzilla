
function showSampleToast(params) {
	$('.toast').toast('show');
}

function check() {
						firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
    } else {
    alert("Please login first");
 window.location.href =
 "https://surveyzilla-4-web.web.app/login.html";

    }
  });
	}

	function logout() {
	 console.log('logging out...');
	 firebase.auth().signOut().then(() => {
	  alert("Logout successful");
	  window.location.href = "https://surveyzilla-4-web.web.app";
	}).catch((error) => {
	alert("An error occurred");
	})
	}
