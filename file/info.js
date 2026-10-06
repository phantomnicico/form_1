const scriptURL = "https://script.google.com/macros/s/AKfycbxDPNu05fsB0qsUZ-ZLq2OHjATG4wDTRAaXRp8U6Hu3LvMTR-YdIyC9ga5JepMqj3hv/exec";

document.getElementById("myForm").addEventListener("submit", async function(e){

    e.preventDefault();

    const formData = new FormData(this);

    try {

        const response = await fetch(scriptURL,{
            method:"POST",
            body:formData
        });

        if(response.ok){

            alert("اطلاعات با موفقیت ثبت شد");
            this.reset();

        } else {

            alert("خطا در ثبت اطلاعات");

        }

    } catch(error){

        alert("خطا در ارتباط با سرور");
        console.error(error);

    }

});
