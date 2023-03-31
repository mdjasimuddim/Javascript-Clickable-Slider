var img = document.getElementById('img');
var images = ['blog-1.jpg','blog-2.jpg','blog-3.jpg','blog-4.jpg'];
var img_len = images.length;
var index = -1;

function next()
{
   index++;
   if(index >= img_len){
        index = 0;
        img.src = images[index];
   } else{
    img.src = images[index];
   }
}
function previous()
{
   index--;
   if(index < 0){
        index = img_len - 1;
        img.src = images[index];
   } else{
    img.src = images[index];
   }
}

// setInterval(autoMovement,1000);
// function autoMovement()
// {
//     index++;
//     if(index >= img_len){
//         index = 0;
//         img.src = images[index];
//     }else{
//         img.src = images[index];
//     }
// }