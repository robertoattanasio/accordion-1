var accordionList = document.getElementsByClassName('accordion-title');

for (i = 0; i < accordionList.length; i++) {
    accordionList[i].addEventListener('click', function() {

        content = this.nextElementSibling;
        chevron = this.lastElementChild;

        this.classList.toggle('active');

        if (this.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.margin = "16px 0";
            console.log(chevron);
            chevron.style.transform = "rotate(180deg)";

        } else {
            content.style.maxHeight = 0;
            content.style.margin = "0";
            chevron.style.transform = "rotate(0)";


        }
    })
}