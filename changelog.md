
# changelog!!!!!!!!!!!!!!!!!!!!!!

todo:  
-figure out a good way to get log in button from index.html to have document.getElementById("index-login-btn").onclick = {auth.login.bind(this)};
-remove sendgrid api key and re-instantiate.. oops
-need to actually make something for the surveyContainer page where they can't decide what they of app they want
-change all jquery posts/gets to axios :x


4/27: created BasicAboutYou component, made the post request, updated db, starting using axios
----------
4/26:-made form from survey container to choose greencard or naturalization app
---------
4/24: -got users created in my DB upon login/check if theyre there first
-need follow up code for if user exists in system upon initial search
----------
 4/19: re-integrated with sendgrid, email is now successfully working upon contact form submission, reset form on submit, added fun toast on email sent zomg.
 -created route to check if users exist in db, if not, creating 'em'.. but this isn't working right now.. ):

---------
4/17: added icon usability, implemented contacts component rather than using modal contacts, resized earth on contacts page, set up back end for receiving contacts emails
