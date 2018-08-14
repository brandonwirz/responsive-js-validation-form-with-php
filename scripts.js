function validate() {
      var n = document.forms["bw-form"]["first_name"].value;
      var l = document.forms["bw-form"]["last_name"].value;
      var e = document.forms["bw-form"]["email"].value;
        if (n == "") {
          alert("Name must be filled out");
          document.getElementById('fname').style.borderColor = "red";
          return false;
        } else if (l == "") {
        	alert("Last name must be filled out");
          document.getElementById('lname').style.borderColor = "red";
          return false;
        } else if (e == "") {
        	alert("Email must be filled out");
          document.getElementById('email').style.borderColor = "red";
          return false;
        }
  }
