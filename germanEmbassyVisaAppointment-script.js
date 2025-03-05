//incomplete

<!-- rename file to .html -->
<script type="text/javascript">
//open visa site and login. then start script or paste in browser inspector console

//call "schedule appointments" (links on the left side)
window.location ="https://www.vfsglobalservices-germany.com/Global-Appointment/Home/SelectVAC?q=dePiaPfL2MJ7yDPEmQRU6fRZbx3aIpSal6PdG3Bxqq7rSNU6HabciCVot9dEwkhd";

//select "Purpose of Travel" as "National Visa"
//document.getElementById('VisaCategoryId').selectedIndex = 4;
document.getElementById('VisaCategoryId').value = 2674;

//Problem1:
//there must be some .js script call or statechange call that "prepares" the selectbox-options for the next sub-box. I can t find it. without it doesn t work...
//use submit plus variables instead maybe? instead of individual elements and entries on site
//??   https://www.vfsglobalservices-germany.com/Global-Appointment/Content/CMS-Styles/js/jquery.selectBox.js

//select "Sub Visa Category" as "Employment"
//document.getElementById('SubVisaCategoryId').selectedIndex = 1;
document.getElementById('VisaCategoryId').value = 2678;

//click Button "Continue"
document.getElementById("btnContinue").click();


//new site opens: "applicant List"

//"click" Button "Add Applicant"  (not a real button but actually a box with a link)
window.location ="https://www.vfsglobalservices-germany.com/Global-Appointment/Applicant/AddApplicant?q=UANIVQx7R/c71/YfLmm98mEb5JF0icA6V6Yas3MZt754GcCZXhhoxQx/RcJ+XJN/t01RbcEBR4ExFCPAdpUortvAknqNHwZNH9/ai8aeLOqkOHfaIUeWDh3oLhFk9nvGx3l4/3O+W/GEm0C+R8ctNZaSECrVmIbpn/c56syPEtEPCktE8SdQ7ebk1zr6CP1Kq9hUhgI4kB20KVgTWK8YXMIrj9U0Rstwk2/BCih/VJKjqufXov0C8bP8KT1Dv5Md";

//fill in form for applicant
document.getElementById('PassportNumber').value = "passport-number";
document.getElementById('DateOfBirth').value = "DD/MM/YYYY";
document.getElementById('PassportExpiryDate').value = "DD/MM/YYYY";
//Nationality ID is a selectbox
document.getElementById('NationalityId').value = "46";
document.getElementById('FirstName').value = "FirstName";
document.getElementById('LastName').value = "LastName";
//gender is a selectbox
document.getElementById('GenderId').selectedIndex = 1;
//Phone Number and EMailID automatically filled with login ID. Don´t change.
//document.getElementById('Mobile').value = "numberhere";

//button submit
document.getElementById("submitbuttonId").click();

//Problem2: modalbox -> how to click the OK-Button or simulate pressing "enter" in .js?

//new site
//to find correct button (because it doesn t have an id): document.getElementsByClassName("submitbtn"), then use index to extract correct one;
document.getElementsByClassName("submitbtn")[1].click();

</script>
