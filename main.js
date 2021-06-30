var images = ["mother.png" , "father.png" , "Grandmother.jpg" , "grandfather.jpg"];
var names = ["Sneha Chhatani","Rakesh Chhatani","Rajni Chhatani","Shyam Chhatani"];
var i = 0;
function update(){
i++;
var number_of_family_member_array = 4;
if(i>number_of_family_member_array){
i=0;    
}    

var updatedImage = images[i];
var updatedName = names[i];
document.getElementById("family_member_image").src = updatedImage;
document.getElementById("family_member_name").innerHTML = updatedName;
}
