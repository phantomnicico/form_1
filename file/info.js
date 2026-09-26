const scriptURL = "https://script.google.com/macros/s/AKfycbzxuCcCFfKdsms5lmIVafIyuESO36BEI88mfZ6wmMXSgL6dfA1h_JphuB1e_4dlHron/exec";

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