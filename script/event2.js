
function updateDateTime (){
    const recent = new Date ();
    const formattedDateTime = recent.toLocaleString();
    document.getAnimations('date-time').textContent = formattedDateTime;

}
updateDateTime();
setInterval(updateDateTime, 1000);