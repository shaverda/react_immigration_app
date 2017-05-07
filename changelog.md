# changelog!!!!!!!!!!!!!!!!!!!!!!

todo:  
-figure out a good way to get log in button from index.html to have document.getElementById("index-login-btn").onclick = {auth.login.bind(this)};
-need to actually make something for the surveyContainer page where they can't decide what they of app they want ("i need help!!")
--add these to greencard: "C/O (in care of)CityDate of Birth (mm/dd/yyyy) Country of Citizenship/Nationality Date of Last Arrival (mm/dd/yyyy) Current USCIS Status
U.S. Social Security No. (if any)
I-94 Arrival-Departure Record Number Expires on (mm/dd/yyyy) ""
-get rid of red/green html validation
-re-structure survey to have basic about you as well as other components be conditionally rendered in surveyContainer 




-----------
5/5: -gave a mmodal for invalid address entered on BasicAboutYou, added address values into db, created CountryInfo component for next i-485 info, gave a bit more control flow in constructors for logging in on /survey and re-directing to proper survey component, but still needs to be cleaned up..., added datepicker for CountryInfo
----------
5/4: added Addresses input to basicaboutyou and added validation with smartystreets.
---------
4/30: -changed all jquery posts/gets to axios, changed sendgrid api key to env var to actually function :)
---------
4/27: created BasicAboutYou component, made the post request, updated db, starting using axios
-removed sendgrid api key and re-instantiate.. oops
-added tippedjs for tooltips and reactprogress bars
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
